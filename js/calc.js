
    // Define your shipping rates based on groups
    const groupRates = [
      { group: 'A', first20: 110, additional10: 35 },
      { group: 'B', first20: 120, additional10: 40 },
      { group: 'C', first20: 130, additional10: 40 },
      { group: 'D', first20: 140, additional10: 45 },
      { group: 'E', first20: 150, additional10: 50 },
      { group: 'F', first20: 160, additional10: 55 },
      { group: 'G', first20: 170, additional10: 60 },
      { group: 'H', first20: 210, additional10: 85 },
    ];
    
    // Define your rate data based on countries and their respective groups
    const rateData = [
    { country: 'Afghanistan', group: 'C' },
  { country: 'Albania', group: 'E' },
  { country: 'Algeria', group: 'E' },
  { country: 'Andorra', group: 'E' },
  { country: 'Angola', group: 'E' },
  { country: 'Anguilla', group: 'H' },
  { country: 'Antigua & Barbuda', group: 'H' },
  { country: 'Argentina', group: 'H' },
  { country: 'Armenia', group: 'G' },
  { country: 'Aruba', group: 'H' },
  { country: 'Ascension', group: 'H' },
  { country: 'Australia', group: 'E' },
  { country: 'Austria', group: 'D' },
  { country: 'Azerbaijan', group: 'C' },
  { country: 'Bahamas', group: 'H' },
  { country: 'Bahrain', group: 'B' },
  { country: 'Bangladesh', group: 'B' },
  { country: 'Barbados', group: 'H' },
  { country: 'Belarus', group: 'D' },
  { country: 'Belgium', group: 'E' },
  { country: 'Belize', group: 'H' },
  { country: 'Benin', group: 'G' },
  { country: 'Bermuda', group: 'H' },
  { country: 'Bhutan', group: 'B' },
  { country: 'Bolivia', group: 'H' },
  { country: 'Bosnia & Herzegovina', group: 'E' },
  { country: 'Botswana', group: 'D' },
  { country: 'Brazil', group: 'H' },
  { country: 'Brunei Darussalam', group: 'C' },
  { country: 'Bulgaria', group: 'D' },
  { country: 'Burkina Faso', group: 'G' },
  { country: 'Burundi', group: 'E' },
  { country: 'Cambodia', group: 'B' },
  { country: 'Cameroon', group: 'G' },
  { country: 'Canada', group: 'H' },
  { country: 'Canary Island', group: 'E' },
  { country: 'Cape Verde', group: 'G' },
  { country: 'Cayman Island', group: 'H' },
  { country: 'Central African Rep', group: 'G' },
  { country: 'Chad', group: 'G' },
  { country: 'Chile', group: 'H' },
  { country: 'China', group: 'C' },
  { country: 'Christmas Islands', group: 'E' },
  { country: 'Cocos (Keeling) Island', group: 'E' },
  { country: 'Colombia', group: 'H' },
  { country: 'Comoros', group: 'E' },
  { country: 'Congo (Dem Rep)', group: 'H' },
  { country: "Congo (People's Rep.)", group: 'H' },
  { country: 'Cook Island', group: 'G' },
  { country: 'Costa Rica', group: 'H' },
  { country: 'Croatia', group: 'D' },
  { country: 'Cuba', group: 'H' },
  { country: 'Cyprus', group: 'C' },
  { country: 'Czech Rep', group: 'D' },
  { country: 'Denmark', group: 'E' },
  { country: 'Djibouti', group: 'C' },
  { country: 'Dominica', group: 'H' },
  { country: 'Dominican Republic', group: 'H' },
  { country: 'East Timor/Timor-Leste(Dem. Rep)', group: 'G' },
  { country: 'Ecuador', group: 'H' },
  { country: 'Egypt', group: 'C' },
  { country: 'EL Salvador', group: 'H' },
  { country: 'Equatorial Guinea', group: 'G' },
  { country: 'Eritrea', group: 'C' },
  { country: 'Estonia', group: 'F' },
  { country: 'Eswatini (Swaziland)', group: 'D' },
  { country: 'Ethiopia', group: 'D' },
  { country: 'Falkland Island', group: 'H' },
  { country: 'Faroe Island', group: 'E' },
  { country: 'Fiji', group: 'G' },
  { country: 'Finland', group: 'D' },
  { country: 'France', group: 'E' },
  { country: 'French Guyana', group: 'H' },
  { country: 'French Polynesia', group: 'H' },
  { country: 'Gabon', group: 'F' },
  { country: 'Gambia', group: 'G' },
  { country: 'Georgia', group: 'G' },
  { country: 'Germany', group: 'E' },
  { country: 'Ghana', group: 'G' },
  { country: 'Gibraltar', group: 'F' },
  { country: 'Great Britain', group: 'E' },
  { country: 'Greece', group: 'D' },
  { country: 'Greenland', group: 'F' },
  { country: 'Grenada', group: 'H' },
  { country: 'Guadeloupe', group: 'H' },
  { country: 'Guam', group: 'H' },
  { country: 'Guatemala', group: 'H' },
  { country: 'Guinea', group: 'G' },
  { country: 'Guinea Bissau', group: 'G' },
  { country: 'Guyana', group: 'H' },
  { country: 'Haiti', group: 'H' },
  { country: 'Honduras', group: 'H' },
  { country: 'Hong Kong', group: 'B' },
  { country: 'Hungary', group: 'D' },
  { country: 'Iceland', group: 'F' },
  { country: 'India', group: 'B' },
  { country: 'Indonesia', group: 'B' },
  { country: 'Iran', group: 'C' },
  { country: 'Iraq', group: 'C' },
  { country: 'Ireland', group: 'D' },
  { country: 'Israel', group: 'C' },
  { country: 'Italy', group: 'D' },
  { country: 'Ivory Coast', group: 'G' },
  { country: 'Jamaica', group: 'H' },
  { country: 'Japan', group: 'C' },
  { country: 'Jordan', group: 'B' },
  { country: 'Kazakhstan', group: 'C' },
  { country: 'Kenya', group: 'D' },
  { country: 'Kiribati', group: 'G' },
  { country: 'Kosovo', group: 'G' },
  { country: 'Kuwait', group: 'B' },
  { country: 'Kyrgyzstan', group: 'C' },
  { country: 'Lao PDR', group: 'C' },
  { country: 'Latvia', group: 'F' },
  { country: 'Lebanon', group: 'B' },
  { country: 'Lesotho', group: 'D' },
  { country: 'Liberia', group: 'E' },
  { country: 'Libya', group: 'E' },
  { country: 'Liechtenstein', group: 'D' },
  { country: 'Lithuania', group: 'F' },
  { country: 'Luxembourg', group: 'E' },
  { country: 'Macau', group: 'B' },
  { country: 'Madagascar', group: 'D' },
  { country: 'Malawi', group: 'D' },
  { country: 'Malaysia', group: 'B' },
  { country: 'Maldives', group: 'B' },
  { country: 'Mali', group: 'G' },
  { country: 'Malta', group: 'D' },
  { country: 'Marshall Island', group: 'G' },
  { country: 'Martinique', group: 'H' },
  { country: 'Mauritania', group: 'G' },
  { country: 'Mauritius', group: 'B' },
  { country: 'Mexico', group: 'H' },
  { country: 'Moldova', group: 'D' },
  { country: 'Monaco', group: 'E' },
  { country: 'Mongolia', group: 'C' },
  { country: 'Montenegro', group: 'D' },
  { country: 'Montserrat', group: 'H' },
  { country: 'Morocco', group: 'E' },
  { country: 'Mozambique', group: 'E' },
  { country: 'Myanmar', group: 'B' },
  { country: 'Namibia', group: 'E' },
  { country: 'Nauru', group: 'G' },
  { country: 'Nepal', group: 'B' },
  { country: 'Netherlands', group: 'E' },
  { country: 'New Caledonia', group: 'H' },
  { country: 'New Zealand', group: 'F' },
  { country: 'Nicaragua', group: 'H' },
  { country: 'Niger', group: 'G' },
  { country: 'Nigeria', group: 'E' },
  { country: 'Niue Island', group: 'G' },
  { country: 'Norway', group: 'E' },
  { country: 'Oman', group: 'B' },
  { country: 'Pakistan', group: 'B' },
  { country: 'Palau', group: 'G' },
  { country: 'Palestinian Territories', group: 'C' },
  { country: 'Panama', group: 'H' },
  { country: 'Papua New Guinea', group: 'G' },
  { country: 'Paraguay', group: 'H' },
  { country: 'Peru', group: 'H' },
  { country: 'Philippines', group: 'B' },
  { country: 'Poland', group: 'D' },
  { country: 'Portugal', group: 'D' },
  { country: 'Puerto Rico', group: 'H' },
  { country: 'Qatar', group: 'B' },
  { country: 'Romania', group: 'D' },
  { country: 'Russia', group: 'D' },
  { country: 'Rwanda', group: 'C' },
  { country: 'Samoa', group: 'G' },
  { country: 'San Marino', group: 'D' },
  { country: 'Sao Tome & Principe', group: 'G' },
  { country: 'Saudi Arabia', group: 'B' },
  { country: 'Senegal', group: 'G' },
  { country: 'Serbia', group: 'D' },
  { country: 'Seychelles', group: 'D' },
  { country: 'Sierra Leone', group: 'G' },
  { country: 'Singapore', group: 'B' },
  { country: 'Slovakia', group: 'D' },
  { country: 'Slovenia', group: 'D' },
  { country: 'Solomon Island', group: 'G' },
  { country: 'Somalia', group: 'C' },
  { country: 'South Africa', group: 'D' },
  { country: 'South Korea', group: 'C' },
  { country: 'South Sudan', group: 'G' },
  { country: 'Spain', group: 'D' },
  { country: 'Sri Lanka', group: 'A' },
  { country: 'St. Kitts & Nevis', group: 'H' },
  { country: 'St. Lucia', group: 'H' },
  { country: 'St. Vincent & The Grenadines', group: 'H' },
  { country: 'St.Pierre & Miquelon', group: 'H' },
  { country: 'Sudan', group: 'C' },
  { country: 'Suriname', group: 'H' },
  { country: 'Sweden', group: 'D' },
  { country: 'Switzerland', group: 'D' },
  { country: 'Syria', group: 'C' },
  { country: 'Taiwan', group: 'C' },
  { country: 'Tajikistan', group: 'C' },
  { country: 'Tanzania', group: 'D' },
  { country: 'Thailand', group: 'B' },
  { country: 'Togo', group: 'G' },
  { country: 'Tokelau Island', group: 'G' },
  { country: 'Tonga', group: 'G' },
  { country: 'Trinidad & Tobago', group: 'H' },
  { country: 'Tunisia', group: 'E' },
  { country: 'Turkey', group: 'C' },
  { country: 'Turkmenistan', group: 'C' },
  { country: 'Turks & Caicos Island', group: 'H' },
  { country: 'Tuvalu', group: 'G' },
  { country: 'Uganda', group: 'D' },
  { country: 'Ukraine', group: 'D' },
  { country: 'United Arab Emirates', group: 'B' },
  { country: 'United States of America (USA)', group: 'H' },
  { country: 'Uruguay', group: 'H' },
  { country: 'Uzbekistan', group: 'C' },
  { country: 'Vanuatu', group: 'G' },
  { country: 'Vatican', group: 'D' },
  { country: 'Venezuela', group: 'H' },
  { country: 'Vietnam', group: 'C' },
  { country: 'Yemen', group: 'C' },
  { country: 'Zambia', group: 'D' },
  { country: 'Zimbabwe', group: 'D' },
      // Add more countries and their groups here
    ];
    
    // Function to populate the country list in the form
    function setCountry() {
      const countryList = document.getElementById('countryList');
      rateData.forEach(rate => {
        const option = document.createElement('option');
        option.value = rate.country;
        countryList.appendChild(option);
      });
    }
    
    // Function to calculate the shipping fee
    function calculateFee() {
      const toCountry = document.getElementById('toCountry').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const isRegistered = document.getElementById('isRegistered').checked;
      const expense = parseFloat(document.getElementById('expense').value) || 0;
      const expectedProfit = parseFloat(document.getElementById('expected_profit').value) || 0;
      const currency = parseInt(document.getElementById('currency').value);
    
      // Find the group rate for the destination country
      const countryRateData = rateData.find(data => data.country === toCountry);
      
      if (!countryRateData) {
        alert('Country not found. Please select a valid country.');
        return;
      }
    
      const groupRate = groupRates.find(rate => rate.group === countryRateData.group);
      
      if (!groupRate) {
        alert('Group rate not found for the selected country.');
        return;
      }
    
      // Calculate shipping fee based on weight and group rate
      let shippingFee;
      if (weight <= 20) {
        shippingFee = groupRate.first20;
      } else {
        const additionalWeight = weight - 20;
        shippingFee = groupRate.first20 + Math.ceil(additionalWeight / 10) * groupRate.additional10;
      }
    
      // Calculate total cost
      let totalCost = shippingFee;
      if (isRegistered) {
        totalCost += 150; // Example registered post fee
      }
      totalCost += expense + expectedProfit;
    
      // Display results
      const summaryElement = document.getElementById('summary');
      summaryElement.innerHTML = `<h3>Summary</h3>
        <p>Destination: ${toCountry}</p>
        <p>Weight: ${weight} g</p>
        <p>Shipping Fee: ${shippingFee.toFixed(2)} ${currency === 0 ? 'LKR' : 'USD'}</p>
        <p>Registered Post: ${isRegistered ? 'Yes' : 'No'}</p>
        <p>Expense: ${expense.toFixed(2)} LKR</p>
        <p>Expected Profit: ${expectedProfit.toFixed(2)} LKR</p>`;
    
      const totalFeeElement = document.getElementById('totalFee');
      totalFeeElement.innerHTML = `<h3>Total Cost</h3>
        <p>Total: ${totalCost.toFixed(2)} ${currency === 0 ? 'LKR' : 'USD'}</p>`;
    
      // Optional: Calculate and display item price
      const itemPriceElement = document.getElementById('itemPrice');
      if (weight > 0) {
        const itemPrice = totalCost / weight;
        itemPriceElement.innerHTML = `<h3>Item Price per Gram</h3>
          <p>${itemPrice.toFixed(2)} ${currency === 0 ? 'LKR' : 'USD'} per gram</p>`;
      } else {
        itemPriceElement.innerHTML = '';
      }
    }