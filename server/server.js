const express = require('express'); //import express
const feederRoutes = require('./routes/feeders'); // this is the router
const dayRoute = require('./routes/daydata');
const feedsRoute = require('./routes/feeds')

//initialize the server
const app = express();

//convert response to json
app.use(express.json());

app.use('/api/feeders', feederRoutes);
app.use('/api/daydata', dayRoute);
app.use('/api/feeds', feedsRoute);

//listen on a port
app.listen(process.env.PORT || '3000', () => {
	console.log(
		`server is up and runing on port: ${process.env.PORT || '3000'}`
	);
});
