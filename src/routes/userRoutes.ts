import {Router} from "express"
import { addProductToCart, createUser, deleteUser, getUsers, signIn, updateUser } from "../controllers/User"

const router = Router()

//Get user(s)
router.get("/", getUsers)

//create users
router.post("/", createUser)

//update user
router.post("/updateUser", updateUser)

//delete user
router.post("/deleteUser", deleteUser)

//sign in users
router.post("/signin", signIn)

//add product to cart
router.post("/addToCart", addProductToCart)

export default router