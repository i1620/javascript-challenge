// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Values for each column
tableData.forEach(function (sightingData) {
    console.log(sightingData);
    
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");

    // https://masteringjs.io/tutorials/fundamentals/foreach-object
    // Using 'Object.entries'
    Object.entries(sightingData).forEach(function ([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the Button
var button = d3.select("#filter-btn");
button.on("click", function() {
    
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue)
    console.log(filteredData);

    filteredData.forEach(function (selection) {
        console.log(selection);

        // Append one table row `tr` to the table body
        var row = tbody.append("tr");

        // Using 'Object.entries'
        Object.entries(selection).forEach(function ([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});