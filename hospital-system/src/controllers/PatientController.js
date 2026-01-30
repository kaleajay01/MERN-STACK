const PatientCommandBuilder = require('../commands/PatientCommandBuilder');
const PatientService = require('../services/PatientService');

class PatientController {
    admitPatient(req) {
        const command = new PatientCommandBuilder(req.patientId)
            .assignDoctor(req.doctorId)
            .allocateWard(req.ward)
            .addTest("Blood Test")
            .addTest("X-Ray")
            .applyInsurance(req.insurance)
            .build();

        const service = new PatientService();
        service.execute(command);
    }
}

module.exports = PatientController;