import { generateToken } from "../middleware/auth"
import { User } from "../models/user"
import { Request, Response } from "express"


//Get user(s)
export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find()
    res.json(users)
}

//create users
export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body

    const savedUser = await User.create(newUser)
    res.json(savedUser)
}

//sign in users
export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const foundUser = await User.findOne({ email })

    if (!foundUser) {
        res.status(404).json({message: "user not found"})
    }

    if (password !== foundUser?.password) {
        res.status(400).json({message: "email or password invalid"})
    }

    const userObject = {
        id: foundUser?.id.toString(),
        name: foundUser?.name,
        password: foundUser?.password
    }

    const token = generateToken(userObject)

    res.status(200).json(token)
}

//add product to cart
export const addProductToCart = async (req: Request, res: Response) => {
    const { email, productId } = req.body

    const foundUser = await User.findOne({ email })

    foundUser?.products.push(productId)

    await foundUser?.save()

    res.status(200).json(foundUser)
}