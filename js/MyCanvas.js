//Déclaration de class canvas
class MyCanvas{

    // Déclaration de notre constructor
    constructor(){
        //Canvas
        this.canvas = canvasElement; 
        console.log(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        console.log(this.ctx.fillStyle );
        this.drawing = false;
        this.init()
        this.clearCanvas = document.getElementById("clearCanvas");
        this.validCanvas = document.getElementById("validCanvas");
    
    }

    //Gestion des évenements
    init() {
        this.canvas.addEventListener('mousedown', (event) => {
            let rect = this.canvas.getBoundingClientRect()
            // console.log(rect);
            console.log(event.clientX);
            let posX = event.clientX - rect.Left
            let posY = event.clientY  - rect.Top
            this.drawing = true
            this.ctx.beginPath()
            this.ctx.moveTo(posX, posY)
        })
        this.canvas.addEventListener('mousemove', (event) => {
            if (!this.drawing) {
                return
            }

            let rect = this.canvas.getBoundingClientRect()
            let posX = event.clientX - rect.left
            let posY = event.clientY  - rect.top
            this.ctx.lineTo(posX, posY)
            this.ctx.stroke()
        })
        this.canvas.addEventListener('mouseup', (event) => {
            this.drawing = false
        })
    }
   

}

