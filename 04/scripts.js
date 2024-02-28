const patients = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function listOfPatients (patients, operation, namePatient) {
    if (operation === 'agendar') {
        patients.splice(patients.indexOf(namePatient), 1);
        patients.push(namePatient); 
        return console.log(patients.join(', '));
    }

    if (operation === 'atender') patients.shift(); return console.log(patients.join(', '));
}

listOfPatients(patients, 'atender', 'Maria');
