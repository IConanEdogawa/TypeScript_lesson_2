type Person = {
    name: string;
    age: number;
    gender: string;
};

type Product = {
    name: string;
    price: number;
    quantity: number;
};

// avvaliga type aliases da o`zgaruvchi ochib oldik.

let person1: Person = {
    name: "John",
    age: 25,
    gender: "male"
};

let product1: Product = {
    name: "Apples",
    price: 2.5,
    quantity: 10
};

// ularga qiymat berdik.

console.log(person1.name);
console.log(product1.quantity);

// va ularni ishlatib ko`rdik.
// aslida bu c tilidagi struct ga o`xshaydi. biz uni ichiga bemalol o`zgaruvchilarni shunchaki ochib
// ketaveramiz va ishlataveramiz. juda ham simple. 


