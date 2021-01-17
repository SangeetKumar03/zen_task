function printAllValues(obj) {
    return Object.values(obj);
  }
  var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
  console.log(printAllValues(obj));




  var object = {name: 'ISRO', age: 35, role: 'Scientist'};

  function convertListToObject(obj) {
    return Object.entries(obj);
  }

  console.log(convertListToObject(object));




           var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

      function fromListToObject(arr) {
        var newObject = {};
        for (var i= 0; i< arr.length; i++){
          let key = arr[i][0];
          let value = arr[i][1];
          newObject[key] = value;
         // console.log(newObject);
        }
        return newObject;
      }

      console.log(fromListToObject(array));
