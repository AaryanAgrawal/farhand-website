import { renderBlogOg, blogOgSize, blogOgContentType, blogOgAlt } from '@/lib/blog-og';

export const runtime = 'edge';
export const alt = blogOgAlt('first-time-fix-rate-ai');
export const size = blogOgSize;
export const contentType = blogOgContentType;

export default function Image() {
  return renderBlogOg('first-time-fix-rate-ai');
}
