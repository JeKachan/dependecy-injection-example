export type Author = {
	name: string
	age: number
}
export type AuthorService = {
	getAuthor: () => Promise<Author>
	updateAuthor: (data: Partial<Author>) => Promise<void>
}

export type Book = {
	title: string
	authorName: string
}

export type BookService = {
	getBook: () => Promise<Book>
	updateBook: (data: Partial<Book>) => Promise<void>
}

export type LogService = {
	log: (...args: any[]) => void
}
