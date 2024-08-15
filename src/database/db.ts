import { connect } from "mongoose"

const uri = "mongodb://localhost:27017/aiti-ts"

export const connectToDb = async (): Promise<void> => {
    await connect(uri)

    console.log("connected to the db")
}