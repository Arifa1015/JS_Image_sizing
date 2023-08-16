// let imageElement = document.getElementById("image");

// let originalImageWidth = "200px";

// imageElement.style.width = originalImageWidth;

let imageElement = document.getElementById("image");

let imageWidthElement = document.getElementById("imageWidth");

let warningMessageElement = document.getElementById("warningMessage");





let maxImageWidth = 300;

let minImageWidth = 100;

let defaultImageWidth = 200;

let maxWidthWarningMessage = "Too big.decrease the size of the Image.";

let minWidthWarningMessage = "Can't visible.Increase the size of the Image.";



imageElement.style.width = defaultImageWidth + "px";

imageWidthElement.textContent = defaultImageWidth + "px";



function onIncrement() {

    if (defaultImageWidth >= maxImageWidth) {

        warningMessageElement.textContent = maxWidthWarningMessage;

    } else {

        defaultImageWidth = defaultImageWidth + 5;

        let updatedImageWidth = defaultImageWidth + "px";



        warningMessageElement.textContent = "";

        imageElement.style.width = updatedImageWidth;

        imageWidthElement.textContent = updatedImageWidth;

    }

}



function onDecrement() {

    if (defaultImageWidth <= minImageWidth) {

        warningMessageElement.textContent = minWidthWarningMessage;

    } else {

        defaultImageWidth = defaultImageWidth - 5;

        let updatedImageWidth = defaultImageWidth + "px";



        warningMessageElement.textContent = "";

        imageElement.style.width = updatedImageWidth;

        imageWidthElement.textContent = updatedImageWidth;

    }

}