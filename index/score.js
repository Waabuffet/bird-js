function score(){

    this.x = width - 30;
    this.y = 20;
    this.number = 0;

    this.show = function(){

        text(this.number, this.x, this.y);
        textsize(40);

    }

    this.reset = function(){

        this.number = 0;

    }

    this.addScore = function(){

        this.number += 1;

    }

}