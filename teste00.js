let nomeDoHeroi = "Falcão Sombrio"
let xpColetados = 578
let nivel = ""

if (xpColetados < 1000){
    nivel = 0 //Ferro
} else if (xpColetados >= 1001 && xpColetados <= 2000){
    nivel = 1 //Bronze
} else if (xpColetados >= 2001 && xpColetados <= 5000){
    nivel = 2 //Prata
} else if (xpColetados >= 5001 && xpColetados <= 7000){
    nivel = 3 //Ouro
} else if (xpColetados >= 7001 && xpColetados <= 8000){
    nivel = 4 //Platina
} else if (xpColetados >= 8001 && xpColetados <= 9000){
    nivel = 5 //Ascendente
} else if (xpColetados >= 9001 && xpColetados <= 10000){
    nivel = 6 //Imortal
} else {
    nivel = 7 //Radiante
}

switch (nivel){
    case 0:
        nivel = "Ferro"
    break
    case 1:
        nivel = "Bronze"
    break
    case 2:
        nivel = "Prata"
    break
    case 3:
        nivel = "Ouro"
    break
    case 4:
        nivel = "Platina"
    break
    case 5: 
        nivel = "Ascendente"
    break
    case 6:
        nivel = "Imortal"
    break
    case 7:
        nivel = "Radiante"
}
console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)