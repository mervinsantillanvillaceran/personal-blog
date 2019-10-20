---
layout: layouts/post.njk
title: How to use Null Coalescing Operator in PHP
date: 2018-08-02
excerpt: A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction.
tags: 
    - blog
    - php
---

Php null coalescing operator only works on Php version 7 and up.  
<br>
### What is Null Coalescing operator?
The null coalescing operator (??) will check if the first operand is set or not NULL. If it is not NULL, then it will return the value of the first operand. Otherwise, it will return the value of the second operand.

### How to use null coalescing operator?
This is the syntax for null coalescing operator:

``` php
<?php

$c = $a ?? $b;
```

Example:

``` php
<?php 

$a = 'String A';
$b = 'String B';
$c = $a ?? $b;
echo $c;
```
This example will output 'String A' because variable `$a` has a value.  
<br>
Another Examples:
``` php 
<?php

$a = NULL;
$b = 'String B';
$c = $a ?? $b;
echo $c; // This will output 'String B';
```
But if variable `$a` is equal to NULL or UNDEFINED, then it will output 'String B'.  
<br>
``` php
<?php
$a = '';
$b = 'String B';
$c = $a ?? $b;
echo $c; // This will output an empty string;
```
But if you set variable `$a` into an empty string, then it will return variable `$a` (empty string).  
<br>
``` php
<?php
$d = 'String D';
$e = $a ?? $b ?? $c ?? $d;
```
You can also have multiple null coalescing operator in one statement. So in this example, it will output 'String D' because all the previous variables are UNDEFINED.  
<br>
### What is the difference between null coalescing and ternary operator?
The difference between this two operators is that the null coalescing operator evaluates the first operand if it is null. It's like using the isset() function. While the ternary operator evaluates the first operand as a boolean expression.  
<br>
Examples:
``` php
<?php

$a = '';
$b = 'String B';
echo $a ?? $b; // null coalescing operator
echo $a ?: $b; // ternarty operator
```
For an empty string, the null coalescing operator will output an empty string because variable $a is not null. While the ternary operator will output 'String B' because empty string is false.  
<br>
``` php
<?php

$b = 'String B';
echo $a ?? $b; // null coalescing operator
echo $a ?: $b; // ternarty operator
```
For UNDEFINED variable, the null coalescing operator will output 'String B'. While the ternary operator will throw an undefined variable error.  
<br>
``` php
<?php

$b = false; // same with 0
echo $a ?? $b; // null coalescing operator
echo $a ?: $b; // ternarty operator
```
For false/0 value, the null coalescing operator will return the exact value (false/0). While the ternary operator will output 'String B'.  
<br>
So, the difference between the two is that the null coalescing operator will handle the NULL and UNDEFINED variables. While the ternary operator is th shorthand for if-else. Therefore, Null Coalescing operator is not meant to replace the ternary operator.
