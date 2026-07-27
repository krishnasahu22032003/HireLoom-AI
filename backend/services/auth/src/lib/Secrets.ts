import "dotenv/config" ; 

const ENV_SECRETS = {

PORT : process.env.PORT,
DB_URL:process.env.MONGO_URL

} ;

export default ENV_SECRETS ; 