// jQuery Doc Ready
$(function() {
  // Declare original array
  let initialData = [3, 6, 9, 10, 11, 20, 37, 45, 56, 89];

  // Declare variables based on jQuery selectors
  initialArray = $('.initialArray');
  filterInput = $('.filterInput');
  filterSubmit = $('.filterSubmit');
  filterOutput = $('.filterOutput');
  mapSubmit = $('.mapSubmit');
  mapInput = $('.mapInput');
  mapOutput = $('.mapOutput');
  findSubmit = $('.findSubmit');
  findInput = $('.findInput');
  findOutput = $('.findOutput');
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
    // Clears out any previously outputting results
    filterOutput.html('');
    //Grab the input value and parse it into a number
    const inputVal = filterInput.val();
    const filterVal = parseInt(inputVal);
    // Verify the user gave us a real number
    if (!isNaN(filterVal)) {
      // Filter numbers greater than user input
      let filterResults = initialData.filter(value => value > filterVal);
      // Creates new array and appends it to index.html section
      filterResults.forEach(function(value, key) {
        filterOutput.append(`New key ${key} with a value of ${value} is greater than ${filterVal} <br>`);
      });
      // Clears the input box
      filterInput.val('');
    }
  });

  // Map function
  mapSubmit.on('click', function() {
    // Console log button click for debugging
    console.log('mapSubmit clicked');
    // Clears out any previously outputting results
    mapOutput.html('');
    //Grab the input value and parse it into a number
    const mapInputVal = mapInput.val();
    const mapVal = parseInt(mapInputVal);
    // Verify the user gave us a real number
    if (!isNaN(mapVal)) {
      // map results by adding submitting value to original value
      let mapResults = initialData.map(value => value + mapVal);
      // Creates new array and appends it to index.html section
      mapResults.forEach(function(value, key) {
        mapOutput.append(`Key ${key} has a new value of ${value} after adding ${mapVal}<br>`);
      });
      // Clears the input box
      mapInput.val('');
    }
  });

  // Find function
  findSubmit.on('click', function() {
    // Console log button click for debugging
    console.log('findSubmit clicked');
    // Clears out any previously outputting results
    findOutput.html('');
    //Grab the input value and parse it into a number
    const findInputVal = findInput.val();
    const findVal = parseInt(findInputVal);
    // Verify the user gave us a real number
    if (!isNaN(findVal)) {
      // Declare found value as the first value greater than user-submitted value
      let found = initialData.find(value => value > findVal);
      // Check if found value exists
      if( found == null ) {
        // If it doesn't exist, provide some instruction.
        findOutput.append(`The submitted value is greater than the largest number in the original array. Please try again with a smaller number.`);
      } else {
        // Output found value to index.html
        findOutput.append(`The first value in the original array that is greater than ${findVal} is ${found}.`);
      }
      // Clears the input box
      findOutput.val('');
    }
  });

  // Includes function
  includesSubmit.on('click', function() {
    const originalString = "Who's the more foolish, the fool, or the fool who follows him?";
    // Console log button click for debugging
    console.log('includesSubmit clicked');
    // Clears out any previously outputting results
    includesOutput.html('');
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
