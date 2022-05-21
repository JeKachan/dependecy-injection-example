import {AuthorService, BookService, LogService} from './services/types';

type DependenciesMap = {
	author: AuthorService
	book: BookService
	log: LogService
}

type DependenciesNames = keyof DependenciesMap

let dependenciesMap: DependenciesMap | undefined

/**
 * @description register all dependencies
 */
export function registerAll(deps: Readonly<DependenciesMap>) {
	dependenciesMap = deps
}

/**
 * @description register single dependency by name
 */
export function register<Key extends DependenciesNames>(name: Key, deps: DependenciesMap[Key]) {
	assertDependenciesMapExists(dependenciesMap)
	dependenciesMap[name] = deps
}

/**
 * @description resolve dependency by name
 */
export function resolve<ServiceName extends DependenciesNames>(name: ServiceName): DependenciesMap[ServiceName] {
	assertDependenciesMapExists(dependenciesMap)
	const service = dependenciesMap[name]
	if (!service) {
		throw new Error(name + ' service not initialized')
	}
	return service
}

function assertDependenciesMapExists(depsMap?: DependenciesMap): asserts depsMap is DependenciesMap {
	if (!depsMap) {
		throw new Error('Trying getting dependency before initialization')
	}
}

