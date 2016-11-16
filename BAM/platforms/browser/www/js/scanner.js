var a;
function scan()
 {
   alert("algo");
   cordova.plugins.barcodeScanner.scan(
   function (result) {
       a = result.text;
       $("#euri").html(a);
   },
   function (error) {
       alert("Scanning failed: " + error);
   },
   {
       "prompt" : "Ponga el codigo QR dentro de la region de escaneo", // supported on Android only
       "formats" : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
   });
 }
