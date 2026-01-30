class PatientService {
    execute(command) {
        console.log("Processing Patient Command");
        console.log(command);

        // Simulate hospital workflow
        if (command.doctorId) {
            console.log("Doctor assigned");
        }
        if (command.tests.length > 0) {
            console.log("Lab tests ordered");
        }
    }
}

module.exports = PatientService;