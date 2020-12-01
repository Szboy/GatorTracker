import app from '../server/server.js';
import config from '../config.json';

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));