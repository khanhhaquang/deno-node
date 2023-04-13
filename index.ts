import EventEmitter from './EventEmitter.ts';

type User = { id: string; name: string };

type EventMap = {
	login: [user: User];
};

const eventEmitter = new EventEmitter<EventMap>();

eventEmitter.on('login', (user) => {
	console.log('user', user);
});

eventEmitter.emit('login', { id: 'abc', name: 'foo' });
