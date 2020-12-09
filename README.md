# Gator Tracker
Welcome to our very nice and cool project.

## First time Set-up
1. Clone the repo using the cloning process of your choice (Mine is `git clone ssh`)
2. Once cloned, run `npm install`. This will install all the dependencies (There are a lot!)
3. Duplicate the config_template.json into config.json `cp config_template.json config.json` if using linux/bash.
4. Add mongo and email credentials into config.json (Look in Discord for credentials).
5. Some computers might need `webpack-cli` or `webpack` installed globally. If this is necessary make sure to use `npm link`.

## Running the App
1. Start Mongo, once the app runs it will create a DB called GatorTracker at localhost (We can setup an Atlas DB at a later time)
2. Run `npm run dev` in one terminal in the project root folder (For Webpack hot-reloads)
3. Run `npm start` in another terminal in the project root folder (Starts the local server and connects to Mongo)
4. You should see the home page at `localhost:80`!

## Contributing
I haven't really thought of a code style/syntaxal format. With that being said, I utilize `4` spaces so try to stick with that. As long as it is presentable it's fine. Also comment your code!