function createCounter() {
    let count = 0; // 外部函数的变量
    return function () { // 内部函数（闭包）
        count++;
        console.log(count);
    };
}

let counter = createCounter(); // 生成一个闭包实例
counter(); // 1
counter(); // 2
counter(); // 3
counter = null;
