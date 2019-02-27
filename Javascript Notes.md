**JAVSCRIPT**



#1. The < script > element

| Attributes | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| async      | the script should begin downloading immediately but should not prevent other actions on the page such as downloading resources or waiting for other scripts to load |
| charset    | the character set of the code specified using the src attribute |
| defer      | indicates that the execution of the script can safely be deferred until after the document's content has been completely parsed and displayed |
| language   | depreciated. (scirpting language being used by the code block) |
| src        | indicates an external file that contians code to be executed |
| type       | replace language. (indicates the content type)               |



**There are two ways to use the <script> element:**

1.) inline JavaScript code

```javascript
<script type="text/javascript">
	function sayHi() {
        alert('Hi!');
	}
</script>
```

2.) External Javascript file

```javascript
<script type="text/javascript" src="example.js"></script>	
```



**Tag Placement**

Tags are placed before the closing <body> tag to prevent a noticeable delay in page rendering, during which the browser will be completely blank. 

```javascript
<!DOCTYPE html>
<html>
	<head>
    	<title>Example HTML Page</title>
		<script type="text/javascript" src="example.js"></script>
		<script type="text/javascript" src="example2.js"></script>
	</head>
	<body>
		<!-- content here -->
	</body>
</html>
```



**Deferred Scripts**

The purpose of defer is to indicate that a script won't be changing the structure of the page as it executes.

```javascript
<!DOCTYPE html>
<html>
	<head>
    	<title>Example HTML Page</title>
		<script type="text/javascript" defer src="example.js"></script>
		<script type="text/javascript" defer src="example2.js"></script>
	</head>
	<body>
		<!-- content here -->
	</body>
</html>
```

**Asynchronous Scripts**

similar to defer in that it changes the way the script is processed. Async are not guaranteed to execute in the order in which they are specified but it signals the browser to begin downloading the file immediately. 

```javascript
<!DOCTYPE html>
<html>
	<head>
    	<title>Example HTML Page</title>
		<script type="text/javascript" async src="example.js"></script>
		<script type="text/javascript" async src="example2.js"></script>
	</head>
	<body>
		<!-- content here -->
	</body>
</html>
```

NOTE: The purpose of specifying an async script is to indicate that the page need not wait for the script to be downloaded and executed before continuing to load, and it also need not wait for another scripot to load and execute before it can do the same. 



Summary: 

Advantages of external file are: 

1. Maintainability
2. Caching
3. Future Proof



# 2. Basic Javascript

**Syntax**

1. Case sensitivity -- variables, function names, and operators are all case-sensitive.
2. Identifiers -- the name of a variable, function, property, or function argument. 
   - the first character must be a letter , an underscore or a dollar sign.
   - all other characters may be letters, underscores, dollar signs, or numbers.

**Comments**

A single line comment begins with two forward-slash characters

```javascript
// Single line comment
```

A multi line comment begins with a forward slash and asterisk and ends with the opposite.

```javascript
/* 
    multi-line 
    comment 
*/
```



**Strict Mode**

strict mode changes many parts of how JavaScript is executed, where some of the erratic behavior is adderssed and errors are thrown for unsafe activities. 

```javascript
"use strict";
```



**Variable**

variable can hold any type of data

```javascript
let mesage;
```

**Data Types**

| Primitive Data Types (B, U, N, S) |
| --------------------------------- |
| boolean                           |
| undefined                         |
| null                              |
| number                            |
| string                            |



**Type of Operator**

to determine the data tpe of a given variable

```javascript
alert(typeof message);
```

1. Undefined type

   - has only one value, which is the special value undefined.

2. Null type

   - has only one value, the special value null

     NOTE: When defining a variable that is meant to later hold an object, it is advisable to initialize the variable to null.

3. Boolean type

   - has only two literal values: true and false

4. Number type

   - either octal (base 8) or hexadecimal (base 16) literals.

   - floating-point value (decimal):

     ```javascript
     let floatNum = 1.1;
     ```

   - NaN -- used to indicate when an operation intended to return a number has failed.