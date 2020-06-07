console.log('js');
//addToCollection
let collection = [];
function addToCollection(recordTitle = null,recordArtist = null,recordYear = null){
    console.log('in addToCollection',recordTitle,recordArtist,recordYear);
    let record = { title: recordTitle, artist: recordArtist, year: recordYear };
    collection.push(record);
    console.log(`-- Records in Collection: ${collection.length} --`)
    return true;
}// end addToCollection
addToCollection(`Burn`,`Usher`, 2004);
addToCollection(`Summertime Sadness`,`Lana Del Rey`, 2012);
addToCollection(`Change Is Gonna Come`, `Sam Cooke`, 1964);
addToCollection(`Burn`,`Ellie Goulding`, 2013);
console.log(`There are (expect 4)`, collection.length, `records in the collection:`, collection);
//findRecord 
function findRecord(title){
    console.log('in findRecord', title);
    for (let i = 0; i < collection.length; i++){
        for (let property in i) {
            if (i.property === title) {
                return `Index value of 
                    $`
                }
            }
}// end findRecord

console.log(findRecord('Burn'));
console.log(findRecord('Yeah'));
console.log(findRecord('Sam Cooke'));

