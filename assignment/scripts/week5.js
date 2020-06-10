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
console.log(`--- Testing addToCollection() ---`)
addToCollection(`OMG`,`Usher`, 2008);
addToCollection(`Burn`,`Usher`, 2004);
addToCollection(`Burn`,`Ellie Goulding`, 2013);
addToCollection(`Redbone`,`Childish Gambino`, 2020);
addToCollection(`Uma Therman`,`Fall Out Body`, 2015);
addToCollection(`Summertime Sadness`,`Lana Del Rey`, 2012);
addToCollection(`Change Is Gonna Come`, `Sam Cooke`, 1964);
addToCollection(`Come and Get Your Love`,`Redbone`, 1974);
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
//Change later.. test more than 1 true case, test 1 true value in beginning and 1 at end to see if it still works

//We need to fix this statement
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
console.log(`--- Testing allBy() ---`)
console.log(`allBy('Burn') (expect an empty array)`,(allBy('Burn')));
console.log(`allBy('Celine Dion') (expect an empty array)`,(allBy('Celine Dion')));
console.log(`allBy('Usher') (expect 2 Usher record onjects returned in an array)` ,(allBy(`Usher`)));
console.log(`allBy('2004') (expect an empty array)`,(allBy(2004)));
console.log(`allBy('Ellie Goulding') (expect an index value of 3) `,(allBy(`Ellie Goulding`)));
function allYear(recordYear){
    let yearCollection = [];
    for(let i = 0; i < collection.length; i++){
        if(collection[i].year === recordYear){
            yearCollection.push(collection[i]);
        }
    }
    return yearCollection;
}
console.log(`expect 2 records)`,allYear(2020));
console.log(`expect 1 record)`,allYear(2012));
console.log(`expect 0 record)`,allYear(1900));



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
    return matchingRecords;//`No matches were found, please input an object with a year and or artist property`;
}
console.log(`search({artist:"Usher"})(expect 2 Usher songs in an array)`,search({artist:`Usher`}));
console.log(`search({artist:"Usher", year:2004})(expect 1 Usher songs in an array)`,search({artist:`Usher`,year:2004}));
console.log(`search({artist:"Usher", year:2004})(expect 1 Usher songs in an array)`,search({artist:`Usher`,year:2004}));
console.log(`search({artist:"Usher", year:2004})(expect 1 Usher songs in an array)`,search());
console.log(`search({artist:"Usher", year:2004})(expect 1 Usher songs in an array)`,search({}));
console.log


// // ex of a pass in value for search: (),{},{artist:`Usher`}, {year: 2020}, and {artist:`Usher`, year: 2020}
// console.log(`--- Testing search() ---`)
// console.log(`(expect collection)`,(search('')));
// console.log(`(expect collection)`,(search({})));
// console.log(`(expect 1 record from 2012 in array)`,(search({year:2012})));
// console.log(`(expect 2 record from 2020 in array)`,(search({year:2020})));
// console.log(`(expect 2 Usher records returned in an array)`,(search({artist:'Usher'})));
// console.log(`(expect 1 Lana Del Rey record returned in an array)`,(search({artist:'Lana Del Rey'})));
// console.log(`(expect 1 Nobody record returned in an array)`,(search({artist:'Nobody'})));
console.log(`(expect 1 record from 2012 in array)`,(search({year:2030})));
//console.log(`(expect Sam Cooke)`,(search('Change Is Gonna Come')));

