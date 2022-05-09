//metodo static que lee el archivo json con el db

const fs = require("fs");
class Reader{
    static readFileJson(path){
        const rawdata=
        fs.readFileSync(path);
            return JSON.parse(rawdata);
    }
}

module.exports=Reader