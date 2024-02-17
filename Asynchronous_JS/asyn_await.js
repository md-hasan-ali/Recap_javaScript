// const isInterview = true;
// const interview = new Promise((resolve, reject) => {
//     if (!isInterview) {
//         const interviewDetails = {
//             Name: "Technical Interview",
//             Location: "Uttara, Dhaka",
//             Time: "10:30 Am"
//         };
//         resolve(interviewDetails);
//     } else {
//         reject('wrong')
//     }
// })
// const addInterview = (interviewDetails) => {
//     const interview = `${interviewDetails.Name} has been scheduled on ${interviewDetails.Location} at ${interviewDetails.Time}`
//     return Promise.resolve(interview)
// }
// async function myInterview() {
//     try {
//         const interviewDetails = await interview;
//         const interviewInfo = await addInterview(interviewDetails)
//         console.log(interviewInfo)
//     } catch {
//         console.log('Something wrong...!')
//     }
// }
// myInterview();
// console.log("hello")

function resolveAfter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolve Function...!")
        }, 2000)
    })
}
async function callasync() {
    console.log('Calling function')
    const result = await resolveAfter();
    console.log(result)
    console.log('finish call')
}
callasync()

console.log("hello")


function processData() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const data =  'Data Fetched successfully..'
            resolve(data)
        }, 5000)
    })
}

async function displayData() {
    const data = await processData();
    console.log(data)
    console.log('Processing Data')
}
displayData()