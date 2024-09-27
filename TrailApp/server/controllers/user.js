// Import dependencies
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {IdTokenClient, OAuth2Client} from 'google-auth-library';

// Import model
import User from '../models/user.js';

// TODO: Hide this in .env
const CLIENT_ID = '222736919095-8clp3t7ndllhnf6jt0n1buveh6a97i62.apps.googleusercontent.com';
        const clientSecret ='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';
        const client = new OAuth2Client(CLIENT_ID,clientSecret, 'postmessage'); 


export const signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, role: existingUser.role }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if(existingUser) return res.status(400).json({ message: "User already exist." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, role: ''});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const getUsers = async(req, res)=>{
    try {
        const users = await User.find().sort({ _id: -1 });
        res.send(users);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}

export const updateUserRole = async(req, res) =>{
    const { id: _id } = req.params;
    const userRole = req.body.role;
    const updatedUser = await User.findByIdAndUpdate(_id, { role: userRole }, { new: true });
   
    res.json(updatedUser);
}
//Assign user with role
export const googleSignIn = async(req, res) =>{
    try{
        //const CLIENT_ID = '115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';
        
        const token =await client.getToken(req.body.token);
        // console.log("Check out token: ");
        // console.log(token);
        //const idToken = req.body.access_token;
        const ticket = await client.verifyIdToken({
            idToken: token.tokens.id_token,
            audience: CLIENT_ID,
        });
        // console.log("Watch out ticket incoming");
        // console.log(ticket);
        const payload = ticket.getPayload();
        
        const email = payload.email;
        const name =  payload.given_name + (payload.family_name? payload.family_name :'');
        let user = await User.findOne({email});
        
        let result;
        if(!user){
            const password = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8).toUpperCase() + "!@#$%^&*()_+";
            const hashedPassword = await bcrypt.hash(password,12);
            
            const createdUser = await User.create({email,name,password:hashedPassword, role:'user'});
            result = createdUser;
            user = createdUser;
        }
        const jwtToken = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "1h" });
        result = user || createdUser;
        res.status(200).json({ payload, result, jwtToken });
        return payload;
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Something went wrong.' });
    }
 
}

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