console.log('js');
//addToCollection
let collection = [];
function addToCollection(recordTitle = null,recordArtist = null,recordYear = null){
    console.log('in addToCollection',recordTitle,recordArtist,recordYear);
    let record = { title: recordTitle, artist: recordArtist, year: recordYear};
    collection.push(record);
    return record;
}// end addToCollection
addToCollection(`Burn`,`Usher`, 2004);
addToCollection(`Summertime Sadness`,`Lana Del Rey`, 2012);
addToCollection(`Change Is Gonna Come`, `Sam Cooke`, 1964);
addToCollection(`Burn`,`Ellie Goulding`, 2013);
console.log(`There are (expect 4)`,collection.length,`records in the collection:`,collection);
//findRecord 
//function findRecord(title) {
//    console.log('in findRecord', title);
//for( let)          return true;
  //      }// end if statement
 //     }// end for statement
//        return false;
 //   }// end isParkedHere
//}
//console.log('');
