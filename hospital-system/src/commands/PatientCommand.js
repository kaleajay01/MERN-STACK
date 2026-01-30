class PatientCommand {
    constructor(builder) {
        this.patientId = builder.patientId;
        this.doctorId = builder.doctorId;
        this.ward = builder.ward;
        this.tests = builder.tests;
        this.insurance = builder.insurance;

        Object.freeze(this);
    }
}

module.exports = PatientCommand;