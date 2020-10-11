import app from '../server/server.js';
import config from '../server/config.js';

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));