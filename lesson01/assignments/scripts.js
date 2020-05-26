// jQuery Doc Ready
// $(function () {
//     // Set up some data and variables
//     const data = [1, 2, 3, 4],
//         input = $('.input'),
//         submit = $('.submit'),
//         resultSum = $('.sum');
//     // Click event on the submit input
//     submit.on('click', function () {
//         // Grab the input value and parse it into a number
//         const val = input.val();
//         const num = parseInt(val);
//         // Verify the user gave us a real number
//         if (!isNaN(num)) {
//             // Add our new number to the data array
//             data.push(num);
//             // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
//             const sum = data.reduce((acc, curr) => acc + curr);
//             // Add our new total to the page
//             resultSum.text(sum);
//             // Reset the input value to an empty string
//             input.val('');
//         }
//     });
// });
$(function() {
  let initialData = [3, 6, 9, 10, 11, 20, 37, 45, 56, 89];
  initialArray = $('.initialArray');
  filterInput = $('.filterInput');
  filterSubmit = $('.filterSubmit');
  mapSubmit = $('.mapSubmit');
  mapInput = $('.mapInput');
  filterArray = $('.filterArray');
  mapArray = $('.mapArray');

    // set the initial array at the top of the page
    initialData.forEach(function(value, key) {
      initialArray.append(`Key: ${key} - Value: ${value}<br> `);
    });

  // filter function
  filterSubmit.on('click', function() {
    console.log('functionSubmit clicked');
    //Grab the input value and parse it into a number
    const inputVal = filterInput.val();
    const filterVal = parseInt(inputVal);
    // Verify the user gave us a real number
    if (!isNaN(filterVal)) {
      console.log('breakTwo');
      // Filter numbers greater than user input
      let filterResults = initialData.filter(value => value > filterVal);
      // Creates new array and appends it to index.html section
      filterResults.forEach(function(value, key) {
          filterArray.append(`New key ${key} with a value of ${value} is greater than ${filterVal} <br>`);
        });
      // Clears the input box
      filterInput.val('');
    }
  });

  // map function
  mapSubmit.on('click', function() {
    console.log('mapSubmit clicked');
    //Grab the input value and parse it into a number
    const mapInputVal = mapInput.val();
    const mapVal = parseInt(mapInputVal);
    // Verify the user gave us a real number
    if (!isNaN(mapVal)) {
      console.log('breakOne');
      // map results by adding submitting value to original value
      let mapResults = initialData.map(value => value + mapVal);
      // Creates new array and appends it to index.html section
      mapResults.forEach(function(value, key) {
          mapArray.append(`Key ${key} has a new value of ${value} after adding ${mapVal}<br>`);
        });
      // Clears the input box
      mapInput.val('');
    }
  });
});
