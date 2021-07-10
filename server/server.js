const express = require('express'); //import express
const apiRouter = require('./routes'); // this is the router

//initialize the server
const app = express();

//convert response to json
app.use(express.json());

app.use('/api/chelo', apiRouter);

//listen on a port
app.listen(process.env.PORT || '3000', () => {
	console.log(
		`server is up and runing on port: ${process.env.PORT || '3000'}`
	);
});
