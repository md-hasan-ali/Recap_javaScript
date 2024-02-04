// Asynchronous JavaScript
// const takeOrder = (customer, callback)=> {
//     console.log(`Take order from ${customer}`)
//     callback(customer)
// }
// function processOrder(customer, callback) {
//     console.log(`Processing order for ${customer}`)
//     setTimeout(() => {
//         console.log("first order completed...")
//         console.log(`Order processed for ${customer}`)
//         callback(customer)
//     }, 2000)
// }
// const completeOrder = (customer) =>{
//     console.log(`Completed order for ${customer}`)
// }
// takeOrder("Hablu Customer", (customer)=> {
//     processOrder(customer, (customer)=>{
//         completeOrder(customer)
//     })
// })


const takeOrder = (customer, callback) => {
    console.log(`Take order from ${customer}`)
    callback(customer)
}
const processOrder = (customer, callback) => {
    console.log(`Prcessing order for ${customer}`)
    setTimeout(() => {
        console.log(`Cooking Completed...!`)
        callback(customer)
    }, 2000)
}
const completeOrder = (customer, callback) => {
    console.log(`Order Completed for ${customer}`)
    callback(customer)
}
takeOrder('CS_1', (customer) => {
    processOrder(customer, (customer)=> {
        completeOrder(customer)
    })
})