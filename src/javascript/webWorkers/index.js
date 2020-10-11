/* When you import it like this, web worker goes haywire and keeps running */
// import workerScript from "./worker";

const input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);

const p = document.createElement("p");
document.body.appendChild(p);

if (window.Worker) {
  const worker = new Worker("/worker.js");
  input.onchange = function(e) {
    worker.postMessage(e.target.value);
    p.innerText = "Message posted to worker";
    console.log("Message posted to worker");
  };
  worker.onmessage = function(e) {
    p.innerText = `Message received from the worker: ${e.data}`;
    console.log("Message received from the worker", e.data);
  };
}
