//console.log('js');
let collection = [];
document.querySelector("#form").addEventListener("submit", function(event){
    let title = document.querySelector("#title").value;
    let artist = document.querySelector("#artist").value;
    let year = document.querySelector("#year").value;
    let record = addToCollection(title, artist, year);
    //console.log(`baby`); used to see if it was working
    event.preventDefault();
});
//^ this function is called when 'Add Record' button is pressed
// However, when page refreshes any songs added via button will dissapear
function addRow(record){
    let tableRow = document.createElement(`tr`);
    let tableTitle = document.createElement(`td`);
    let tableArtist = document.createElement(`td`);
    let tableYear = document.createElement(`td`);
    tableTitle.innerText = record.title;
    tableArtist.innerText = record.artist;
    tableYear.innerText = record.year;
    tableRow.appendChild(tableTitle);
    tableRow.appendChild(tableArtist);
    tableRow.appendChild(tableYear);
    document.querySelector(`#tableBody`).appendChild(tableRow);
    document.querySelector(`#collectionLength`).innerText = collection.length
    //  or  document.querySelector("#tableBody").innerHTML(tableRow);
    //^ this function adds a row to Current Collection.
}
function addToCollection(recordTitle,recordArtist,recordYear){
    let record = { title: recordTitle, artist: recordArtist, year: recordYear };
    collection.push(record);
    console.log(`Records in Collection: ${collection.length} `)
    addRow(record);
    return record;
}
console.log(`------------ Testing addToCollection() ------------`)
addToCollection(`OMG`,`Usher`, 2008);
addToCollection(`Burn`,`Usher`, 2004);
addToCollection(`Burn`,`Ellie Goulding`, 2013);
addToCollection(`Redbone`,`Childish Gambino`, 2016);
addToCollection(`Uma Therman`,`Fall Out Body`, 2015);
addToCollection(`Summertime Sadness`,`Lana Del Rey`, 2012);
addToCollection(`Change Is Gonna Come`, `Sam Cooke`, 1964);
addToCollection(`Come and Get Your Love`,`Redbone`, 1974);
addToCollection(`Cheap Thrills`, `Sia`, 2016);

function findRecord(recordTitle){
    for(let i = 0; i < collection.length; i++){
        if(collection[i].title === recordTitle){
            return i;
        }
    } 
    return false;
}
console.log(`------------ Testing findRecord() ------------`)
console.log(`findRecord('OMG')(expect 0)`,(findRecord('OMG')));
console.log(`findRecord('Yeah')(expect false)`,(findRecord('Yeah')));
console.log(`findRecord('Sam Cooke')(expect false)`,(findRecord('Sam Cooke')));
console.log(`findRecord(2004)(expect false)`,(findRecord(2004)));
console.log(`findRecord('Redbone')(expect 3)`,(findRecord('Redbone')));

function allBy(recordArtist){
    let allByRecords = [];
    for(let i = 0; i < collection.length; i++){
        if(collection[i].artist === recordArtist){
            allByRecords.push(collection[i]);
            // collection[i] is accessing record index, so 0 is Burn, 1 is OMG ..  
            //Spend more time reading the question and understanding absolutely what you need! We didn't need false! 
        }
    }
    return allByRecords;
}
console.log(`------------ Testing allBy() ------------`)
console.log(`allBy('Burn') (expect an empty array)`,(allBy('Burn')));
console.log(`allBy('Redbone Dion') (expect 1 record by Redbone object returned in array)`,(allBy('Redbone')));
console.log(`allBy('Usher') (expect 2 Usher record objects returned in array)` ,(allBy(`Usher`)));
console.log(`allBy('2004') (expect empty array)`,(allBy(2004)));
console.log(`allBy('Green Day') (expect empty array) `,(allBy(`Green Day`)));

function allYear(recordYear){
    let yearCollection = [];
    for(let i = 0; i < collection.length; i++){
        if(collection[i].year === recordYear){
            yearCollection.push(collection[i]);
        }
    }
    return yearCollection;
}
console.log(`------------ Testing allYear() ------------`)
console.log(`allYear(2016) (expect 2 record objects in array)`,allYear(2016));
console.log(`allYear(2012) (expect 1 record object in array)`,allYear(2012));
console.log(`allYear(1900) (expect 0 record objects in array)`,allYear(1900));

function search(recordObject){
    let matchingRecords = [];
    if(recordObject === undefined || Object.keys(recordObject).length === 0){
        return collection;
    }
    for(let record of collection){
        let matchingKeys = true;
        for(let key of Object.keys(recordObject)){
            if(recordObject[key] !== record[key]){
                matchingKeys = false;
                break;
            }
        }
        if(matchingKeys){
            matchingRecords.push(record);
        }
    }
    return matchingRecords;
}
console.log(`------------ Testing search() -------------`)
console.log(`search({artist:"Usher"})(expect 2 Usher record objects in an array)`,search({artist:`Usher`}));
console.log(`search({title:"Summertime Sadness"})(expect 1 Summertime Sadness record object in array)`,search({title:`Summertime Sadness`}));
console.log(`search({artist:"Fall Out Boy"})(expect 1 Fall Out Boy record object in array)`,search({artist:`Fall Out Boy`}));
console.log(`search({artist:"Usher", year:2004})(expect 1 Usher record object in array)`,search({artist:`Usher`,year:2004}));
console.log(`search({artist:"Sam Cooke", year:1964})(expect 1 Sam Cooke record object in array)`,search({artist:`Sam Cooke`,year:1964}));
console.log(`search({title:"Come and Get Your Love",artist:"Redbone",year:1974})(expect 1 record object in array)`,search({title:`Come and Get Your Love`,artist:`Redbone`,year:1974}));
console.log(`search({year:2016})(expect 2 2016 songs in array)`,search({year:2016}));
console.log(`search({year:1974})(expect 1 1974 songs in array)`,search({year:1974}));
console.log(`search({year:1900})(expect empty array)`,search({year:1900}));
console.log(`search({artist:"Green Day"})(expect empty array)`,search({artist:`Green Day`}));
console.log(`search({title:"Shazam"})(expect empty array)`,search({title:`Shazam`}));
console.log(`search()(expect collection)`,search());
console.log(`search({})(expect collection)`,search({}));