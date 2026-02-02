class PatientService {
    execute(command) {
        console.log("Processing Patient Command");
        console.log(command);
        if (command.doctorId) {
            console.log("Doctor assigned");
        }
        if (command.tests.length > 0) {
            console.log("Lab tests ordered");
        }
    }
}
module.exports = PatientService;