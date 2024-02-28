// a) Organize o array na ordem inversa e transforme em uma única string separada por vírgulas;
const fruitsA = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
console.log("-------- EXERCÍCIO [A] : " + fruitsA.reverse().join(', ')); 
// b) Remova o primeiro e último item do array original e adicione a fruta Melão ao novo array da seguinte forma:
const fruitsB = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
fruitsB.splice(fruitsB.length - 1, 1, "Melão");
fruitsB.shift();
console.log("-------- EXERCÍCIO [B] : " + fruitsB.join(', '));