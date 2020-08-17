// from data.js
const tableData = data;
console.log(tableData)

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
console.log(data)
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// Replace handleClick

function updateFilters() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  console.log(filteredData)
  
   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Grab the city value from the filter
  let city = d3.select("#city").property("value");
  //let filteredData = tableData;
  
   // Check to see if a city was entered and filter the
  // data using that city.
  if (city) {
    // Apply `filter` to the table data to only keep the
    // rows where the `city` value matches the filter value
    filteredData = filteredData.filter(row => row.city === city);
  }
  
  // Grab the state value from the filter
  let state = d3.select("#state").property("value");
  //let filteredData = tableData;
  
   // Check to see if a state was entered and filter the
  // data using that state.
  if (state) {
    // Apply `filter` to the table data to only keep the
    // rows where the `state` value matches the filter value
    filteredData = filteredData.filter(row => row.state === state);
  }
  // Grab the Country value from the filter
  let Country = d3.select("#country").property("value");
  //let filteredData = tableData;
  
   // Check to see if a Country was entered and filter the
  // data using that Country.
  if (Country) {
    // Apply `filter` to the table data to only keep the
    // rows where the `Country` value matches the filter value
    filteredData = filteredData.filter(row => row.country === Country);
  }
  // Grab the Shape value from the filter
  let Shape = d3.select("#shape").property("value");
  //let filteredData = tableData;
  
   // Check to see if a Shape was entered and filter the
  // data using that Shape.
  if (Shape) {
    // Apply `filter` to the table data to only keep the
    // rows where the `Shape` value matches the filter value
    filteredData = filteredData.filter(row => row.shape === Shape);

    console.log(filteredData)

  }
  filterTable(filteredData)
}
function filterTable(filteredData){

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);