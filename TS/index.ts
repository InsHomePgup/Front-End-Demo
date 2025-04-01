const testName :string = 'foo'
console.log(testName)

/**
 * 参数列表在参数后用 :类型名
 * 返回值在函数圆括号后用 => 返回值类型
 * @param str
 */

function hello(str:string):string{
    console.log(str)
    return `Hello,${str}`;
}

/**
 * 箭头函数,函数表达式
 * 参数在圆括号后用 => 返回值类型
 * 返回值在 => 后
 *
 * 参数列表 : 类型
 * 圆括号后面 : 类型
 *
 * @param name
 */
const hello2 = (name:string):string =>{
    return `Hello,${name}`;
}

/**
 * 函数类型重载
 * @param a
 * @param b
 */

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): string | number {
    return a + b;
}

console.log(add(5, 10));    // 15
console.log(add('A', 'B')); // 'AB'


/**
 * 使用type声明函数的类型
 */
type GreetFunction = (name: string) => string;
const greet: GreetFunction = (name) => `Hello, ${name}!`;

/**
 * 使用interface声明函数的类型
 */

interface Greet {
    (name: string): string;
}
const greet02: Greet = (name) => `Hello, ${name}!`;

