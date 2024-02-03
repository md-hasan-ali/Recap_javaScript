const isInterview = true;

const interview = new Promise((resolve, reject)=> {
    if(!isInterview){
        const interviewDetails = {
            Name: "Technical Interview",
            Location: "Uttara, Dhaka",
            Time: "10:30 Am"
        };
        resolve(interviewDetails);
    } else {
        reject(new Error("Interview already Created...!"))
    }
})

const addInterview = (interviewDetails) => {
    const interview = `${interviewDetails.Name} has been scheduled on ${interviewDetails.Location} at ${interviewDetails.Time}`
    return Promise.resolve(interview)
}

interview
    .then(addInterview)
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log(err.message)
    })

