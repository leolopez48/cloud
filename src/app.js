var app = require('./index');

async function main() {
    await app.listen(app.get('port'));
    console.log("Server on port " + app.get('port'));
}

main();