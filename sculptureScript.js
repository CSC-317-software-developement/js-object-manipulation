const sculptureList = require('./data.js'); // import data.js

const element = sculptureList[1] // <---- comment out this line in your solution!


const sculptureListLengths = {};

sculptureList.forEach((sculpture, index) => {
    const lengths = {
        name: sculpture.name.length,
        artist: sculpture.artist.length,
        description: sculpture.description.length,
        url: sculpture.url.length,
        alt: sculpture.alt.length
    };

    sculptureListLengths[index] = lengths;
});

console.log(sculptureListLengths);