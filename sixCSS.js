function checkDoor(doorNumber) {
    const correctDoor = 0;
    const resultBox = document.getElementById('resultMessage');
    
    if (doorNumber === correctDoor) {
        resultBox.style.display = 'block';
        resultBox.style.backgroundColor = '#d4edda';
        resultBox.style.color = '#155724';
        resultBox.style.border = '1px solid #c3e6cb';
        resultBox.innerHTML = 'Yep, thats the correct door!';
    } else {
        showWrongDoorImage(doorNumber);
    }
}

function showWrongDoorImage(doorNumber) {
    const overlay = document.getElementById('wrongDoorOverlay');
    const image = document.getElementById('wrongDoorImage');
    
    image.style.display = 'block';

    if (doorNumber === 1) {
        image.src = 'https://i.pinimg.com/736x/f6/5e/01/f65e0198caff76ac02ea54634c0e36d0.jpg'; 
    } else if (doorNumber === 2) {
        image.src = 'https://i.pinimg.com/736x/f6/5e/01/f65e0198caff76ac02ea54634c0e36d0.jpg'; 
    }
    
    overlay.style.display = 'block';
    overlay.onclick = hideOverlay;
}

function hideOverlay() {
    const overlay = document.getElementById('wrongDoorOverlay');
    overlay.style.display = 'none';
    overlay.innerHTML = '<img id="wrongDoorImage" src="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 80%; max-height: 80%;">';
}