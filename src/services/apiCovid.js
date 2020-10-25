export default class CASES {
    async getTotal() {
        const response = await fetch('https://covid2019-api.herokuapp.com/v2/total', {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    };

    async getCountries() {
        const response = await fetch('https://covid2019-api.herokuapp.com/v2/current', {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    };
};