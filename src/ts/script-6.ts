let float1: any = "10";
let number1: number = <number>float1;
console.log(float1); 
// bu yerda biz string son ochdik va uni mana shu usulda numberga o`zgartirdik.

let str: string = "20.25";
let number2: number = parseInt(str);
console.log(number2); 
// bu yerda biz string va aslida float bo`lgan son oldik.
// birinchidan uni songa aylantirdi.
// ikkinchidan number aslida int bo`lganligi uchun uni faqat butun qismini oldi.
// uchinchidan biz agar 74.23 kabi nuqta bilan yozsak u sonni taniy olishini aniqlab oldik. 
