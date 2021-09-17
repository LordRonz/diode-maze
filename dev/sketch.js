var diodes = [];
var imageSize = 64;
var hasStarted = false;
var fps = 10;

var posX, posY;
var nextX, nextY;
var prevX = [], prevY = [];
var resetButton;
var monoSynth;
var notes = ['Fb4', 'G4', 'C4', 'E3'];

function make2Darray(rows) {
    var arr = [];

    for (var i = 0; i < rows; ++i) {
        arr[i] = [];
    }

    return arr;
}

function reset() {
    if ((posX === 4 && posY === 4) || !hasStarted) return;
    diodes[posX][posY].deactivate();
    posX = 4;
    posY = 4;
    for (var i = 1; i < prevX.length; ++i) {
        diodes[prevX[i]][prevY[i]].deactivate();
    }
    prevX = [], prevY = [];
}

function setup() {
    createCanvas(1080, 1080);
    background(200, 200, 200);
    frameRate(fps);
    resetButton = new Clickable();
    resetButton.locate(50, 50);
    resetButton.text = "Reset";

    resetButton.onPress = reset;
    monoSynth = new p5.MonoSynth();
    monoSynth.amp(200);

    var maxDiodesLength = -69;
    for (var i = 0; i < diodesDir.length; ++i) {
        maxDiodesLength = maxDiodesLength > diodesDir[i].length ? maxDiodesLength : diodesDir[i].length;
    }

    diodes = make2Darray(diodesDir.length, maxDiodesLength);

    for (var i = 0; i < diodesDir.length; ++i) {
        for (var j = 0; j < diodesDir[i].length; ++j) {
            if (diodesDir[i][j]) {
                diodes[i][j] = new Diode(imageSize * j / 2, imageSize + imageSize * i / 2, diodesDir[i][j]);
            }
        }
    }

    textSize(20)
    text('Control\n\nSPACE atau WASD untuk mulai\nWASD untuk bergerak', 680, 50);
}

function draw() {
    resetButton.draw();

    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < 26; j++) {
            if (diodes[i] && diodes[i][j])
                diodes[i][j].display();
        }
    }
}

function keyPressed() {
    // jika dipencet spasi
    if (!hasStarted && [32, 65, 68, 83, 87].indexOf(keyCode) !== -1) {
        hasStarted = true;
        posX = 4;
        posY = 4;
        activateDiode(posX, posY);
        return;
    }

    if (!hasStarted) return;

    if ([32, 65, 68, 83, 87].indexOf(keyCode) !== -1)
        playSynth();

    // jika dipencet atas
    if (keyCode === 87) {
        if (diodes[posX][posY].dir === 1) {
            nextX = posX - 2;
            nextY = posY
        }
        else if (diodes[posX][posY].dir === 2) {
            nextY = posY + 1;
            nextX = posX - 1;
        }
        else if (diodes[posX][posY].dir === 3) {
            diodes[posX][posY].deactivate();
            posX = prevX[prevX.length - 1];
            posY = prevY[prevY.length - 1];
            prevX.pop();
            prevY.pop();
            nextX = posX;
            nextY = posY;
        }
        else if (diodes[posX][posY].dir === 4) {
            nextY = posY - 1;
            nextX = posX - 1;
        }

        if (diodes[nextX][nextY]) {
            if (diodes[nextX][nextY].dir === 1 && !diodes[nextX][nextY].on) {
                prevX.push(posX);
                prevY.push(posY);

                posX = nextX;
                posY = nextY;
                activateDiode(posX, posY);
            }
        }
    }
    // jika dipencet kanan
    else if (keyCode === 68) {
        if (diodes[posX][posY].dir === 1) {
            nextX = posX - 1;
            nextY = posY + 1;
        }
        else if (diodes[posX][posY].dir === 2) {
            nextX = posX;
            nextY = posY + 2;
        }
        else if (diodes[posX][posY].dir === 3) {
            nextX = posX + 1;
            nextY = posY + 1;
        }
        else if (diodes[posX][posY].dir === 4) {
            diodes[posX][posY].deactivate();
            posX = prevX[prevX.length - 1];
            posY = prevY[prevY.length - 1];
            prevX.pop();
            prevY.pop();
            nextX = posX;
            nextY = posY;
        }

        if (diodes[nextX][nextY]) {
            if (diodes[nextX][nextY].dir === 2 && !diodes[nextX][nextY].on) {
                prevX.push(posX);
                prevY.push(posY);

                posX = nextX;
                posY = nextY;
                activateDiode(posX, posY);
            }
        }
    }
    //jika dipencet bawah
    else if (keyCode === 83) {
        if (diodes[posX][posY].dir === 1) {
            diodes[posX][posY].deactivate();
            posX = prevX[prevX.length - 1];
            posY = prevY[prevY.length - 1];
            prevX.pop();
            prevY.pop();
            nextX = posX;
            nextY = posY;
        }
        else if (diodes[posX][posY].dir === 2) {
            nextX = posX + 1;
            nextY = posY + 1;
        }
        else if (diodes[posX][posY].dir === 3) {
            nextX = posX + 2;
            nextY = posY
        }
        else if (diodes[posX][posY].dir === 4) {
            nextX = posX + 1;
            nextY = posY - 1;
        }

        if (diodes[nextX][nextY]) {
            if (diodes[nextX][nextY].dir === 3 && !diodes[nextX][nextY].on) {
                prevX.push(posX);
                prevY.push(posY);

                posX = nextX;
                posY = nextY;
                activateDiode(posX, posY);
            }
        }
    }
    // jika dipencet kiri
    else if (keyCode === 65) {
        if (diodes[posX][posY].dir === 1) {
            nextX = posX - 1;
            nextY = posY - 1;
        }
        else if (diodes[posX][posY].dir === 2) {
            if (prevX.length === 0 || prevY.length === 0) {
                posX = 4;
                posY = 4;
            }
            else {
                diodes[posX][posY].deactivate();
                posX = prevX[prevX.length - 1];
                posY = prevY[prevY.length - 1];
                prevX.pop();
                prevY.pop();
                nextX = posX;
                nextY = posY;
            }
        }
        else if (diodes[posX][posY].dir === 3) {
            nextX = posX + 1;
            nextY = posY - 1;
        }
        else if (diodes[posX][posY].dir === 4) {
            nextX = posX;
            nextY = posY - 2;
        }

        if (diodes[nextX][nextY]) {
            if (diodes[nextX][nextY].dir === 4 && !diodes[nextX][nextY].on) {
                prevX.push(posX);
                prevY.push(posY);

                posX = nextX;
                posY = nextY;
                activateDiode(posX, posY);
            }
        }
    }
}

function activateDiode(x, y) {
    diodes[x][y].activate();
}

function playSynth() {
    userStartAudio();

    var note = notes[(Math.random() * notes.length) >> 0];
    // note velocity (volume, from 0 to 1)
    var velocity = Math.random();
    // time from now (in seconds)
    var time = 0;
    // note duration (in seconds)
    var dur = 1 / 6;

    monoSynth.play(note, velocity, time, dur);
}
