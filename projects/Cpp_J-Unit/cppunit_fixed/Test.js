laraImport("weaver.Query")

for(var $class of Query.search("class")) {
	println("Class: " + $class.name);
	println("Location: " + $class.location);	
	println("Calls: " + Array.from(Query.searchFrom($class, "call")).length);	
	println("Is canonical: " + $class.isCanonical);			
	println("Has body: " + $class.equals($class.implementation));			
}
