let express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});