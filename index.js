const http = require ("http")

const hostName = "localhost"
const Port = 8100

function requestHandle (req, res){
  if (req.url ===  "/" && req.method === "GET"){
    res.writeHead(200)
   res.write("Get the Book from the URL");
   res.end()
   console.log("Hello get the book from GET request");
      
  }

   if (req.url === "/books/authors" && req.method === "PUT"){
    res.writeHead(201)
    res.write ("Post the Book and author")
    res.end()
    console.log("Hello  Post Book");
  }

  if (req.url === "/books" && req.method === "POST"){
    res.writeHead (205)
    res.write ("Update Your books")
    res.end()
    console.log("Successfuly Update Book request")
  }

  if (req.url === "/books" && req.method === "DELETE"){
    res.writeHead(408)
    res.write("Book deleted")
    res.end()
    console.log("deletion successfully")
  }

  else if (req.url === "/books/authors" && req.method === "GET"){
    res.write ("Successfully Get the books and Authors Name")
    res.end()
    console.log("Succeed Getting the BOOKS and AUTHors Name")
  }
  
  else if (req.url === "/books/authors" && req.method === "POST"){
    res.write ("Successfully Post books and Name of the Author")
    res.end()
    console.log("Books and Authors Post")
  }

  else {
    res.writeHead(404)
    res.write ("not successful in either")
    res.end()
    console.log("Bad Request")
  }

}


const Serverfile = http.createServer (requestHandle)

Serverfile.listen(Port, ()=>{
  console.log(`Server is running at http://${hostName}:${Port}`)
})