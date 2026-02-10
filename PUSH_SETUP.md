# Push Notifications for SafePath PWA

Important platform notes:
- iOS requires the PWA to be installed (Add to Home Screen) and iOS 16.4+ for web push.
- Android/desktop can prompt in-browser.

## Option A (Recommended): OneSignal (no backend to build)
1) Create a OneSignal account and a Web Push app.
2) Add your GitHub Pages URL as an allowed origin (e.g. https://swvlstoddard-vls.github.io).
3) OneSignal will give you a script snippet (or SDK) to add to index.html.
4) Replace the placeholder in index.html (search for "OneSignal") and publish.
5) Use OneSignal dashboard to send a test notification.

Pros: easiest, cross-platform, includes subscription management + analytics.
Cons: third-party service.

## Option B (Standards-based): Web Push API + VAPID (requires a small server)
You need:
- VAPID public/private key pair
- a tiny serverless endpoint to store subscriptions and send pushes (Cloudflare Worker, Firebase Functions, etc.)

High-level steps:
1) On the client: request permission, create PushSubscription, POST it to your server.
2) On the server: store subscription, send push using VAPID.

If you want, tell me your preferred serverless platform (Cloudflare / Firebase / Render) and I’ll provide the exact code.
