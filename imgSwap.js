var bImages = ['https://raw.githubusercontent.com/digital-vitality/solomidbrowser/master/WebsiteView.png', 'https://digital-vitality.github.io/solomidbrowser/AppScrSht.png'];

 var imageSwap = (function() {
   var i = 0;
   return function() {
     var rv = bImages[i];
     i = (i + 1) % bImages.length;
     document.getElementById('imgSwap').src=bImages[i];
     return rv;
   };
 })();
