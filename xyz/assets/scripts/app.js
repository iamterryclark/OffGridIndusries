var rotator = document.getElementById('splash'); 
console.log(rotator.style.backgroundImage)

var imageDir = "./assets/images/kam";
var delayInSeconds = 5;                            

var images = ["001.jpg", "009.jpg", "002.jpg", '001.jpg'];

var num = 0;

var changeImage = function() {
    var len = images.length;
    rotator.style.backgroundImage = 'url(' + imageDir + images[num++] + ')';
    if (num == len) {
        num = 0;
    }
};

setInterval(changeImage, delayInSeconds * 1000);