// alert('hello world');
// let ans =confirm('确认吗？');
// console.log(ans);

// var char = 'A'
// console.log(char)
// console.log(typeof (char))
// var str = 'hello world'
// console.log(str)
// console.log(typeof (str))
// var str2 = new String('niewei',"zhangshan",'List')
// console.log(str2)
// console.log(typeof (str2))

// var num = 100
// console.log(num)
// console.log(typeof (num))
// var num2 = false
// console.log(num2)
// console.log(typeof (num2))
// let bool = true
// console.log(bool)
// console.log(typeof (bool))

// 函数--标准写法
function sayHello(){
    console.log(a)
    alert("hello world")
}
sayHello()
// 函数--变量形式函数写法
var sayHello2 = function(){
    console.log("函数B被调用")
    alert("B - hello world")
}
sayHello2()
console.log(sayHello2)

let pr = prompt("请输入姓名")
// pr = parseInt(pr) 转化为整数
console.log(pr)
console.log(typeof (pr))

// 对象
var person = new Object()
console.log(person)
console.log(typeof (person))
// 给对象添加属性和方法
person.name = 'niewei'
console.log(person.name)
 
function eat2(){
    console.log("我正在吃")
}
person.eat2 = eat2
person.eat2()

person.eat = function(){
    console.log("我正在吃")
}
person.eat()

// 使用函数方式创建对象
var person2 = function(name){
    this.name = name
    this.eat = function(){
        console.log("C-我正在吃")
    }
}
var p2 = new person2('zhangsan')
console.log(p2)
console.log(typeof (p2))

console.log(p2.name)
p2.eat()
