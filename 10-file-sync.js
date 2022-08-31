// synchronus approach of file system

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');  //readfilesync will read the file

console.log(first,second);

writeFileSync(                    // writefilesync will write the data into file 
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}` , {flag: 'a'}
)