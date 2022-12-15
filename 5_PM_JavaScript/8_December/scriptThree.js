console.log("This is script.js");

objectA = {
  "color One": "Red",
  colorTwo: "Blue",
  colorThree: "Green"
}

console.log("objectA is ", objectA);

//use the dot when the object's property name is not a string and is continous with no spaces
console.log("Value stored at the property colorTwo is ", objectA.colorTwo);

//use the sqaure brackets to acess the object's property values , when the property name is a string having spaces
console.log("Value stored at the property colorOne is ", objectA["color One"]);

console.log("Value stored at the property colorThree is ", objectA.colorThree);


