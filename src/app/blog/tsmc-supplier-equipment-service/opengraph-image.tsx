import { renderBlogOg, blogOgSize, blogOgContentType, blogOgAlt } from '@/lib/blog-og';

export const runtime = 'edge';
export const alt = blogOgAlt('tsmc-supplier-equipment-service');
export const size = blogOgSize;
export const contentType = blogOgContentType;

export default function Image() {
  return renderBlogOg('tsmc-supplier-equipment-service');
}
