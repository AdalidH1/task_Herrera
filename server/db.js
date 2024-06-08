import mongoose from "mongoose"

export const mongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://adalidh141:I0mtotosnMTlCnS6@crud-login.xzztzwb.mongodb.net/task_Herrera")
        console.log("conectado a mongoDB")
    } catch (error) {
        console.log(error)
    }
}