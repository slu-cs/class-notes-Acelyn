
// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

/*// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors) {
if (error) console.error(error.stack);
console.log(professors);
});*/

const queries = [

// What are names in alphabetical order?
Professor.find().sort('name'),

// Who started most recently?
Professor.find().sort('-started').limit(1),

// Who started in 2003?
Professor.find().where('started').equals(2003),

// Who teaches 362?
Professor.find().where('courses').in(362),

// What are all the ranks?
Professor.distinct('rank')
];

// Professor.find().sort('name')
queries[0].exec(function(error, professors) {
if (error) console.error(error.stack);

const names = professors.map(p => p.name);
console.log('Names in order: ', names);
});

// Professor.find().sort('-started').limit(1)
queries[1].exec(function(error, professors) {
if (error) console.error(error.stack);

const names = professors.map(p => p.name);
console.log('Started most recently: ', names);
});

// Professor.find().where('started').equals(2003)
queries[2].exec(function(error, professors) {
if (error) console.error(error.stack);

const names = professors.map(p => p.name);
console.log('Started in 2003: ', names);
});

// Professor.find().where('courses').in(362)
queries[3].exec(function(error, professors) {
if (error) console.error(error.stack);

const names = professors.map(p => p.name);
console.log('Teaches 362: ', names);
});

// Professor.distinct('rank')
queries[4].exec(function(error, ranks) {
if (error) console.error(error.stack);

console.log('Distinct ranks: ', ranks);
});
