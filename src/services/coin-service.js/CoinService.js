const axios = require('axios');

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getSlpConversion = async (fiat) => {
    const endpoint = `/coin/${fiat}`;
    let conversion = 0;

    try {
        const response = await axios.get(BASE_URL + endpoint);
        if (response.status === 200) {
            conversion = response.data["smooth-love-potion"][fiat];
        }
    } catch (exception) {
        console.log(exception);
    }

    return conversion;
};

export const CoinService = {
    getSlpConversion,
};
