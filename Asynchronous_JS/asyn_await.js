const isInterview = true;
const interview = new Promise((resolve, reject) => {
    if (!isInterview) {
        const interviewDetails = {
            Name: "Technical Interview",
            Location: "Uttara, Dhaka",
            Time: "10:30 Am"
        };
        resolve(interviewDetails);
    } else {
        reject('wrong')
    }
})
const addInterview = (interviewDetails) => {
    const interview = `${interviewDetails.Name} has been scheduled on ${interviewDetails.Location} at ${interviewDetails.Time}`
    return Promise.resolve(interview)
}
async function myInterview() {
    try {
        const interviewDetails = await interview;
        const interviewInfo = await addInterview(interviewDetails)
        console.log(interviewInfo)
    } catch {
        console.log('Something wrong...!')
    }
}
myInterview();
console.log("hello")