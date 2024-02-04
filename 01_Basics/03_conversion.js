let score = "5";

console.log(typeof score, "Value:", score)
score = Number(score)
console.log(typeof score, "Value:", score)

/*
Conversion of string to number
"10"  => 10
"10a" => NaN(Not a number) although now it will of type number with value NaN
"0"   => 0
""    => 0

Conversion of boolean to number
true  => 1 &&  false => 0

Conversion of undefined to number
undefined  => Nan

Conversion of null to number
null => 0


Conversions to string (IT WILL JUST STRINGIFY IT)
true => "true"  && false =>"false"
null => "null"  && undefined => "undefined"
5 => "5"


Conversions to bool
"" => false && "fdfs" => true
0, Nan => false && rest => true
undefined => false && null => false

*/