const forecastTableRowTemplate = document.querySelector("#forecast-table-row"); // koppla till våran template genomm id i html
const tbody = document.querySelector("tbody"); // referens till elementet <tbody>

//Fetch API . med detta API kan vi skicka HTTP-anrop 
//till backend, t.ex. HTTP GET vilket är vad vi gör här
//kopplar ihop frontend till backend.
 fetch("https://localhost:8000/weatherforecast")
.then(response => response.json())
.then(weatherForcasts => { // weather forecast är en array av forecasts

    weatherForcasts.forEach(weatherForcasts => {

        //För varje weatherforecast, generera en <tr> element med 3


        //Skapa klon av <template> som definiera strukturen ovan
        const trClone = forecastTableRowTemplate.content.cloneNode(true);

        //Fyll i alla <td> för klonen
        //Hämt klassnamnen ifrån index.html
        trClone.querySelector(".date").textContent = weatherForcasts.date;
        trClone.querySelector(".temperature").textContent = weatherForcasts.temperatureC;
        trClone.querySelector(".summary").textContent = weatherForcasts.summary;
        //TODO gör samma sak för övriga

        // När vi väl fyllt i alla fält, koppla då in <tr> elementet
        // i <tbody> elementet - raden kommer då visas i tabellen 
        tbody.appendChild(trClone);

    });

});