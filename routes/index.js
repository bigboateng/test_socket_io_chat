/* GET home page. */

module.exports = function(app, io)
{
	app.get('/', function(req, res){
		res.render('index', {title:'Socket io chat'});
	});


	io.on('connection', function(socket){
		console.log("A user connected. \n");


		socket.on('disconnect', function(){
			console.log("A user disconnected");
		});

		socket.on('chat message', function(msg){
			console.log("message from client: " + msg)
			io.emit('chat message', msg);
		});
	});
}