const fs = require('fs');
const parser = require('xml2json');
const renderFile = require('ejs').renderFile;
const xml = fs.readFileSync(`${__dirname}/../es6.xml`, 'utf8');
const json = JSON.parse(parser.toJson(xml));

renderFile(`${__dirname}/documentation.tpl.ejs`, { templates: json.templateSet.template }, null, function(error, result) {
    console.log(error);
    fs.writeFile(`${__dirname}/../README.md`, result, function(err) {
        if(err) {
            return console.log(err);
        }
    });
});
