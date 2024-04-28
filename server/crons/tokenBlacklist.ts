import { CronJob } from 'cron';
import jwt from 'jsonwebtoken';
import { Token, TokenBlacklist } from '@/models/tokenSchema';

/*
 * This cron job runs every 30 minutes to check if the token has expired.
 * If the token has expired, it will be added to the blacklist (TTL of 30d) and deleted from the token collection.
 * 
 */
export const tokenJob = new CronJob('* */30 * * * *', async () => {
  const tokens = await Token.find();
  
  for (let token of tokens) {
    try {
      jwt.verify(token.token, process.env.TOKEN_SECRET); // replace with your secret key
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        const tokenInfo = jwt.decode(token.token);
        await TokenBlacklist.create({  token: token.token, userId: tokenInfo._id });
        await Token.deleteOne({ _id: token._id });
      }
    }
  }
});
