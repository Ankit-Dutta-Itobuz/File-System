//requiring the imp modules
const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

//to take input from commandinput
let input = process.argv;
let operation = input[2];
let fileName = input[3];
var pathName = path.dirname(input[1]) + '/';

//display all the Operations
function print(){
    console.log('Type "node filemod.js 1" to Read File '); 
    console.log('Type "node filemod.js 2" to Create File'); 
    console.log('Type "node filemod.js 3" to Update File'); 
    console.log('Type "node filemod.js 4" to Delete File'); 
    console.log('Type "node filemod.js 5" to Create Folder'); 
    console.log('Type "node filemod.js 6" to Delete Folder'); 
    console.log('Type "node filemod.js 7" to Read Folder'); 
    console.log('Type "node filemod.js 8" to Update Folder'); 
    console.log('Type "node filemod.js 9" to Exit'); 
    console.log('\n'); 
}

//for Invalid Input
if (process.argv[2] === undefined) { 
    print();
   }
   //display the Commands to perform the Operations
   else { 
    if (operation === '1'){
        console.log('To perform type : node filemod.js RF "Filename" ')}
    if (operation === '2'){
        console.log('To perform type : node filemod.js CF "Foldername" "Filename" "content" ')}
    if (operation === '3'){
        console.log('To perform type : node filemod.js UF "Foldername" "Filename" "content to be updated in the file"')}
    if (operation === '4'){
        console.log('To perform type : node filemod.js DF "Foldername" "Filename" ')}
    if (operation === '5'){
        console.log('To perform type : node filemod.js CFO "Foldername" "path/"')}
    if (operation === '6'){
        console.log('To perform type : node filemod.js DFO "Foldername" "path/"')}
    if (operation === '7'){
        console.log('To perform type : node filemod.js RFO "Foldername" "path/"')}
    if (operation === '8'){
        console.log('To perform type : node filemod.js UFO "Original Foldername" "New Foldername" "path/"')}
    if (operation === '9'){
        process.exit();
    }

    //read File
    if (operation === 'RF'){
        try {
            const data = fs.readFileSync(fileName, 'utf8');
            console.log(data);
          } catch (err) {
            console.error(err);
          }
          print();
    }

    //create File
    if (operation === 'CF'){
        var str = "";
        for (let i = 5; i < input.length; i++) {
            str = str +" "+ input[i];
        }
        fs.writeFileSync(pathName + fileName +'/'+ input[4], str, 
        console.log('File is created successfully!')
        )
        print();
    }

    //delete File
    if (operation === 'DF'){
        fs.unlinkSync(pathName + fileName +'/'+ input[4]);
        console.log('File deleted successfully!')
        print();
    }

    //update File 
    if (operation === 'UF'){
        var str = "";
        for (let i = 5; i < input.length; i++) {
            str = str +" "+ input[i];
        }
        fs.writeFileSync(pathName + fileName +'/'+ input[4], str, 
        console.log('File is updated successfully!')
        );
        print();
    }

    //create folder 
    if(operation === 'CFO'){
        if (!fs.existsSync(pathName + input[4] + fileName)) {
            fs.mkdirSync(pathName + input[4] + fileName);
        }
            console.log('Folder is created successfully!')
            print();
    } 

    //delete Folder
    if(operation === 'DFO'){
        fs.rmdirSync(pathName + input[4] + fileName, err => {
            if (err) {
              throw err;
            }
            console.log(`Folder ${fileName} is deleted successfully!`);
        });
        print();
    }

    //read File
    if(operation === 'RFO'){
        console.log('\n The '+fileName+' directory consists : ');
        console.log(fs.readdirSync(pathName+ input[4] +fileName));
        print();
    }

    //update Folder
    if(operation === 'UFO'){
    fs.rename(pathName + input[5] +fileName, pathName + input[5] +input[4], err => {
        if (err) {
        console.error(err);
        }
    });
    console.log('Folder name is updated successfully!');
    print();
    }

}