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


function fetchData(callback) {
    setTimeout(()=> {
        const data = 'Data fatched successfully..!'
        callback(data)
    }, 2000)
}
function processData() {
    console.log("Processing Data....")
}
fetchData((data)=> {
    console.log(data)
    processData();
})