const fs = require('fs');

function get_promise() {
    const my_promise = new Promise((resolve, reject) => {
        fs.readdir(__dirname , (err, files) => {
            if (err) {
                console.log('reject');
                reject(`Error ${err}`);
            }
            else {
                console.log('resolve');
                resolve(`${files}`);   
            }
        })
    })
    return my_promise;
}

// get_promise()
//     .then(resolve => { 
//             console.log(resolve)
//         })
//     .catch(reject => {
//         console.log(reject)
//     })

async function run_fs() {
    try {
        const resolve = await get_promise()
        console.log(`FILES: ${resolve}`);
    }
    catch (reject) {
        console.log(`ERROR: ${reject}`);
    }
}
run_fs()
