const axios = require('axios');

require('dotenv').config();

//= ======================================
  //  PAYSTACK SERVICES
  //--------------------------------------
exports.paystackGetRequest =  async (endPoint) => {
    try {
        const data = await axios.get(`https://api.paystack.co/${endPoint}`, {
            headers: {
                'Authorization': `Bearer sk_live_0268cd9da6181f3822cc9900fa080c0bf639a892`,
                'Content-Type': 'application/json'
            },
        });

        return data;

    } catch (error) {
        return false;
    }
};

