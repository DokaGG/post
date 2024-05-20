const SHEET_ID = '1fevEuqq9nt46ZmRMfBfRvlPwLcvIyBZ6n3D47DkmJJY'; // Your sheet ID here
const API_KEY = 'AIzaSyAWPicY582Ei4--zleONBBXFX6eMUIyOVk'; // Your API key here
const regions = [
    { name: 'Africa', range: 'Africa!A1:C55' },
    { name: 'Asia', range: 'Asia!A1:C45' },
    { name: 'Central America', range: 'Central AAC!A1:C30' },
    { name: 'Europe', range: 'Europe!A1:C49' },
    { name: 'Middle East', range: 'Middle East!A1:C12' },
    { name: 'North America', range: 'North America!A1:C5' },
    { name: 'Oceania', range: 'Oceania!A1:C21' },
    { name: 'Southeast Asia', range: 'Southeast Asia!A1:C12' },
    { name: 'South America', range: 'South America!A1:C14' }
    // Add more regions and ranges as needed
];

function start() {
    gapi.client.init({
        'apiKey': API_KEY,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {
        regions.forEach(region => {
            fetchRegionData(region);
        });
    });
}

function fetchRegionData(region) {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: region.range,
    }).then(response => {
        displayRegionData(region.name, response.result.values);
    }, reason => {
        console.error('error: ' + reason.result.error.message);
    });
}

function displayRegionData(regionName, data) {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h1 id="${regionName.toLowerCase()}"><a href="#${regionName.toLowerCase()}">${regionName}</a></h1>
        <div class="column">
            <h2>Available Countries</h2>
            <ul id="${regionName.toLowerCase()}-y-countries"></ul>
        </div>
        <div class="column">
            <h2>Non-Available Countries</h2>
            <ul id="${regionName.toLowerCase()}-no-y-countries"></ul>
        </div>
    `;

    const dataDiv = document.querySelector('.data');
    dataDiv.appendChild(container);

    const yCountriesList = document.getElementById(`${regionName.toLowerCase()}-y-countries`);
    const noYCountriesList = document.getElementById(`${regionName.toLowerCase()}-no-y-countries`);
    const nCountries = [];

    data.forEach(row => {
        const country = row[0];
        const hasY = row[1] && row[1].trim() === 'Y';
        const isSuspended = row[2] && row[2].trim() === 'N';
        const listItem = document.createElement('li');
        const bullet = document.createElement('span');
        bullet.textContent = '• '; // Bullet point character
        listItem.appendChild(bullet);
        listItem.appendChild(document.createTextNode(country)); // Text of the list item

        if (isSuspended) {
            nCountries.push(listItem);
        } else if (hasY) {
            yCountriesList.appendChild(listItem);
        } else {
            noYCountriesList.appendChild(listItem);
        }
    });

    if (nCountries.length > 0) {
        const suspendedColumn = document.createElement('div');
        suspendedColumn.className = 'column';
        suspendedColumn.innerHTML = `
            <h2>Suspended Countries</h2>
            <ul id="${regionName.toLowerCase()}-n-countries"></ul>
        `;
        container.appendChild(suspendedColumn);
        const nCountriesList = document.getElementById(`${regionName.toLowerCase()}-n-countries`);
        nCountries.forEach(listItem => nCountriesList.appendChild(listItem));
    }

    // Smooth scroll animation
    const regionLink = document.querySelector(`#${regionName.toLowerCase()} a`);
    regionLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

gapi.load('client', start);
