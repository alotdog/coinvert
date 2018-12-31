# Coinvert
Cryptocurrency pay-what-you-want widget for digital downloads with custom number spinners and real-time conversion rates and QR-code generation. It was built for Bitcoin, Litecoin, and Dogecoin with conversions retrieved from the block.io API. 

Demo: <http://incredulotdog.github.io/coinvert/> (non-php/block.io version for static gh-pages with hard coded values)

### Super-rad number spinner
The number spinners are custom and pretty rad. They look good across browsers and allow you to type values, use the clicky buttons, and press the up/down keys to scroll quickly. Rel measurements and no images for scalability.

Screenshot:
![coinvert screenshot](screenshot.png)

### Issues
This is a very old project that existed soley to help me learn git/github and DOM/styling by creating a thing I had absolutely no use for. Besides being a mess of javascript and jQuery, there is precision loss when getting the conversion rate and the inability to have more than one widget. I don't really feel like revisiting this, so please fix.

---

License: MIT
Uses jquery.qrcode.js <https://github.com/jeromeetienne/jquery-qrcode>
