// Catching Async/Await
// The keywords async/await give us a nice interface to use promises. Keep in mind what is going on underneath the hood! We still have a promise that can both be resolved and rejected.

// In the last stage, we only handled the resolve.

// How do we handle the case where the promise rejects? 

// We can use try/catch!

// async function getData() {
//     try {
//         const data = await callServer();
//     }
//     catch(ex) {
//         // this runs if the callServer promise rejects 
//         console.log(ex);
//     }
// }
//  If the callServer promise were to reject here, we would catch the exception and then log it to the console.

//  Your Goal: Catch an Error
// If an error is thrown in any of the asynchronous functions we called in the last stage, let's catch it.

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        await logResponse(response);
    }
    catch(ex) {
        await logError(ex);
    }

}

module.exports = handleResults;