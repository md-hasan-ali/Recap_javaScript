const isInterview = false;
const hasCooking = false;

const interview = new Promise((resolve, reject) => {
    if (!isInterview) {
        const interview = {
            name: "Technical Interview",
            location: "Dhaka, Uttara",
            time: "10:30 AM"
        }
        resolve(interview);
    } 
    else {
        reject(new Error("Interview already Created...!"));
    }
})

const cooking = new Promise((resolve, reject)=> {
    if(!hasCooking) {
        resolve("Please Taratari Ranna koro sona...!")
    } 
    else {
        reject( new Error("Khidai more jabo to go..Taratari Daw khana...!"))
    }
})


cooking
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

// Promise.all([interview, cooking]).then((res)=> {
//     console.log(res)
// })
// Promise.race([interview, cooking]).then((res)=> {
//     console.log(res)
// })