// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//console.log(data);

//Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(contentReport) {
   //console.log(contentReport);
   var row = tbody.append("tr");
   
   Object.entries(contentReport).forEach(function([key, value]) {
     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
////////////////////////////////////////////

////d3.selectAll('tbody').remove(); // removes all 'tbody' elements from the DOM.

// BONUS: Refactor to use Arrow Functions!
//data.forEach((contentReport) => {
//    var row = tbody.append("tr");
//    Object.entries(contentReport).forEach(([key, value]) => {
//      var cell = tbody.append("td");
//      cell.text(value);
//    });
//  });

//<input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
//</li>
//</ul>
//</div>
//<button id="filter-btn" type="submit" class="btn btn-default">Filter Table</button>

var button = d3.select("#filter-btn");

var inputField = d3.select(".form-control")

button.on("click", function() {
    
    d3.event.preventDefault();
    
    console.log("Hi, a button was clicked!");

    console.log(d3.event.target);
  });
////////////////////////////////////////////////////////////////
  // Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  ///console.log(inputValue);
  ///console.log(people);

  var filteredData = people.filter(person => person.datetime === inputValue);

  //console.log(filteredData);

  d3.selectAll('tbody').remove(); // removes all 'tbody' elements from the DOM.
////////////////////////////////////////////////
  // from data.js
var tableData = filteredData;

// YOUR CODE HERE!
var table = d3.select("#ufo-table");

//apend 

var filteredData = people.filter(person => person.bloodType === inputValue);
    //console.log(contentReport);
    //var row = tbody.append("tr");
    
   // Object.entries(contentReport).forEach(function([key, value]) {
      //console.log(key, value);
 //     // Append a cell to the row for each value
 //     // in the weather report object
     //var cell = row.append("td");
     //cell.text(value);
   });



///submit.on("click", function() {

//console.log(data);
///d3.event.preventDefault();
/////////////////////////////////

  // Select the input element and get the raw HTML node
  //var inputElement = d3.select("#ufo-table");

  // Get the value property of the input element
  //var inputValue = inputElement.property("value");

  //console.log(inputValue);
  //console.log(people);

  //var filteredData = people.filter(person => person.datetime === inputValue);

  //console.log(filteredData);

  });
});

  //<table id="ufo-table" class="table table-striped"></table>
