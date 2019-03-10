function foo(x,y) {
    fetch(
    "http://some.url.1/?x=" + x + "&y=" + y,
      function(err,data){
      if (err) {
      // throw an error into `*main()`
      it.throw( err );
      }
      else {
      // resume `*main()` with received `data`
      it.next( data );
     }
    });
}

function *main() {
  try {
  var text = yield foo( 11, 31 );
  console.log( text );
  }
  catch (err) {
  console.error( err );
  }
}
var it = main();
// start it all up!
it.next();
// 1

/* 
In
yield foo(11,31)
, first the
foo(11,31)
call is made, which returns nothing (aka
request data, but we're actually then doing
yield
yield undefined
undefined
), so we're making a call to
. That's OK, because the code is not currently relying on a
ed value to do anything interesting. We'll revisit this point later in the chapter.
We're not using
yield
in a message passing sense here, only in a flow control sense to pause/block. Actually, it will have
message passing, but only in one direction, after the generator is resumed.
So, the generator pauses at the
text
yield
, essentially asking the question, "what value should I return to assign to the variable
?" Who's going to answer that question?
Look at
foo(..)
. If the Ajax request is successful, we call:
it.next( data );
That's resuming the generator with the response data, which means that our paused
yield
expression receives that value
directly, and then as it restarts the generator code, that value gets assigned to the local variable
text
. */
