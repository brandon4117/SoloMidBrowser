var bImages = ['mainPage.png', 'GameLibrary.png', 'lolView.png', 'bioPage.png', 'streamPage.png'];

var cycle_Imgs = function()
{
  var mImg = document.getElementById('imgSwap');
  var next_img = bImages.shift();
  mImg.src = next_img;
  bImages.push(next_img);
  return;
}
var img_cycling = setInterval(cycle_Imgs, 5000);
