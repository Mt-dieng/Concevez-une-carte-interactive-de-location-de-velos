//Déclaration de class canvas
class MyCanvas{

    // Déclaration de notre constructor
    constructor(my_reservation){
        //Canvas
        this.canvas = canvasElement; 
        // console.log(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.drawing = false;
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.init()
        this.initMobile()
        this.clearCanvas = document.getElementById("clearCanvas");
        this.validCanvas = document.getElementById("validCanvas");
    
        this.clearCanvas.addEventListener('click', (event) =>{
            this.clear();
        });

        this.validCanvas.addEventListener('click', (event) =>{
            this.save();
            my_reservation.stockReservation();
            document.getElementById('reservation').style.display = 'block';
        });
    }

    //Gestion des évenements

    init(event) {
        this.canvas.addEventListener('mousedown', (event) => {
            let rect = this.canvas.getBoundingClientRect()
            // console.log(rect);
            let mousposX = event.clientX - rect.Left
            let mousposY = event.clientY  - rect.Top
            this.drawing = true
            this.ctx.beginPath()
            this.ctx.moveTo(mousposX, mousposY)
        })

        this.canvas.addEventListener('mousemove', (event) => {
            if (!this.drawing) {
                return
            }
            let rect = this.canvas.getBoundingClientRect()
            let mousposX = event.clientX - rect.left
            let mousposY = event.clientY  - rect.top
            this.ctx.lineTo(mousposX, mousposY)
            this.ctx.stroke()
        })

        this.canvas.addEventListener('mouseup', (event) => {
            this.drawing = false
        })
    }

// Evénements tactiles pour mobile, tablette.
initMobile(event) {

    this.canvas.addEventListener('touchstart', (event) => {
        // console.log('ok');
         // Renvoie les coordonnées des périphéries (tablettes, mobiles)
        let rectMobile = this.canvas.getBoundingClientRect();
        let handposX = event.touches[0].clientX - rectMobile.left
        let handposY = event.touches[0].clientY - rectMobile.top
        this.drawing = true
        //Commence le dessin
        this.ctx.beginPath() 
        this.ctx.moveTo(handposX, handposY)
    })

    this.canvas.addEventListener('touchmove', (event) => {
        // console.log('dessiner');
        event.preventDefault();

        if (!this.drawing) {
            return
        }

        let rectMobile = this.canvas.getBoundingClientRect()
        let handposX = event.touches[0].clientX - rectMobile.left
        let handposY = event.touches[0].clientY - rectMobile.top
        this.ctx.lineTo(handposX, handposY)
        this.ctx.stroke()

    })
    
    this.canvas.addEventListener('touchend', (event) => {
        // console.log('arret');
        this.drawing = false
    })
    }

    //btn enregistrement signature
    clear() {
        let q = confirm("effacer ?");
        if (q) {
            this.canvas.getContext('2d');
            this.ctx.clearRect(0, 0, 400, 200);
            
        }
    }
    
    save() {
        console.log('valider');
        let dataURL = this.canvas.toDataURL();
    //    alert(dataURL)
        this.canvas.getContext('2d');
        this.validCanvas.src = dataURL;  
    }
    
   

}

