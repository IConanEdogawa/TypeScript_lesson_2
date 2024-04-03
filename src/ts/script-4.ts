let num: number = 10;
console.log(num);

// biz number type da variable ochdik.

// num = "bu yerda string bor";
// console.log(num);

// agar komdan ochib ishlataman disez error beradi chunki nuymber type da ochilgan variable ni string ga o`zlashtirib bo`lmaydi/

// lekin agar:

let num3: number | string = 10;
console.log(num3);


num3 = "bu yerda string bor";
console.log(num3);

// shunday qilib union type yani ko`p type larni bog`lab ishlatish mumkin.




