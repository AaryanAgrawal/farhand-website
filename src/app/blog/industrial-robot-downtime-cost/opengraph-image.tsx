import { renderBlogOg, blogOgSize, blogOgContentType, blogOgAlt } from '@/lib/blog-og';

export const runtime = 'edge';
export const alt = blogOgAlt('industrial-robot-downtime-cost');
export const size = blogOgSize;
export const contentType = blogOgContentType;

export default function Image() {
  return renderBlogOg('industrial-robot-downtime-cost');
}
