Init Project
mkdir hello-cli
cd hello-cli
npm init

Run the project
node . -n "name" <? -s searchTerm ?> <? --version ?>

Install as console command
npm install -g .

Uninstall the console command
npm uninstall -g joke

Run Command
joke <? -n name ?> <? -s searchTerm ?>
joke
joke -s dad
joke -n jim -s dad
joke --version

oAuth Code
Add "pkce-login": "./bin/pkceLogin.js"

Links
https://www.npmjs.com/package/chalk
https://www.npmjs.com/package/yargs
https://www.npmjs.com/package/axios
https://www.npmjs.com/package/boxen
https://www.npmjs.com/package/terminal-overwrite
https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs


