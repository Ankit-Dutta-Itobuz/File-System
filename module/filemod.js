//requiring the imp modules
const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

//to take input from commandLine
var args = process.argv;
var pathName= path.dirname(args[1])+'/';

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
    if (args[2] === '1'){
        console.log('To perform type : node filemod.js RF "Filename" ')}
    if (args[2] === '2'){
        console.log('To perform type : node filemod.js CF "Foldername" "Filename" "content" ')}
    if (args[2] === '3'){
        console.log('To perform type : node filemod.js UF "Foldername" "Filename" "content to be updated in the file"')}
    if (args[2] === '4'){
        console.log('To perform type : node filemod.js DF "Foldername" "Filename" ')}
    if (args[2] === '5'){
        console.log('To perform type : node filemod.js CFO "Foldername" "path/"')}
    if (args[2] === '6'){
        console.log('To perform type : node filemod.js DFO "Foldername" "path/"')}
    if (args[2] === '7'){
        console.log('To perform type : node filemod.js RFO "Foldername" "path/"')}
    if (args[2] === '8'){
        console.log('To perform type : node filemod.js UFO "Original Foldername" "New Foldername" "path/"')}
    if (args[2] === '9'){
        process.exit();
    }

    //read File
    if (args[2] === 'RF'){
        try {
            const data = fs.readFileSync(args[3], 'utf8');
            console.log(data);
          } catch (err) {
            console.error(err);
          }
          print();
    }

    //create File
    if (args[2] === 'CF'){
        var str=""
        for (let i = 5; i < args.length; i++) {
            str=str+" " +args[i];
        }
        fs.writeFileSync(pathName+args[3]+'/'+args[4], str, 
        console.log('File is created successfully!')
        )
        print();
    }

    //delete File
    if (args[2] === 'DF'){
        fs.unlinkSync(pathName+args[3]+'/'+args[4]);
        console.log('File deleted successfully!')
        print();
    }

    //update File 
    if (args[2] === 'UF'){
        var str=""
        for (let i = 5; i < args.length; i++) {
            str=str+" " +args[i];
        }
        fs.writeFileSync(pathName+args[3]+'/'+args[4], str, 
        console.log('File is updated successfully!')
        );
        print();
    }

    //create folder 
    if(args[2] === 'CFO'){
        if (!fs.existsSync(pathName + args[4] + args[3])) {
            fs.mkdirSync(pathName + args[4] + args[3]);
        }
            console.log('Folder is created successfully!')
            print();
    } 

    //delete Folder
    if(args[2] === 'DFO'){
        fs.rmdirSync(pathName + args[4] + args[3], err => {
            if (err) {
              throw err;
            }
            console.log(`Folder ${args[3]} is deleted successfully!`);
        });
        print();
    }

    //read File
    if(args[2] === 'RFO'){
        console.log('\n The '+args[3]+' directory consists : ');
        console.log(fs.readdirSync(pathName+ args[4] +args[3]));
        print();
    }

    //update Folder
    if(args[2] === 'UFO'){
    fs.rename(pathName + args[5] +args[3], pathName + args[5] +args[4], err => {
        if (err) {
        console.error(err);
        }
    });
    console.log('Folder name is updated successfully!');
    print();
    }

}