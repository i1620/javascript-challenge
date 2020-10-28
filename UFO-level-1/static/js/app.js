// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Reference to table body
var tbody = d3.select("tbody");

// Values for each column
tableData.forEach(function (sightingData){
    console.log(sightingData);
    
    var row = tbody.append("tr");

    // https://masteringjs.io/tutorials/fundamentals/foreach-object
    // Using 'Object.entries'
    Object.defineProperties(sightingData).forEach(function ([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});