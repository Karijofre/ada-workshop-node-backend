const express = require('express');
const router = express.Router();
const basePath = '/';
const db = require("./../database.json");

router.get(basePath, (req, res) => {
    //se obtienen los parametros de filtrado y le guardan en la constante 'filter'
    const filter = req.query;
     // se aplica el filtro de a los datos que se encuentran en la constante db
    let result =  db.filter(item => {
        for(let key in filter){
            if(item[key] === undefined || item[key] !== filter[key])
            return false;

        }
        return true;

    })
    res.status(200).json(result);
});

module.exports = router;
