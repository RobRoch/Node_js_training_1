const app = module.exports = require('express')();

app.get('/', (req, res) => {
    res.send({wow: 'test'});
});

