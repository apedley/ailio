import { REDDIT_TOKEN, REDDIT_SECRET} from './secret';

// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
export const environment = {
  production: false,
  redditToken: REDDIT_TOKEN,
  redditSecret: REDDIT_SECRET,
  // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
  userAgent: 'PC:com.apedley.ailio:v0.0.1 (by /u/klumpp'
};

