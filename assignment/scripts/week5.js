console.log('js');
let collection = [];
function addToCollection(title = null,artist = null,year = null){
    console.log('in addToCollection',title,artist,year);
    let record = {recordTitle: title, recordArtist: artist, recordYear: year};
    collection.push(record);
    return record;
}
addToCollection(`Burn`,`Usher`, 2004);
addToCollection(`Summertime Sadness`,`Lana Del Rey`, 2012);
addToCollection(`Change Is Gonna Come`,`Sam Cooke`, 1964);
console.log(`There are`,collection.length,`records in the collection:`,collection);

