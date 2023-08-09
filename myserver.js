// FS Module

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.writeFile('newfile.txt', 'New File Created', function (err) {
        if (err) throw err;
        console.log('\nFile Created!!');

    });
    // fs.readFile(__dirname + '/demo.html', 'utf8', function (err, data) {
    //     console.log(data);
    //     res.write(data);
    //     res.end("Hello Node JS");
    // });
    fs.readFile(__dirname+ '/newfile.txt', 'utf8', function (err, data) {
        console.log(data);
        // res.end("\nData Read from new file");
        res.write(data);
    });
    fs.unlink(__dirname+'/newfile.txt',function (err) {
        console.log('File Deleted!!');
        res.write('File Deleted!!');
    })
}).listen(3001);
console.log("Running...")