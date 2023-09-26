# lara-dpdetecion
Scripts and build files used during the development and testing of the Design Pattern algorithm with the Lara Common Language

## configuring eclipse
Checkout the following repositories (with the latest commit used in the project):
* Lara Framework: https://github.com/specs-feup/lara-framework ([3c5831f](https://github.com/specs-feup/lara-framework/commit/3c5831f94077233df6f91d1db538af8f310e592b))
* Specs Java Libs: https://github.com/specs-feup/specs-java-libs ([fa827db](https://github.com/specs-feup/specs-java-libs/commit/fa827db586d7b2cbf94fff98873ee339f04cb694))
* Clava: https://github.com/specs-feup/clava ([1145f63](https://github.com/specs-feup/clava/commit/1145f6304b41a935130258fbb03f0aaf25cb60aa))
* Kadabra: https://github.com/specs-feup/kadabra ([1ff9ff0](https://github.com/specs-feup/kadabra/commit/1ff9ff069457de5be40305ad41fd74778cc5f3e2))

## build, run, and test

Download [eclipse-build](http://specs.fe.up.pt/tools/eclipse-build.jar) (source code can be found [here](https://github.com/specs-feup/specs-java-tools/tree/master/EclipseBuild)).

For each language (Java and C/C++), do the following:

### Java

Run the following command:

`java -jar eclipse-build.jar --config kadabra.build`

This should create the file JavaWeaver.jar.

Then, run the following command. You may change the last argument to any of the *.kadabra config files in the repository.

`java -jar .\JavaWeaver.jar -c config.kadabra`

### C/C++

Run the following command:
`java -jar eclipse-build.jar --config clava.build`

This should create the file ClavaWeaver.jar.

Then, run the following command. You may change the last argument to any of the *.clava config files in the repository.

`java -jar .\ClavaWeaver.jar -c config.clava`

Note: File clava.build may need different configurations depending of the machine, due to import of the std lib.