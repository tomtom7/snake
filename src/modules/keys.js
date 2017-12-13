let keys = [];

document.addEventListener("keydown", (e) =>{
    keys[e.keyCode] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
});

function isUpKey() {
    return keys[87] || keys[38];
}

function isDownKey() {
    return keys[83] || keys[40];
}

function isLeftKey() {
    return keys[65] || keys[37];
}

function isRightKey() {
    return keys[68] || keys[39];
}

function isRestartKey() {
    return keys[32];
}

export default {isUpKey, isDownKey, isLeftKey, isRightKey, isRestartKey}
