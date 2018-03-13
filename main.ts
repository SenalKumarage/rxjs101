import {Observable} from "rxjs";

let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
                       .map((e: MouseEvent) => {
                           return {
                               x: e.clientX,
                               y: e.clientY
                           }
                       })
                       .filter(value => value.x < 500)
                       .delay(300);
// .map(n => n*2)
//   .filter(n => n > 4);

function onNext(value) {
    circle.style.left = value.x;
    circle.style.top = value.y;
}
// Observer creation 2
source.subscribe(
    onNext,
    e => console.log(`error: ${e}`),
    () => console.log(`complete`)
);