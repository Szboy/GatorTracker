# Gator Tracker
Welcome to our very nice and cool project.

## First time Set-up
1. Clone the repo using the cloning process of your choice (Mine is `git clone ssh`)
2. Once cloned, run `npm install`. This will install all the dependencies (There are a lot!).
3. Duplicate the config_template.json into config.json `cp config_template.json config.json` if using linux/bash.
4. Add mongo and email credentials into config.json.
5. Some computers might need `webpack-cli` or `webpack` installed globally. If this is necessary make sure to use `npm link`.

## Running the App
1. To use develeopment mode and webpack hot reloads `npm run build:dev` in the project root (this will take up the terminal so you will need to start another screen for the start script).
2. To build the website for production, run `npm run build` in the project root folder (For Webpack hot-reloads)
3. Run `npm start` in the project root folder to start the site and app.
4. You should see the home page at the baseURL and port you gave in the config!

## Contributing
Make sure to comment and use `4 Spaces`. Push your changes to another branch and set up a pull request.