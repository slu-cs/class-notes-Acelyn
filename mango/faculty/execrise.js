// Suppose an asynchronous function f can be called as shown below.
f('hello', function(error, result) {
  if (error) console.error(error.stack);
  console.log(result);
});

// If f returns a promise, how can we rewrite this code to get the same effect?
f('hello')
  .then(result => console.log(result))
  .catch(error => console.error(error.stack));

//////////////////////////////////////////////////////////////////////////////////////

// Suppose q1 and q2 are Mongoose queries.
// You want to run q1 and print the result,
// and afterwards run q2 and print the result.

// How can we do this without promises?
q1.exec(function(error, r1) {
  if (error) console.log(error.stack);
  console.log(r1);

  q2.exec(function(error, r2) {
    if (error) console.log(error.stack);
    console.log(r2);
  });
});

// How can we do this with promises?
q1.exec()
  .then(function(r1) {
    console.log(r1);
    return q2.exec();
  })
  .then(r2 => console.log(r2))
  .catch(error => console.log(error.stack));

//////////////////////////////////////////////////////////////////////////////////////

// Suppose documents is an array of Mongoose documents that have been created but not saved.
// You want to save them all at once (that is, in parallel). Write some code to do this.

const saves = documents.map(d => d.save());
Promise.all(saves)
  .then(() => console.log('All saved'))
  .catch(error => console.log(error.stack));
