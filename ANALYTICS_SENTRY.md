# Analytics + Error Reporting

## Google Analytics 4 (GA4)
1) Create a GA4 property and web data stream
2) Get your Measurement ID: G-XXXXXXXXXX
3) In index.html, replace G-XXXXXXXXXX in the Google tag snippet.

## Sentry (Error reporting)
1) Create a Sentry project → JavaScript
2) Copy the "Loader Script" tag from Sentry SDK setup
3) Paste it in index.html where the placeholder comment is.
4) Optionally enable Performance/Tracing in Sentry settings.

Notes:
- Sentry DSN/public loader key is safe to be public.
