
laraImport("weaver.WeaverOptions");
laraImport("lcl.LaraCommonLanguage");
laraImport("lcl.patterns.PatternsReader");
laraImport("lcl.patterns.DetectionAlgorithm");
laraImport("lcl.patterns.grouping.GroupingUtils");

var PRINT_DETAILS = false;
var PRINT_RELATIONS = false;
var DP_CORE_COMPATIBILITY = true;
var ALGORITHM_FULL_NAMING = true;

//aspectdef Detection

	var algorithm = algorithmOf();

	let result = "";

	result += detect(algorithm, "Abstract Factory.pattern");
	// detect(algorithm, "Abstract Factory_v2.pattern");
	result += detect(algorithm, "Builder.pattern");
	result += detect(algorithm, "Bridge.pattern");
	// detect(algorithm, "Bridge_v2.pattern");
	result += detect(algorithm, "Command.pattern");
	result += detect(algorithm, "Observer.pattern");
	result += detect(algorithm, "Visitor.pattern"); 

	// Load exepected output file and compare
	const configFilename = WeaverOptions.getData().getConfigurationFile().getName();
	
	const expectedOutputFile = Io.getPath(WeaverOptions.getData().getContextFolder() + "/expected_outputs/",
						configFilename + ".txt");
	Check.strings(result, Io.readFile(expectedOutputFile));	

	
	
//end

function algorithmOf() {

	var algorithm = new DetectionAlgorithm([], []);
	algorithm.setCompatibility(DP_CORE_COMPATIBILITY);
	algorithm.setFullNaming(ALGORITHM_FULL_NAMING);
	algorithm.parseRelations();
	if (PRINT_RELATIONS) printRelations(algorithm);
	return algorithm;
}

function detect(algorithm, patternFile) {

	var patternsRootDir = WeaverOptions.getData().getContextFolder() + "/patterns/";

	let result = "";
	result += patternFile;
	
	var pattern = PatternsReader.readPattern(patternsRootDir + patternFile);
	var detections = algorithm.detect(pattern.members, pattern.connections);
	
	result += " => " + detections.length; 
	result += " , " + GroupingUtils.findSuperCandidates(pattern, detections).length; 
	result += " , " + GroupingUtils.findHyperCandidates(pattern, GroupingUtils.findSuperCandidates(pattern, detections)).length; 
	result += "\n";
	print(result);
	if (PRINT_DETAILS) printDetails(detections);

	return result;
}

function printDetails(detections) {

	detections = detections.map(detection => detection.map(d => !d.includes('.') ? d : d.substring(d.lastIndexOf('.') + 1)));
	detections = detections.map(detection => detection.map(d => !d.includes('$') ? d : d.substring(d.lastIndexOf('$') + 1)));
		
	detections.sort((a, b) => {
		for (var i = 0 ; i < a.length && i < b.length ; i++) {
			if (a[i] > b[i]) return 1;
			if (a[i] < b[i]) return -1;
		}
	  	return 0;
	});
	for (var detection of detections) println(" - " + detection);
	// println();
}

function printRelations(algorithm) {

	println("classTypes = " + algorithm.classTypesMap.size);

	algorithm.classTypesMap.forEach((classTypeObject, classTypeName) => {

		println(classTypeName + " (" + algorithm.abstractionOf(classTypeObject.classType) + ")");
		println(" - calls      " + classTypeObject.relationCalls);
		println(" - creates    " + classTypeObject.relationCreates);
		println(" - has        " + classTypeObject.relationHas);
		println(" - inherits   " + classTypeObject.relationInherits);
		println(" - references " + classTypeObject.relationReferences);
		println(" - uses       " + classTypeObject.relationUses);
	});
}


