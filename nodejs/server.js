var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

listaApp = [
    {
        cdVersaoApp: '1.0.1', 
        cdSistemaOperacional: 1, 
        nomeSistemaOperacional: 'Android', 
        habilitada: 'S'
    },
    {
        cdVersaoApp: '1.0.1', 
        cdSistemaOperacional: 2, 
        nomeSistemaOperacional: 'iOS', 
        habilitada: 'S'
    },
    {
        cdVersaoApp: '1.0.0', 
        cdSistemaOperacional: 1, 
        nomeSistemaOperacional: 'Android', 
        habilitada: 'N'
    },
    {
        cdVersaoApp: '1.0.0', 
        cdSistemaOperacional: 2, 
        nomeSistemaOperacional: 'iOS', 
        habilitada: 'N'
    },
];

app.get('/version', (req, res) => {
    res.json(listaApp);
});

app.get('/version/:cdVersaoApp/:cdSistemaOperacional', (req, res) => {
    var result = null;
    console.log(req.params);
    for (versao of listaApp) {
        console.log(versao);
        if (versao.cdVersaoApp === req.params.cdVersaoApp &&
            versao.cdSistemaOperacional === parseInt(req.params.cdSistemaOperacional)) {
            result = versao;
            console.log('Selecionou versao: ' + result);
            break;
        }
    }
    res.json(result);
});

app.post('/version', (req, res) => {
    console.log(req.body);
    res.json(
        {
            cdVersaoApp: '1.0.0', 
            cdSistemaOperacional: 1, 
            nomeSistemaOperacional: 'Android', 
            habilitada: 'S'});
});

app.put('/version/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.json(
        {
            cdVersaoApp: '1.0.0', 
            cdSistemaOperacional: 1, 
            nomeSistemaOperacional: 'Android', 
            habilitada: 'S'});
});

app.listen(3000, () => {console.log("http://localhost:3000/version")});