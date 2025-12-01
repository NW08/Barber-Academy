import { sendMailToRecoveryPassword, sendMailToRegister } from "../helpers/send_mail.js"
import { crearTokenJWT } from "../middlewares/JWT.js"
import User from "../models/User.js"

const registro = async (req, res)=>{
    try{
        // Paso 1
        const {email, password} = req.body
        // Paso 2
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
        const verificarEmailBDD = await User.findOne({email})
        if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
        // Paso 3
        const nuevoUser = new User(req.body)

        nuevoUser.password= await nuevoUser.encryptPassword(password)
        const  token = nuevoUser.createToken()
        await sendMailToRegister(email,token)

        await nuevoUser.save()
        // Paso 4
        res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})

    } catch(error){
        res.status(500).json({ msg: `❌ Error en el servidor - ${error}` })

    }
}

const confirmarMail= async(req,res)=>{
    //Paso 1
    const {token}= req.params
    //Paso 2
    const userBDD = await User.findOne({ token })
    if(!userBDD) return res.status(404).json({ msg: "Token invalido o cuenta ya confirmada"})
    //Paso 3
    userBDD.token = null
    userBDD.confirmEmail = true
    await userBDD.save() 
    //Paso 4
    res.status(200).json({ msg: "Cuenta confirmada, ya puedes iniciar sesión. "})

}

const recuperarPassword  = async (req,res)=>{
    try{
        //Paso 1
        const {email} = req.body
        //Paso 2
        if(!email)return res.status(400).json({ msg : "Debes ingresar un correo electronico"})
        const userBDD = await User.findOne({email})

        if(!userBDD)return res.status(404).json({ msg : "El usuario no se encuentra registrado"})
        //Paso 3
        const token = userBDD.createToken()
        userBDD.token = token
        //Correo 
        sendMailToRecoveryPassword(email,token)
        await userBDD.save()

        //Paso 4
        res.status(200).json({ msg : "Revisa tu correo electronico para reestablecer"})
        
    }catch(error){
        res.status(500).json({msg:`❌ Error en el servidor - ${error}`})
    }
}

const comprobarTokenPasword  =  async (req,res)=>{
    try {
        //Paso 1
        const {token} = req.params
        const userBDD = await User.findOne({token})
        //Paso 2
        if(userBDD?.token !== token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
        res.status(200).json({msg:"Token confirmado, ya puedes crear tu nuevo password"}) 
    
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: `❌ Error en el servidor - ${error}` })
    }
}

const crearNuevoPassword = async (req,res)=>{
    try {
        //Paso 1
        const { token } = req.params
        const{password,confirmpassword} = req.body
        //Paso 2
        if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Debes llenar todos los campos"})
        if(password !== confirmpassword) return res.status(404).json({msg:"Los passwords no coinciden"})
        const userBDD = await User.findOne({token})
        if(!userBDD) return res.status(404).json({msg:"No se puede validar la cuenta"})
        //Paso 3 
        userBDD.token = null
        userBDD.password = await userBDD.encryptPassword(password)
        await userBDD.save()
        res.status(200).json({msg:"Felicitaciones, ya puedes iniciar sesión con tu nuevo password"}) 

    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: `❌ Error en el servidor - ${error}` })
    }
}


const login = async (req,res)=>{
    try{
        //Paso 1 
        const {email, password} = req.body
    
        //Paso 2 
        if(Object.values(req.body).includes("")) return res.status(404).json({msg:"Debes llenar todos los campos"})
        const userBDD = await User.findOne({email})
        if(!userBDD)return res.status(404).json({msg: "El ususario no se encuentra registrado"})
        if(!userBDD.confirmEmail) return res.status(403).json({msg: "Debes confirmar la cuenta antes de iniciar sesión"})
        
        const verificarPassword = await userBDD.matchPassword(password)


        if(!verificarPassword)return res.status(401).json({msg: "La password no es correcta"})

        //Paso 3
        const {nombre,apellido,direccion,telefono,_id,rol} = userBDD
        const token = crearTokenJWT(userBDD._id,userBDD.rol)
        console.log(token);
        
        
        //Paso 4 
        res.status(200).json ({
            token,
            nombre,
            apellido,
            direccion,
            telefono,
            _id,
            rol,
            correo:userBDD.email
        })        

    }catch (error) {
        console.error(error)
        res.status(500).json({ msg:`❌ Erro en el servidor -  ${error}`})
    }
}

const perfil =(req,res)=>{
    try{
        //Paso 1 - req.User 
        //Paso 2
        //Paso 3
        const {token,confirmEmail,createdAt,updatedAt,__v,...datosPerfil} = req.UserHeader
        //Paso 4 
        res.status(200).json(datosPerfil)
    }catch(error){
        res.status(500).json({ msg : `Token invalido o expirado - ${error}`})
    }
}
export {
    confirmarMail,
    registro,
    recuperarPassword,
    comprobarTokenPasword,
    crearNuevoPassword,
    login,
    perfil
}