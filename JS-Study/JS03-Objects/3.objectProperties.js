let myObj = new Object();
(str = "string"),
  (num = 20),
  (obj = new Object());

myObj.type = "My Type by dot syntax";
myObj["date created"] = "String by space  ";

myObj[str] = " string value";
myObj[num] = "number";
myObj[obj] = "Object type";
myObj[""] = "Empty string";

console.log(myObj);
