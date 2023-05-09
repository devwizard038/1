const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('111');
})

app.listen(3000, () => {
    console.log('111');
});