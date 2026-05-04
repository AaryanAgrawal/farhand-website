import { renderBlogOg, blogOgSize, blogOgContentType, blogOgAlt } from '@/lib/blog-og';

export const runtime = 'edge';
export const alt = blogOgAlt('predictive-vs-preventive-maintenance');
export const size = blogOgSize;
export const contentType = blogOgContentType;

export default function Image() {
  return renderBlogOg('predictive-vs-preventive-maintenance');
}
