import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, ISignupOuputDTO, ITokenPayload, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async(input:ISignupInputDTO):Promise<ISignupOuputDTO>=>{
        const {name, email, password} = input

        if(typeof name !=="string"){
            throw new Error("Parametro name invalido")
        }
        if(typeof email !=="string"){
            throw new Error("Parametro email invalido")
        }
        if(typeof password !=="string"){
            throw new Error("Parametro password invalido")
        }

        if(name.length <3){
            throw new Error("Parametro inválido, o nome deve ter no mínimo 3 caracters")
        }

        if(password.length < 6){
            throw new Error("Parametro invalido, a senha deve ter no minimo 6 caracters")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new Error("Parâmetro 'email' inválido")
        }

    const isEmailAlreadyExists = await this.userDatabase.findByEmail(email)
        
      if (isEmailAlreadyExists) {
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)

        const user = new User(id, name, email, hashPassword,USER_ROLES.NORMAL)
  
        await this.userDatabase.createUser(user)
        
        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        const token = this.authenticator.generateToken(payload)

        const response:ISignupOuputDTO = {
            message:`Usuario ${user.getName()} cadastrado com sucesso`,
            token
        }
        return response
    }

    public login = async(input:ILoginInputDTO)=>{ 
    
    const {email, password} = input


    if(typeof email !=="string"){
        throw new Error("Parametro email invalido")
    }
    if(typeof password !=="string"){
        throw new Error("Parametro password invalido")
    }


    if(password.length < 6){
        throw new Error("Parametro invalido, a senha deve ter no minimo 6 caracters")
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        throw new Error("Parâmetro 'email' inválido")
    }

const userDB = await this.userDatabase.findByEmail(email)
    
  if (!userDB) {
        throw new Error("Email não cadastrado")
    }

 const user = new User(userDB.id,userDB.name,userDB.email,userDB.password,userDB.role)

 const isPasswordCorrect = await this.hashManager.compare(password,user.getPassword())

 if(!isPasswordCorrect){
    throw new Error("Password incorreta")
 }

    
    const payload: ITokenPayload = {
        id: user.getId(),
        role: user.getRole()
    }
    const token = this.authenticator.generateToken(payload)

   const response:ISignupOuputDTO = {
        message:`Usuario ${user.getName()} logado com sucesso`,
        token
   }
       return response
   }

}
