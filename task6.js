var array = [
    [
      ['firstName', 'Vasanth'],
      ['lastName', 'Raja'], 
      ['age', 24], 
      ['role', 'JSWizard']
    ], 
    [
      ['firstName', 'Sri'], 
      ['lastName', 'Devi'], 
      ['age', 28], 
      ['role', 'Coder']
    ]
  ];

  function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    console.log(arr.length);
    for (var i= 0; i< arr.length; i++){
      let newObject = {};	
      for (var j= 0; j< arr[i].length; j++){
          console.log(arr[i].length);
        let key = arr[i][0];
        let value = arr[i][1];

        newObject[key]= value;	

      }
      tranformEmployeeList.push(newObject);
    }
    return tranformEmployeeList;
  }

  console.log(transformEmployeeData(array));