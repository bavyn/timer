// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// example usage is node timer1.js 10 3 5 15 9 
// system sound: process.stdout.write('\x07');
// multiply nums by 1000 to convert number to milliseconds ?

let alarms = process.argv.slice(2);

alarms.forEach((alarm) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm * 1000)
});
