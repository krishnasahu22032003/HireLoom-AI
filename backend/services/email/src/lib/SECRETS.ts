import "dotenv/config" ; 

const ENV_SECRETS = {

    REDIS_SECRET: process.env.REDIS_URL,
    PORT : process.env.PORT,
    RESEND_API:process.env.RESEND_API_KEY,

};

export default ENV_SECRETS ; 