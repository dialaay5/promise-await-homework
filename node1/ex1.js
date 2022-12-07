const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function get_promise() {
    const my_promise = new Promise((resolve, reject) => {
        rl.setPrompt(`What is your age? `);
        rl.on('line', (age) => {
            if (age <= 99) {
                resolve(`${age}`);
            }
            else {
                reject()
            }
        })
    })
    return my_promise
}

//promise with then and catch

// get_promise()
//     .then(age => {
//         console.log(`Age received by the user: ${age}`);
//         rl.close();
//     })
//     .catch(error => {
//         console.log(`ERROR: ${error}`)
//         rl.close();
//     })


async function run_readline() {
    try {
        const result = await get_promise()
        console.log(`Age received by the user: ${result}`);
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
    }
    rl.close();
}
run_readline()