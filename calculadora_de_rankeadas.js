var saldoVitorias;
var nivel;


function calcular(qtdVitorias){
    if (qtdVitorias < 10){
        nivel = 'Ferro';
    }else if(qtdVitorias >= 11 && qtdVitorias <= 20){
        nivel ="Bronze";
    }
    else if(qtdVitorias > 2000 && qtdVitorias <= 50){
        nivel ="Prata";
    }
    else if(qtdVitorias > 50 && qtdVitorias <= 80){
        nivel ="Ouro";
    }
    else if(qtdVitorias > 80 && qtdVitorias <=90){
    nivel ="Diamante";
    }
    else if(qtdVitorias > 90 && qtdVitorias <= 100){
    nivel ="Lendário";
    }
    else if(qtdVitorias > 100){
        nivel ="Imortal";
    }

    console.log("O Héroi tem de saldo  " + qtdVitorias + " está no nível de " + nivel);
}

calcular(101);

