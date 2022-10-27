let btns = document.querySelectorAll(".btn");
let tela = document.querySelector("#visor p");

let expressao = "";
let resul = 0;

btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        const erNum = /[0-9]/;
        const erOp = /[+-.=/\*]/;
    
        if(resul){
            expressao = "";
            resul = 0;
        }

        if(erNum.test(btn.innerHTML)){
            expressao = expressao.concat(btn.innerHTML);

        }else if(erOp.test(btn.innerHTML)){ 
            expressao = expressao.concat(btn.innerHTML);

        }else if(btn.innerHTML === "Calcular"){
            if(expressao == ""){
                resul = 1;
            }else if(eval(expressao) != Number.POSITIVE_INFINITY && eval(expressao) != Number.NEGATIVE_INFINITY){
                let expressaoTemp = expressao + " = ";
                expressao = expressaoTemp + eval(expressao);
            }else
                expressao = "Impossível dividir por zero"
            resul = 1;

        }else if(btn.innerHTML === "←"){
            expressao = expressao.slice(0,-1);
        }

            tela.innerHTML = expressao; 
    });
});