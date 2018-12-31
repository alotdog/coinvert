# USD-Coinverter
Cryptocurrency pay-what-you-want widget for digital downloads with an updating QR-code, up-to-date conversion rates, and custom number spinners. It was built for Bitcoin, Litecoin, and Dogecoin with conversions retrieved from the block.io API.

Demo: <http://incredulotdog.github.io/coinvert/> (non-php/block.io version for gh-pages with hard coded values)<br>

### Super-rad number spinner
The number spinners are custom and pretty rad. They look good across browsers and allow you to type values, use the clicky buttons, and press the up/down keys to scroll quickly. Requires jQuery, but it probably shouldn't. Rel measurements and no images for scalability.

Screenshot:
![coinvert screenshot](screenshot.png)

---

### Issues
This is a very old project that existed soley to help me learn git/github and DOM/styling by creating a tool I had no use for. Besides being a mess of javascript and jQuery, there is precision loss when getting the conversion rate and the inability to have more than one widget. I don't feel like revisiting this, but feel free to fix something and I'll merge, or just whatever.

---

License: MIT

Uses jquery.qrcode.js <https://github.com/jeromeetienne/jquery-qrcode>
