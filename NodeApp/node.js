var redis = require('redis');
var client = redis.createClient(6379, 'localhost', {no_ready_check: true});

client.on('connect', function() {
    console.log('Connected to Redis');
});

client.set("foo", "bar", redis.print);

x = 1;

while (x <= 1000000000) {

	client.get("foo", function (err, reply) {
		if (err) throw err;
		console.log(reply.toString());
	});

}