// Códido concluido com ajuda do colega de turma: Danilo A. Leal

function divisionGroup(array, number) {
    const newArray = [];
    const groupSize = Math.ceil(array.length / number);

    for (let i = 0; i < array.length; i += groupSize) {
        const group = array.slice(i, i + groupSize); 
        newArray.push(group); 
    }
    return newArray;
}


console.log(divisionGroup(['nome1', 'nome2', 'nome3', 'nome4', 'nome5', 'nome6', 'nome7'], 3));