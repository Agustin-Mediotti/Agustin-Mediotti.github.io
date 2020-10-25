export default renderFlag();

async function getData() {
    const response = await fetch('https://restcountries.eu/rest/v2/alpha/col');
    const data = await response.json();
    return data;

};

async function renderFlag() {
    const data = await getData();
    const flag = data.flag;
};