// Async 
// This technique should really be listed under promises, because it is just syntactic sugar for working with promises
function asyncTask(i) {
    return new Promise(resolve => resolve(i + 1));
}
async function runAsyncTasks() {
    const res1 = await asyncTask(0);
    const res2 = await asyncTask(res1);
    const res3 = await asyncTask(res2);
    return `Last value is ${res3}`;
}

runAsyncTasks().then(result => console.log(result));

// Promise
let getData = (i) => new Promise((resolve, reject) => {
    resolve(i + 1);
    resolve(i + 100);
})

getData(1).then(data => {
    console.log(data);
}, error => {
    console.log("err :" + error);
})

//
import { Observable } from 'rxjs';
const observable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

observable.subscribe(result => console.log(result));