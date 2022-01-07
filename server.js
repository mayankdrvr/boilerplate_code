const db=config.get("mongoURI");

mongoose
  .connect(db)
  .then(()=>console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.get("/", (req, res)=>{
    res.send("Server working");
});

const port=process.env.PORT || 5000;

app.listen(port, () => 
  "Server running on port");
