function LetExample(x) {
    if (x) {
        var MyAge = 19;
        console.log(MyAge);
    }
    // console.log(MyAge);
}
LetExample(true);
// agar komdan ikkinchi logni ochib ishlataman disez xato beradi va mana shu let local o`zgaruvchi qilib ochayodganini isbotlaydi.
// local - bu degani o`zgaruvchi ochilgan joydagina masalan funksiya ichida yoki for ichida mana shunday joylarning o`zda ko`rinadi. 
var MyName = "Conan Edogawa";
console.log(MyName);
// O`zgartirib ko`ramiz.
// MyName = "osamu Dazai";
// console.log(MyName);
// agar siz const bilan ochilgan o`zgaruvchini o`zgartirmoqchi bo`lsangiz u o`zgarmaydi chunki u faqat readonly qilib qo`yadi.
// savol: let bilan ham qilib ko`ringchi.
//javob:
var text = "Buyerda text o`zgaruvchisi ochildi";
console.log(text);
text = "Buyerda text o`zgaruvchisi o`zgartirildi";
console.log(text);
// shu yerdan bilib olishingiz mumkin.
// savol: unday bo`lsa const ham faqat local mi yoki global ?
// javob: yo`q local emas albatta misol:
function ConstExample(x) {
    if (x) {
        var lst = [1, 2, 3, 4, 5];
        lst.forEach(function (element) {
            console.log(element);
        });
        console.log(lst);
        // bu yerda xato bermaydi/
    }
}
function VarExample(x) {
    if (x) {
        var MyAge = 19;
        console.log(MyAge);
    }
    // agar ochsez error beradi chunki if operatiri ichida ochilgan.
    // console.log(MyAge);
}
VarExample(true);
var varTest = 256;
function VarExample2(x) {
    console.log(varTest);
    // bu yerda va
    if (x) {
        varTest = 1080;
        console.log(varTest);
        // bu yerda ham ishlay beradi chunki endi varda scope dan tashqarida ochdildi va u global bo`ldi.
        // va yana uni o`zgartirsa ham bo`ladi.
        // bularni barchasi let, const, var ning farqlari va foydalari edi.
    }
}
VarExample2(true);
