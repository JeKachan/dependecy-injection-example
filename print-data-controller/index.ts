/**
 * Module for printing data information
 */
import {resolve} from '../dependencies';

const dependencies = () => ({
	authorService: resolve('author'),
	bookService: resolve('book'),
	logService: resolve('log'),
})

export async function printDataInfo() {
	const {bookService, logService, authorService} = dependencies()

	const author = await authorService.getAuthor()
	const book = await bookService.getBook()

	logService.log('Printing data info:')
	logService.log(`The book author of ${book.title} has ${author.age}`)
}

export async function doSomeUpdate() {
	const {bookService, authorService} = dependencies()

	await Promise.all([
		bookService.updateBook({title: 'New Book Title'}),
		authorService.updateAuthor({age: 33}),
	])
}
