# nostalgia-games-app

App that allows users to browse through old games, get additional information and move them to a nostalgia games library. There the user can pick them and play them in browser.

MERN Stack studying projects/

In Progress





# User Data

## Server side

### Install dependencies
```bash
cd ./server
npm install
```

### .env file
Copy the .env.sample as .env and fill up the environment variable for your personal mongodb connecttion url.

### Running the code

```bash
cd ./server
npm start
```

It will start the server with nodemon. So it will watch the changes and restart the server if some ot the files changed.

### Testing with test.http

If you like to try the endpoints of the rest api, you can check the test.http file for urls are should work on your environment as well. And if you install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extenstion for vscode you can actually run those in your editor.


## Client side

### Install dependencies

```bash
cd ./client
npm install
```

### Runnig the code

```bash
cd ./client
npm start
```

And the create-react-app react-scripts package will start your frontend on the 3000 port and you can visit the http://localhost:3000 on your preferred browser.
