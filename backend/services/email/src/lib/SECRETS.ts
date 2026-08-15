import "dotenv/config" ; 

const ENV_SECRETS = {

    REDIS_SECRET: process.env.REDIS_URL,
    PORT : process.env.PORT,


};

export default ENV_SECRETS ; 