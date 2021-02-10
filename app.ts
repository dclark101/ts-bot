import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });



const url = 'https://api.twitter.com';

const instance = axios.create({
    baseURL: url,
    headers: {'Authorization': `Bearer ${process.env.BEARER_TOKEN}`}

})

instance.get('/2/users/44196397/tweets')
.then((response) => {
    const twitterData = response.data;
    console.log(twitterData.data[0].text);
})
.catch((error) => {
    console.log(error)
});