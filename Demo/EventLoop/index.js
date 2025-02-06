console.log('script start')



Promise.resolve()
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    }).then(function () {
    console.log('promiseEnd')
}).then(function () {
    console.log('promiseEnd2')
})

Promise.resolve()
    .then(function () {
        console.log('promise3')
    })
    .then(function () {
        console.log('promise4')
    })


Promise.resolve()
    .then(function () {
        console.log('promise5')
    })
    .then(function () {
        console.log('promise6')
    })

setTimeout(function () {
    console.log('setTimeout')
}, 0)



setTimeout(function () {
    console.log('setTimeout2')
}, 0)

console.log('script end')
