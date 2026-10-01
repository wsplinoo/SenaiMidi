// let tecla_pom = document.querySelector(".tecla_pom");
// function tocarSom(){
//     document.querySelector("#som_tecla__pom").play()
// } 
// tecla_pom.onclick = tocarSom;

let listaDeTeclas = document.querySelectorAll(".tecla");

function tocarSom(idElementoSom){
    document.querySelector(idElementoSom).play();
}

let contador = 0;
while(contador < 9){
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    let audio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocarSom(audio);
        console.log(contador)
    }

    tecla.onkeydown = function(event){
        if (event.code === "Enter" | event.code === "Space" | event.code === "NumpadEnter"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    contador++
}