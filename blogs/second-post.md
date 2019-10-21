---
layout: layouts/post.njk
title: How to get URL contents using PHP
slug: how-to-get-url-contents-using-php
date: 2018-12-02
excerpt: Learn how to get contents from a page using three different ways in PHP.
tags: 
    - blog
    - php
---

There are a lot of ways on how to get the content of a URL page in PHP. But there are two common or easiest ways on how to read page contents and that is by using the `file()` or `file_get_contents()` functions.  <br><br>

The `file()` function will a return the contents of a file or url into an array.  <br>

Syntax:
``` php
array file ( string $filename [, int $flags = 0 [, resource $context ]] )
```
<br>
Example:

``` php
<?php 

$arrayLines = file('https://www.w3schools.com');
```
This function will return an array of strings. And if you want to get the result into a single string then you can use the `implode` function to combine the array.  <br>

Example:
``` php 
<?php 

$arrayLines = file('https://www.w3schools.com');
echo implode('', $arrayLines);
```
<br>
And you will get this result:  <br><br>
<img src="https://steemitimages.com/640x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1518428247/wdbthdgrtefnpl5jjxvt.png"/>
<br>
The `file_get_contents()` function is just like `file()` function but the difference is that the `file_get_contents()` function will return a string instead of array.   <br><br>

Syntax:
``` php
string file_get_contents ( string $filename [, bool $use_include_path = FALSE [, resource $context [, int $offset = 0 [, int $maxlen ]]]] )
```
<br>
Example:

``` php 
<?php

$str = file_get_contents('https://www.w3schools.com');
echo $str;
```

<br>
This example will output just like the above example.<br><br>
<img src="https://steemitimages.com/640x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1518428247/wdbthdgrtefnpl5jjxvt.png"/>   
<br>
But if you want to have a result in an array using this function, you can use the explode() function to split the string using the newline(\n) character as a delimiter.   <br><br>

``` php
<?php

$str = file_get_contents('https://www.w3schools.com');
$arrayLines = explode('\n', $str);
var_dump($arrayLines);
```

Note that the offset and maxlen params will not work on remote files/URLs.   <br>

So the difference between the two is that the `file()` function will return an array by parsing EOL (end-of-line) characters, but each strings in the array will still have the terminating newline attached to the end of the string. While the `file_get_contents()` function will just return a single string that will also have a terminating newline.
