var redis = require('redis');
var client = redis.createClient();

client.on("error", function(error) {
    console.log("Error: " + error);    
});
// let clientObjectKeys = Object.keys(client);
// console.log('clientObjectKeys', clientObjectKeys);

client.set("String key", "Kitten Mittens", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function  (error, replies) {
    console.log(replies.length + "replies: ");
    replies.forEach(function (reply, i) {
        console.log(" " + i + ": " + reply);
    });
    client.quit();
})
client.get("String key", function (error, reply) {
    console.error('error', error);
    console.log("reply", reply);
})