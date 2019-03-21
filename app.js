for (let i = 1; i <= 20; i++) {
    console.log(i);   
}

for (let i = 0; i <= 200; i++) {
    if (i % 2 ===0) {
        console.log(i);
    }
}

const arr = ["...human...why you taking pictures of me?...",
 "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
    let random = Math.floor(Math.random()*3);
    if (i % 2 === 0) {
        console.log(arr[random]);
    };
};
   