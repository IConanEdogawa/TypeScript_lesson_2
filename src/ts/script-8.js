// array ochamiz yani list ham dib nomlashiz mumkin.
var arr = [1, 2, 3, 4, 5];
// bu yerda yangi qiymat add qilyapmiz.
arr.push(6);
// bu yerda qiymatni o`chirib tashladik.
arr.pop();
// bu yerda for loop i yordamida hamma qiymatlarini chiqarib oldik.
console.log("array ning qiymatlari:");
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var element = arr_1[_i];
    console.log(element);
}
