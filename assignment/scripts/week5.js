//console.log('js');
let collection = [];

function addToCollection(recordTitle = null,recordArtist = null,recordYear = null){
    let record = { title: recordTitle, artist: recordArtist, year: recordYear };
    collection.push(record);
    console.log(`Records in Collection: ${collection.length} `)
    return true;
}
console.log(`--- Testing addToCollection() ---`)
addToCollection(`Burn`,`Usher`, 2004);
addToCollection(`OMG`,`Usher`, 2004);
addToCollection(`Summertime Sadness`,`Lana Del Rey`, 2012);
addToCollection(`Change Is Gonna Come`, `Sam Cooke`, 1964);
addToCollection(`Burn`,`Ellie Goulding`, 2013);
console.log(`They're (expect 4)`, collection.length, `records in the collection:`, collection);

function findRecord(recordTitle){
    for(let i = 0; i < collection.length; i++){
        if(collection[i].title === recordTitle){
            return i;
        }
    } 
    return false;
}
console.log(`--- Testing findRecord() ---`)
console.log(`(expect 0)`,(findRecord('Burn')));
console.log(`(expect false)`,(findRecord('Yeah')));
console.log(`(expect false)`,(findRecord('Sam Cooke')));
console.log(`(expect false)`,(findRecord(2004)));

function allBy(recordArtist){
    let allByArtist = [];
    for(let i = 0; i < collection.length; i++){
        if(collection[i].artist === recordArtist){
            allByArtist.push(allByArtist);
            return allByArtist;
        }
    }
    return false;
}


console.log(`--- Testing allBy() ---`)
console.log(`(expect false)`,(allBy('Burn')));
console.log(`(expect false)`,(allBy('Celine Dion')));
console.log(`(expect array of Usher Songs)`,(allBy('Sam Cooke')));
console.log(`(expect false)`,(allBy(2004)));

function search(recordTrait){
    for(let i = 0; i < collection.length; i++){
        for(let property in collection[i]){
            let record = collection[i];
            if(record[property] === recordTrait){
                return `Index value of ${i}`;
            }
            else if(recordTrait === undefined || Object.keys(recordTrait).length === 0 ){
                return collection;
            }
            else if(allBy()){
                return recordArtist;
            }
            
        }
    }
    return false;
}
console.log(`--- Testing search() ---`)
console.log(`(expect collection)`,(search('')));
console.log(`(expect collection)`,(search()));

console.log(`(expect false)`,(search('2012')));
console.log(`(expect false)`,(search('Lana Del Rey')));
console.log(`(expect Sam Cooke)`,(search('Change Is Gonna Come')));
