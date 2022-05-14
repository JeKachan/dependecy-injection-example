import {Book, BookService} from './types';

const BOOK: Book = {
	title: 'Best book',
	authorName: 'jhon',
}

export const getBook: BookService['getBook'] = async () => {
	return BOOK
}

export const updateBook: BookService['updateBook'] = async (data) => {
	Object.assign(BOOK, data)
}


