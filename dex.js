let random = 0
while (random < 5) {
  random += Math.random() // aggiungo a random un valore pseudo-randomico da 0.00000001 a 0.99999999 (più o meno!)
  console.log('il valore di random è', random)
  // ad un certo punto il valore di random diventerà superiore o uguale a 5, e il ciclo while terminerà :)
}

console.log('FINITO! ora random è ', random)


let myRandom = Math.random()
console.log(myRandom) // ho generato un numero pseudo-casuale tra 0.00000001 a 0.99999999 (più o meno!)
console.log(myRandom * 10) // moltiplicandolo per 10, ottengo un valore compreso tra 0.0000001 a 9.9999999 (più o meno!)
console.log(Math.floor(myRandom * 10))