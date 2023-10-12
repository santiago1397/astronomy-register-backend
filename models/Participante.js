const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nombres: {type: String,required: true,max: 100,},
        apellidos: {type: String,required: true,max: 100,},
        ci: {type: String,required: true,max: 100,},
        edad: {type: Number,required: true,max: 100,},
        sexo: {type: String,required: true,max: 100,},
        telefono: {type: String,required: true,max: 100,},
        email: {type: String,required: true,max: 100,},
        profesion: {type: String,required: true,max: 100,},
        institucion: {type: String,required: true,max: 100,},
        tipoDeParticipante: {type: String,required: true,max: 100,},
        estado: {type: String,required: true,max: 100,},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Participante", UserSchema);