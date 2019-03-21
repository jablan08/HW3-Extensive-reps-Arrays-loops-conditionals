// Easy going
for (let i = 1; i <= 20; i++) {
    console.log(i);   
}
// Get even
for (let i = 0; i <= 200; i++) {
    if (i % 2 ===0) {
        console.log(i);
    }
}

// Excited Kitten
// #1
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
}
// #2
const arr = ["...human...why you taking pictures of me?...",
 "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
    let random = Math.floor(Math.random()*3);
    if (i % 2 === 0) {
        console.log(arr[random]);
    };
};

// Fizz Buzz
const arr1 = ["Fizz", "Buzz", "FizzBuzz"];
 for (let i = 0; i <= 100; i++) {
     if (i % 3 ===0 && i % 5 === 0) {
        console.log(arr1[2]);
     }
     else if (i % 5 === 0) {
         console.log(arr1[1]);
     }
     else if (i % 3 ===0) {
        console.log(arr1[0]);
     }
     else {
         console.log(i);
     };
 };

// Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
jimClark[1]++
console.log(jimClark);
ryan[2] = "Gotham City";
reuben.splice(2, 1, "Chicago");
console.log(reuben);
jimHaff.splice(2,1,"Las Vegas", "Hawaii", "California");
console.log(jimHaff);
jimHaff.splice(2,2);
console.log(jimHaff);
// Yell at Ninja Turtles
const ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i = 0; i < ninjas.length; i++) {
    console.log(ninjas[i].toUpperCase());
}

//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let lostShoe = kristynsCloset.shift();
console.log(lostShoe);
thomsCloset[2].splice(0, 0, lostShoe);
console.log(thomsCloset);

console.log("Tonight Kristyn will wear a " + kristynsCloset[2] + ", " + kristynsCloset[3] + ", and " + kristynsCloset[0] + ".");
console.log ("Tom will wear a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][3] + ".");
console.log("Tomorrow Kristyn will wear " + thomsCloset[1][0] + ", a " + thomsCloset[0][3] + ", and a " + kristynsCloset[4] + ".");
// Dirty Laundry

// Inventory


// Multiple of 3 and 5

