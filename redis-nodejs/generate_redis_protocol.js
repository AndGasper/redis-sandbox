const fs = require('fs');
var biglyData = fs.createWriteStream('big_data.txt', {'flags': 'a'});
function generateRedisProtocolStatement(command) {
    var protocol = "";
    protocol += `*${arguments.length}\r\n`;
    var commands = Array.from(arguments);
    commands.forEach(function(element) {
        protocol += `$${element.length}\r\n`;
        protocol += `${element}\r\n`;
    });

    return protocol;
}

for (var i = 0; i < 100000; i++) {
    biglyData.write(generateRedisProtocolStatement("SET", `Key${i}`, `Value${i}`));
}