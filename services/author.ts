import {Author, AuthorService} from './types';

const JHON: Author = {
	name: 'Jhon',
	age: 13,
}

export const getAuthor: AuthorService['getAuthor'] = async () => {
	return JHON
}

export const updateAuthor: AuthorService['updateAuthor'] = async (data) => {
	Object.assign(JHON, data)
}


