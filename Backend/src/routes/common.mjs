import { Router } from "express";
//import { isAuth } from "../utils/middleware.mjs";    // Authentication middleware

const router = Router();

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err)
            throw err;
        //return res.status(200).redirect("/");            // After logged out forward to home page
        return res.send(`Logged Out`);
    })
})

export default router;