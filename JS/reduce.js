const arr = [10,20,30,40,50]
// reduce previousValue 前一个值 | 初始值, currentValue 当前值, currentIndex 当前索引 , array 当前数组
const result = arr.reduce((previousValue, currentValue, currentIndex, array)=>{
    console.log(previousValue, currentValue, currentIndex, array)
    return previousValue + currentValue;
},0)
console.log(result)

// 命名一个叫 待开始的变量

