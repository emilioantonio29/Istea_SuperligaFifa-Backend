const {userMongoaaS} = require("../schemas/user")
const mongoConnectionNoSingleton = require("../connection/mongoconnection")

/*
    CRUD OPERATIONS: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/
*/

const getUserDB = async (username) =>{
    let data = await mongoConnectionNoSingleton.mongoConnection()
    .then(() => {
        let user = userMongoaaS.findOne({username: username});
        return user
    })
    .catch(err=>{
        console.log(err)
        return {error: err}
    })
    .finally(() => {
        mongoConnectionNoSingleton.mongoDisconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
    })

    return data
}

module.exports= {
    getUserDB
}