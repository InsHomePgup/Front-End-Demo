function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Abra" };

greet.call(person, "Hello", "!");
// 输出: Hello, Abra!

greet.apply(person, ["Hi", "!!"]);
// 输出: Hi, Abra!!

const greetAbra = greet.bind(person, "Hey");  // 修改this指向
greetAbra("!!!");
// 输出: Hey, Abra!!!
