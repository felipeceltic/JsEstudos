//tipos mais usados de console

console.log("Simbora JS!")
console.error("Este é um erro!")
console.warn("Este é um aviso!")

//variaveis
//mais antiga
var x = 10 //embaralha no escopo
//var x = 15 <-- retornaria um erro

//mais atual
let y = 15 //gera erro ao ser usada no mesmo escopo
const z = 20 //gera erro ao ser usada no mesmo escopo

//variaveis mais atuais dentro de um escopo não gera erro
if (1) {
  const z = 30
  console.log(z+" dentro do escopo")
}

console.log(x)
console.log(y)
console.log(z)