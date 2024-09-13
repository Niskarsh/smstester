const axios = require('axios').default;
require("dotenv").config();
const options = {
    method: 'POST',
    url: 'https://control.msg91.com/api/v5/flow',
    headers: {
        authkey: process.env.AUTHKEY,
        accept: 'application/json',
        'content-type': 'application/json'
    },
    data: {
        template_id: process.env.SMS_COMPANY_REQUESTS_CANDIDATE_TEMPLATE_ID,
        short_url: "0",
        recipients: [
            {
                mobiles: "917023604473",
                companyName: "Google",
                skillGroups: "Fundamental Design",
            }
        ]
    }
};

async function testSms() {
    try {
        const { data } = await axios.request(options);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

testSms();