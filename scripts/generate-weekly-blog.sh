#!/usr/bin/env bash
# Weekly blog post generator — scheduled via launchd.
# Runs Claude Code non-interactively to research, draft, commit, and push a new blog post.

set -euo pipefail

REPO="/Users/aaryan/Files/Farhand/website"
LOG_DIR="$HOME/Library/Logs/farhand-blog"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/$(date +%Y-%m-%d).log"

cd "$REPO"

# Pull latest main so we don't race with CI / other commits
/usr/bin/env git fetch origin main --quiet
/usr/bin/env git checkout main --quiet
/usr/bin/env git pull --ff-only origin main --quiet

# Topic rotation — one topic per week, biased toward high-intent keywords.
# This is a seed list; Claude is instructed to pick one that hasn't been covered yet.
TOPIC_POOL=(
  "predictive maintenance ROI for manufacturing"
  "how to reduce mean-time-to-repair (MTTR) on industrial robots"
  "semiconductor equipment field service benchmarks"
  "medical device preventative maintenance compliance"
  "PLC troubleshooting remote diagnostics"
  "CNC machine downtime cost analysis"
  "warehouse robot service contracts vs in-house teams"
  "field service workforce aging crisis 2026"
  "augmented reality in field service repair"
  "SCADA and OT security for field technicians"
  "truck roll cost breakdown by industry"
  "first-time fix rate benchmarks by sector"
  "spare parts logistics for field service"
  "field service contract renewal rates"
  "AI voice agents for dispatch triage"
)

# Pick a deterministic weekly topic (ISO week number mod pool size)
WEEK=$(date +%V)
INDEX=$(( 10#$WEEK % ${#TOPIC_POOL[@]} ))
TOPIC="${TOPIC_POOL[$INDEX]}"

echo "[$(date)] Starting weekly blog generation: $TOPIC" | tee -a "$LOG"

# Call Claude Code headlessly. The prompt enforces the exact file structure we use.
/Users/aaryan/.superset/bin/claude \
  --print \
  --permission-mode acceptEdits \
  --output-format text \
  "You are writing a new blog post for farhand.live. Follow the EXACT structure of existing posts in src/app/blog/*/page.tsx.

TOPIC: $TOPIC

Requirements:
1. Pick a specific, SEO-optimized angle on this topic. Search intent must be informational or commercial-investigation.
2. Check src/data/blogPosts.ts and src/app/blog/ to ensure the slug/angle is not a duplicate.
3. Create src/app/blog/<slug>/page.tsx following the exact pattern of src/app/blog/field-service-roi-calculator/page.tsx: imports BlogPost + ArticleSchema + Link, exports metadata, default export with title/date/category.
4. Length: 1200-1800 words. Include 3-5 section headers, concrete numbers, 2-3 internal links to /services/*, /for/*, or /. Include a sources footer referencing real industry reports (Aquant, Service Council, IFR, Siemens, Deloitte) — do not fabricate sources.
5. Date: $(date +%Y-%m-%d). Category: pick from [Insights, Technical, Technology, Industry].
6. Add the post to src/data/blogPosts.ts at the top of the blogPosts array.
7. Run 'npx next build' and verify it passes.
8. Commit with message: 'feat(blog): add \"<post title>\"' (include Co-Authored-By: Claude).
9. Push to origin main.
10. Report the post URL (https://farhand.live/blog/<slug>) and word count.

If the build fails, fix the issue and retry. Do not push a broken build." 2>&1 | tee -a "$LOG"

echo "[$(date)] Done." | tee -a "$LOG"
