import Users from '../models/userModel.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

// GET all users
export const getAllUsers = async (req, res) => {
    const users = await Users.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

// GET a single user
export const getUser = async (req, res) => {
    const { id } = req.params

    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    } 

    const users = await Users.findById(id)
    
    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }
    res.status(200).json(users)
}

// CREATE a new user
export const createUser = async (req, res) => {
    const { username, email, password, confirmPassword, roleType, gender, age, ethnicity, community } = req.body
    console.log(req.body)

    // Final check to ensure all fields are correct
    if (!username || !email || !password || !confirmPassword || !roleType || !gender || !age || !ethnicity || !community) {
        return res.status(400).json({ message: "All fields are required." });
    }

    //Add document to MongoDB collection
    try {
        // Check if the email already exists
        const existingUser = await Users.findOne({ email });
        if(existingUser) return res.status(400).json({ message: "User already exist." });
        // Check if the passwords match & hash password
        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });
        const hashedPassword = await bcrypt.hash(password, 12);
        // Extra precaution for creation of new users
        const roleType = "User";

        const users = await Users.create({ username, email, password: hashedPassword, roleType, gender, age, ethnicity, community })
        // Handle signin with JSON Web Tokens
        const token = jwt.sign({ email: users.email, id: users._id }, 'test', { expiresIn: "1h" });
        res.status(200).json({ users, token });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE a user
export const deleteUser = async (req, res) => {
    const { id } = req.params

    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    }

    const users = await Users.findOneAndDelete({_id: id})

    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }

    res.status(200).json(users)
}

// UPDATE a user by profile manager
export const updateUser = async (req, res) => {
    const { id } = req.params
    
    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    } 

    const users = await Users.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }

    res.status(200).json(users)
}

// UPDATE a user by admin manager
export const updateUserRole = async (req, res) => {
    const { id: _id } = req.params;
    
    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    } 

    const userRole = req.body.roleType;
    const users = await Users.findByIdAndUpdate({_id: id}, {roleType: userRole}, {new: true}, {
        ...req.body
    })

    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }

    res.status(200).json(users)
}

// FOR SIGNING IN A USER
export const signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, role: existingUser.roleType }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

// FOR LOGGING OUT A USER
export const logout = async(req,res) =>{
    console.log(req.body);
    const token =Object.keys(req.body)[0];
    // const{token} = req.session;
    if (token) {
        try {
          await client.revokeToken(token);
        } catch (error) {
          console.error(error);
        }
    } 
    // req.session.destroy();
    res.redirect('/');
     
}