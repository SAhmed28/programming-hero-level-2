//* ------------------------------------- Reduce: Grouping and Aggregating Data -------------------------------------

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
  ];
  
  //? Output: How many responses are there for each item?
  // { A: 5, C: 3, B: 5, D: 1 }

  // TODO: Initiate an empty object
  // TODO: Check if the response already exists
  // TODO: if the response exists, add +1
  // TODO: if Not, initialize with 1

  const count = surveyResponses.reduce((table,response) => {
    // if(table[response]){
    //     table[response] = table[response] + 1;
    // }
    // else{
    //     table[response] = 1;
    // }

    // same logic as above, but shorthand
    table[response] = (table[response] || 0) + 1;

    return table;
  }, {});

  console.log(count);

