import {registerAll, resolve} from './dependencies';
import * as authorService from './services/author'
import * as bookService from './services/book'
import {doSomeUpdate, printDataInfo} from './print-data-controller';

async function main() {
	registerAll({
		author: authorService,
		book: bookService,
		log: {
			log(...args) {
				console.log(...args)
			}
		}
	})

	const log = resolve('log')
	log.log('Program is running...')
	await printDataInfo()
	log.log('Updating some information...')
	await doSomeUpdate()
	await printDataInfo()
}

main()
