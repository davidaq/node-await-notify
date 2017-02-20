var Subject = require('./index').Subject;
var event = new Subject();

function listen() {
  event.wait().then(function () {
    console.log('Event occured');
    listen();
  });
}
listen();

setTimeout(function () {
  event.message = 'Hello there';
  event.notify();
}, 1000);
