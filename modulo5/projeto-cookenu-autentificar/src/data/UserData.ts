import { BaseDatabase } from "./BaseDatabase";
import User from "../model/User"

class UserData extends BaseDatabase{

    private static tablename ="usuario_cookeno"

    async getUserByEmail(email:string):Promise<User|undefined>{
        const result = await this.getConnection()
        .select("*")
        .from(UserData.tablename
        .where({ email })
    
        if(!result.length){
            return undefined
        }
    return new User(result[0].id,result[0].nome,result[0].email,result[0].senha)  

    }
}


export default UserData