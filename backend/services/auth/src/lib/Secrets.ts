import "dotenv/config" ; 

const ENV_SECRETS = {

PORT : process.env.PORT,
DB_URL:process.env.MONGO_URL,
EMAIL_SERVICE_URL:process.env.EMAIL_SERVICE_URL,
JWT_SECRET:process.env.JWT_SECRET,
REDIS_SECRET: process.env.REDIS_URL,

} ;

export default ENV_SECRETS ; 