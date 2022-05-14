## Dependency injection example

Simple example of how can be implemented DI and IoC concept in typescript without addition library.
All dependencies type's should be imported to *dependency.ts* file for constructing type of all project dependencies.
No important where  dependencies type's will be stored.
After all types will be defined - you need call `register` function on application or tests bootstrapping for register dependencies or they mocks.
You may notice that `dependency.ts` should not depend on other modules, **BUT** when it knows everything about services by using they types - it can be easily implemented in _type safe_ manner, and no reason here follow "clean architecture" by sacrificing type safety without any benefits except of making our internal purist happy.


#### Start application:

`npm run start`

#### Run tests:

`npm run test`
