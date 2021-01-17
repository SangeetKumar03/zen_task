var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   console.log(cat);
   cat.height = 30;
   cat.weight = 20;
   cat.name = "Fluffyy";
   for(i =0; i< cat.catFriends.length; i++){
    for(j =0; j< cat.catFriends[i].activities.length; j++){
      console.log(cat.catFriends[i].activities[j]);
    }
  }
  for(i =0; i< cat.catFriends.length; i++){
    console.log(cat.catFriends[i].name);
  }
  var totalweight = 0;

    for(i =0; i< cat.catFriends.length; i++){
      totalweight += cat.catFriends[i].weight;
    }
    console.log(totalweight);
    for (key in cat) {
        if (key == "activities") {
          if (cat[key].length > 1) {
            for (i = 0; i < cat[key].length; i++) {
              console.log(cat[key][i])
            }
          }
        }
        if (key == "catFriends") {
          for (j = 0; j < cat[key].length; j++) {
            for (k = 0; k < cat[key][j].activities.length; k++) {
              console.log(cat[key][j].activities[k]);
            }
          }
        }
      }
      var newActivities = ['jumping', 'running all day'];
    cat.catFriends[0].activities.push(...newActivities);
    cat.catFriends[1].activities.push(...newActivities);
    cat.catFriends[0].furcolor = "red";