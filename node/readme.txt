Written in C++
Uses V8 engine to convert js into machine code

Sync methods pauses the code until execution of method is completed 
All async code require a call back function

Execute .js file using node run:
node <filename>

setTimeout : Run once after timeout has reached
setinterval : Runs each time interval

Global Object:
Default methods and modules available in node
https://nodejs.org/api/globals.html

Info on npm packages available and their info:
https://www.npmjs.com/

Working of Client And Server:
https://www.youtube.com/watch?v=qSAze9b0wrY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=11

Buffer and Streams:
https://www.youtube.com/watch?v=GlybFFMXXmQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=13

Temp storage for chunk of data that is being transferred
buffer is first filled with data and then sent
transfer data in small streams using buffer

"Pipes" are used to accomplish this

npm install:
-g : install packages globally and not project specific.

Template Engine:
Used to render dynamic content on html

Middleware:
Code that runs between request and response
Eg: location of static files

QueryString:
A string followed by the url '?'
Used to get specific info from database
used in get request
eg:http://localhost:3000/contact?dept=marketing&person=joe

Folder Structure:
use MVC(Model View Controller) Architecture.
