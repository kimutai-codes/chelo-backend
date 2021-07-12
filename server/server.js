const express = require('express'); //import express
const bodyParser = require('body-parser/');
const feederRoutes = require('./routes/feeders'); // this is the router
const dayRoute = require('./routes/daydata');
const feedsRoute = require('./routes/feeds');

//initialize the server
const app = express();

app.use(express.json()); //parse to json
app.use(express.urlencoded({ extended: true }));

app.use('/api/feeders', feederRoutes);
app.use('/api/daydata', dayRoute);
app.use('/api/feeds', feedsRoute);

//listen on a port
app.listen(process.env.PORT || '3000', () => {
	console.log(
		`server is up and runing on port: ${process.env.PORT || '3000'}`
	);
});
