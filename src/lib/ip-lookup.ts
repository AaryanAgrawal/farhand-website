/**
 * Reverse IP → company lookup via IPinfo.io.
 *
 * Free tier returns ASN-level `org` only.
 * Paid "Basic" ($49/mo) returns structured `company.name` / `company.type`.
 * Without a token, returns source: 'none' and the caller should skip.
 */

export type IpLookupType =
  | 'business'
  | 'education'
  | 'government'
  | 'hosting'
  | 'isp'
  | 'unknown';

export type IpLookupResult = {
  companyName: string | null;
  companyDomain: string | null;
  type: IpLookupType;
  country: string | null;
  region: string | null;
  city: string | null;
  source: 'ipinfo' | 'none';
};

const EMPTY: IpLookupResult = {
  companyName: null,
  companyDomain: null,
  type: 'unknown',
  country: null,
  region: null,
  city: null,
  source: 'none',
};

type IpinfoResponse = {
  ip?: string;
  hostname?: string;
  city?: string;
  region?: string;
  country?: string;
  loc?: string;
  org?: string;
  timezone?: string;
  company?: {
    name?: string;
    domain?: string;
    type?: string;
  };
  abuse?: unknown;
};

/**
 * Heuristic: is this "org" string (from ASN) obviously an ISP or bot host
 * that we should drop rather than save as a lead?
 */
function isLikelyIsp(org: string): boolean {
  const lower = org.toLowerCase();
  const ispKeywords = [
    'comcast',
    'at&t',
    'att internet',
    'verizon',
    'spectrum',
    'charter',
    'cox communications',
    't-mobile',
    'sprint',
    'centurylink',
    'lumen',
    'cablevision',
    'frontier communications',
    'optimum',
    'windstream',
    'mediacom',
    'rcn',
    'wow!',
    'dish network',
    'broadcast',
    'residential',
    'cellular',
    'wireless',
    'mobile',
    'telecom',
    'isp',
  ];
  return ispKeywords.some((k) => lower.includes(k));
}

function isLikelyHosting(org: string): boolean {
  const lower = org.toLowerCase();
  const hostingKeywords = [
    'amazon',
    'aws',
    'google cloud',
    'google llc',
    'microsoft corporation',
    'azure',
    'digitalocean',
    'linode',
    'ovh',
    'hetzner',
    'vultr',
    'cloudflare',
    'fastly',
    'akamai',
    'alibaba cloud',
    'oracle cloud',
    'ibm cloud',
    'rackspace',
    'godaddy',
    'namecheap',
    'hostgator',
    'cdn',
    'cloud services',
    'hosting',
    'data center',
    'datacenter',
  ];
  return hostingKeywords.some((k) => lower.includes(k));
}

export async function lookupCompanyByIp(ip: string): Promise<IpLookupResult> {
  const token = process.env.IPINFO_TOKEN;
  if (!token) return EMPTY;
  if (!ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return EMPTY;
  }

  try {
    const res = await fetch(`https://ipinfo.io/${encodeURIComponent(ip)}/json?token=${token}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return EMPTY;
    const data: IpinfoResponse = await res.json();

    // Prefer structured company data (paid tier)
    if (data.company?.name) {
      const rawType = (data.company.type || '').toLowerCase();
      const type: IpLookupType =
        rawType === 'business' || rawType === 'education' || rawType === 'government'
          ? (rawType as IpLookupType)
          : rawType === 'hosting' || rawType === 'isp'
            ? (rawType as IpLookupType)
            : 'unknown';
      return {
        companyName: data.company.name,
        companyDomain: data.company.domain || null,
        type,
        country: data.country || null,
        region: data.region || null,
        city: data.city || null,
        source: 'ipinfo',
      };
    }

    // Fall back to free-tier ASN org parsing
    if (data.org) {
      // Format is usually "AS12345 Some Company Inc."
      const cleaned = data.org.replace(/^AS\d+\s*/i, '').trim();
      if (!cleaned) return EMPTY;
      let type: IpLookupType = 'business';
      if (isLikelyIsp(cleaned)) type = 'isp';
      else if (isLikelyHosting(cleaned)) type = 'hosting';
      return {
        companyName: cleaned,
        companyDomain: null,
        type,
        country: data.country || null,
        region: data.region || null,
        city: data.city || null,
        source: 'ipinfo',
      };
    }

    return EMPTY;
  } catch {
    return EMPTY;
  }
}
