import jwt from "jsonwebtoken"


const generateTokenAndSetCookies = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SERCRET, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //prevents XSS attacks   
        sameSite: "strict" //prevents other attacks
    })
}

export default generateTokenAndSetCookies