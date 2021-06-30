const http = require("http");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("HELLO THIS IS ROOT");
});

app.get("/jsonData", (req, res) => {
  // res.end("HELLO THIS IS ROOT");
  return res.json({ data: "Hi I am json" });
});

app.get("/students", (req, res) => {
  const dataa = [
    {
      id: 1,
      name: "Divisht",
      lastName: "Kori",
    },
    {
      id: 2,
      name: "Abhishek",
      lastName: "Panchal",
    },
  ];

  // res.end("HELLO THIS IS ROOT");
  return res.json({ data: dataa });
});




app.get("/parameter/:id", (req, res) => {
  const dataa = [
    {
      id: 1,
      name: "Divisht",
      lastName: "Kori",
    },
    {
      id: 2,
      name: "Abhishek",
      lastName: "Panchal",
    },
  ];


  const studID=req.params.id;

  const filterId=dataa.filter((student)=>(student.id ===parseInt(studID)));

  // res.end("HELLO MY ID IS "+studID);
  return res.json({ data: filterId });
});



app.get("/lol/:name",(req,res)=>{

    const list=[
            {

                id:123,
                name:"Divisht",


            },
            {

                id:23,
                name:"Tushy",

            }

        
    ]
    const name=req.params.name;

    const getName=list.filter((namee)=>(namee.name==name))

    if(getName.length==0){
        return res.json({data:"Data not found"})


    }

    return res.json({data:getName})






})















app.listen(3000);








/*http.createServer((req, res) => {

    if(req.url==="/"){

        res.end("Hello CLient");

    }
    else{

        res.end("Hello CLient without root");


    }



}).listen(3000);*/
