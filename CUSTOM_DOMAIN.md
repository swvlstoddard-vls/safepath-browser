# Custom Domain on GitHub Pages

1) Buy a domain (Namecheap, Google Domains, Cloudflare Registrar, etc.)
2) In GitHub repo: Settings → Pages → Custom domain → enter e.g. app.yourdomain.com → Save
   GitHub will create/commit a CNAME file.
3) In your DNS provider, create a CNAME record:
   - Name/Host: app
   - Target: swvlstoddard-vls.github.io
4) Back in GitHub Pages settings: enable “Enforce HTTPS” once available.

Tip: Prefer a subdomain (app.) rather than apex domain for simplest DNS.
