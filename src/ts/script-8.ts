// array ochamiz yani list ham dib nomlashiz mumkin.
let arr: number[] = [1, 2, 3, 4, 5];

// bu yerda yangi qiymat add qilyapmiz.
arr.push(6);

// bu yerda qiymatni o`chirib tashladik.
arr.pop();

// bu yerda for loop i yordamida hamma qiymatlarini chiqarib oldik.
console.log("array ning qiymatlari:");
for (let element of arr) {
    console.log(element);
}
