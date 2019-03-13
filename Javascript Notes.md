# JAVSCRIPT

# ES5 - ES6

![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190302182058321.png)



1. Variables 

   ```javascript
   / ES5 Version
   
   var name5 = 'Jane Smith';
   va age5 = 23;
   name5 = 'Jane Miller';
   console.log(name5); // Jane Miller
   
   // ES6 Version
   const name6 = 'Jane Smith';
   let age6 = 23;
   name6 = 'Jane Miller';
   console.log(name6); // ERROR result since it's constant
   ```

2. Functions

   ```javascript
   //ES5
   function driversLicense(passedTest){
       if(passedTest) {
           var firstName = 'John';
           var yearOfBirth = 1990;
           
           console.log(firstName + ', born in ' + yearOfBirth + ', yes!');
       }
   }
   
   driversLicense(true);
   
   //ES6
   function driversLicense(passedTest){
       if(passedTest) {
           let firstName = 'John';
           const yearOfBirth = 1990;
           
           console.log(firstName + ', born in ' + yearOfBirth + ', yes!');
       }
   }
   
   
   
   ```

   

3. Blocks

   ```javascript
   // Blocks and IIFEs
   
   // ES5
   (function() {
       var c = 3; 
   })();
   
   // ES6
   { 
   	const a = 1;
   	let b = 2;
   }
   
   console.log(a + b);
   ```

4. Strings

   ```javascript
   let firstName = 'John';
   let lastName = 'Smith';
   const yearOfBirth = 1990;
   
   function calcAge(year) {
       return 2016 - year;
   }
   
   // ES5
   console.log('This is ' + firstName + ' ' + lastname + '. born in ' + yearOfbirth + ' He is ' + calcAge(yearOfBirth) + 'year old');
   
   // ES6
   console.log(`This is ${firstName} ${lastname} born in ${yearOfbirth}. He is ${calcAge(yearOfBirth)} year old`);
   
   const n = `${firstName} ${lastName}`;
   console.log(n.startWith('j')); // false
   console.log(n.endsWith('Sm'));
   console.log(n.includes('oh'));
   console.log(`${firstName}`.repeat(5));
   ```

5. Arrow Functions

   ```javascript
   const years = [1990, 1965, 1982, 1937];
   
   //ES5
   var ages5 = years.map(function(el) {
       return 2016 - el;
   });
   console.log(age5);
   
   //ES6
   let age6 = years.map(el => 2016 - el);
   console.log(ages6);
   
   ages6  = years.map((el, index) => `Age element ${index + 1}: ${2016-el}.`);;
   console.log(ages6);
   
   ages6 = years.map((el, index) => {
       const now = new Date().getFullYear();
       const age = now - el;
       return `Age element ${index + 1}: ${age}`;
   });
   console.log(ages6);
   
   
   /** Arrow functions doesn't have a this keyword they use the functions this keyword **/
   
   //ES5
   var box5 = {
       color: 'green',
       position: 1,
       clickMe: function() {
           // This keyword points to the window object so the position and color is 
           // not defined in window 
           
           /** solution: 
           
           let self = this;
           
           **/
           document.querySelector('.green').addEventListener('click', function() {
               var str = 'This is box number ' + this.position + ' and it is ' + 
                   this.color;
               alert(str);
           });
       }
   }
   box5.clickMe(); // This is box number undedfined and it is undefined;
   
   //ES6
   var box6 = {
       color: 'green',
       position: 1,
       clickMe: function() {
           // This point to the this keyword of the method. It shares the lexical 
           // keyword to the sorroundings.
           
           document.querySelector('.green').addEventListener('click', () => {
               let str = 'This is box number ' + this.position + ' and it is ' + 
                   this.color;
               alert(str);
           });
       }
   }
   box5.clickMe();
   
   
   //ES5
   function Person(name) {
       this.name = name;
       
   }
   
   Person.prototype.myFriends5 = function(friends) {
       var arr = friends.map(function(el) {
           return this.name + ' is friend with ' + el;
       }).bind(this); // solution
       
       console.log(arr);
   }
   
   var friends = ['Bob', 'Jane', 'Mark'];
   new Person('john').myFriends5(friends);
   
   //ES6
   Person.prototype.myFriends6 = function(friends) {
       let arr = friends.map(el => `${this.name} is friends with ${el}`);
       console.log(arr);
   }
   new Person('Mike').myFriends6(friends);
   ```

6. Destructuring 

   ```javascript
   //ES5
   var john = ['John', 26];
   
   //ES6
   const [name, age] = ['John', 26];
   console.log(name);
   console.log(age);
   
   const obj = {
       firstName: 'John',
       lastName: 'Smith'
   };
   
   const {firstName, lastName} = obj;
   console.log(firstName);
   console.log(lastName);
   
   const {firstName: a, lastName: b} = obj;
   console.log(a);
   console.log(b);
   
   
   
   // Practical Use
   function calcAgeRetirement(year) {
       const age = new Date().getFullYear() - year;
       return [age, 65 - age];
   }
   
   const [age, retirement] = calcAgeRetirement(1990);
   console.log(age);
   console.log(retirement);
   ```

   

7. Arrays

   ```javascript
   const boxes = document.querySelectorAll('.box');
   
   //ES5
   var boxesArr5 = Array.prototype.slice.call(boxes);
   boxesArr5.forEach(function(cur) {
      cur.style.background = "blue";
   });
   
   //ES6
   const boxesArr6 = Array.from(boxes);
   boxesArr6.forEach(cur => cur.style.backgroundColor = "blue");
   
   //LOOP in Array
   
   
   //ES5
   for(var i = 0; i < boxesArr5.length; i++)  {
       if (boxesArr5[i].className === "blue") {
           continue;
           //break;
       }
       
       boxesArr5[i].textContent = 'I changed to blue';
   }
   
   //ES6
   for(const item of boxesArr6) {
       if(item.className.includes("blue")) {
           continue;
       }
       
       item.textContent = 'I changed to blue';
   }
   
   
   //ES5
   var ages = [12,17,8,21,14,11];
   
   var full = ages.map(function(cur){
       return cur >= 18;
   });
   console.log(full); //false, false, false, true, false, false
   full.indexOf(true); //3
   console.log(ages[full.indexOf(true)]); //21
   
   //ES6
   ages.findIndex(curr => cur >= 18); // 3
   ages.find(cur => cur >= 18); //21
   
   
   ```

8. Spread Operator

   ```javascript
   function addFourAges (a, b, c, d) {
       return a + b + c + d;
   }
   
   var sum1 = addFourAges(18,30,12,21);
   console.log(sum1);
   
   //ES5
   var ages = [18, 30, 12, 21];
   var sum2 = addFourAges.apply(null, ages);
   console.log(sum2);
   
   //ES6
   const sum3 = addFourAges(...ages);
   console.log(sum3);
   
   const familySmith = ['John', 'Jane', 'Mark'];
   const familyMiller = ['Mary', 'Bob', 'Ann'];
   const bigFamily = [...familySmith, 'Lily', ...familyMiller];
   console.log(bigFamily);
   
   const h = document.querySelector('h1');
   const boxes = document.querySelectorAll('.box');
   const all = [h, ...boxes];
   
   Array.from(all).forEach(cur => cur.style.color = 'purple');
   ```

9. Rest Parameters

   ```javascript
   //ES5
   function isFullAge5() {
       // console.log(arguments);
       var argsArr = Array.prototype.slice.call(arguments);
       argsArr.forEach(function(cur) {
           console.log((2016 - cur) >= 18);
       });
   }
   
   isFullAge(1990, 1999, 1965);
   isFullAge(1990, 1999, 1965, 2016, 1987);
   
   //ES6
   function isFullAge6(...years) {
   	years.forEach(cur => console.log((2016 - cur) >= 18));
   };
   isFullAge(1990, 1999, 1965);
   
   /** 2 different arguments **/
   //ES5
   function isFullAge5(limit) {
       // console.log(arguments);
       var argsArr = Array.prototype.slice.call(arguments, 1);
       argsArr.forEach(function(cur) {
           console.log((2016 - cur) >= limit);
       });
   }
   
   isFullAge(21, 1990, 1999, 1965);
   
   //ES6
   function isFullAge6(limit, ...years) {
   	years.forEach(cur => console.log((2016 - cur) >= limit));
   };
   isFullAge(21, 1990, 1999, 1965);
   ```

10. Default

    ```javascript
    // ES5
    function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
        
        lastName === undefined ? lastName = 'Smith' : lastName = lastName;
        nationality === undefined ? nationality = 'american' : nationality = nationality;
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
    }
    
    var john = new SmithPerson('John', 1990);
    /** Default: lastName will be Smith **/
    var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); /** overwrite the default parameters **/
    
    //ES6
    function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
           
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
    }
    
    var john = new SmithPerson('John', 1990);
    /** Default: lastName will be Smith **/
    var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); /** overwrite the default parameters **/
    ```

11. Maps

    ```javascript
    // Only ES6
    const question = new Map();
    
    question.set('question', 'What is the official name of the latest major Javascript version?');
    
    question.set(1, 'ES5');
    question.set(2, 'ES6');
    question.set(3, 'ES2015');
    question.set(4, 'ES7');
    question.set('correct', 3);
    question.set(true, 'Correct answer :D');
    question.set(false, 'Wrong, please try again!');
    question.get('question');
    // question.size;	//8
    
    if(question.has(4)) {
        question.delete(4);
        console.log('Answer 4 is here');
    }
    
    //question.clear();
    // question.forEach((value, key) => console.log(`'This is ${key}, and it's set to ${value}`));
    
    for (let [key, value] of question.entries()) {
    	// console.log(`'This is ${key}, and it's set to ${value}`);
        if (typeof(key) === 'number') {
            console.log(`Answer ${key}: ${value}`);
        }
    }
    
    const ans = parseInt(prompt('Write the correct answer'));
    
    console.log(question.get(ans === question.get('answer')));
    
    ```

12. Classes

    In ES5 function constructors is used but in ES6 it's classes

    ```javascript
    //ES5
    var Person5 = function(name, yearOfBirth, job) {
    	
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    Person5.prototype.calculateAge = function() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    var john5 = new Person5('John', 1990, 'teacher');
    
    //ES6
    class Person6 {
        constructor (name, yearOfBirth, job) {
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }
        
        calculateAge() {
                var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
        }
        
        static greeting() {
            console.log('Hey there!');
        }
    }
    
    const john6 = new Person6('John', 1990, 'teacher');
    Person6.greeting();
    
    /** WORKING WITH SUBCLASS **/
    //ES5
    var Person5 = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    person5.prototype.calculateAge = function() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    	Person5.call(this, name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    Athlete5.prototype = Object.create(Person5.prototype);
    
    var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
    
    Athlete5.prototype.wonMedal = function() {
        this.medals++;
        console.log(this.medals);
    }
    
    johnAthlete5.calculateAge(); //
    johnAthlete5.wonMedals();
    
    //ES6
    class Person6 {
        constructor(name, yearOfBirth, job) {
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }
        
        calculateAge() {
            var age = new Date().getFullYear - this.yearOfBirth;
            console.log(age);
        }
    }
    
    class Athelete6 extends Person6 {
        constructor (name, yearOfBirth,job, olympicGames, medals) {
    	
            super(name, yearOfBirth, job);
    	    this.olympicGames = olympicGames;
    		this.medals = medals;    
        }
        
        wondMedal() {
            this.medals++;
            console.log(this.medals);
        }
    }
    
    const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
    
    johnAthlete6.wonMedal();
    johnAthlete6.calculateAge();
    ```

    

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

```javascript
// ES5 Version

var name5 = 'Jane Smith';
va age5 = 23;
name5 = 'Jane Miller';
console.log(name5); // Jane Miller

// ES6 Version
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); // ERROR result since it's constant
```



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

   - Number Conversion

     a. Number() -- can be used on any data type

     b. parseFloat() -- converting strings to float

     c. parseInt() -- converting strings to int

5. String Type

   - a sequence of zero or more 16-bit unicode characters and string can be determined by double quotes ("") or single quotes('')
   - Strings are immutable -- they are created, their values cannot change
   - Character literals

   | Literal | Meaning                                                     |
   | ------- | ----------------------------------------------------------- |
   | \n      | New line                                                    |
   | \t      | Tab                                                         |
   | \b      | Backspace                                                   |
   | \r      | Carriage return                                             |
   | \f      | Form feed                                                   |
   | \\\     | backslash                                                   |
   | \'      | Single quote ( ' ' )                                        |
   | \"      | Double qoute (" ")                                          |
   | \xnn    | A character represented by hexadecimal code nn              |
   | \unnn   | A unicode character represented by the hexadecimal code nnn |
   |         |                                                             |

   - Convert to a string

     - toString() method -- available on values that are numbers, Booleans, objects, and strings
     - String() -- returns literal text for the values

   - Object Type

     - Objects are created by using the new operator followed by the name of the object type to create

     ```javascript
     let o = new Object();
     ```

     - Each object instance has the following properties and methods

       

   | Methods                            | Properties                                                   |
   | ---------------------------------- | ------------------------------------------------------------ |
   | constructor                        | function that was used to create the object                  |
   | hasOwnProperty(propertyName)       | indicates if the given property exists on the object instance. |
   | isPrototypeOf(object)              | determines if the object is a protype of another object.     |
   | propertyIsEnumerable(propertyName) | Indicates if the given property can be enumerated using for-in statement |
   | toLocalString()                    | returns a string representation of the object that is appropriate for the locale of execution environment |
   | valueOf()                          | Returns a string, number, or boolean equivalent of the object |
   |                                    |                                                              |

   ```javascript
   // ES6
   let firstName = 'John';
   let lastName = 'Smith';
   const yearOfBirth = 1990;
   
   function calcAge(year) {
       return 2016 - year;
   }
   
   //ES5
   console.log('This is ' + firstName + ' ' + lastName)
   ```

   

**Operators**

-- set of operators that can be used to manipulate data values.

**Unary Operators**

-- increment and decrement operators

```javascript
let age = 29;
++age;
```

-- unary plus and minus

```javascript
let num = 25;
num = -num; //-25
```

**Boolean Operators**

1. Logical NOT -- returns a Boolean value, regardless of the daa type it's used on.

   ```javascript
   alert(!false); // true
   ```

2. Logical AND

   | Operand 1 | Operand 2 | Result |
   | --------- | --------- | ------ |
   | true      | true      | true   |
   | true      | false     | false  |
   | false     | true      | false  |
   | false     | false     | fasle  |
   |           |           |        |

3. Logical OR

   | Operand 1 | Operand 2 | Result |
   | --------- | --------- | ------ |
   | true      | true      | true   |
   | true      | false     | true   |
   | false     | true      | true   |
   | false     | false     | false  |

**Mulitplicative Opertors**

```javascript
/** MULTIPLICATION **/
let result = 1 * 2; // 2

/** DIVISION **/
let result = 6 / 3; // 2

/** MODULUS **/
let result = 26 % 5 // 1
```

**Additive Operators**

```javascript
/** ADD **/
let result = 1 + 2; //3

/** SUBTRACT **/
let result = 5 - 4; //1
```

**Relational Operators**

```javascript
let result = 5 > 3 //true
```

**Equality Operators**

| Expression        | Value |
| ----------------- | ----- |
| null == undefined | true  |
| "NaN" == NaN      | false |
| 5 == NaN          | false |
| NaN == NaN        | false |
| NaN != NaN        | true  |
| false == 0        | true  |
| true == 1         | true  |
| true == 2         | false |
| undefined == 0    | false |
| null == 0         | false |
| "5" == 5          | true  |
|                   |       |

**Conditional Operator**

```javascript
/** TERNARY OPERATOR **/

variable = boolean_expression ? true_value : false_value;
```



**Assignment Operator**

| Operator             | Assign |
| -------------------- | ------ |
| multiply             | *=     |
| divide               | /=     |
| modulus              | %=     |
| add                  | +=     |
| subtract             | -=     |
| left shift           | <<=    |
| signed right shift   | >>=    |
| unsigned right shift | >>>=   |
|                      |        |

**Comma Operator**

-- allows execution of more than one operation in a single statement.

```javascript
let num1 = 1, num2 = 2, num3 =3;
```

**Statement**

1. If statement 

   ```javascript
   let i = 15;
   if ( i > 25) {
       alert('greater than 25');
   } else {
       alert('lesser than 25');
   }
   ```

2. Do-while statement

   ```javascript
   do {
       statement
   } while (expression)
   ```

3. While statement

   ```javascript
   let i = 0;
   while(expression) {
       statement
   }
   ```

4. For statement

   ```javascript
   let count = 10;
   
   for(let i = 0; i < count; i++) {
       alert(i);
   }
   ```

5. For -in statement

   ```javascript
   for (let property in expression) {
       statement;
   }
   ```

6. Labeled Statement

   ```javascript
   label: statement
   ```

7. Break and continue statement

   ```javascript
   let num = 0;
   
   for (let i = 0; i < 10; i++) {
       if(i % 5 === 0) {
           break; 
           // continue;
       }
       num++;
   	
   }
   alert(num);
   ```

8. With Statement

   ```javascript
   /**
       let qs = location.search.substring(1);
       let hostName = location.hostname;
       let url = location.href;
   **/
   
   with(location) {
       let qs = search.substring(1);
       let hostName = hostname;
       let url = href;
   }
   ```

9. Switch Statement

   ```javascript
   switch(expression) {
       case value: statement
       break;
       
       case value: statement
       break;
       
       default: statement
   }
   ```

**Functions**

```javascript
function functionName(arg0, arg1,...,argN) {
    statements;
};
```

NOTE: 

Functions cannot be overloaded. functions don't have signatures, because the arguments are represented as an array containing zero or more values. Without function signatures, true overloading is not possible. 

```javascript
// ES5
function driversLicense(passedTest) {
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
        
        console.log(firstName + ', born in ' + yearOfBirth +
                   ', is now officially allowed to drive a car.');
    }
}

driversLicense5(true);

// ES6
function driversLicense(passedTest) {
    if(passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
        
        console.log(firstName + ', born in ' + yearOfBirth +
                   ', is now officially allowed to drive a car.');
    }
}

driversLicense6(true);
```

Blocks and IIFEs

```javascript
//ES5 
(function() {
    var c = 3;
})();

//ES6
{
    const a = 1;
    let b = 2;
}

console.log(a + b); // Reference Error
```



# 3. Variable, Scope, and Memory

**Primitive and reference value**

Primitive value -- are simple atomic piecees of data. Primitive values can't have properties added to them even though attempting to do so won't cause an error. 

Reference value -- are objects that may be made up of multiple values. When manipulating objects, you're really working on reference to that object rather than the actual object itself.



**Dynamic Properties**

primitive and reference values are defined similarly: a variable is created and assigned a value.

```javascript
let person = new Object();
person.name = "Nicholas";
alert(person.name); //"Nicholas"
```

**Copying Values**

primitive and reference values act differenlty when copied from one variable to another.

```javascript
let num1 = 5;
let num2 = num1; //5
```

**Argument Passing**

All function arguments are passed by value.

if the value is primitive, then it acts just like a primitive variable copy, if the value is reference, it acts just like a refernce variable copy.

```javascript
funtion addTen(num) {
    num += 10;
    return num;
}

let count = 20;
let result = addTen(count);
alert(count); //20 -- no change
alert(result); //30
```

**Determining Type**

typeof operator is the best way to determine if a variable is a primitive type.

**Garbage Collection**

execution environment is responsible for managing the memory required during code execution. JavaScript frees developers from worrying about memory amangement by automatically allocatin what is needed and reclaiming memory that is no longer being used. 

**Mark and Sweep**

when a variable comes into context, such as when a variable is declared inside a function, it is flagged as being in context.

When the garabage collector runs, it marks all variables stored in memory. It then clears its mark off of variables that are in context and variables that are referenced by in-context variables. The variables that are marked after that are considered ready for deletion, because they can't be reached by any in-context  variables. The garbage collector then does a memory sweep, destroying each of the marked values and reclaiming the memory associated with them. 

**Reference Counting**

every value keeps track of how many references are made to it. When a variable is declared and a reference value is assigned, the reference count is one. If another variable is then assigned to the same value, the reference count is incremented. 

**Performance**

The garbage collector runs periodically and can potentially be an expensive process if there are a large number of variable allocations in memory, so the timing of the garbage-collection process is important. 

**Managing Memory**

In a garbage-collected programming environment, developers typically don't have to worry about memory management. Keeping the amount of used memory to a minimum leads to a better page performance. 



# 4. Reference Type

**The Object Type**

1. New Operator

   ```javascript
   let person = new Object();
   person.name = "Nicholas";
   person.age = 29;
   ```

2. Object Literal

   ```javascript
   let person = {
       name: "Nicholas",
       age: 29
   }
   ```

   NOTE: Object Literal notation is preferred because it requires less code and visually encapsulates all related data.

   ```javascript
   function displayInfo(args) {	
       let output = "";
       
       if (typeof args.name == "string") {
           output += "Name: " + args.name + "\n";
       }
       
       if (typeof args.age == "name") {
           output += "Age: " + args.age + "\n";
       }
       
       alert(output);
   }
   
   displayInfo({
       name: "Nicholas",
       age: 29
   });
   
   displayInfo({
       name: "Greg"
   });
   ```

   

**Accessing the object properties**

1. Dot notation

2. ```javascript
   alert(person.name);	
   ```

2. Bracket Notation

   ```
   alert(person[name]);
   ```

**The Array Type**

1. Array Constructor

   ```javascript
   let colors = new Array();
   
   // length
   let colors = new Array(20);
   ```

2. Array Literal 

   ```javascript
   let colors = ["red", "blue", "green"];	
   let names = [];
   
   alert(colors.length); //3
   alert(names.length); //0
   ```

   NOTE: if the length were set to a number greater than the number of items in the array, the new items would each get filled with teh value of undefined.

   ```javascript
   let colors = ["red", "blue", "green"];
   colors.length = 4;
   alert(colors[3]); // undefined
   ```

3. Detecting Arrays

   - instanceof -- when dealing with a single web page, a single global scope

     ```javascript
     if (value instanceof Array) {
         // do something on the array
     }
     ```

   - isArray -- deterimine if a given value is an array regardless of teh global execution context in which it was created.

     ```javascript
     if (Array.isArray(value)) {
         // do something on the array
     }
     ```

4. Methods

   *Conversion*

   - toString() -- return the same value when called on the array, create the final string.

   - valueOf() -- return the same value when called on the array

     ```javascript
     let colors = ["red", "blue", "green"];
     alert(colors.toString()); 			// red, blue, green
     alert(colors.valueOf());			// red, blue, green
     alert(colors);						// red, blue, green
     ```

   - toLocaleString()

     ```javascript
     let person1 = {
         toLocalString: function() {
             return "Nikolaos";
         }, 
         
         toString: function() {
             return "Nicholas";
         }
     }
     
     let person2 = {
         toLocalString: function() {
             return "Grigorios";
         },
         toString: function() {
             return "Greg";
         }
     }
     
     let people = [person1, person2];
     alert(people);
     alert(people.toString()); // Nicholas, Greg
     alert(people.toLocaleString()); //Nikolaos,Grigorios
     ```

   *Stacks*

   -- A stack is referred to as a last in first out structure meaning that the most recently added item is the first one removed.

   - push() -- accepts any number of arguments and adds them to the end of teh array, returning the array's new length

   - pop() -- removes the last item in teh array, decrements the array's length, and returns the item

     ```javascript
     let colors = new Array();
     let count = colors.push("red", "green");
     alert(count); //2
     
     count = colors.push("black");
     alert(count); //3
     
     let item = colors.pop();
     alert(item); // black
     alert(colors.length); //2
     
     ```

   *Queue*

   -- adds items to the end of a list and retrieves items from the front of the list

   - shift() -- removes the first item in teh array and returns it, decrementing the length of the array by one.

   - unshift() -- add any number of items of the front of an array and return the new array length

     ```javascript
     let item = colors.shift(); // get the first item
     alert(item); //"red"
     alert(colors.length) //2
     
     let count = colors.unshift("red", "green"); // push two items
     count = colors.unshift("black"); // push another item on
     ```

   *Reordering* 

   -- reordering items already in the array

   - reverse() -- reverses the order of items in an array.

     ```javascript
     let values = [1,2,3,4,5];
     values.reverse();
     alert(values); //5,4,3,2,1
     ```

   - sort() -- puts the items in ascending order -- with the smallest value first and largest value last

     ```javascript
     let values = [0,1,5,10,15];
     values.sort();
     alert(values); //0,1,10,15,5
     
     //comparison function that indicates which values should come as best solution to sort.
     
     function compare(value1, value2) {
         if(value1 < value2) {
             return -1;
         } else if (value1 > value2) {
             return 1;
         } else {
             return 0;
         }
     }
     
     values.sort(compare);
     alert(values); //15,10,5,1,0
     ```

   *Manipulation*

   -- manipulate data in an array

   - concat() -- allows you to create a new array based on all of the items in the current array. This method begins by creating a copy of the array and then appending the method argument sto the end and returning the newly constructed array.

     ```javascript
     let colors = ["red", "green", "blue"];
     let colors2 = colors.concat("yellow", ["black", "brown"]);
     
     alert(colors); // red,green,blue
     alert(colors2); //red,green,blue,yellow,black,brown
     ```

   - slice() -- creates an array that contains one or more items already contain one or more items already contained in an array.

   - ```javascript
     let colors = ["red", "green", "blue", "yellow", "purple"];
     let colors2 = colors.slice(1);
     let colors3 = colors.slice(1,4);
     
     alert(colors2); //green,blue,yellow,purple
     alert(colors3); //green,blue,yellow
     ```

   - splice() -- to insert items into the middle of an array.

     Three distinct ways of using this method: 

     - Deletion -- any numbers of items can be deleted from teh array by specifiying just two arguments: 

       ```javascript
       splice(0, 2); // deletes the first two items
       ```

     - Insertion -- items can be inserted into a specific potision by providing three or more arguments

       ```javascript
       splice(2, 0, "red", "green") 
       // inserts the strings "red" and green" into the array at position 2
       ```

     - Replacement -- Items can be inserted into a specific position while simultaneously deleting items, if yo specificy three arguments.

       ```javascript
       splice(2, 1, "red", "green");
       // delets one item at position 2 and then inserts the strings "red" and "green" into the array at position 2	
       ```

       Example:

       ```javascript
       let colors = ["red","green","blue"];
       let removed = colors.splice(0,1);	//remove the first item
       alert(colors);			//green, blue
       alert(removed);			//red - one item array
       
       removed = colors.splice(1,0,"yellow","orange"); //insert 2 items at 	
       												position 1
       alert(colors); 			//green,yellow,orange,blue
       alert(removed);			//empty array
       
       removed = colors.splice(1,1,"red","purple"); //insert 2 values, remove 1
       alert(colors); 		//green,red,purple,orange,blue
       alert(removed);			//yellow - one item array
       ```

   *Location*

   -- finding the location of an array

   - indexOf() -- starts searching from the front of the array(item 0) and continues to the back.

   - lastIndexOf() -- starts from the last item in the array and continues to the front.

     ```javascript
     let numbers = [1,2,3,4,5,4,3,2,1];
     alert(numbers.indexOf(4)); //3
     alert(numbers.lastIndexOf(4)); //5
     ```

   *Iterative*

   - every() -- runs the given function on every item in teh array and returns true if the functions returns true for every item

     ```javascript
     let numbers = [1,2,3,4,5,4,3,2,1];
     let everyResult = numbers.every(function(item, index, array)) {
         return (item > 2);
     }
     
     alert(everyResult); //false
     ```

   - filter() -- runs the given function on every item in the array and returns an array of all items for which the functions returns true

     ```javascript
     let numbers = [1,2,3,4,5,4,3,2,1];
     let filterResults = numbers.filter(function(item, index, array)) {
         return (item > 2);
     }
     
     alert(filterResults); //false
     ```

   - forEach() -- runs the given function on every item in the array. This method has no return value.

     ```
     let numbers = [1,2,3,4,5,4,3,2,1];
     numbers.forEach(function(item, index, array)) {
         // do something
     }
     ```

     

   - map() -- runs the given function on every item in the array and returns the rsult of each funciton call in an array

     ```javascript
     let numbers = [1,2,3,4,5,4,3,2,1];
     let mapResult = numbers.map(function(item, index, array)) {
         return item * 2;
     }
     
     alert(mapResult); //[2,4,6,8,10,8,6,4,2];
     ```

     

   - some() -- runs the given funciton on every item in the array and returns true if the function returns true for any one item.

     ```javascript
     let numbers = [1,2,3,4,5,4,3,2,1];
     let someResult = numbers.some(function(item, index, array)) {
         return (item > 2);
     }
     
     alert(someResult); //true
     ```

   *Reduction*

   -- iterates over all items in the array and build up a value that is ultimately returned. 

   - reduce() -- does this starting at the first item and traveling toward the last.

     ```javascript
     let values = [1,2,3,4,5];
     let sum = values.reduce(function(prev, cur, index, array) {
         return prev + cur;
     })
     
     alert(sum) //15
     ```

     

   - reduceRight() -- starts at the last and travels towards the first

     ```javascript
     let values = [1,2,3,4,5];
     let sum = values.reduceRight(function(prev, cur, index, array) {
         return prev + cur;
     })
     
     alert(sum) //15
     ```

   **The Data Type**

   *Date Constructor*

   ```javascript
   let now = new Date();
   
   /* When the Date constructor is used without any arguments, the created object is assigned the current date and time */
   ```

   *Method*

   - Date.parse() -- accepts a string argument representing a date. It attempts to convert the string into a millisecond representation of a date.

     ```javascript
     let someDate = new Date(Date.parse("May 25, 2004"));	
     ```

   - Date.UTC() -- returns the millisecond representation of a date but constructs that value using different information. 

     ```javascript
     let y2k = new Date(Date.UTC(2000, 0)) // January 1, 2000 at midnight GMT
     ```

   - Date() -- the date and time created are in the local time zone not in GMT

     ```javascript
     let y2k = new Date(2000, 0); //January 1, 2000 at midnight local time
     ```

   - Date.now() -- returns the millisecond representation of the date and time at which the method is executed.

     ```javascript
     //get start time
     let start = Date.now();
     
     //call a function
     doSomething();
     
     let sttop = Date.now();
     result = stop - start;
     ```

   

   *Inherited Methods*

   -- Date type overrides toLocalString(), toString(), and valueOf().

   

   *Date-Formatting Methods*

   | Method               | Description                                                  |
   | -------------------- | ------------------------------------------------------------ |
   | toDateString()       | Display the date's day of the week, month, day of the month, and year in an implementation-specific format |
   | toTimeString()       | Display the date's hours, minutes, seconds, and time zone in an implementation-specific format |
   | toLocaleDateString() | Display the date;s day of the week, month, day of the month, and year in an implementation and local specific format |
   | toLocaleTimeString() | Display the date's hours, minutes, and seconds in an implementation-specific format. |
   | toUTCString()        | Display the complete UTC date in an implmentation-specific format |
   |                      |                                                              |

   *Date/Time Component*

   | Method                            | Description                                                  |
   | --------------------------------- | ------------------------------------------------------------ |
   | getTime()                         | returns the milliseconds representation of the date; same as valueof() |
   | setTime(milliseconds)             | Sets the milliseconds representation of the date, thus changing the entire date |
   | getFullYear()                     | returns the four-digit year (2007 instead of just 07)        |
   | getUTCFullYear                    | returns the four-digit year of the UTC date value            |
   | setFullYear(year)                 | sets the year of the date. The year must be given with four digits (2007 instead of just 07) |
   | setFullUTC(year)                  | sets the year of the UTC date. The year must be given with four digits (2007 instead of 07); |
   | getMonth()                        | Returns the month of the date, where 0 represents January and 11 represents December |
   | getUTCMonth()                     | Returns the month of the UTC date, where 0 represents January and 11 represents December |
   | setMonth*(*month*)*               | Sets the month of the date, which is any number 0 or greater.Numbers greater than 11 add years. |
   | setUTCMonth*(*month*)*            | Sets the month of the UTC date, which is any number 0 or greater. Numbers greater than 11 add years. |
   | getDate()                         | Returns the day of the month (1 through 31) for the date.    |
   | getUTCDate()                      | Returns the day of the month (1 through 31) for the UTC date. |
   | setDate*(*date*)*                 | Sets the day of the month for the date. If the date is greater than the number of days in the month, the month value also gets increased. |
   | setUTCDate*(*date*)*              | Sets the day of the month for the UTC date. If the date is greater than the number of days in the month, the month value also gets increased. |
   | getDay()                          | Returns the date’s day of the week as a number (where 0 represents Sunday and 6 represents Saturday). |
   | getUTCDay()                       | Returns the UTC date’s day of the week as a number (where 0 represents Sunday and 6 represents Saturday). |
   | getHours()                        | Returns the date’s hours as a number between 0 and 23.       |
   | getUTCHours()                     | Returns the UTC date’s hours as a number between 0 and 23.   |
   | setHours(hours)                   | Sets the date’s hours. Setting the hours to a number greater than 23 also increments the day of the month. |
   | setUTCHours*(*hours*)*            | Sets the UTC date’s hours. Setting the hours to a number greater than 23 also increments the day of the month. |
   | getMinutes()                      | Returns the date’s minutes as a number between 0 and 59.     |
   | getUTCMinutes()                   | Returns the UTC date’s minutes as a number between 0 and 59. |
   | setMinutes*(*minutes*)*           | Sets the date’s minutes. Setting the minutes to a number greater than 59 also increments the hour. |
   | setUTCMinutes*(*minutes*)*        | Sets the UTC date’s minutes. Setting the minutes to a number greater than 59 also increments the hour. |
   | getSeconds()                      | Returns the date’s seconds as a number between 0 and 59.     |
   | getUTCSeconds()                   | Returns the UTC date’s seconds as a number between 0 and 59. |
   | setSeconds*(*seconds*)*           | Sets the date’s seconds. Setting the seconds to a number greater than 59 also increments the minutes. |
   | setUTCSeconds*(*seconds*)*        | Sets the UTC date’s seconds. Setting the seconds to a number greater than 59 also increments the minutes. |
   | getMilliseconds()                 | Returns the date’s milliseconds.                             |
   | getUTCMilliseconds()              | Returns the UTC date’s milliseconds.                         |
   | setMilliseconds (milliseconds)    | Sets the date’s milliseconds.                                |
   | setUTCMilliseconds (milliseconds) | Sets the UTC date’s milliseconds.                            |
   | getTimezoneOffset()               | Returns the number of minutes that the local time zone is o set from UTC. For example, Eastern Standard Time returns 300. This value
changes when an area goes into Daylight Saving Time. |
   |                                   |                                                              |

*Regex Type*

```javascript
let expression = /pattern/flags	
```

| Flags | Description                                                  |      |
| ----- | ------------------------------------------------------------ | ---- |
| g     | Indicates global mode, meaning the pattern will be applied to all of the string instead of stopping after the first match is found. |      |
| i     | case-insensitive mode, meaning the case of the pattern and the string are ignored when determining matches. |      |
| m     | Indicates multiline mode, meaning the pattern will continue looking for matches after reaching the end of one line of text. |      |
|       |                                                              |      |

```javascript
/*
* Match all instances of “at” in a string. */
var pattern1 = /at/g; /*
* Match the first instance of “bat” or “cat”, regardless of case.
*/
var pattern2 = /[bc]at/i;
/*
* Match all three-character combinations ending with ”at”, regardless of case. */
var pattern3 = /.at/gi;
```

All meta characters must be escaped when used as part of the pattern

```javascript
([{\^$|)]}?* +.
```

```javascript
/*
* Match the first instance of “bat” or “cat”, regardless of case. */
var pattern1 = /[bc]at/i;
/*
* Match the first instance of ”[bc]at”, regardless of case. */
var pattern2 = /\[bc\]at/i;
/*
* Match all three-character combinations ending with ”at”, regardless of case. */
var pattern3 = /.at/gi;
/*
* Match all instances of ”.at”, regardless of case. */
var pattern4 = /\.at/gi;
```

*Regex Instance Properties*

| properties | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| global     | A Boolean value indicating whether the g flag has been set.  |
| ignoreCase | A Boolean value indicating whether the i flag has been set.  |
| lastIndex  | An integer indicating the character position where the next match will be attempted in the source string. This value always begins as 0. |
| multiline  | A Boolean value indicating whether the m flag has been set.  |
| source     | The string source of the regular expression. This is always returned as if specified in literal form (without opening and closing slashes) rather than a string pattern as passed into the constructor. |
|            |                                                              |

```javascript
var pattern1 = /\[bc\]at/i;
alert(pattern1.global); alert(pattern1.ignoreCase); alert(pattern1.multiline); alert(pattern1.lastIndex); alert(pattern1.source);
//false //true //false
//0 //”\[bc\]at”
       var pattern2 = new RegExp(“\\[bc\\]at”, “i”);
alert(pattern2.global); alert(pattern2.ignoreCase); alert(pattern2.multiline); alert(pattern2.lastIndex); alert(pattern2.source);
//false //true //false
//0 //”\[bc\]at”
```

*RegExp Constructor Properties*

| Verbose Name | Short Name | Description                                                  |
| ------------ | ---------- | ------------------------------------------------------------ |
| input        | $_         | The last string matched against. This is not implemented in Opera. |
| lastMatch    | $&         | The last matched text. This is not implemented in Opera.     |
| lastParen    | $+         | The last matched capturing group. This is not implemented in Opera. |
| leftContext  | $`         | The text that appears in the input string prior to lastMatch. |
| multiline    | $*         | A Boolean value specifying whether all expressions should use multiline mode. This is not implemented in IE
or Opera. |
| rightContext | $’         | The text that appears in the input string after lastMatch.   |
|              |            |                                                              |

```javascript
var text = “this has been a short summer”; var pattern = /(.)hort/g;
/*
* Note: Opera doesn’t support input, lastMatch, lastParen, or multiline. * Internet Explorer doesn’t support multiline.
*/
if (pattern.test(text)){
}
alert(RegExp.input); 		//this has been a short summer 
alert(RegExp.leftContext); 	//this has been a
alert(RegExp.rightContext); // summer
alert(RegExp.lastMatch); //short
alert(RegExp.lastParen); //s
alert(RegExp.multiline); //false
 
```

**The Function Type**

--  functions actually are object. Functions are objects, function names are simply pointers to function objects and are not necessarily tied to the function itself.

*Function Declaration*

```javascript
function sum (num1, num2) {
    return num1 + num2;
}
```

*Function Expression*

```javascript
var sum = function(num1, num2){ 
    return num1 + num2;
};
```

NOTE: Declaring two functions with the same name always results in the last function overwriting the previous one. 

```javascript
var addSomeNumber = function (num){
	return num + 100; };

addSomeNumber = function (num) {
return num + 200; };

var result = addSomeNumber(100);
```

NOTE: Function declarations are read and available in an execution context before any code is executed, whereas function expressions aren’t complete until the execution reaches that line of code

```javascript
alert(sum(10,10));
var sum = function(num1, num2){
	return num1 + num2; 
};
```

*Function as Values*

-- functions can be used any place any other value can be used. This means it’s possible not only to pass a function into another function as an argument but also to return a function as the result of another function.

```javascript
function callSomeFunction(someFunction, someArgument){ 
    return someFunction(someArgument);
}

function add10(num){ return num + 10;
}

var result1 = callSomeFunction(add10, 10); 
alert(result1); //20

function getGreeting(name){ 
    return “Hello, “ + name;
}

var result2 = callSomeFunction(getGreeting, “Nicholas”); alert(result2); //”Hello, Nicholas”

```

*Function Internals*

-- is an array-like object that contains all of the arguments that were passed into the function.

```javascript
function factorial(num){ 
	if (num <= 1) {
		return 1; 
	} else {
		return num * factorial(num-1) 
	}
}

```

*Function Properties and Methods*

-- Each function has two properties: length and prototype.

```javascript
function sayName(name){ 
	alert(name);
}
function sum(num1, num2){ 
	return num1 + num2;
}
function sayHi(){
    alert(“hi”); 
}
alert(sayName.length); //1 
alert(sum.length); //2 
alert(sayHi.length); //0
```

-- prototype is the actual location of all instance methods for reference types

-- apply() accepts two arguments: the value of this inside the function
and an array of arguments. This second argument may be an instance of Array, but it can also be
the arguments object

```javascript
function sum(num1, num2){ return num1 + num2;
}
function callSum1(num1, num2){
return sum.apply(this, arguments);
}
//passing in arguments object
     function callSum2(num1, num2){
return sum.apply(this, [num1, num2]); //passing in array
}
alert(callSum1(10,10)); //20 alert(callSum2(10,10)); //20
```

-- call() exhibits the same behavior as apply(), but arguments are passed to it differently.

```javascript
function sum(num1, num2){ 
	return num1 + num2;
}
function callSum(num1, num2){
    return sum.call(this, num1, num2);
}
alert(callSum(10,10)); //20
```

NOTE: The decision to use either apply() or call() depends solely on the easiest way for you to pass arguments into the function. If you intend to pass in the arguments object directly or if you already have an array of data to pass in, then apply() is the better choice; otherwise, call() may be a more appropriate choice. 

-- bind() creates a new function instance whose this value is *bound* to the value that was passed into bind()

```javascript
window.color = “red”;
var o = { color: “blue” };
function sayColor(){ 
    alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();   //blue
```

**Primitive Wrapper Types**

-- Every time a primitive value is read, an object of the corresponding primitive wrapper type is created behind the scenes, allowing access to any number of methods for manipulating the data.

```javascript
var s1 = “some text”;
var s2 = s1.substring(2);
```

NOTE: The major difference between reference types and primitive wrapper types is the lifetime of the
object. When you instantiate a reference type using the new operator, it stays in memory until it goes
out of scope, whereas automatically created primitive wrapper objects exist for only one line of code
before they are destroyed.

```javascript
var s1 = “some text”;
s1.color = “red”; alert(s1.color); //undefined
```

The Object constructor also acts as a factory method and is capable of returning an instance of a
primitive wrapper based on the type of value passed into the constructor

```javascript
var obj = new Object(“some text”); 
alert(obj instanceof String); //true
```

NOTE: Calling a primitive wrapper constructor using new is not the same as calling the casting function of the same name.

```javascript
var value = “25”;
var number = Number(value); //casting function 
alert(typeof number); //”number”

var obj = new Number(value); //constructor 
alert(typeof obj); //”object”
```

**Boolean Type**

-- The Boolean type is the reference type corresponding to the Boolean values. Creating a boolean object.

```javascript
var booleanObject = new Boolean(true);
```

**Number Type**

-- The number type is the reference type corresponding to the number values. Creating a number object.

```javascript
var numberObject = new Number(10);
```

- toFixed() -- returns a string representation of a number with a specified number of
  decimal points

  ```javascript
  var num = 10;
  alert(num.toFixed(2));    //”10.00”
  ```

- toExponential() -- returns a string with the number formatted in exponential notation.

  ```javascript
  var num = 10;
  alert(num.toExponential(1));    //”1.0e+1”
  ```

- toPrecision() -- method returns either the fixed or the exponential representation of a number,
  depending on which makes the most sense.

  ```javascript
  var num = 99;
  alert(num.toPrecision(1)); //”1e+2”
  alert(num.toPrecision(2)); //”99”
  alert(num.toPrecision(3)); //”99.0”
  ```

NOTE: The typeof() and instanceof() operators work differently when dealing with primitive numbers versus reference numbers. 

```javascript
var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject); //”object” 
alert(typeof numberValue); //”number” 
alert(numberObject instanceof Number); //true 
alert(numberValue instanceof Number); //false
```

**String Type**

```javascript
 var stringObject = new String(“hello world”);
```

*Methods*

*Character*

- charAt() -- simply returns the character in the given position as a single-character string.

  ```javascript
  var stringValue = “hello world”;
  alert(stringValue.charAt(1));   //”e”
  ```

- charCodeAt() -- If you want the character’s character code instead of the actual character.

  ```javascript
  var stringValue = “hello world”;
  alert(stringValue.charCodeAt(1));   //outputs “101”
  ```

*String-Manipulation*

- concat() -- used to concatenate one or more strings to another, returning the concatenated string as the result.

- ```javascript
  var stringValue = “hello “;
  var result = stringValue.concat(“world”); 
  alert(result); //”hello world” 
  alert(stringValue); //”hello”
  
  var stringValue = “hello world”;
  alert(stringValue.slice(-3)); 		//”rld”
  alert(stringValue.substring(-3));	//”hello world”
  alert(stringValue.substr(-3));		//”rld”
  alert(stringValue.slice(3, -4));      //”lo w”
  alert(stringValue.substring(3, -4));  //”hel”
  alert(stringValue.substr(3, -4));     //”” (empty string)
  ```

*String-location*

```javascript
var stringValue = “hello world”;
alert(stringValue.indexOf(“o”));         //4
alert(stringValue.lastIndexOf(“o”));  

var stringValue = “hello world”;
   alert(stringValue.indexOf(“o”, 6));         //7
   alert(stringValue.lastIndexOf(“o”, 6));     //4
```



​	

# ASYNC

- Allow asynchronous functions to run in the "background"
- we pass in callbacks that run once the function has finished its work
- move on immediately: Non-blocking!



1. Promises

   ```javascript
   //ES5
   function getRecipe() {
       setTimeout(() => {
           const recipeID = [523, 883, 432, 974];
   		console.log(recipeID);
           
           setTimeout(id => {
               const recipe = {title: 'Fresh Tomato pasta', 
                              publisher: 'Jonas'};
               console.log(`${id}: ${recipe.title}`);
               
               setTimeout(publisher => {
                   const recipe2 = {
                       title: 'Italian Pizza',
                       publisher: 'Jonas'
                   };
                   console.log(recipe);
               }, 1500, recipe.publisher);
           }, 1500, recipeID[2]);
       }, 1500);
   }
   
   
   // ES6 -- Promises
   
   const getID = new Promise((resolve, reject) => {
       setTimeout(() => {
   		resolve([523, 883, 432, 974])		        ;
       }, 1500);
   });
   
   const getRecipe = recID => {
       return new Promise((resolve, reject) => {
           setTimeout(ID => {
               const recipe = {title: 'Fresh Tomato pasta', 
                              publisher: 'Jonas'};
               resolve(`${ID}: ${recipe.title}`);
           }, 1500, recID);
       
       });  
   };
   
   const getRelated = publisher => {
       return new Promise((resolve, reject) => {
           setTimeout(pub => {
               const recipe2 = {
                       title: 'Italian Pizza',
                       publisher: 'Jonas'
                   };
               resolve(`${pub} ${recipe}`);
           }, 1500, publisher);        
       });
   };
   
   // consume the promises
   getID
       .then(IDs => {
   	console.log(IDs);
       return getRecipe(IDs[2]);
   })
       .then(recipe => {
       console.log(recipe);
       return getRelated('Jonas')
   })
       .then(recipe => {
       console.log(recipe);
   })
       .catch(error => {
       console.log('ERROR!!');
   });
   ```

2. Async / Await (cont... from code above)

   ```javascript
   // consumes the promises without any call backs
   // await can only run with async function.
   
   async function getRecipeAW() {
       const IDs = await getIDs;
       console.log(IDs);
       const recipe = await getRecipe(IDs[2]);
       console.log(recipe);
       const related = await getReleated('Jonas schmed');
       console.log(related);
       
       return recipe;
   }
   
   getRecipeAW().then(result => {
       console.log(`${result} is the best ever`);
   });
   ```

   

# Backend NODE JS

**WEBSERVER CHECKLIST**

- Better ways to organize our code into reusable pieces
- ways to deal with files
- ways to deal with databases
- the ability to communicate over the internet
- the ability to accept request and send resonses (in the standard format)
- a way to deal with work that takes a long time

1. Command line interface

   a utility to type commands to your computer rather than clicking

   

   ```
   ls => list 
   cd => change directory
   mkdir => make directory
   touch => create file
   rm => removing/delete file file
   rm -rf => removing/delete all child directories (force)
   ```

2. V8 Javascript Engine

   - Processors 

     - machine in a small parts

     - instructions/language for processors: 

       — IA-32

       — x86-64

       — ARM

       — MIPS

   - Machine Code

     - Every program you run on your computer has been converted (compiled) into machine code

     - ![img](/Users/denmercs/Library/Application Support/typora-user-images/image.png)

     - Levels of abstractions

       ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308165854695.png)

       

   - C++

     — node is written in C++

   - Ecmascript: The standard javascript is based on.

   - Javascript Engine

     — it should follow the ecmascript standard. A program that converts javascript code into something the computer processor can understand.

# V8 Javascript Engine

- Adding features to Javascript

  - ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308171601675.png)

    NOTE: you can call c++ methods/codes to your javascript, thus making the javascript more powerful!

- The Node Core

  - ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308173327657.png)

    Client-Server Model of Computing

  - ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308173819063.png)

  - What does the javascript need to manage a server?

    - Better ways to organize our code into reusable pieces
    - Ways to deal with files
    - Ways to deal with databases
    - The ability to communicate over the internet
    - The ability to accept request and send responses (standard format)
    - A way to deal with work that takes a long time

  - The C++ Core

  - The Javscript Core

    - Node.js has a lot of javascript wrappers for c++ features

- Running Node.js

  ​	Modules - a resusable block of code whose existence does not accidentally impact other code. 

  ​	Common JS modules - agreed upon standard for how code modules should be structured. 

- First Class Functions: 

  — everything you can do with other types you can do with functions. You can use functions like strings, numbers, etc. (i.e. pass them around, set variables equals to them, put them in arrays, and more)

- Function Expression: 

  — a block of code that results in a value

  — function expressions are possible in Javascript because functions are a first class.

- Invoke 

  — run the function

  — we can also say 'call' the function

- Objects and Objects literal

  - Name/value pair: — a name which maps to a value

    ```javascript
    address = "100 Main St.";
    ```

  - Object: A collection of name/value pairs

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308191317528.png)

  - Object Literal:

    — name/value pairs separated by commas and surrounded by commas and surrounded by curly braces.

    ```javascript
    {
        street: 'main',
        number, 100,
        apartment: 
        {
            floor: 3,
            number: 301
        }
    }
    ```

  - Prototypal Inheritance

    — Inheritance: one object gets access to the properties and methods of another object.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308193046437.png)

  - Ways in creating a object

    — Class

    — Function constructors: a normal functions that is used to construct objects. The 'this' variable points a new empty objects, and that objects is returned from the function automatically.

    ```javascript
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    Person.prototype.greet = function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    };
    
    var john = new Person('John', 'Doe');
    
    
    ```

  - By Reference / By value

    - Primitive: A type of data that represents a single value like a number or a string. In other words not an object.

    - Passing by value

      ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308194145844.png)

      ```javascript
      // passing by value
      function change(b) {
          b = 2;
      }
      
      var a = 1;
      change(a);
      console.log(a);
      ```

      

    - Passing by reference (usually objects)

      ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190308194309709.png)

      

    ```javascript
    // passing by reference
    function changeObj(d) {
        d.prop1 = function(){};
        d.prop2 = {};
    }
    
    var c = {};
    c.prop1 = {};
    changeObj(c);
    console.log(c);
    ```

  - Immediately Invoked Function Expression (IIFE)

    - Scope: where in code you have access to particular variable or function.

    ```javascript
    var firstName = 'Jane';
    
    (function() {
    	var firstName = 'John';
        console.log(firstName);
    })();
    
    console.log(firstName);
    
    // john --> first
    // jane
    ```

  - How do node modules work?

    ```javascript
    // What happens at the back end of the v8 engine
    // Function scope
    (function (exports, require, module, __filename, __dirname) {
        var greet = function() {
            console.log('Hello!');
        };
        module.exports = greet;
    })
    
    fn(module.exports, require, module, filename, dirname);
    return module.exports;
    ```

    — require is a function that you pass a 'path' too

    — module.exports is what the require functions returns

    — this works your code is actually wrapped in a function that is given these things as function parameters

    — if it can't find a .js file then it will look for a folder and then a index.js

  - JSON

    - Javascript object notation is a standard for structuring data that is inspired by javascript object literals. Javascript engines are built to understand it.

    ```javascript
    {
        "firstname" : "John",
        "lastname" : "Doe",
        "address" : {
            "street" : "101 Main st.",
            "city" : "NYC"
        }
    }
    ```

  - Module Patterns

    ```javascript
    // other file (greet1.js)
    module.exports = function() {
        console.log('Hello World');
    }; 
    
    // other file (greet2.js)
    module.exports.greet = function() {
        console.log('Hello World!');
    }
    
    // other file (greet3.js)
    function Greetr() {
        this.greeting = 'Hello World!!!';
        this.greet = function() {
            console.log(this.greeting);
        }
    }
    module.exports = new Greetr();
    
    // other file (greet4.js)
    function Greetr() {
        this.greeting = 'Hello World!!!';
        this.greet = function() {
            console.log(this.greeting);
        }
    }
    module.exports = Greetr;
    
    //REAVELING MODULE PATTERN
    // other file (greet5.js)
    var greeting = "Hello Pattern 5";
    
    function greet() {
        console.log(greeting);
    }
    
    module.exports = {
        greet: greet
    }
    
    //app.js
    var greet = require('./greet1');
    greet();
    
    var greet2 = require('./greet2').greet;
    greet2();
    
    var greet3 = require('./greet3');
    greet3.greet();
    greet3.greeting = 'Changed hello world!';
    
    var greet3b = require('./greet3');
    greet3b.greet(); // The same reference to the memory. Only called once!ew
    
    var Greet4 = require('./greet4');
    var grtr = new Greet4();
    grtr.greet();
    
    var greet5 = require('./greet5').greet;
    greet5();
    
    
    ```

    Revealing Module Pattern

    - Exposing only theproperties andm ethods you want via an returned object. A very common and clean way to structure and protect code within modules

  - Exports vs Module Exports

    - ```javascript
      (function (exports, require, module, __filename, __dirname) {
          var greet = function() {
              console.log('Hello!');
          };
          module.exports = greet;
      })
      
      fn(module.exports, require, module, filename, dirname);
      return module.exports;
      ```

      NOTE: exports is a shorthand of module.export. 2 variables pointing the same object in memory.

      ```javascript
      // greet1
      exports = function() {			// it was pointed to a new variable (different 
          							// object which is empty)
          console.log('Hello');
      }
      
      console.log(exports); // [Function]
      console.log(module.exports); // { } --> empty object
      
      // greet2
      exports.greet = function() {
          console.log('Hello too!');
      }
      
      console.log(exports);
      console.log(module.exports);
      
      //app.js
      var greet = require('./greet'); 	// { greet: [Function] }	
      var greet2 = require('./greet2');	// { greet: [Function] }	
      ```

      Mutate: adding a method or property to an object.

    - Node Native Module

      — it is advisable not to used the native variables names of the module but it will not affect at all. There is a native methods/names javascript in the node.js were you can call. 

- Module and ES6

  ```javascript
  //greet.js
  export function greet() {
      console.log('hello');
  }
  
  //app.js
  import * as greetr from 'greet'; 
  greetr.greet();
  ```

**EVENT and EVENT EMITTER**

- Event: something that has happen in the app that we can respond to. In Node, we actually talk about two different kind of events.

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190310173339294.png)

  NOTE: the libuv is sending events to javascript.

- Javascript Side:

   

  ```javascript
  // Object Property and method
  var obj = {
      greet: 'Hello'
  }
  
  console.log(obj.greet);
  console.log(obj['greet']);
  
  var prop = "greet";
  console.log(obj[prop]);
  
  // functions and array
  var arr = [];
  
  arr.push(function() {
      console.log('Hello world 1');
  });
  arr.push(function() {
      console.log('Hello world 2');
  });
  arr.push(function() {
      console.log('Hello world 3');
  });
  
  arr.forEach(function(item) {
      item();			// you can just invoke this since it's and item the (the console log)
  });
  
  ```

- The Node Emitter Module

  ```javascript
  /** Making a Event Emitter **/
  
  // emitter.js
  function Emitter() {
      this.events = { };
  }
  
  Emitter.prototype.on = function(type, listener) {
      this.events[type] = this.event[type] || [];
      this.events[type].push(listener);
  }
  
  Emitter.prototype.emit = function(type) {
      if (this.events[type]) {
          this.events[type].forEach(function(listerner) {
  			listener();
      	});
      }
  }
  
  module.exports = Emitter;
  
  
  //app.js
  var Emitter = require('./emitter');
  var emtr = new Emitter();
  
  emtr.on('greet', function() {
      console.log('somewhere, someone said hello');
  });
  
  emtr.on('greet', function() {
      console.log('A greeting occured');
  });
  
  console.log('Hello!');
  emtr.emit('greet');
  
  ```

  - Event listener: a code that responds to an event. The listerner will be a function in javascript

- Node Event Emitter

  ```javascript
  /** Native NODE Modules **/
  
  
  //app.js
  var Emitter = require('events');
  
  var emtr = new Emitter();
  
  emtr.on('greet', function() {
      console.log('somewhere, someone said hello');
  });
  
  emtr.on('greet', function() {
      console.log('A greeting occured');
  });
  
  console.log('Hello!');
  emtr.emit('greet');
  
  /*
  	Hello!
  	somewhere, someone said hello
  	A greeting occured
  */
  
  // DEALING WITH MAGIC STRINGS IN THE EVENT
  
  // config.js
  module.exports = {
      events: {
          GREET: 'greet'
      }
  }
  
  //app.js
  var Emitter = require('events');
  var eventConfig = require('./config').events;
  
  var emtr = new Emitter();
  
  emtr.on(eventConfig.GREET, function() {
      console.log('somewhere, someone said hello');
  });
  
  emtr.on(eventConfig.GREET, function() {
      console.log('A greeting occured');
  });
  
  console.log('Hello!');
  emtr.emit(eventConfig.GREET);
  ```

  - Magic String: a string that has some special meaning in our code. This is bad because it makes it easy for a typo to cause a bug, and ahrd for tools to help us find it.

OBJECT.CREATE and PROTOTYPE

```javascript
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        rturnt his.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
john.firstname = 'Jane';
john.lastname = 'Doe';

```

![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190310184336915.png)



```javascript
//apps.js

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();
greeter1.on('greet', function() {
    console.log('Someone greeated!' + data);
});

greeter1.greet('Tony'); // someone greated Tony!

// ES6
'use strict'
var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world';
    }
    greet(data) {
        console.log(`${this.greeting}: ${data})`;
        this.emit('greet', data);	
    }
}

var greeter1 = new Greetr();
greeter1.on('greet', function() {
    console.log('Someone greeated!' + data);
});

greeter1.greet('Tony'); 
// someone greated Tony!
```

Syntactic Sugar: A feature that only changes how you type something, but nothing changes under the hood.

```javascript
// ES6
'use strict';

class Person {
    constructor(firstName, lastName) {
		this.firstName = firstName;
        this.lastName = lastName;
    }
    
    greet() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName)
    }
}

// ES5
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = new Person('John', 'Doe');



```

**ES6**

babeljs.io - converts the ES6 to an older ES5.

Template literal: a way to concatenate strings in javascript. Easier to work with than a bunch of strings concatenated with '+'.

```javascript
//apps.js
var name = "John Doe";

var greet = "Hello" + name;
var greet2 = `hello ${name}`;

console.log(greet);
console.log(greet2);
```

**Javascript .call and .apply**

```javascript
var obj = {
    name: "John Doe",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet(); // Hello John Doe
obj.greet.call({ name: 'Jane Doe'}) // this object will changed into 'Jane Doe'. Borrowing 
									// the function

obj.greet.apply( name: 'Jane Doe', [param, param2]) // the difference is the array
```

JAVASCRIPT IS ASYNCHRONOUS

- Asynchronous: More than one process running simultaneously. Node does things asynchronously and V8 does not.

- Synchronous: one process executing at a time. Javascript is synchronous. Think of it as only one line of code executing at a time. NodeJS is asynchronous.

- Callback: a function passed to some other function, which we assume will be invoked at some point. The function 'calls back' invoking the function you give it when it is done doing its work.

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190311210344184.png)

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190311210603380.png)

- Event Driven Non-Blocking I/O in v8 Javascript

  - Non-Blocking: doing other things without stopping yourprogramming from running.

  - Buffer: a temporary holding spot for data being moved from one place to another. Intentionally limit size.

  - Stream: a sequence of data made available over time. Pieces of data that eventually combine into a whole.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190311211521806.png)

    NOTE: same as watching a video. It buffers to continue to stream.

  - Bindary data: data stored in binary (sets of 1s and 0s).

  - Character set: a representation of characters as numbers. Each character gets a number. Unicode and ASCII are character sets.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190311212956248.png)

  - Character encoding: How character are stored in binary. Numbers are converted and stored in binary.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190311212321818.png)

    NOTE: UTF-8 means 8 sets of data.

  - Buffer

    ```javascript
    var buf = new Buffer('Hello', 'utf8'); 
    console.log(buf); // <Buffer 48 65 6c 6c 6f>
    console.log(buf.toString());
    console.log(buf.toJSON());
    console.log(buf[2]);
    buf.write('wo');
    console.log(buf.toString()); // wollo
    
    /* Unusual to deal with buffer in development */
    ```

  - ES6 Typed Arrays 

    ```javascript
    var buffer = new ArrayBuffer(8); //raw binary data
    var view = new Int32Array(buffer);
    view[0] = 5;
    view[1] = 15;
    view[2] = 30; // it will not show or store since it's only 2 data needed (binary)
    console.log(view); // Int32Array { '0' : 5, '1' : 15}
    
    
    ```

    Byte: 8 bits example 0010100

  - Callbacks

    ```javascript
    function greet(callback) {
        console.log('Hello!');
        var data = {
            name: 'John Doe'
        };
        callback();
    }
    
    greet(function(data) {
        console.log('The callback was invoked!');
        console.log(data);
    })
    
    greet(function(data) {
        console.log('A different callback was invoked!');
        console.log(data.name);
    })
    ```

  - File and fs

    ```javascript
    // app.js
    var fs = require('fs'); //filesystem
    var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
    console.log(greet);
    
    var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
        console.log(data);
    });
    console.log('Done!');
    
    //greet.txt
    hello world!
    ```

    Error first callback: call backs take an error object as their first parameter. Null if no error, otherwise will contain an object defining the derror. This is a standard so we know in what order to place our parameters for our callbacks.

  STREAM

  - a piece of data being sent through a stream. Data is split in chunks and streamed.

  - Abstract class: a type of contructor you never work directly with, but inherit from. We create new custom objects which inherit from the abstract base class.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190312001259524.png)

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190312001359801.png)

    

  ```javascript
  var fs = require('fs');
  
  var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});
  
  var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
  
  readable.on('data', function(chunk) {
      console.log(chunk);
      writable.write(chunk);
  });
  ```

  PIPE

  - connecting two streams by writing to one stream what is being read from another. In Node you pipe from a readable stream to a writeable stream.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190312005043116.png)

    

  ```javascript
  var fs = require('fs');
  var zlib = require('zlib'); //for compressing files
  
  
  var readable = fs.createReadStream(__dirname + '/greet.txt');
  
  var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
  
  var gzip = zlib.createGzip(); // this create a compress file like 'zip files'
  
  var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
  
  readable.pipe(writable); // this return the value of the function
  readable.pipe(gzip).pipe(compressed); // method chaining
  ```

  Method chaining: a method returns an object so we can keep calling more methods. Sometimes it returns the parent object (called cascading) and sometimes some other object. 

# HTTP and being a web server

- Protocol: a set of rule two sides agree on to use when communicating. Both the client and server are programmed to understand and use that particular set of rules. It's similar to two people from different countries agreeing on a language to speak in.

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190312011159685.png)

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190312011356708.png)

  

  PORT: once a computer receives a packet, how it knows what program to send it to. When a program is setup on the operating system to receive packets from a particular port, it is said that the program is 'listening' to that port.

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190312012622614.png)

  

  HTTP: a set of rules (and a format) for data being transferred on the web. Stands for hypertext transfer protocol'. It's a format (of various) defining data being transferred via TCP/IP.

  MIME type: a standard for specifying the type of data being sent. Stands for multipurpose internet mail extensions. 

  

  HTTP_PARSER (Parser - Break them up)

  **BUILDING A WEBSERVER**

  ```javascript
  var http = require('http');
  http.createServer(function(req, res) {
      res.writeHead(200, { 'Content-Type' : 'text/plain'});
      res.end('Hello World!\n'); //last thing that i'm sending
  }).listen(1337, '1270.0.0.1');
  ```

- Synchronous request example

  ```html
  // index.html
  <html>
      <head>
          <title>HTML OUTPUT</title>
      </head>
      <body>
          <h1> Hello World </h1>
      </body>
  </html>
  ```

  ```javascript
  var http = require('http');
  var fs = require('fs');
  
  http.createServer(function(req, res) {
      res.writeHead(200, { 'Content-Type' : 'text/html'});
      var html = fs.readFileSync(__dirname + '/index.htm', 'utf8'); // read synchronouly
      res.end(html);
      var message = 'Hello world...';
      html = html.replace('{Message}', message);
  }).listen(1337, '1270.0.0.1'); // Hello world...
  ```

TEMPLATE

- text designed to be the basis for the final text or content after being processed. There's usually some specific template language, so the template system know how to replace placeholders with real values.

- Asynchronous request example:

  ```javascript
  var http = require('http');
  var fs = require('fs');
  
  http.createServer(function(req, res) {
      res.writeHead(200, { 'Content-Type' : 'text/html'});
  	fs.createReadStream(__dirname + '/index.htm').pipe(res); // read asynchronouly
  }).listen(1337, '1270.0.0.1'); // Hello world...
  
  /** USE STREAMS WHENEVER YOU CAN! **/
  ```

  API's and End points

  - API: set of tools for building a software application. Stands for application programming interface. On the web the tools are usually made available via a set of URLs which accept and send only data via HTTP and TCP/IP.
  - Endpoint: one url in a web api. Sometiimes that endpoint(url) does multiple thing by making choices based on the HTTP request headers.

JSON

- ```javascript
  var http = require('http');
  var fs = require('fs');
  
  http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type' : 'Application/json'});
      var obj = {
          firstname: 'John',
          lastname: 'Doe'
      };
      res.end(JSON.stringify(obj));
  }).listen(1337, '127.0.0.1');
  ```

  Serialize

  - Translating an object into a format that can be stored or transferred. JSON, CSV, XML, and others are popular. 'Deserialize' is the opposite (converting the format back into an object).

  Routing

  - Mapping http requests to content. Whether actual file that exist on the server, or not. 

  ```javascript
  var http = require('http');
  var fs = require('fs');
  
  http.createServer(function(req, res) {
      if(req.url === '/') {
          fs.createReadStream(__dirname + 'index.htm').pipe(res);
      }
      
  	if(req.url === '/api') {
          res.writeHead(200, {'Content-Type' : 'Application/json'});
          var obj = {
              firstname: 'John',
              lastname: 'Doe'
          };
          res.end(JSON.stringify(obj));        
      }
      else {
          res.writeHead(404);
  	    res.end();
      }    
  
  }).listen(1337, '127.0.0.1');
  ```

  # PACKAGE

  - code. managed and maintained with a package management system.

  Package Management System

  - software that automates installing and updating packages. Deals with twhat version you have or need and manage dependencies.

  Dependency

  - code that another set of code depends on to function. If you use that code in your app, it is dependency. You app depends on it. 

  Versioning

  - specifying what version of  a set of code this is. so others can track if a new version has come out. this allows to watch for new features, or to watch for 'breaking changes'. The word 'semantic' implies that something conveys meaning.
  - Major.minor.patch 
  - example: v 1.0.3 => (v. 1(major).0(minor).3(bugs fix)). 

  NPM and NPM registry

  - NPM registry is from the website npmjs.com

    ```javascript
    {
        "name" : "nodejs-test-app",
        "version" : "1.0.0",
        "description" : "NodeJS Test App",
        "main: : "app.js",
        "scripts" : {
            "test" : "echo \"Error: no test specified\" && exit 1"
        },
        "author" : "",
        "license" : "ISC"
    }
    ```

    ```javascript
    npm install moment --save	// download the files which is moment. Save the reference on the dependency.
    ```

    NOTE: You can get the files and just install them afterwards

    ```javascript
    var moment = require('moment');
    console.log(moment().format("ddd, hA"));
    // Wed, 11am
    ```

    Example: npm install jasmine-node —save-dev  (this will save into dev dependencies)

    # Express

    - installing express and making it easier to build a web server

    Environment variables: Global variables specific to the environment(server) our code is living in. Different servers can have different variables settings, and we can access those values in code.

    ```javascript
    var express = require("express");
    var app = express();
    
    app.listen(process.env.PORT, process.env.IP, function() {
        console.log('App server is running');
    });
    ```

    Http method: specifies the type of action the request wishes to make. Get, post, delete, and others also called verbs.

    ```javascript
    var express = require("express");
    var app = express();
    
    var port = process.env.PORT || 3000;
    
    app.listen(port, process.env.IP, function() {
        console.log('App server is running');
    });
    
    app.get('/', function(req, res) {
        res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
    });
    
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe'});
    });
    ```

    

    **Routing**

    ```javascript
    var express = require("express");
    var app = express();
    
    var port = process.env.PORT || 3000;
    
    app.listen(port, process.env.IP, function() {
        console.log('App server is running');
    });
    
    app.get('/', function(req, res) {
        res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
    });
    
    app.get('/person/:id', function(req, res) {
        res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
    });
    
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe'});
    });
    ```

    **Static files and middleware**

    - In the case of Express, sitting between the request and the response.

      Static

      - files not processed by code in any way. Example: html, css, and image file are static files.

    Template and template engines

    ```javascript
    app.set('view engine', 'jade');
    
    /** Example EJS (ejs.co) **/
    
    ```

    

**Queryingstring and post parameters**

 - ```javascript
   // querying data
   
   GET/$id=4&page=3http/1.1
   Host: www.learnwebdev.net
   cookie: username=abc; name=tony
   
   // hosting data
   POST/HTTP/1.1
   Host: www.learnwebdev.net
   content-type: application/x-www-form-urlencoded
   cookie: num=4;page2
   
   username=Tony&password=pwd
   
   // JSON
   POST/HTTP/1.1
   Host: www.learnwebdev.net
   content-type:application/json
   cookie:num=4;page=2
   
   {
       "username": "Tony",
       "password": "pwd"
   }
   
   /** Need some middleware to process the data. **/
   ```

   

  - ```javascript
    var express = require("express");
    var app = express();
    
    var port = process.env.PORT || 3000;
    
    /** Middleware **/
    app.use('/assets', express.static(__dirname + '/public'));
    app.use('/', function(req, res, next) {
       console.log('Request URL: ' + req.url);
       next();
    });
    
    app.set('view engine', 'ejs');
    
    app.listen(port, process.env.IP, function() {
        console.log('App server is running');
    });
    
    app.get('/', function(req, res) {
        res.render('index');
    });
    
    app.get('/person/:id', function(req, res) {
        res.render('person', {ID: req.params.id, Qstr: req.query.qstr}); // query string
    });
    
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe'});
    });
    ```

    

    ```html
    <html>
        <head>
            <title>App Test</title>
            <link href="/assets/style.css" type="text/css" rel="stylesheet"></link>
        </head>
        <body>
            <h1> Person: <%= ID %></h1>
            <h2> QueryString Value: <%= Qstr %></h2>
        </body>
    </html>
    ```

    Middleware

    - Body-parser - need something to parse the body and response.

    ```javascript
    //app.js
    var express = require("express");
    var app = express();
    var bodyParser = require("body-parser");
    
    var urlencodedParser = bodyParser.urlencoded({extended: false});
    var port = process.env.PORT || 3000;
    var jsonParser = bodyParser.json();
    
    /** Middleware **/
    app.use('/assets', express.static(__dirname + '/public'));
    app.use('/', function(req, res, next) {
       console.log('Request URL: ' + req.url);
       next();
    });
    
    app.set('view engine', 'ejs');
    
    app.listen(port, process.env.IP, function() {
        console.log('App server is running');
    });
    
    app.get('/', function(req, res) {
        res.render('index');
    });
    
    app.get('/person/:id', function(req, res) {
        res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
    });
    
    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    
    // getting it from the post
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe'});
    });
    
    // getting it from JSON
    app.post('/personJson', jsonParser, function(req, res) {
        res.send('Thank you for the JSON data!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    //post
    
    //index.ejs
    <html>
        <head>
            <title>App Test</title>
            <link href="assets/style.css" type="text/css" rel="stylesheet"></link>
            <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
        </head>
        <body>
            <h1> Hello World Test</h1>
            <form method="post" action="/person">
                FirstName: 
                <input type="text" id="firstname" name="firstname" /></br>
                lastname:
                <input type="text" id="lastname" name="lastname" /></br>
                <input type="submit" value="submit">
            </form>
            <script>
                $.ajax({
                    type: "POST",
                    url: "/personJson",
                    data: JSON.stringify({firstname: 'Jane', lastname: 'Doe'}),
                    dataType: 'json',
                    contentType: 'application/json'
                });
            </script>
        </body>
    </html>
    ```

    REST: An architectural style for building APIs

    - stands for 'representational state tranfer'. We decide that http verbs and URLs mean something.

    ```javascript
    var express = require("express");
    var app = express();
    var bodyParser = require("body-parser");
    
    var urlencodedParser = bodyParser.urlencoded({extended: false});
    var port = process.env.PORT || 3000;
    var jsonParser = bodyParser.json();
    
    /** Middleware **/
    app.use('/assets', express.static(__dirname + '/public'));
    app.use('/', function(req, res, next) {
       console.log('Request URL: ' + req.url);
       next();
    });
    
    app.set('view engine', 'ejs');
    
    app.listen(port, process.env.IP, function() {
        console.log('App server is running');
    });
    
    app.get('/', function(req, res) {
        res.render('index');
    });
    
    app.get('/person/:id', function(req, res) {
        res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
    });
    
    // getting it from the post
    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    
    // getting it from JSON
    app.post('/personJson', jsonParser, function(req, res) {
        res.send('Thank you for the JSON data!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    //post
    
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe'});
    });
    
    /** Example of REST API **/
    app.get('/api/person/:id', function(req, res) {
        res.json({firstname: 'John', lastname: 'Doe'});
    });
    
    app.post('/api/person', jsonParser, function(req, res) {
        //save to the database
    })
    
    app.delete('/api/person/:id', function(req, res) {
        //delete from the database
    })
    
    ```

    STRUCTURING an app

    - npm install express-generator -g
    - express 'folder'
    - npm install

    # Databases

    Relational database and sql.

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190313125018368.png)

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190313125058530.png)

    ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190313125145263.png)

    

NODE and MySQL

- npm install mysql

NODE and NoSQL: 

- a variety of technologies that are alternatives to tables and sql. One of those types is a document database. MongoDB is one of those.

  ![img](/Users/denmercs/Library/Application Support/typora-user-images/image-20190313130523151.png)



​	Mongoose

 - ```javascript
   /** setup schema first 
   	npm install mongoose
   	
   **/
   
   var mongoose = require('mongoose');
   mongoose.connect('url here');
   
   var Schema = mongoose.Schema;
   var personSchema = new Schema ({
       firstname: String,
       lastname: String,
       address: String
   });
   
   var Person = mongoose.model('Person', personSchema);
   
   var john = Person({
       firstname: 'John',
       lastname: 'Doe', 
       address: '555 Main St.';
   })
   
   // save the user
   john.save(function(err) {
       if(err) throw err;
       console.log('person saved!');
   });
   
   var jane = Person({
       firstname: 'Jane',
       lastname: 'Doe',
       address: '555 Main St.'
   });
   
   // save the user
   jane.save(function(err) {
       if(err) throw err;
       console.log('person saved!');
   });
   
   app.use('/', function(req, res, next) {
       console.log('Request Url: ' + req.url);
       
       //get all the users
       Person.find({}, function(err, users) {
           if (err) throw err;
           
           //object of all the users
           console.log(users);
       });
       
       next();
   });
   
   
   ```

   



​	

​	