import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js"

export const sendReservation = async (req, res, next)=>{
    const {firstName, lastName,email,phone,date,time} = req.body;

    if(!firstName|| !lastName||!email||!phone||!date||!time){
        return next(new ErrorHandler("please fill full form",400));
    }
    try {
        await Reservation.create({firstName,lastName, email,phone,date,time});
        res.status(200).json({
            success: true,
            message:"form has been submited"
        });
        
    } catch (error) {
        if(error.name==="ValidationError"){
            const validationError = object.value(error.errors).map(
                (err) => err.message
            );
            return mext(new ErrorHandler(validationError.join(","),400));
        }
        return next(error);
        
    }
};