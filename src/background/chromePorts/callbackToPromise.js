


export const getTabAsync = function (options) {
    return new Promise((resolve, reject) => {
        try {
            chrome.tabs.query(options, resolve);
        } catch (e) {
            return reject(e);
        }
    });
}

// getTabAsync({ active: true })
//     .then((a) => { console.log(a) })
//     .catch((a) => { console.log("Error message in catch: ", a) });



export const getTabAsyncProofWithPause = function (options) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                chrome.tabs.query(options, resolve);
            }, 5000);
        } catch (e) {
            return reject(e);
        }
    });
}

// getTabAsyncProofWithPause({ active: true })
//     .then((a) => { console.log(a) })
//     .catch((a) => { console.log("Error message in catch: ", a) });



export const cTPResolveRejectArguments = function (callbackBasedFunction, nArguments) {
    let [a, ...b] = arguments;
    return new Promise((resolve, reject) => {
        a(resolve, reject, ...b);
    });
}

export const cTPArgumentResolve = function (callbackBasedFunction, options) {
    return new Promise((resolve, reject) => {
        try {
            callbackBasedFunction(options, resolve);
        } catch (e) {
            return reject(e);
        }
    });
}

export const chromeruntimeOnConnect = function () {
    return new Promise((resolve, reject) => {
        try {
            chrome.runtime.onConnect.addListener(resolve);
        } catch (e) {
            return reject(e);
        }
    });
}




// export default {
//     getTabAsync,
//     cTPResolveRejectArguments,
//     cTPArgumentResolve,
//     chromeruntimeOnConnect
// }