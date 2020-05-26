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
  input = $('.input'),
  submit = $('.submit'),
  filterArray = $('.filterArray');

    // set the initial array at the top of the page
    initialData.forEach(function(value, key) {
      initialArray.append(`Key: ${key} - Value: ${value}<br> `);
    });

  // filter function
  submit.on('click', function() {
    //Grab the input value and parse it into a number
    const inputVal = input.val();
    const filterVal = parseInt(inputVal);
    // Verify the user gave us a real number
    if (!isNaN(filterVal)) {
      // Filter numbers greater than user input
      let filterResults = initialData.filter(value => value > filterVal);
      // Creates new array and appends it to index.html section
      filterResults.forEach(function(value, key) {
          filterArray.append(`Key ${key} with a value of ${value} is greater than ${filterVal} <br>`);
        });
      // Clears the input box
      input.val('');
    }
  });
});
