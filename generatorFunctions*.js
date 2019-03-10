function* something(){
  let next;

  while(true){
    if(next === undefined){
      next = 1;
    }
    else{
     next = (3 * next) + 10 
    }
    yield next

  }
}

for (var v of something()) {
console.log( v );
// don't let the loop run forever!
if (v > 500) {
break;
}
}
