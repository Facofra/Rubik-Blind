let aristasResueltas= [['A','Q'],['B','M'],['C','I'],['D','E'],['F','L'],['G','X'],['H','R'],['J','P'],['K','U'],['N','T'],['O','V'],['S','W']];
let esquinasResueltas= [["A","E","R"],["B","N","Q"],["C","J","M"],["D","F","I"],["G","L","U"],["H","S","X"],["K","P","V"],["O","T","W"]];
let ingresoCaras= Array(48).fill(0)

let diccionarioAristas ={"1 5":["A","Q"], "5 1": ["Q","A"],
"1 4":['B','M'], "4 1":['M','B'],
"1 3":['C','I'], "3 1": ['I','C'],
"1 2":['D','E'], "2 1":['E','D'],
"2 3":["F","L"], "3 2": ["L","F"],
"2 6":["G","X"], "6 2": ["X","G"],
"2 5":["H","R"], "5 2": ["R","H"],
"3 4":['J','P'], "4 3": ["P","J"],
"3 6":['K','U'], "6 3": ["U","K"],
"4 5":['N','T'], "5 4": ["T","N"],
"4 6":['O','V'], "6 4": ["V","O"],
"5 6":['S','W'], "6 5": ["W","S"]};

const diccionarioEsquinas ={"1 2 5":['A','E','R'], "1 5 2":['A','R','E'], "2 5 1":['E','R','A'], "2 1 5":['E','A','R'], "5 1 2":['R','A','E'], "5 2 1":['R','E','A'],
"1 4 5":['B','N','Q'], "1 5 4":['B','Q','N'], "4 5 1":['N','Q','B'], "4 1 5":['N','B','Q'], "5 1 4":['Q','B','N'], "5 4 1":['Q','N','B'],
"1 3 4":['C','J','M'], "1 4 3":['C','M','J'], "3 4 1":['J','M','C'], "3 1 4":['J','C','M'], "4 1 3":['M','C','J'], "4 3 1":['M','J','C'],
"1 2 3":['D','F','I'], "1 3 2":['D','I','F'], "2 3 1":['F','I','D'], "2 1 3":['F','D','I'], "3 1 2":['I','D','F'], "3 2 1":['I','F','D'],           
"2 3 6":['G','L','U'], "2 6 3":['G','U','L'], "3 6 2":['L','U','G'], "3 2 6":['L','G','U'], "6 2 3":['U','G','L'], "6 3 2":['U','L','G'],
"2 5 6":['H','S','X'], "2 6 5":['H','X','S'], "5 6 2":['S','X','H'], "5 2 6":['S','H','X'], "6 2 5":['X','H','S'], "6 5 2":['X','S','H'],
"3 4 6":['K','P','V'], "3 6 4":['K','V','P'], "4 6 3":['P','V','K'], "4 3 6":['P','K','V'], "6 3 4":['V','K','P'], "6 4 3":['V','P','K'],
"4 5 6":['O','T','W'], "4 6 5":['O','W','T'], "5 6 4":['T','W','O'], "5 4 6":['T','O','W'], "6 4 5":['W','O','T'], "6 5 4":['W','T','O'],}

let estadoAristas=[]
let estadoEsquinas=[]

function ingresoAristas() {

    let aristas= []
    const cantAristas = 12

    aristas[0] = ingresoCaras[1] + " " + ingresoCaras[18]
    aristas[1]= ingresoCaras[4] + " " + ingresoCaras[15]
    aristas[2]= ingresoCaras[6] + " " + ingresoCaras[12]
    aristas[3]= ingresoCaras[3] + " " + ingresoCaras[9]
    aristas[4]= ingresoCaras[21] + " " + ingresoCaras[22]
    aristas[5]= ingresoCaras[29] + " " + ingresoCaras[43]
    aristas[6]= ingresoCaras[20] + " " + ingresoCaras[27]
    aristas[7]= ingresoCaras[23] + " " + ingresoCaras[24]
    aristas[8]= ingresoCaras[32] + " " + ingresoCaras[41]
    aristas[9]= ingresoCaras[25] + " " + ingresoCaras[26]
    aristas[10]= ingresoCaras[35] + " " + ingresoCaras[44]
    aristas[11]= ingresoCaras[38] + " " + ingresoCaras[46]

    
    for (let i = 0; i < cantAristas; i++) {
        if (diccionarioAristas[aristas[i]]) {
            estadoAristas.push([...diccionarioAristas[aristas[i]]])
        }else{
            return false
        }
    }
    return true;
}

function ingresoEsquinas() {

    let esquinas=[]
    const cantEsquinas = 8;

    esquinas[0]= ingresoCaras[0] + " " + ingresoCaras[8] + " " + ingresoCaras[19]    
    esquinas[1]= ingresoCaras[2] + " " + ingresoCaras[16] + " " + ingresoCaras[17]    
    esquinas[2]= ingresoCaras[7] + " " + ingresoCaras[13] + " " + ingresoCaras[14]
    esquinas[3]= ingresoCaras[5] + " " + ingresoCaras[10] + " " + ingresoCaras[11]
    esquinas[4]= ingresoCaras[30] + " " + ingresoCaras[31] + " " + ingresoCaras[40]
    esquinas[5]= ingresoCaras[28] + " " + ingresoCaras[39] + " " + ingresoCaras[45]
    esquinas[6]= ingresoCaras[33] + " " + ingresoCaras[34] + " " + ingresoCaras[42]
    esquinas[7]= ingresoCaras[36] + " " + ingresoCaras[37] + " " + ingresoCaras[47]

    
    for (let i = 0; i < cantEsquinas; i++) {
        if (diccionarioEsquinas[esquinas[i]]) {
            estadoEsquinas.push([...diccionarioEsquinas[esquinas[i]]])      
            
        }else{
            return false;
        }
    }
    return true;
}

function isSorted(array) {
    return (JSON.stringify(array.concat().sort()) == JSON.stringify(array))
}

function sorted(array){
    return [...array].sort()
}

function resolverAristas(estadoAristas,contador=0, resultado = ""){
    if (contador > 20) {
        return alert("Mal encajado aristas");
    }
    //buffer = estadoAristas[1]
    let destino;
    let temp;

    if (JSON.stringify(estadoAristas) == JSON.stringify(aristasResueltas)) {
        if (contador%2 != 0){
            console.log("Hay paridad, ejecutar algoritmo de paridad.")
        }
        return {resultado,contador};

    }else{
        contador++;
        // si el buffer no está en su lugar
        if (! estadoAristas[1].every(e=> aristasResueltas[1].includes(e))) {
            //chequear con el resueltoAristas a que posición debe ir y poner ese número en la variable destino.
            for (let i = 0; i < aristasResueltas.length; i++) {
                if (estadoAristas[1].every(e=> aristasResueltas[i].includes(e))){
                    destino=i
                    break                
                }
            }
            //chequear si el estadoAristas[1] está ordenado para ver si solo hay que intercambiar o también invertir a ambos, estadoAristas[1] y destino.
            if (isSorted(estadoAristas[1])){
                // console.log(aristasResueltas[destino][0])
                resultado = resultado + aristasResueltas[destino][0] + " ";
                
                temp = estadoAristas[1];
                estadoAristas[1] = estadoAristas[destino];
                estadoAristas[destino]= temp;

                // [estadoAristas[1], estadoAristas[destino]] = [estadoAristas[destino], estadoAristas[1]]
                return resolverAristas(estadoAristas,contador,resultado)
            }
            else{
                // console.log(aristasResueltas[destino][1])
                resultado = resultado + aristasResueltas[destino][1] + " ";
                estadoAristas[1].reverse()
                estadoAristas[destino].reverse()

                temp = estadoAristas[1];
                estadoAristas[1] = estadoAristas[destino];
                estadoAristas[destino]= temp;

                // [estadoAristas[1], estadoAristas[destino]] = [estadoAristas[destino], estadoAristas[1]]
                return resolverAristas(estadoAristas,contador,resultado)
            }
        }
        //si el buffer está en su lugar. está todo ordenado? si respuesta es no, intercambiar con primer desordenado que encuentre e invertirlos.
        else{
            for (let i = 0; i < estadoAristas.length; i++) {
                               
                if (i == 1)continue;

                if (! isSorted(estadoAristas[i])){
                    destino=i
                    break
                }
                else if (JSON.stringify(estadoAristas[i]) != JSON.stringify(aristasResueltas[i])){
                    destino=i
                    break
                }
            }
            if (! isSorted(estadoAristas[destino])){

                // console.log(aristasResueltas[destino][1])
                resultado = resultado + aristasResueltas[destino][1] + " ";

                estadoAristas[1].reverse()
                estadoAristas[destino].reverse()

                temp = estadoAristas[1];
                estadoAristas[1] = estadoAristas[destino];
                estadoAristas[destino]= temp;

                // [estadoAristas[1], estadoAristas[destino]]= [estadoAristas[destino], estadoAristas[1]]
                return resolverAristas(estadoAristas,contador,resultado)
            }
            else if (JSON.stringify(estadoAristas[destino]) != JSON.stringify(aristasResueltas[destino])){
                // console.log(aristasResueltas[destino][0])
                resultado = resultado + aristasResueltas[destino][0] + " ";

                temp = estadoAristas[1];
                estadoAristas[1] = estadoAristas[destino];
                estadoAristas[destino]= temp;

                // [estadoAristas[1], estadoAristas[destino]]= [estadoAristas[destino], estadoAristas[1]]
                return resolverAristas(estadoAristas,contador,resultado)       
            }
        }
    }
}

function resolverEsquinas(estadoEsquinas,contador=0, resultado =""){
    if (contador > 20) {
        return alert("Mal encajado esquinas");
    }
    //buffer== estadoEsquinas[0]
    let destino;
    let temp;
    
    if (JSON.stringify(estadoEsquinas)==JSON.stringify(esquinasResueltas)){
        return {resultado,contador};
    }
    else{
        contador++;
        //si el buffer no está en su lugar.
        if (! estadoEsquinas[0].every(e=> esquinasResueltas[0].includes(e))){
            for (let i = 0; i < esquinasResueltas.length; i++) {
                if (estadoEsquinas[0].every(e=> esquinasResueltas[i].includes(e))){
                    destino = i
                    break
                }
            }
            if (sorted(estadoEsquinas[0])[0]==estadoEsquinas[0][0]){
                // console.log(esquinasResueltas[destino][0])
                resultado = resultado + esquinasResueltas[destino][0] + " ";

                if (destino == 1 || destino == 2 || destino == 3 || destino == 5){
                    let popdestino = estadoEsquinas[destino].splice(1,1)
                    estadoEsquinas[destino].push(popdestino[0])
                }
                estadoEsquinas[0].sort()

                temp = estadoEsquinas[0];
                estadoEsquinas[0] = estadoEsquinas[destino];
                estadoEsquinas[destino] = temp;

                return resolverEsquinas(estadoEsquinas,contador,resultado)
            }
            else{
                //si tiene inversion de segunda
                if (sorted(estadoEsquinas[0])[1] == estadoEsquinas[0][0]){
                    // console.log(esquinasResueltas[destino][1])
                    resultado = resultado + esquinasResueltas[destino][1] + " ";
                    estadoEsquinas[0].sort()
                    if (destino == 4 || destino == 6 || destino == 7){
                        let popdestino = estadoEsquinas[destino].shift(0)
                        estadoEsquinas[destino].push(popdestino)
                    }
                    else if (destino == 1 || destino == 2 || destino == 3 || destino == 5){
                        let popdestino = estadoEsquinas[destino].splice(1,1)
                        estadoEsquinas[destino].unshift(popdestino[0])
                    }

                    temp = estadoEsquinas[0];
                    estadoEsquinas[0] = estadoEsquinas[destino];
                    estadoEsquinas[destino] = temp;
                    return resolverEsquinas(estadoEsquinas,contador,resultado);
                }
                //si tiene inversion en tercera
                else if (sorted(estadoEsquinas[0])[2] == estadoEsquinas[0][0]){
                    // console.log(esquinasResueltas[destino][2])
                    resultado = resultado + esquinasResueltas[destino][2] + " ";
                    estadoEsquinas[0].sort()
                    if (destino == 4 || destino == 6 || destino == 7){
                        let popdestino = estadoEsquinas[destino].splice(2,1);
                        estadoEsquinas[destino].unshift(popdestino[0]);
                    }
                    else if (destino == 1 || destino == 2 || destino == 3 || destino == 5){
                        //aca el destino se da vuelta.
                        estadoEsquinas[destino].reverse()
                    }

                    temp = estadoEsquinas[0];
                    estadoEsquinas[0] = estadoEsquinas[destino];
                    estadoEsquinas[destino] = temp;

                    return resolverEsquinas(estadoEsquinas,contador,resultado);
                }
            }
        }
        //si buffer está en lugar. chekear si todo esta ordenado, si si, si está todo en su lugar. 
        else{
            for (let i = 0; i < estadoEsquinas.length; i++) {
                if (i == 0){
                    continue
                }
                if (JSON.stringify(estadoEsquinas[i])!= JSON.stringify(esquinasResueltas[i])){
                    destino=i
                    break
                }
            }                
            // console.log(esquinasResueltas[destino][0])
            resultado = resultado + esquinasResueltas[destino][0] + " ";

            if (destino == 1 || destino == 2 || destino == 3 || destino == 5){
                let popdestino = estadoEsquinas[destino].splice(1,1);
                estadoEsquinas[destino].push(popdestino[0]);
                let popcubo = estadoEsquinas[0].splice(1,1);
                estadoEsquinas[0].push(popcubo[0]);
            }

            temp = estadoEsquinas[0];
            estadoEsquinas[0] = estadoEsquinas[destino];
            estadoEsquinas[destino] = temp;

            return resolverEsquinas(estadoEsquinas,contador,resultado);
        }
    }
}

window.addEventListener("load",function(){
    let solucion = document.querySelector('.solucion')
    let grilla = document.querySelector(".grid");
    let enviar =document.querySelector('.enviar')
    let botones = document.querySelectorAll('.botones')


    let layout=[
        0,0,0,1,1,1,0,0,0,0,0,0,
        0,0,0,1,1,1,0,0,0,0,0,0,
        0,0,0,1,1,1,0,0,0,0,0,0,
        1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,
        0,0,0,1,1,1,0,0,0,0,0,0,
        0,0,0,1,1,1,0,0,0,0,0,0,
        0,0,0,1,1,1,0,0,0,0,0,0
    ]

    let caritas=[]
    let numeroDeCarita=1;
    

    function dibujarCubo(){
        for (let i = 0; i < layout.length; i++) {
            let carita = document.createElement('div');
            grilla.appendChild(carita)

            if (layout[i] === 0) {
                carita.classList.add('carita-no');
            } else{
                carita.classList.add('carita-si','carita' + numeroDeCarita);
                
                if(numeroDeCarita != 5 && numeroDeCarita != 23 && numeroDeCarita != 26 && numeroDeCarita != 29 && numeroDeCarita != 32 && numeroDeCarita != 50){
                    
                    caritas.push(carita);
                    carita.style.backgroundColor = "grey"
                }else{
                    carita.classList.add('centros')
                }

                numeroDeCarita++;
            }
        }

    }
    dibujarCubo();

    function colorearCentros(){
        let centroBlanco = document.querySelector('.carita5')
        centroBlanco.style.backgroundColor = "rgba(255, 255, 255, 0.856)";
        
        let centroVerde = document.querySelector('.carita23')
        centroVerde.style.backgroundColor = "rgb(0, 155, 72)";

        let centroRojo = document.querySelector('.carita26')
        centroRojo.style.backgroundColor = "rgb(183, 18, 52)";

        let centroAzul = document.querySelector('.carita29')
        centroAzul.style.backgroundColor = "rgb(0, 70, 173)";

        let centroNaranja = document.querySelector('.carita32')
        centroNaranja.style.backgroundColor = "rgb(255, 88, 0)";

        let centroAmarillo = document.querySelector('.carita50')
        centroAmarillo.style.backgroundColor = "rgb(255, 213, 0)";

    }

    colorearCentros();

    let pincel="";

    addEventListener('keydown',(e)=>{
        switch (e.keyCode) {
            case 96:
                console.log(diccionarioEsquinas);
                break;
            case 49:
            case 97:
                for (const b of botones) {
                    b.style.border = ""
                }
                document.querySelector('.blanco').style.border = "solid 3px aqua"
                pincel=  "blanco"
                break;
        
            case 50:
            case 98:
                for (const b of botones) {
                    b.style.border = ""
                }
                document.querySelector('.verde').style.border = "solid 3px aqua"
                pincel=  "verde"
                break;
        
            case 51:
            case 99:
                for (const b of botones) {
                    b.style.border = ""
                }
                document.querySelector('.rojo').style.border = "solid 3px aqua"
                pincel=  "rojo"
                break;
        
            case 52:
            case 100:
                for (const b of botones) {
                    b.style.border = ""
                }
                document.querySelector('.azul').style.border = "solid 3px aqua"
                pincel=  "azul"
                break;
        
            case 53:
            case 101:
                for (const b of botones) {
                    b.style.border = ""
                }
                document.querySelector('.naranja').style.border = "solid 3px aqua"
                pincel=  "naranja"
                break;
        
            case 54:
            case 102:
                for (const b of botones) {
                    b.style.border = ""
                }
                document.querySelector('.amarillo').style.border = "solid 3px aqua"
                pincel=  "amarillo"
                break;
        
            default:
                break;
        }
    })
    
    botones.forEach(boton => {
        boton.addEventListener('click',function(){
            for (const b of botones) {
                    b.style.border = ""
            }
            this.style.border = "solid 3px aqua"
            pincel  = boton.classList[0]
        })
    });

    

    let mouseDown=false;
    window.addEventListener('mousedown',function(e){
        e.preventDefault()
        mouseDown=true;
    })
    window.addEventListener('mouseup',function(){
        mouseDown=false;
    })

    function pintarCarita(pincel,carita,index) {
        switch (pincel) {
            case "rojo":
                carita.style.backgroundColor = "rgb(183, 18, 52)";
                ingresoCaras[index]=3;
                break;
        
            case "azul":
                carita.style.backgroundColor = "rgb(0, 70, 173)";
                ingresoCaras[index]=4;
                
                break;
        
            case "verde":
                carita.style.backgroundColor = "rgb(0, 155, 72)";
                ingresoCaras[index]=2;
                
                break;
        
            case "blanco":
                carita.style.backgroundColor = "rgba(255, 255, 255, 0.856)";
                ingresoCaras[index]=1;
                
                break;
        
            case "naranja":
                carita.style.backgroundColor = "rgb(255, 88, 0)";
                ingresoCaras[index]=5;
                
                break;
        
            case "amarillo":
                carita.style.backgroundColor = "rgb(255, 213, 0)";
                ingresoCaras[index]=6;
                
                break;
        
            case "borrar":
                carita.style.backgroundColor = "grey";
                ingresoCaras[index]=0;
                
                break;
        
            default:
                break;
        }
    }
    caritas.forEach((carita,index) => {

        carita.addEventListener("mousemove",function(e){
            if (mouseDown) {
                pintarCarita(pincel,carita,index)
            }
        })
        
        carita.addEventListener("mousedown",function(e){
            pintarCarita(pincel,carita,index)
        })
    });
    
    let solucionAristas = undefined;
    let solucionEsquinas = undefined;
    
    enviar.addEventListener('click',()=>{
        let verificador=0;

        
        for (const numero of ingresoCaras) {
            verificador += numero;
        }

        //primer validator
        if (verificador == 168) {
            //segundo validator
            if (solucionAristas) {
                solucion.removeChild(solucionAristas)
                solucionAristas=undefined;
            }
    
            if (solucionEsquinas) {
                solucion.removeChild(solucionEsquinas)
                solucionEsquinas=undefined;
            }
            if (ingresoAristas() && ingresoEsquinas()) {
                solucionAristas = document.createElement('p')
                solucionEsquinas = document.createElement('p')
        
                let resultadoAristas = resolverAristas(estadoAristas);
        
                let resultadoEsquinas = resolverEsquinas(estadoEsquinas);  
        
                solucionAristas.innerHTML = `Aristas <br> Resuelto en ${resultadoAristas.contador} permutaciones <br>          
                ${resultadoAristas.resultado}<br>     
                ${resultadoAristas.contador %2 != 0? "Hay Paridad, ejecutar algorimo para resolver" : ""}
                `;
        
                solucionEsquinas.innerHTML = `Esquinas <br>Resuelto en ${resultadoEsquinas.contador} permutaciones <br>
                ${resultadoEsquinas.resultado}
                `;

                solucion.appendChild(solucionAristas)
                solucion.appendChild(solucionEsquinas)
            }else{
                alert("Colores no fueron ingresados correctamente")
            }
            estadoAristas=[]
            estadoEsquinas=[]
            
        } else{
            alert("Colores no fueron ingresados correctamente")
        }
        
    })

    document.querySelector('.reset').addEventListener('click',()=>{
        pincel=""

        if (solucionAristas) {
            solucion.removeChild(solucionAristas)
            solucionAristas=undefined;
        }

        if (solucionEsquinas) {
            solucion.removeChild(solucionEsquinas)
            solucionEsquinas=undefined;
        }

        caritas.forEach((e,i)=>{
            e.style.backgroundColor = "grey";
            ingresoCaras[i] =0;
        })
    })

})

