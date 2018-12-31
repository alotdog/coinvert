var btcaddr = "3H2e7tAJmaLqfu2ayb8JwdVt6JrU5a77hF";
var ltcaddr = "3DFSyMj1gihQu1naJ2fz3JAGabQ5iqmPTT";
var dogeaddr = "AAxUg1oWCqauP1wL4YLQKPTAcGLZ2kcheF";
var addr = btcaddr;
var btcrate, ltcrate, dogerate, rate;
var currency = "bitcoin";
var dpoints = 8;
var step = .00010101;
jQuery(function () {
	btcrate = jQuery('#btcRate').val();
	ltcrate = jQuery('#ltcRate').val();
	dogerate = jQuery('#dogeRate').val();
	rate = btcrate;
	jQuery('#conversionArea').height(parseInt(jQuery('#conversionArea').height())); //don't allow partial pixels so text clears evenly when resizing
	jQuery('#downloadArea').css("visibility", "hidden");
	jQuery("#paymentMethod" ).prop("disabled", false);
	jQuery("#altAmount").prop("disabled", false);
	jQuery("#usdAmount").prop("disabled", false);
	generateLink();
    jQuery('#altAmount').on('change keyup paste', function () {
        usdUpdate();
    });
    jQuery('#usdAmount').on('change keyup paste', function () {
        altUpdate();
    });
    jQuery('#linkGen').on('mousedown', function () {
        jQuery('#downloadArea').css("visibility","visible");
    });
    jQuery('#paymentMethod').on('change', function (){
        switch(jQuery('#paymentMethod').val()){
            case "Litecoin":
                jQuery('#downloadArea').css("visibility","hidden");
                jQuery('#altAmount').prop('disabled', false);
                jQuery('#usdAmount').prop('disabled', false);
                currency = "litecoin";
                addr = ltcaddr;
                rate = ltcrate;
                jQuery('#symbol').text("Ł");
                dpoints = 6;
                step = .010101;
                altUpdate();
            break;
            case "Dogecoin":
                jQuery('#downloadArea').css("visibility","hidden");
                jQuery('#altAmount').prop('disabled', false);
                jQuery('#usdAmount').prop('disabled', false);
                currency = "dogecoin";
                addr = dogeaddr;
                rate = dogerate;
                jQuery('#symbol').text("Ð");
                dpoints = 2;
                step = 101.01;
                altUpdate();
            break;
            case "Bitcoin":
            default:
                jQuery('#downloadArea').css("visibility","hidden");
                jQuery('#altAmount').prop('disabled', false);
                jQuery('#usdAmount').prop('disabled', false);
                currency = "bitcoin";
                addr = btcaddr;
                rate = btcrate;
                jQuery('#symbol').text("Ƀ");
                dpoints = 8;
                step = .00010101;
                altUpdate();
        }
    });
    jQuery('.spinner-input').on('keydown', function(e) {
        if (e.which == 38) { //up-arrow
            if (jQuery(this).is('#usdAmount')) {
                jQuery(this).val((parseFloat(jQuery(this).val()) + .01).toFixed(2));
                if (jQuery(this).val() <= 0)
                    jQuery(this).val(parseFloat(0).toFixed(2));
            } else {
                jQuery(this).val((parseFloat(jQuery(this).val()) + step).toFixed(dpoints));
                if (jQuery(this).val() <= 0)
                    jQuery(this).val(parseFloat(0).toFixed(dpoints));
            }
        } else if (e.which == 40) { //down-arrow
            if(jQuery(this).is('#usdAmount')) {
                jQuery(this).val((parseFloat(jQuery(this).val()) - .01).toFixed(2));
                if (jQuery(this).val() <= 0)
                    jQuery(this).val(parseFloat(0).toFixed(2));
            } else {
                jQuery(this).val((parseFloat(jQuery(this).val()) - step).toFixed(dpoints));
                if (jQuery(this).val() <= 0)
                    jQuery(this).val(parseFloat(0).toFixed(dpoints));
            }
        }
    });
    jQuery('.spinner-input').focusout( function() {
        if (jQuery(this).val() <= 0 || jQuery.isNumeric(jQuery(this).val()) == false) {
            jQuery('.spinner-input').val(0);
        }
    });
    jQuery('.spinner-button').on('click', function() {
        var target = jQuery(this).siblings('.spinner-input');
        if (target.is('#usdAmount')){
            if (jQuery(this).hasClass('spinner-plus')) {
                jQuery(target).val((parseFloat(jQuery(target).val()) + .01).toFixed(2));
            } else {
                jQuery(target).val((parseFloat(jQuery(target).val()) - .01).toFixed(2));
            }
            if (jQuery(target).val() <= 0) {
                jQuery(target).val(parseFloat(0).toFixed(2));
            }
            altUpdate();
        } else {
            if (jQuery(this).hasClass('spinner-plus')) {
                jQuery(target).val((parseFloat(jQuery(target).val()) + step).toFixed(dpoints));
            } else {
                jQuery(target).val((parseFloat(jQuery(target).val()) - step).toFixed(dpoints));
            }
            if (jQuery(target).val() <= 0) {
                jQuery(target).val(parseFloat(0).toFixed(dpoints));
            }
            usdUpdate();
        }
        return false;
    });
    jQuery('.spinner-button').mousedown( function() {
        jQuery(this).css("color", "#dbdbdb");
    });
    jQuery('.spinner-button').mouseup( function() {
        jQuery(this).css("color", "#aaa");
    });
});
function usdUpdate() {
    var usdAmount = jQuery('#altAmount').val()/rate;
    jQuery('#usdAmount').val(usdAmount.toFixed(2));
    generateLink();
}
function altUpdate() {
    var altAmount = (jQuery('#usdAmount').val()*rate).toFixed(dpoints);
    jQuery('#altAmount').val(altAmount);
    generateLink();
}
function generateLink() {
    var innerURL = currency + ":" + addr + "?amount=" + Math.abs(jQuery('#altAmount').val()) + "&message=Coinvert payment";
    jQuery('#linkGen').html("<a href=\"" + innerURL + "\">" + addr + "</a>");
    jQuery('#qrGen').html('');
    var size = parseInt(jQuery('#conversionArea').height());
    jQuery('#qrGen').qrcode({width: size, height: size, text: innerURL});
    jQuery('#qrGen').height(size); //cannot rely on the qr code itself for exact height, it has different padding in different browsers, so set its container
}
