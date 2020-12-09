import app from '../server/server.js';

app.listen(process.env.PORT, () => console.info('Gator Tracker App loaded at '+ process.env.BASE_URL + ' on port ' + process.env.PORT));