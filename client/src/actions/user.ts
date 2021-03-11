import axios from "axios";
import { setLoading } from "../reducers/loadReducer";
import { setUser } from "../reducers/userReducer";

interface IDefaultProps {
    username: string,
    password: string
}

interface IRegisterProps extends IDefaultProps {
    email: string
}

export const registerUser = async (
    { username, email, password }: IRegisterProps
): Promise<void> => {
    try {
        await axios.post("http://localhost:5000/auth/register", {
            username,
            email,
            password
        }).then(({ data }) => {
            console.log("You have successfully registered!")
            alert(data.message)
        }).catch((reason => {
            console.log(`Error during registration request - ${reason}`)
        }))
    } catch (e) {
        console.log('Error:', e)
    }
}

export const loginUser = async (
    { username, password }: IDefaultProps,
    dispatch: any
): Promise<void> => {
    try {
        await axios.post("http://localhost:5000/auth/login", {
            username,
            password
        }).then(({ data }) => {
            dispatch(setUser(data.user))
            console.log("You have successfully logged in \n Your data")
            console.log(data)
            localStorage.setItem('token', data.token)
        }).catch((reason => {
            console.log(`Error during login request - ${reason}`)
        }))
    } catch (e) {
        console.log('Error:', e)
    }
}