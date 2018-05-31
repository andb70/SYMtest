const express = require('express');
const fs = require('fs');

let router = express.Router();
router.post("/", (req, res) => {
    let obj = req.body;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].measurement == 'ElMotor') {
            console.log(JSON.stringify(obj[i]));
        }
    }
    res.send(obj);// no content
});



router.get("/", (req, res) => {
    console.log("chiamata da SYM");
    res.status(200).send('ricewvuto get');// no content
});

router.get("/loadroot/", (req, res) => {
    console.log("chiamata da SYM load root");
    console.log(__root + 'root.json');
    fs.readFile(__root + 'root.json', 'utf8', (err, data) => {
        if (err) {
            console.log("errore di file " + err);
            res.sendStatus(404);
        } else {
            console.log("got a file");
            //console.log(data);            
           //res.status(200).json({"campo":"valore"});// no content          
            res.status(200).json(data);// no content
        }
    });
});




router.post("/saveroot/", (req, res) => {
    console.log("chiamata da SYM");
    console.log(JSON.stringify(req.body));

    fs.writeFile('root.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }); 
    res.status(200).json(req.body);// no content
});




router.post("/get/", (req, res) => {
    console.log("chiamata da SYM");
    console.log(JSON.stringify(req.body));
    let r = {
        "measurement": "ElMotor",
        "result": [
            {
                "fields":
                    [
                        { "Hours": 3458 }
                    ],
                "tags":
                    [
                        { "device": 8 },
                        { "unit": 3 },
                        { "section": 2 },
                        { "plant": 1 }
                    ],
                "timestamp": 1526567775015
            },
            {
                "fields":
                    [
                        { "Hours": 120 }
                    ],
                "tags":
                    [
                        { "device": 12 },
                        { "unit": 55 },
                        { "section": 9 },
                        { "plant": 1 }
                    ],
                "timestamp": 1526567775015
            },
            {
                "fields":
                    [
                        { "Hours": 0 }
                    ],
                "tags":
                    [
                        { "device": 1001 },
                        { "unit": 64 },
                        { "section": 2 },
                        { "plant": 1 }
                    ],
                "timestamp": 1526567775015
            }
        ]
    };
    res.status(200).json(r);// no content
});
module.exports = router;