import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[3, "First name must contain at least 3 charactors!"],
        maxLength:[30, "First name cannot exceed 30 charactors!"],
    },
    lastName:{
        type: String,
        required: true,
        minLength:[3, "Last name must contain at least 3 charactors!"],
        maxLength:[30, "Last name cannot exceed 30 charactors!"],
    },
    email:{
        type: String,
        required: true,
        validator:[validator.isEmail,"Provide a vaild email"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "phone number must contail only 10 digit!"],
        maxLength:[10,"phone number must contain only 10 digit!"]
    },
    time:{
        type: String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

});

export const Reservation = mongoose.model("Reservation",reservationSchema);