FirstPart = '<img src="image';
LastPart = '.jpg" height="500" width="500">';
NumberOfImagesToRotate = 4;

function printImage() {
    var rand = Math.ceil(Math.random() * NumberOfImagesToRotate);
    document.write(FirstPart + rand + LastPart);
}

printImage();