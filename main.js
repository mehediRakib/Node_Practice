// const http=require('http');
// const server=http.createServer((req, res)=>{
//     res.end("Hello world");
//
// })
// server.listen(5050,()=>{
//     console.log("running sucess fully...");
// })

// const fs=require('fs');
// const filename="target.txt";
// fs.watch(filename,()=>{
//     console.log("File changed");
// });
// const fs=require('fs');
// const fileName="target.txt";
// fs.readFile(fileName,(err, data)=>{
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//
//     }
//
// })
// console.log("Hey, hello world!");
// const fs=require('fs');
// const filename='target.txt';
// fs.readFile(filename,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });
// console.log("Hello world");

// uses of sync function
// const fs=require('fs');
// const filename="target.txt";
// const data=fs.readFileSync(filename);
// console.log(data.toString());
// console.log("Using async function")

// const fs=require('fs');
// const filename="target.txt";
// try{
// const data=fs.readFileSync(filename);
// console.log(data.toString())
// }
// catch(err){
//     console.log(err);
// }
// console.log("Using async function")

const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("This is a trial server");
})
server.listen(8000,()=>{
    console.log("allah is almighty");
});


