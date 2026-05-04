/**
 * Shared OG-image factory for individual blog posts. Each blog post has a
 * thin opengraph-image.tsx that calls this with its slug — keeps per-post
 * files to ~5 lines and centralizes the visual design.
 */
import { ImageResponse } from 'next/og';
import { blogPosts } from '@/data/blogPosts';

export const blogOgSize = { width: 1200, height: 630 };
export const blogOgContentType = 'image/png' as const;

export function blogOgAlt(slug: string): string {
  const post = blogPosts.find((p) => p.slug === slug);
  return post ? `${post.title} — Farhand` : 'Farhand Blog';
}

export function renderBlogOg(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? 'Farhand Blog';
  const excerpt = post?.excerpt ?? '';
  const category = post?.category ?? 'Article';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#08070E',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* top: wordmark + category */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: '#16a34a',
                boxShadow: '0 0 18px #16a34a',
              }}
            />
            <span>farhand</span>
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#16a34a',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
            }}
          >
            {category}
          </div>
        </div>

        {/* spacer */}
        <div style={{ flex: 1 }} />

        {/* main title */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        {/* excerpt */}
        {excerpt && (
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 24,
              fontWeight: 400,
              color: '#bcbcbc',
              lineHeight: 1.4,
              maxWidth: 1000,
            }}
          >
            {excerpt}
          </div>
        )}

        {/* footer strip */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 20,
            color: '#888',
          }}
        >
          <span>farhand.ai/blog</span>
          <span style={{ color: '#16a34a' }}>●&nbsp;&nbsp;ai-guided field service</span>
        </div>
      </div>
    ),
    blogOgSize,
  );
}
