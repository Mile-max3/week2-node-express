

const middleware = (req,res,next) => {
    const {name,email} = req.body;

    if(!email || !name|| email.trim() === "" || name.trim() === "")
        res.status(400).json({message: "Enter Required Field"});
    else
        next();
};

export default middleware;
