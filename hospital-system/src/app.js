const PatientController = require('./controllers/PatientController');

const controller = new PatientController();

controller.admitPatient({
    patientId: "P101",
    doctorId: "D12",
    ward: "ICU",
    insurance: "HealthPlus"
});