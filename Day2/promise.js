axios = require("axios");
async function dogBreads() {
    const reponse = await axios.get('https://api.publicapis.org/entries')
    console.log(reponse)
}
dogBreads();
