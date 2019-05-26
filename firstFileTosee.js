// hey local user !
'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
	const server = Hapi.server({
		port: 8080,
		host: 'localhost'
	});
	await server.register(require('@hapi/inert'));
	server.route({
		method: 'GET',
		path: '/',
		handler: {
			function(request, h) {
				return 'Hello world';
			}
		}
	});
	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
