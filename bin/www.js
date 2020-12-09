import app from '../server/server.js';
import config from '../config.json';

app.listen(config.port, () => console.info('Gator Tracker App loaded at '+ config.baseURL + ' on port ' + config.port));