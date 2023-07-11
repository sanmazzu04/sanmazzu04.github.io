var plataVal = localStorage.getItem("miVariable");
    if (plataVal !== NaN) {
        console.log("El valor de la variable es: " + plataVal);
    } else {
        plataVal = prompt("Ingresa un número:");
        localStorage.setItem("miVariable", plataVal);
    }

let plataWrite = document.getElementById("money")
plataWrite.textContent = plataVal

const masBttn = document.querySelector('#startBtn');

masBttn.addEventListener('click',function() {

    var plata = prompt("cuanto agrego?");
    plata = parseFloat(plata);

    if (plata !== null){
        plataVal = parseFloat(plataVal)
        let plataWrite = document.getElementById("money")
        plataVal = plata + plataVal
        plataWrite.textContent = plataVal

        localStorage.setItem("miVariable", plataVal);
    }
})

const gasteBttn = document.querySelector('#gasteBtn');

gasteBttn.addEventListener('click',function() {
    
    var plata = prompt("cuanto gastaste? >:(");
    plata = parseFloat(plata);
    
    if (plata !== null){
        plataVal = parseFloat(plataVal)
        let plataWrite = document.getElementById("money")
        plataVal = plataVal - plata
        plataWrite.textContent = plataVal    
    
        localStorage.setItem("miVariable", plataVal);

        var gastos = prompt("en que mierda gastaste todo eso????")
        
        if (gastos == "comida"){
            let comidaWrite = document.getElementById("comida")
            var plataComida;
            plataComida = parseFloat(plataComida)
            plataComida = plata + plataComida
            comidaWrite.textContent ="comida: " + plataComida + " $"
        }
        else if (gastos == "casa"){
            let casaWrite = document.getElementById("casa")
            casaWrite.textContent ="casa: " + plata + " $"
        } 
        else if (gastos == "transporte"){
            let transporteWrite = document.getElementById("transporte")
            transporteWrite.textContent ="transporte: " + plata + " $"
        } 
        else {
            let otrosWrite = document.getElementById("otros")
            otrosWrite.textContent ="otros: " + plata + " $"
        }
    }

    

})
   
