import {Router} from "express"
import { addProductToCart, createUser, getUsers, signIn } from "../controllers/User"

const router = Router()

//Get user(s)
router.get("/", getUsers)

//create users
router.post("/", createUser)

//sign in users
router.post("/signin", signIn)

//add product to cart
router.post("/addToCart", addProductToCart)

export default router