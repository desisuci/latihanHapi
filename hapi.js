const Hapi = require('@hapi/hapi');
const server = Hapi.server({
    port: 3102,
    host: 'localhost'
});

const routes = require('./src/routes/userRoute');

server.route(routes);
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    var table = server.table()
    console.log('table');
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();