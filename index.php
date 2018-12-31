<?php
$btcurl = 'https://block.io/api/v2/get_current_price/?api_key=xxxx-xxxx-xxxx-xxxx&amp;price_base=usd';
$btcjson = file_get_contents($btcurl);
$btcdata = json_decode($btcjson, TRUE);
$btc = number_format((float)1/$btcdata['data']['prices'][0]['price'], 8, '.', '');
$ltcurl = 'https://block.io/api/v2/get_current_price/?api_key=xxxx-xxxx-xxxx-xxxx&amp;price_base=usd';
$ltcjson = file_get_contents($ltcurl);
$ltcdata = json_decode($ltcjson, TRUE);
$ltc = number_format((float)1/$ltcdata['data']['prices'][0]['price'], 6, '.', '');
$dogeurl = 'https://block.io/api/v2/get_current_price/?api_key=xxxx-xxxx-xxxx-xxxx&amp;price_base=usd';
$dogejson = file_get_contents($dogeurl);
$dogedata = json_decode($dogejson, TRUE);
$doge = number_format((float)1/$dogedata['data']['prices'][0]['price'], 2, '.', '');
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Coinvert Payment Widget</title>
    <link rel="stylesheet" type="text/css" href="coinvert.css" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="jquery.qrcode.min.js"></script>
    <script type="text/javascript" src="coinvert.js"></script>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  </head>
<body>
 <div style="max-width: 60em">
  <p><strong>Digital Product:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>
  Suggested price: $1.00
  <br />
  <input type="hidden" id="btcRate" value="<?php echo $btc; ?>" /><input type="hidden" id="ltcRate" value="<?php echo $ltc; ?>" /><input type="hidden" id="dogeRate" value="<?php echo $doge; ?>" />
  <br />
  <div style="width: 100%; margin-top:1em; max-width:38em; min-width:18em; margin:auto">
    <div id="conversionArea">
      <label for="paymentMethod">Payment method:</label><br />
      <select id="paymentMethod">
        <option value="Bitcoin">Bitcoin</option>
        <option value="Litecoin">Litecoin</option>
        <option value="Dogecoin">Dogecoin</option>
      </select>
      <div>
        <div id="symbol">฿</div>
        <div class="spinner"><div class="spinner-button spinner-minus"><div style="display: table-cell; vertical-align: middle;">-</div></div><div class="spinner-button spinner-plus"><div style="display: table-cell; vertical-align: middle;">+</div></div><input class="spinner-input" type="text" id="altAmount" value="<?php echo $btc; ?>" /></div>

        <div style="font: 14px 'Verdana',sans-serif; color: #888; float: left; clear: right; padding: .4em .2em;">$</div>
        <div class="spinner"><div class="spinner-button spinner-minus"><span style="display: table-cell; vertical-align: middle;">-</span></div><div class="spinner-button spinner-plus"><span style="display: table-cell; vertical-align: middle;">+</span></div><input class="spinner-input" type="text" id="usdAmount" value="1.00" /></div>
      </div>
    </div>
    <div id="qrGen"></div>
    <div style="text-align: center; font: 14px 'Verdana',sans-serif; line-height:150%;"><span style="white-space:nowrap;">1. Select</span> payment method<br />2. Choose your own price!<br />3. Click address to reveal download link<br /><div id="linkGen"><a href="bitcoin:3H2e7tAJmaLqfu2ayb8JwdVt6JrU5a77hF?amount=<?php echo $btc; ?>&message=Coinvert payment">3H2e7tAJmaLqfu2ayb8JwdVt6JrU5a77hF</a></div></div>
    <div style="text-align: center" id="downloadArea"><a href="#">DOWNLOAD LINK</a></div>
  </div>
 </div>
</body>
</html>
