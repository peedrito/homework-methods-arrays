const users = [
    {
        name: "João",
        pets: ["Max"],
    },
    {
        name: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatriz",
        pets: ["Lessie"],
    },
    {
        name: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        name: "Antonio",
        pets: ["Naninha"],
    },
]

function searchCarer(pet) {
    for (let i = 0; i < users.length; i++) {
        for (const search of users[i].pets) {
            if (search === pet) return `O cuidador do animal de estimação ${pet} é o (a) ${users[i].name}`;
        }
    }
    return `Infelizmente não encontrei seu dono ${pet}`;
}


console.log(searchCarer("Salsicha"));