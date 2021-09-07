function Diode(x, y, img)
{
    this.x = x;
    this.y = y;
    this.img = img;
    if (img == diodeAtas)
        this.dir = 1;
    if (img == diodeKanan)
        this.dir = 2;
    if (img == diodeBawah)
        this.dir = 3;
    if (img == diodeKiri)
        this.dir = 4;
    
    
    this.display = function()
    {
        push();
        tint(255, 0, 0);
        image(this.img, this.x, this.y, 64, 64);   
        pop();
    }
    this.changeImage = function(img)
    {
        this.img = img;
    }
}

