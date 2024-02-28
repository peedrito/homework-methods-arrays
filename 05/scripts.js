const patients = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function toSchedule (patients, namePatient) {
    const index = patients.indexOf(namePatient);
    if (index > -1) {
        patients.splice(index, 1); 
        patients.push(namePatient);
    } else {
        return 'Paciente não encontrado!';
    }
    return patients.join(', ');
}

function assistPatient (patients) {
    patients.shift(); return patients.join(', ');
}


function cancelService (patients, namePatient) {
    const index = patients.indexOf(namePatient);
    if (index > -1) patients.splice(index, 1);
    if (index < 0) return 'Paciente não encontrado ou não possui agendamento!'
    return patients.join(', ');
}

console.log(toSchedule(patients, 'maria'));
console.log(assistPatient(patients));
console.log(cancelService(patients, 'Maria'));