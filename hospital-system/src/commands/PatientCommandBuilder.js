const PatientCommand = require('./PatientCommand');

class PatientCommandBuilder {
    constructor(patientId) {
        this.patientId = patientId;
        this.tests = [];
    }

    assignDoctor(doctorId) {
        this.doctorId = doctorId;
        return this;
    }

    allocateWard(ward) {
        this.ward = ward;
        return this;
    }

    addTest(test) {
        this.tests.push(test);
        return this;
    }

    applyInsurance(provider) {
        this.insurance = provider;
        return this;
    }

    build() {
        return new PatientCommand(this);
    }
}

module.exports = PatientCommandBuilder;