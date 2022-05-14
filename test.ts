import {registerAll} from './dependencies';
import {AuthorService, BookService} from './services/types';
import {printDataInfo} from './print-data-controller';

async function test() {
	const logs: unknown[] = []

	registerAll({
		author: {
			getAuthor: async () => ({ name: 'Test Author', age: 33 })
		} as AuthorService,
		book: {
			getBook: async () => ({ title: 'Test book', authorName: 'Test Author' })
		} as BookService,
		log: {
			log(...args) {
				logs.push(...args)
			}
		}
	})

	await printDataInfo()

	if (logs[1] !== 'The book author of Test book has 33') {
		throw new Error('Test failed bro, pls do something with it')
	}
	console.log('Testing was successful. Nice job, bro')
}

test()
