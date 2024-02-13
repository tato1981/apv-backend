import mongoose from "mongoose";
//import bcrypt from "bcrypt";
//import generarId from "../helpers/generarId.js";


const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    propietario: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,        
    },
    fecha_alta: {
        type: Date, 
        required: true, 
        default: Date.now()                   
    },
    sintomas: {
        type: String, 
        required: true,      
        
    },
    veterinario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario'
    },
    
}, {
    timestamps: true
});



/*
veterinarioSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next();
    } 
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

//comparar passwords
veterinarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password)
}

*/

const Paciente = mongoose.model('Paciente', pacienteSchema)

export default Paciente;
