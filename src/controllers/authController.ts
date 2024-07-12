import { Request, Response } from "express";


class AuthController {
    public static login (req: Request, res: Response) {
        const body_request = {
            email: req.body.email,
            password: req.body.password
        }
    }
}


export default AuthController;