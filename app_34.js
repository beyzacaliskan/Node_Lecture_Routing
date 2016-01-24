var Emitter=require('events'); //node event kullanıldı
var eventConfig=require('./config').events;

var emtr=new Emitter();
emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);