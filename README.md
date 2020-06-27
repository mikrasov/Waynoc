# Install
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and run `sudo npm i -g gatsby-cli`. This installs [Gatsby](https://www.gatsbyjs.org/) command line tools.

 ---
# Development Build
The development build is unoptimized and ideal for testing new features and hunting down bugs. The server tracks file changes and forces a refresh in the browser when a change has been detected.

To run the development mode run:
<br/>`npm run develop`


Visit [localhost:8000](http://localhost:8000) to see the running application.
You can also go to [localhost:8000/___graphql](http://localhost:8000/___graphql) to query the data using the __graphql interface



# Production Build
The production build, compacts the files and bundles them for speed. Use this mode for deploying the application. 

To run the production database and server run:
<br/>`npm run build`
<br/>`npm run start`


Visit [localhost:9000](http://localhost:9000) to see the running application.

