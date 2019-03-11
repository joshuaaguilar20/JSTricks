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
