import CASES from '/src/services/apiCovid.js';
const covid = new CASES();




async function initApp() {

    // footer data

    const total = await covid.getTotal();
    const mortalityRate = ((total.data.deaths / total.data.confirmed) * 100).toFixed(2);
    const recoveryRate = ((total.data.recovered / total.data.confirmed) * 100).toFixed(2);
    document.getElementById('total-cases').innerHTML = total.data.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('total-count').innerHTML = '/ ' + total.data.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('total-deaths').innerHTML = total.data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('total-recovered').innerHTML = total.data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('mortality-rate').innerHTML = `(${mortalityRate}%)`;
    document.getElementById('recovery-rate').innerHTML = `(${recoveryRate}%)`;


}

initApp();