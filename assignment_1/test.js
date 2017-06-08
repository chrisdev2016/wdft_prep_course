console.log('test');
var a = true;
var b = false;
var c = true;
var result = a && b && c;
console.log(result);

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    if(choise=1){
 console.log(choice);
    }
  else if(choise>1){
 console.log(choice);
  }
  else{
 console.log(reply);
  }
   
}

ask();

for( var i=1; i<=100; i++){
    if(i%5 == 0){
  console.log(fizz);
    }
    else if(i%3 == 0)
      console.log(buzz);
      else{
    console.log(i);
      }
}