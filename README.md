# Pet Store API

An API to help pet stores manage pet information.

## Installation

### Prerequisite

Requires Node.js

### Installation steps

1. Download the ZIP file
2. Unzip the file in a desired location.
3. Run the following command

```shell
npm i
```

4. Inside the config folder, create a new file called config.env
5. Add your mongoDB URI like so:

```shell
MONGO_URI=<your mongo URI>
```

6. While you're here, add a PORT for your server to listen to.

```shell
PORT=7000
```

## Running the server

1. Open a terminal
2. Change directory to the project folder.
3. Start the server by using:

```shell
npm start
```

or

```shell
node server.js
```

The server should be running on the specified port and should have connected to the MongoDB server.

## Using the API

Read the [documentation](https://documenter.getpostman.com/view/13595623/TWDXnvzk) to use this API.
