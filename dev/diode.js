const U = 1, R = 2, D = 3, L = 4;

function Diode(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.on = false;

    var twoThirdImgSize = (imageSize / 3 * 2) + 0.5 >> 0;
    var oneThirdImgSize = (imageSize / 3) + 0.5 >> 0;
    var halfImgSize = (imageSize / 2) + 0.5 >> 0;

    this.display = function () {
        // Finish
        if ((this.x * 2 / imageSize === 22) && (this.y - imageSize) * 2 / imageSize === 20) {
            push();

            if (!this.on) {
                fill(0, 0, 0);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 0, 0);
                stroke(255, 0, 0);
            }

            line(this.x, this.y + halfImgSize, this.x + imageSize, this.y + halfImgSize);

            strokeWeight(0);
            ellipse(this.x + imageSize, this.y + halfImgSize, imageSize);

            pop();
        }
        // Start
        else if ((this.x * 2 / imageSize === 4) && (this.y - imageSize) * 2 / imageSize === 4) {
            push();

            if (!this.on) {
                fill(0, 0, 0);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 0, 0);
                stroke(255, 0, 0);
            }

            line(this.x, this.y + halfImgSize, this.x + imageSize, this.y + halfImgSize);

            strokeWeight(0);
            ellipse(this.x, this.y + halfImgSize, imageSize);

            pop();
        }
        else {
            if (this.dir === U) {
                push();

                if (!this.on) {
                    fill(0, 0, 0);
                    stroke(0, 0, 0);
                }
                else {
                    fill(255, 0, 0);
                    stroke(255, 0, 0);
                }

                line(this.x + halfImgSize, this.y + imageSize, this.x + halfImgSize, this.y);

                stroke(0, 0, 0);

                triangle(this.x + oneThirdImgSize, this.y + twoThirdImgSize, this.x + halfImgSize, this.y + oneThirdImgSize, this.x + twoThirdImgSize, this.y + twoThirdImgSize);

                strokeWeight(3);
                line(this.x + oneThirdImgSize, this.y + oneThirdImgSize, this.x + twoThirdImgSize, this.y + oneThirdImgSize);

                pop();
            }
            else if (this.dir === R) {
                push();

                if (!this.on) {
                    fill(0, 0, 0);
                    stroke(0, 0, 0);
                }
                else {
                    fill(255, 0, 0);
                    stroke(255, 0, 0);
                }

                line(this.x, this.y + halfImgSize, this.x + imageSize, this.y + halfImgSize);

                stroke(0, 0, 0);

                triangle(this.x + oneThirdImgSize, this.y + oneThirdImgSize, this.x + oneThirdImgSize, this.y + twoThirdImgSize, this.x + twoThirdImgSize, this.y + halfImgSize);

                strokeWeight(3);
                line(this.x + twoThirdImgSize, this.y + oneThirdImgSize, this.x + twoThirdImgSize, this.y + twoThirdImgSize);

                pop();
            }
            else if (this.dir === D) {
                push();

                if (!this.on) {
                    fill(0, 0, 0);
                    stroke(0, 0, 0);
                }
                else {
                    fill(255, 0, 0);
                    stroke(255, 0, 0);
                }

                line(this.x + halfImgSize, this.y, this.x + halfImgSize, this.y + imageSize);

                stroke(0, 0, 0);

                triangle(this.x + oneThirdImgSize, this.y + oneThirdImgSize, this.x + twoThirdImgSize, this.y + oneThirdImgSize, this.x + halfImgSize, this.y + twoThirdImgSize);

                strokeWeight(3);
                line(this.x + oneThirdImgSize, this.y + twoThirdImgSize, this.x + twoThirdImgSize, this.y + twoThirdImgSize);

                pop();
            }
            else if (this.dir === L) {
                push();

                if (!this.on) {
                    fill(0, 0, 0);
                    stroke(0, 0, 0);
                }
                else {
                    fill(255, 0, 0);
                    stroke(255, 0, 0);
                }

                line(this.x + imageSize, this.y + halfImgSize, this.x, this.y + halfImgSize);

                stroke(0, 0, 0);

                triangle(this.x + twoThirdImgSize, this.y + oneThirdImgSize, this.x + twoThirdImgSize, this.y + twoThirdImgSize, this.x + oneThirdImgSize, this.y + halfImgSize);

                strokeWeight(3);
                line(this.x + oneThirdImgSize, this.y + oneThirdImgSize, this.x + oneThirdImgSize, this.y + twoThirdImgSize);

                pop();
            }
        }
    }

    this.activate = function () {
        this.on = true;
    }

    this.deactivate = function () {
        this.on = false;
    }
}