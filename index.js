const mongoose = require('mongoose');

const dbName = 'mongo-exercises';
const mongoDB = 'mongodb://localhost/'+dbName;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB Server : ', err));

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: {type: Date, default: Date.now},
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
}); 
    
const Course = mongoose.model('Course', courseSchema);

async function getAllData(){
    const data = await Course.find();
    console.log('All data : ')
    console.log(data);
}

getAllData();

//Practice 1
// async function getData(){
//     return await Course
//         .find( { isPublished: true, tags: 'backend' } )
//         .sort( {name: 1} )
//         .select( { name: 1, author: 1 } );
// }

// async function runShow(){
//     const filterData = await getData();
//     console.log('Result with sort data : ')
//     console.log(filterData);
// }

// runShow();

//Practice 2
//Using in
// async function getData(){
//     return await Course
//         .find( { isPublished: true, tags: {  $in: ['frontend', 'backend'] } } )
//         .sort('-price') //Note you can either pass a string or object
//         .select('name author price');
// }

//Using Or

// async function getData(){
//     return await Course
//         .find( { isPublished: true } )
//         .or( [ { tags: 'frontend' },  { tags: 'backend' }] )
//         .sort('-price') //Note you can either pass a string or object
//         .select('name author price');
// }

// async function runShow(){
//     const filterData = await getData();
//     console.log('Result with sort data : ')
//     console.log(filterData);
// }

// runShow();

//Practice 3
// async function getData(){
//     return await Course
//     .find( { isPublished: true } )
//         .or([
//             { price: {$gt: 15} },
//             { name: /.*by.*/i }
//         ])
//         .sort( {name: 1} )
//         .select( { name: 1, author: 1 } );
// }

// async function runShow(){
//     const filterData = await getData();
//     console.log('Result with sort data : ')
//     console.log(filterData);
// }

// runShow();