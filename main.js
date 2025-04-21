//Lesson:1
/*
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */

// Lesson:1 ends here

// Lesson:2

//Lesson:3 fs and path Modules
const fs = require("fs");
console.log(fs);
console.log("starting");
// fs.writeFileSync("saurabh.txt", "Hey there this is your Creative Developer, Saurabh")           //or the correct approach will be
  fs.writeFile("saurabh2.txt", "Hey there this is Saurabh Chaudhary", ()=>{
    console.log("done")
    fs.readFile("saurabh2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})  
fs.appendFile("saurabh3.txt", "Hehehe you have successfully append the file",(e , d)=>{
    console.log(d)
})
console.log("ending");

//Example of callback hell
/*
fs.writeFile("saurabh2.txt", "Hey there this is Saurabh Chaudhary", () => {
  console.log("done");
  fs.readFile("saurabh2.txt", (error, data) => {
    console.log(error, data.toString());
    //again
    fs.writeFile("saurabh2.txt", "Hey there this is Saurabh Chaudhary", () => {
      console.log("done");
      fs.readFile("saurabh2.txt", (error, data) => {
        console.log(error, data.toString());
        //again
        fs.writeFile(
          "saurabh2.txt",
          "Hey there this is Saurabh Chaudhary",
          () => {
            console.log("done");
            fs.readFile("saurabh2.txt", (error, data) => {
              console.log(error, data.toString());
              //again
              fs.writeFile("saurabh2.txt", "Hey there this is Saurabh Chaudhary", ()=>{
                console.log("done")
                fs.readFile("saurabh2.txt",(error,data)=>{
                    console.log(error,data.toString())
            //again
            
                })
            })  
            });
          }
        );
      });
    });
  });
});
*/