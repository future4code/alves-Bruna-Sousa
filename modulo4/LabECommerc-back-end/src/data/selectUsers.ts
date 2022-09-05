import { connection } from "..";

import { userInsert } from "../types";

const typeUser = (user:any) => {
    const createUser: userInsert = {
        id:user.id,
        name:user.name,
        email:user.email,
        password:user.password
    }
    return createUser
}
export default async function selectUsers():Promise<userInsert[] | undefined> {
    const result = await connection("labecommerce_users")
    console.log(result)

   const allUserType = result.map((user)=> {
        return typeUser(user)
    })

    console.log(allUserType)


    return result

}