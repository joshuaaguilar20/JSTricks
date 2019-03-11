`n general computer science, there's an old pre-JS concept called a "thunk." Without getting bogged down in the historical
nature, a narrow expression of a thunk in JS is a function that -- without any parameters -- is wired to call another function.
In other words, you wrap a function definition around function call -- with any parameters it needs -- to defer the execution
of that call, and that wrapping function is a thunk. When you later execute the thunk, you end up calling the original
function.`



  function foo(x,y) {
    return x + y;
  }
  function fooThunk() {
    return foo( 3, 4 );
  }
// later
    console.log( fooThunk() );
//
As you can see,
// 7 only expects a fooThunk(..)
  
 //Building our own thunkify function Cool* 
  
function thunkify(fn) {
var args = [].slice.call( arguments, 1 );
return function(cb) {
args.push( cb );
return fn.apply( null, args );
};
}
var fooThunk = thunkify( foo, 3, 4 );
// later
fooThunk( function(sum) {
console.log( sum );
} )


/// 

    var fooThunkory = thunkify( foo );
    var fooThunk1 = fooThunkory( 3, 4 );
    var fooThunk2 = fooThunkory( 5, 6 );
// later
    fooThunk1( function(sum) {
    console.log( sum );
    } ); // 7
    fooThunk2( function(sum) {
    console.log( sum );
    } );
