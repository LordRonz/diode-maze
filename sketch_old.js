var diodes = [];
var imageSize = 64;
var hasStarted = false;

var posX, posY;
var nextX, nextY;
var prevX = [], prevY = [];
var resetButton;

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
    resetButton = new Clickable();
    resetButton.locate(50, 50);
    resetButton.text = "Reset";

    resetButton.onPress = reset;

    diodes = make2Darray(26, 26);

    textSize(width / 3);

    for (var i = 0; i > 25; i++) {
        if (i === 0) {
            for (var j = 12; j < 15; j++) {
                if (j % 2 === 0) {
                    diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 1) {
            for (var j = 11; j < 16; j++) {
                if (j % 2 === 1) {
                    if (j === 11)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 2) {
            for (var j = 8; j < 19; j++) {
                if (j % 2 === 0) {
                    if (j === 14)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 3) {
            for (var j = 7; j < 20; j++) {
                if (j % 2 === 1) {
                    if (j === 7)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 4) {
            for (var j = 4; j < 21; j++) {
                if (j % 2 === 0) {
                    if (j === 18)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 5) {
            for (var j = 5; j < 22; j++) {
                if (j % 2 === 1) {
                    if (j === 17 || j === 19 || j === 21)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                }
            }
        }
        if (i === 6) {
            for (var j = 4; j < 23; j++) {
                if (j % 2 === 0) {
                    if (j === 16 || j === 18)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                }
            }
        }
        if (i === 7) {
            for (var j = 3; j < 24; j++) {
                if (j % 2 === 1) {
                    if (j === 3 || j === 19 || j === 21 || j === 23)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                }
            }
        }
        if (i === 8) {
            for (var j = 4; j < 23; j++) {
                if (j % 2 === 0) {
                    if (j === 15 || j === 19)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                }
            }
        }
        if (i === 9) {
            for (var j = 3; j < 24; j++) {
                if (j % 2 === 1) {
                    if (j === 17)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 10) {
            for (var j = 2; j < 25; j++) {
                if (j % 2 === 0) {
                    if (j === 2 || j === 4 || j === 14 || j === 20 || j === 22)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 11) {
            for (var j = 1; j < 26; j++) {
                if (j % 2 === 1) {
                    if (j === 3 || j === 7 || j === 15)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 12) {
            for (var j = 2; j < 25; j++) {
                if (j % 2 === 0) {
                    if (j === 4 || j === 6 || j === 8 || j === 14 || j === 16)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                }
            }
        }
        if (i === 13) {
            for (var j = 1; j < 26; j++) {
                if (j % 2 === 1) {
                    if (j === 7 || j === 9 || j === 11 || j === 17)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 14) {
            for (var j = 2; j < 25; j++) {
                if (j % 2 === 0) {
                    if (j === 2 || j === 6 || j === 10)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                }
            }
        }
        if (i === 15) {
            for (var j = 3; j < 24; j++) {
                if (j % 2 === 1) {
                    if (j === 3 || j === 5 || j === 19 || j === 23)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                }
            }
        }
        if (i === 16) {
            for (var j = 4; j < 23; j++) {
                if (j % 2 === 0) {
                    if (j === 6 || j === 8 || j === 14 || j === 23)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                }
            }
        }
        if (i === 17) {
            for (var j = 3; j < 24; j++) {
                if (j % 2 === 1) {
                    if (j === 9 || j === 11 || j === 13 || j === 17 || j === 19)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 18) {
            for (var j = 4; j < 23; j++) {
                if (j % 2 === 0) {
                    if (j === 6 || j === 14 || j === 16 || j === 22)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 19) {
            for (var j = 5; j < 22; j++) {
                if (j % 2 === 1) {
                    if (j === 13 || j === 15 || j === 17)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 20) {
            for (var j = 6; j < 23; j++) {
                if (j % 2 === 0) {
                    if (j === 10)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 21) {
            for (var j = 7; j < 20; j++) {
                if (j % 2 === 1) {
                    if (j === 7 || j === 19)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 1);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 22) {
            for (var j = 8; j < 19; j++) {
                if (j % 2 === 0) {
                    if (j === 8)
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 4);
                    else
                        diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
        if (i === 23) {
            for (var j = 11; j < 16; j++) {
                if (j % 2 === 1) {
                    diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 3);
                }
            }
        }
        if (i === 24) {
            for (var j = 12; j < 15; j++) {
                if (j % 2 === 0) {
                    diodes[i][j] = new Dioda(imageSize * j / 2, imageSize + imageSize * i / 2, 2);
                }
            }
        }
    }
}

function draw() {
    background(200, 200, 200);

    resetButton.draw();

    textSize(30)
    text('Control\n\n SPACE atau WASD untuk mulai\nWASD untuk bergerak', 820, 80);

    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < 26; j++) {
            if (diodes[i][j])
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