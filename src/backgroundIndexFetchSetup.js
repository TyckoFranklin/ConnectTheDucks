let newFetch = fetch;
fetch = (a, b, c) => {
    console.log("newFetch");
    newFetch(a, b, c)
        .then((r) => {
            // console.log("first",r);
            return r.text()
        })
        .then((r) => {
            // console.log("second",r);
            let d = new DOMParser(); 
            let result = d.parseFromString(r,"text/html") 
            console.log("third",result);
        });
};


console.log("fetch",fetch);
console.log("newFetch",newFetch);
console.log("window.fetch",window.fetch);

require('./backgroundIndex1');


