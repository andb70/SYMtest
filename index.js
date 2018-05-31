const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require('fs');

global.__root = __dirname + '\\';


const ToDoItemsRoute = require("./api/todoitems");
const CategoriesRoute = require("./api/categories");
const DataLoggerRoute = require("./api/sensor");

let app = express();
app.use(cors());

var authController = require( "./api/auth/authController");
app.use('/api/auth', authController);

app.use(bodyParser.json());
app.use("/api/todoitems", ToDoItemsRoute);
app.use("/api/categories", CategoriesRoute);
app.use("/api/sensor", DataLoggerRoute);

app.listen(8088,()=>{
    console.log("App in ascolto sulla porta 8088");
});