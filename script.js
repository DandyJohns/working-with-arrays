var hobbies = ["making playlists", "building keyboards", "skateboarding", "cooking", "baking", "playing phone games"];

console.log(hobbies.length);

hobbies.push("watching movies");

console.log(hobbies [2]);

hobbies.pop();
// (6) ["making playlists", "building keyboards", "skateboarding", "cooking", "baking", "playing phone games"];

hobbies.splice(2, 0, "hiking", "food adventures");

console.log(hobbies);

hobbies.shift();

hobbies.unshift("sleeping");

console.log(hobbies);

var goals = ["improving typing skills", "improving coding skills", "modding keyboards"];

var allTheThings = [...hobbies, ...goals];

console.log(allTheThings);

console.log(allTheThings.indexOf("improve coding skills"));

allTheThings.splice(7, 1);

console.log(allTheThings);

var plans = allTheThings.map(function(item){
    return `I'm pumped from ${item}!`
});

console.log(plans);




























