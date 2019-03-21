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


//Return of the Closets

// Dirty Laundry

// Inventory


// Multiple of 3 and 5

