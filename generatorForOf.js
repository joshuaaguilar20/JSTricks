function* something(){
  try{
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
}finally{
//allows us to clean up memory resources
  console.log('Clean Up')
}
}
var it = something();
  for (var v of it) {
  //for of returns iterator function and allows code above to exe.
  console.log( v );
// don't let the loop run forever* 
  if (v > 500) {
    //Could also break, but reutrn statement stops and cleans up value* 
    it.return('What ever Value I want').value
  }

}
