// jQuery Doc Ready
$(function() {
  // Declare original array
  let initialData = [3, 6, 9, 10, 11, 20, 37, 45, 56, 89];

  // Declare variables based on jQuery selectors
  initialArray = $('.initialArray');
  filterInput = $('.filterInput');
  filterSubmit = $('.filterSubmit');
  filterArray = $('.filterArray');
  mapSubmit = $('.mapSubmit');
  mapInput = $('.mapInput');
  mapArray = $('.mapArray');
  includesSubmit = $('.includesSubmit');
  includesInput = $('.includesInput');
  includesOutput = $('.includesOutput');

  // Set the initial array at the top of the page
  initialData.forEach(function(value, key) {
    initialArray.append(`Key: ${key} - Value: ${value}<br> `);
  });

  // Filter function
  filterSubmit.on('click', function() {
    // Console log button click for debugging
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

  // Map function
  mapSubmit.on('click', function() {
    // Console log button click for debugging
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

  // Includes function
  includesSubmit.on('click', function() {
    const originalString = "Who's the more foolish, the fool, or the fool who follows him?";
    // Console log button click for debugging
    console.log('includesSubmit clicked');
    const includesInputVal = includesInput.val();
    // Perform includes method on original string from user-submitted string
    let includesResult = originalString.includes(`${includesInputVal}`);
    // Append result to index.html
    includesOutput.append(`${includesResult}<br>`);
    // Clears the input box
    includesInput.val('');
  });

 // Sample content
 //  $(function () {
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


});
