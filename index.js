// Criar uma variável para armazenar o nome e a quantidade de experiência(XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze 
// Se XP for entre 2.001 e 5.000 = Prata 
// Se XP for entre 5.001 e 7.000 = Ouro 
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente 
// Se XP for entre 9.001 e 10.000 = Imortal 
// Se XP for maior ou igual a 10.001 = Radiante
// Saída(exibir uma mensagem): "O Herói de **{nome}** está no nível de **{nivel}**"

let nomeHeroi = "Falcão Sombrio"
let xpColetado = 10642
let nivel = ""

if (xpColetado < 1000){
    nivel = "Ferro"
} else if (xpColetado >= 1001 && xpColetado <= 2000){
    nivel = "Bronze"
} else if (xpColetado >= 2001 && xpColetado <= 5000){
    nivel = "Prata"
} else if (xpColetado >= 5001 && xpColetado <= 7000){
    nivel = "Ouro"
} else if (xpColetado >= 7001 && xpColetado <= 8000){
    nivel = "Platina"
} else if (xpColetado >= 8001 && xpColetado <= 9000){
    nivel = "Ascendente"
} else if (xpColetado >= 9001 && xpColetado <= 10000){
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}
console.log("O Herói " + nomeHeroi + " está no nível de " + nivel)