const isInterview = true;

const interview = new Promise((resolve, reject) => {
    if (!isInterview) {
        const interviewDetails = {
            Name: "Technical Interview",
            Location: "Uttara, Dhaka",
            Time: "10:30 Am"
        };
        resolve(interviewDetails);
    }
    else {
        reject(new Error("Interview already Created...!"))
    }
})

const addInterview = (interviewDetails) => {
    const interview = `${interviewDetails.Name} has been scheduled on ${interviewDetails.Location} at ${interviewDetails.Time}`
    return Promise.resolve(interview)
}

interview
    .then(addInterview)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })



// Another Promise Example

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise one is completed...")
    })
}, 2000)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise two is resolved..")
    })
}, 5000)

Promise.all([promise1, promise2]).then((res) => {
    console.log(res)
})



function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = false;
            resolve(data)
        }, 1000)

    })
}

function processData() {
    console.log('Processing Data...!')
}

fetchData()
    .then((result) => {
        console.log(result)
        processData()
    })



const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task Four is completed...")
    })
})

const promise5 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("Task Five is completed...")
    })
})

Promise.all([promise4, promise5]).then((result)=> {
    console.log(result)
})