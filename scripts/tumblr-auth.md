# Tumblr OAuth Setup

Tumblr requires OAuth 2.0 access tokens for API posting. The consumer key/secret alone aren't enough — you need to complete a browser authorization flow to get an access token.

## Steps

1. Go to your registered Tumblr app: https://www.tumblr.com/oauth/apps
2. Edit your app and set the **Default callback URL** to `http://localhost:8080/callback`
3. In your browser, visit this URL (replace `YOUR_CONSUMER_KEY`):

```
https://www.tumblr.com/oauth2/authorize?client_id=8p15olXcraRiEudyZWkUwkAdsgQd8i6QVUUKTZbm59gmmV9E0U&response_type=code&scope=basic%20write&state=xyz&redirect_uri=http://localhost:8080/callback
```

4. Approve the app. Tumblr will redirect to `http://localhost:8080/callback?code=AUTH_CODE`
5. Copy the `code` value from the URL
6. Exchange the code for an access token:

```bash
curl -X POST https://api.tumblr.com/v2/oauth2/token \
  -d "grant_type=authorization_code" \
  -d "code=AUTH_CODE_FROM_STEP_5" \
  -d "client_id=8p15olXcraRiEudyZWkUwkAdsgQd8i6QVUUKTZbm59gmmV9E0U" \
  -d "client_secret=Wwp1XaTovxtyYYrb1Ph7uNa3X1asvXiAHSsQQntPu3JV52PsYQ" \
  -d "redirect_uri=http://localhost:8080/callback"
```

7. The response will include an `access_token`. Paste it into `scripts/.env.syndication`:

```
TUMBLR_TOKEN=<paste_access_token_here>
TUMBLR_BLOG_NAME=<your_blog_name_without_.tumblr.com>
```

## Alternative: Skip Tumblr

If the OAuth flow is too much hassle, Tumblr drives less traffic than Dev.to or Hashnode anyway. You can skip it and the pipeline will still syndicate to the working platforms.
