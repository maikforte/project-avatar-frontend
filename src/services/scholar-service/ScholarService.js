const axios = require('axios');

const BASE_URL = 'http://localhost/';

const getScholar = async (roninAddress) => {
    const endpoint = `scholar/${roninAddress}`;
    let scholar = {};

    try {
        const response = await axios.get(BASE_URL + endpoint);
        if (response.status === 200) {
            scholar = response.data;
        }
    } catch (exception) {
        console.log(exception);
    }

    return scholar;
};

export const ScholarService = {
    getScholar,
};
