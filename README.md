# Event QR POC

Static proof of concept for a guest-facing event page opened from a QR code.

## Structure

- `index.html`: QR landing page
- `event/demo/index.html`: public event page
- `assets/css/styles.css`: shared styles
- `assets/js/main.js`: lightweight interactions
- `assets/images/qr-event-demo.png`: high-resolution QR asset

## Deploy to Vercel

1. Create a new Vercel project from this `event-qr-poc` directory.
2. Deploy it as a static site with the default settings.
3. Confirm these routes work:
   - `/`
   - `/event/demo/`

## Replace the placeholder QR destination

The included QR code currently points to:

`https://qr-demo-orpin.vercel.app/event/demo/`

If you move the demo to a different domain later, regenerate the PNG with the new event URL.

### Regenerate the QR PNG

From this folder:

```powershell
py -3 -c "import qrcode; from qrcode.constants import ERROR_CORRECT_H; url='https://qr-demo-orpin.vercel.app/event/demo/'; img=qrcode.QRCode(version=None,error_correction=ERROR_CORRECT_H,box_size=30,border=6); img.add_data(url); img.make(fit=True); qr=img.make_image(fill_color='black',back_color='white'); qr.save('assets/images/qr-event-demo.png')"
```

## Scope

This POC intentionally does not implement:

- authentication
- uploads
- moderation
- payments
- admin tools
- backend services


