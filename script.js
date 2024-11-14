class Game{
    constructor(canvas){
        this.width = canvas.width;
        this.height = canvas.height;

        this.arrOfgame = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        this.gridWidth = this.arrOfgame[0].length;
        this.gridHeight = this.arrOfgame.length;
        this.cellWidth = this.width / this.gridWidth;
        this.cellHeight = this.height / this.gridHeight;

        this.pj = new Pj(this,9 , 0);

        this.arrOfShape = [];
        
        this.arrOfShape1 = [
            [
                [2, 2, 2],
                [1, 1, 2],
                [2, 1, 1]
            ],
            [
                [2, 1, 2],
                [1, 1, 2],
                [1, 2, 2]
            ],
            [
                [2, 2, 2],
                [1, 1, 2],
                [2, 1, 1]
            ],
            [
                [2, 1, 2],
                [1, 1, 2],
                [1, 2, 2]
            ],
        ];
        this.arrOfShape2 = [
            [
                [1, 2, 2, 2],
                [1, 2, 2, 2],
                [1, 2, 2, 2],
                [1, 2, 2, 2]
            ],
            [
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [1, 1, 1, 1]
            ],
            [
                [1, 2, 2, 2],
                [1, 2, 2, 2],
                [1, 2, 2, 2],
                [1, 2, 2, 2]
            ],
            [
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [1, 1, 1, 1]
            ]
        ];
        this.arrOfShape3 = [
            [
                [1, 1],
                [1, 1],
            ],
            [
                [1, 1],
                [1, 1],
            ],
            [
                [1, 1],
                [1, 1],
            ],
            [
                [1, 1],
                [1, 1],
            ]
        ];
        this.arrOfShape4 = [
            [
                [2, 2, 2],
                [2, 1, 1],
                [1, 1, 2]
            ],
            [
                [1, 2, 2],
                [1, 1, 2],
                [2, 1, 2]
            ],
            [
                [2, 2, 2],
                [2, 1, 1],
                [1, 1, 2]
            ],
            [
                [1, 2, 2],
                [1, 1, 2],
                [2, 1, 2]
            ],
        ];
        this.arrOfShape5 = [
            [
                [2, 2, 2],
                [1, 1, 1],
                [2, 1, 2]
            ],
            [
                [2, 1, 2],
                [1, 1, 2],
                [2, 1, 2]
            ],
            [
                [2, 2, 2],
                [2, 1, 2],
                [1, 1, 1]
            ],
            [
                [1, 2, 2],
                [1, 1, 2],
                [1, 2, 2]
            ],
        ];
        this.arrOfShape6 = [
            [
                [1, 2, 2],
                [1, 2, 2],
                [1, 1, 2],
            ],
            [
                [2, 2, 2],
                [1, 1, 1],
                [1, 2, 2],
            ],
            [
                [1, 1, 2],
                [2, 1, 2],
                [2, 1, 2],
            ],
            [
                [2, 2, 2],
                [2, 2, 1],
                [1, 1, 1],
            ],
        ];
        this.arrOfShape7 = [
            [
                [2, 1, 2],
                [2, 1, 2],
                [1, 1, 2],
            ],
            [
                [2, 2, 2],
                [1, 2, 2],
                [1, 1, 1],
            ],
            [
                [1, 1, 2],
                [1, 2, 2],
                [1, 2, 2],
            ],
            [
                [2, 2, 2],
                [1, 1, 1],
                [2, 2, 1],
            ],
        ];

        this.shape = 0;

        this.obj = [];
        
        this.dir = 0;
        this.moveActive = 1;
        this.vCollition = false;
        this.hCollition = false;
        this.maskCollition = false;
        this.vMove = 0;
        this.shapeNumber = 0;

        this.score = document.getElementById('points');
        this.points = 0;

        this.glassView = document.getElementById('glassView');
        this.startGameBt = document.getElementById('startGameBt');

        this.startGameBt.addEventListener('click',_=>{
            this.initialGame();
            this.glassView.style.display = 'none';
        });

        window.addEventListener('keydown', (e)=>{
            
            if((e.key) === 'a'){
                this.dir = -1;
            }else if((e.key) === 'd'){
                this.dir = 1;
            }else if((e.key) === 's'){
                this.vSpeed = 20;
            }else if((e.key) === 'w'){

                if(this.maskCollition === false){
                    if(this.shapeNumber < 3){
                        this.shapeNumber += 1
                    }else{
                        this.shapeNumber = 0;
                    }
    
                    this.changeShape();
                }
            }

        });

        window.addEventListener('keyup', (e)=>{
            
            if((e.key) === 's'){
                this.vSpeed = 2;
            }
            if((e.key) === 'a' || (e.key) === 'd'){
                this.dir = 0;
            }

        });

        this.count1 = 0;
        this.count2 = 0;
        this.vSpeed = 2;
        this.shapeColor;
    }

    initialGame(){
        this.arrOfgame = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        this.points = 0;
        this.nextShape = this.randomValue();
        this.start();
    }

    start(){
        this.obj = [];
        this.shape = this.shapeNumber;
        this.arrOfShape = this.newShape(this.nextShape);

        for(let i = 0; i < this.arrOfShape[this.shapeNumber].length; i++){
            for(let j = 0; j < this.arrOfShape[this.shapeNumber][0].length; j++){
                this.obj.push(new Pj(this, j + 4, i, this.arrOfShape[this.shapeNumber][i][j]));
            }
        }

        this.nextShape = this.randomValue();
        this.showNextShape(this.nextShape);
    }
    
    changeShape(){
        let number = 0;
        let objCopy = this.obj;
        this.obj = [];

        for(let i = 0; i < this.arrOfShape[this.shapeNumber].length; i++){
            for(let j = 0; j < this.arrOfShape[this.shapeNumber][0].length; j++){
                this.obj.push(new Pj(this, objCopy[number].x, objCopy[number].y, this.arrOfShape[this.shapeNumber][i][j]));
                number += 1;
            }
        }
    }

    randomValue(){
        let value = Math.floor(Math.random() * 7) + 1;
        return value;
    }

    newShape(value){

        switch(value){
            case 1: 
                this.shapeColor = 'red';
                return this.arrOfShape1;
            case 2:
                this.shapeColor = '#00efe2';
                return this.arrOfShape2;
            case 3: 
                this.shapeColor = 'yellow';
                return this.arrOfShape3;
            case 4:
                this.shapeColor = '#01ca00';
                return this.arrOfShape4;
            case 5: 
                this.shapeColor = '#a500dd';
                return this.arrOfShape5;
            case 6:
                this.shapeColor = '#cf6400';
                return this.arrOfShape6;
            case 7:
                this.shapeColor = '#0202c4';
                return this.arrOfShape7;
        }

    }

    objCollition(deltaTime){
        // horizontal collition

        if(this.count1 > 960 / 20){

            for(let i = 0; i < this.obj.length; i++){

                if((this.obj[i].x + this.dir) < 0 || (this.obj[i].x + this.dir) > (this.gridWidth - 1) || this.arrOfgame[this.obj[i].y][this.obj[i].x + this.dir] === 1){
                    if(this.obj[i].type === 1){
                        this.hCollition = true;
                        break;
                    }
                }else{
                    this.hCollition = false;
                }
            }
            for(let i = 0; i < this.obj.length; i++){
                if(this.obj[i].x + this.dir > (this.gridWidth - 1) || this.arrOfgame[this.obj[i].y][this.obj[i].x + this.dir] === 1){
                    this.maskCollition = true;
                    break;
                }else{
                    this.maskCollition = false;
                }
            }
            if(this.hCollition === false){
                for(let i = 0; i < this.obj.length; i++){
                    this.obj[i].x +=  this.dir;
                }
            }
            

            this.count1 = 0;
        }else{
            if(!isNaN(deltaTime)){
                this.count1 += deltaTime;
            }
        }

        // vertical collition
        if(this.count2 > 960 / this.vSpeed){
            for(let i = this.obj.length -1; i >= 0; i--){
                
                if(this.obj[i].type === 1){
                    if(this.obj[i].y + 1  > this.gridHeight - 1 || this.arrOfgame[this.obj[i].y + 1][this.obj[i].x] === 1){
                        this.vCollition = true;
                        break;
                    }
                }
            }
            if(this.vCollition){
                for(let i = 0; i < this.obj.length; i++){

                    if(this.obj[i].type === 1){
                        this.arrOfgame[this.obj[i].y][this.obj[i].x] = 1;
                    }
                }

                this.vCollition = false;
                this.shapeNumber = 0;
                this.start();  
            }else{

                for(let i = 0; i < this.obj.length; i++){
                    this.obj[i].y +=  1;
                }
            }

            this.count2 = 0;
            
        }else{
            if(!isNaN(deltaTime)){
                this.count2 += deltaTime;
            }
        }
    }
    drawGrid(ctx){
        ctx.fillStyle = '#6deaea';
        ctx.strokeStyle = '#93f2f9';
        ctx.lineWidth = 2;

        for(let i = 0; i < this.gridHeight; i++){
            for(let j = 0; j < this.gridWidth; j++){
                ctx.beginPath();
                ctx.fillRect(this.cellWidth * j, this.cellHeight * i, this.cellWidth, this.cellHeight);
                ctx.beginPath();
                ctx.strokeRect(this.cellWidth * j, this.cellHeight * i, this.cellWidth, this.cellHeight);

            }
        }
    }

    drawElements(ctx){
        ctx.fillStyle = '#3baae4';
        ctx.strokeStyle = '#93f2f9';
        ctx.lineWidth = 2;
        for(let i = 0; i < this.gridHeight; i++){
            for(let j = 0; j < this.gridWidth; j++){
                if(this.arrOfgame[i][j] === 1){
                    ctx.beginPath();
                    ctx.fillRect(this.cellWidth * j, this.cellHeight * i, this.cellWidth, this.cellHeight);
                    ctx.beginPath();
                    ctx.strokeRect(this.cellWidth * j, this.cellHeight * i, this.cellWidth, this.cellHeight);
                }
            }
        }
    }

    eraseRow(){
        let goOut = false;

        for(let i = this.gridHeight - 1; i >= 0; i--){
            for(let j = 0; j < this.gridWidth; j++){
                if(this.arrOfgame[i][j] !== 1){
                    break;
                }else if(j === this.gridWidth - 1){
                    for(let k = 0; k < this.gridWidth; k++){
                        this.arrOfgame[i][k] = 0;
                    }
                    this.points += 10;
                    this.moveBlock(i);
                    goOut = true;
                }
            }

            if(goOut) break;
        }
    }

    moveBlock(val){
        if(val >= 0){
            for(let i = val; i > 0; i--){
                for(let j = 0; j < this.gridWidth; j++){
                    if(this.arrOfgame[i - 1][j] === 1){
                        this.arrOfgame[i - 1][j] = 0;
                        this.arrOfgame[i][j] = 1;
                    }
                }
            }
        }
    }

    showNextShape(value){
        document.getElementById('nextElement').innerHTML = `<img src="img/element-${value}.png">`;
    }

    endGame(){
        for(let i = 0; i < this.gridWidth; i++){
                if(this.arrOfgame[1][i] === 1){
                    return 1;
                }
        }
    }
    render(ctx, deltaTime){

        this.drawGrid(ctx);
        this.drawElements(ctx);

        // end game
        if(this.endGame()){
            this.glassView.style.display = 'flex';
            document.getElementById('startGameText').innerHTML = `
                You'r points <strong class="start-game__points" id="gameEndPoints">${this.points}</strong>
            `;
        }else{
            this.eraseRow();
            for(let i = this.obj.length -1; i >= 0; i--){
                this.obj[i].draw(ctx);
            }
            this.objCollition(deltaTime);
        }

        this.score.innerHTML = this.points;
    }
}

class Pj{
    constructor(game, x, y, type){
        this.game = game;
        this.width = this.game.cellWidth;
        this.height = this.game.cellHeight;
        this.x = x;
        this.y = y;
        this.type = type;

        this.count = 0;

    }
    start(x, y){
        this.x = x;
        this.y = y;
    }
    update(deltaTime){
        
    }
    draw(ctx){
        
        ctx.strokeStyle = '#93f2f9';
        // ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;

        if(this.type === 1){
            ctx.fillStyle = this.game.shapeColor;

            ctx.beginPath();
            ctx.fillRect(this.width * this.x, this.height * this.y, this.width, this.height);
            ctx.beginPath();
            ctx.strokeRect(this.width * this.x, this.height * this.y, this.width, this.height);
            
            
        }else if(this.type === 2){
            
        }
    }
}

window.addEventListener('load',_=>{
    const canvas = document.getElementById('canvas');
    canvas.width = 300;
    canvas.height = 600;

    if(canvas.getContext){
        let ctx = canvas.getContext('2d');
        const game = new Game(canvas);
        game.drawGrid(ctx);

        let lastTime = 0;
        let count = 0;
        function loop(timestamp){

            const deltaTime = timestamp - lastTime;
            lastTime = timestamp;

            // clean canvas
            canvas.width = canvas.width;
            canvas.height = canvas.height;

            // console.log('hola');
            game.render(ctx, deltaTime);
    
            requestAnimationFrame(loop);
        }

        loop();
    }
});
