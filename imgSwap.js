var bImages = ['GameLibrary.png', 'lolView.png'];

 var imageSwap = (function() {
   var i = 0;
   return function() {
     var rv = bImages[i];
     i = (i + 1) % bImages.length;
     document.getElementById('imgSwap').src=bImages[i];
     return rv;
   };
 })();
