// // var http = require('http');
// // var server = http.createServer((req, res) => {
// //
// //     if (req.url == "/") {
// //         res.writeHead(200,{ 'content-Type': 'text/html' });
// //         res.write('<h1>This is a home page</h1>');
// //         res.end();
// //     }
// //     else if (req.url == "/about") {
// //         res.writeHead(200,{ 'content-Type': 'text/html' });
// //         res.write('<h1>This is an about page</h1>');
// //         res.end();
// //     }
// //     else if (req.url == "/contact") { // Use '==' for comparison
// //         res.writeHead(200,{ 'content-Type': 'text/html' });
// //         res.write('<h1>This is a contact page</h1>');
// //         res.end();
// //     }
// //
// // })
// // server.listen(5051);
// // console.log("Server running successfully on port 5050");
//
//
// // rewrite
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//        res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>Bismillah,starting with the name of Allah o jallah</h1>');
//             res.end();
//     }
//     else if(req.url=='/about'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write("<h2>this an about page</h2>");
//         res.end();
//
//     }
//
// })
// server.listen(8000,()=>{
//     console.log("success fully running..");
// });
//

const url=require('url');
const http=require('http');
const myurl="https://ostad.app/dashboard/my-courses/6425bf5b105c7b8066e16154/videos?module=64b0f168b7776b1a74ee21d8";

const newurl=url.parse(myurl,true);
const server=http.createServer((req, res)=>{
    const host=newurl.host;
    const path=newurl.pathname;
    const search=newurl.search;
    res.writeHead(200,{'content-type':'text/html'});
    res.write(search);
    res.end();

})
server.listen(8000,()=>{
    console.log("sucessfully running...");
});
