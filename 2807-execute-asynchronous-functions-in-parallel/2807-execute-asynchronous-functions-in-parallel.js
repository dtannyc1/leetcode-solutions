/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return await new Promise((resolve, reject) => {
        let output = Array(functions.length);
        let done = 0;

        for (let ii = 0; ii < functions.length; ii++) {
            functions[ii]()
                .then(res => {
                    output[ii] = res;
                    done++;
                    if (done === functions.length) {
                        resolve(output);
                    }
                })
                .catch(reject);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */