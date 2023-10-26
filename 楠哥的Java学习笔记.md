# 基础语法

## 转义字符

\r	回车

\n	换行

\t	制表符（占8位）

\“	字符串中输出”

## DOS指令

md												创建目录

rd													删除目录

copy	copy ok.abc.txt e:\ok.txt	拷贝文件						

del													删除文件

echo	echo xxxx>abc.txt				输入内容到文件

move											剪切

dir		dir d:/							   查看目录内容

cd		cd /D c:							切换到c盘（/D为切换磁盘开关）

cd..												切换到上一级

cd\												返回根目录

cls												清屏

exit												退出

## JDK，JRE，JVM的关系

1.JDK = JRE + java开发工具

2.JRE = JVM + 核心库类

## 加号的使用

当识别到"+"有一边为字符串是，开始做拼接运算（""内代表字符串）

```java
System.out.println("100"+"98");//10098
System.out.println("100"+2+3);//10023
System.out.println(100+98);//198
System.out.println(100+98+"9");//1989
```

数据类型

## 基本数据类型

##### 数值型

byte[1]\(-128~127)

short[2]\(-32768~32767)

int[4]\(-2147483648~2147483647)

long[8]\(-2^63~2^63-1)

float[4]

double[8]

##### 字符型

char[2] 

##### 布尔型

boolean[1]\(存放true，false)

#### 引用类型	

在**堆**中存放方式为地址		

##### 类(class)

##### 接口(interface)

##### 数组([])

#### 注意事项

浮点数=符号位+指数位+尾数为

尾数部分可能**丢失**，造成精度损失

声明float型时**必须**后面加'f'或'F'

对运算结果为**浮点数**时判断要注意

```java
double a = 8.1/3;//2.6999999999999997
double b = 2.7;
System.out.println(a);
System.out.println(Math.abs((a-b)));//4.440892098500626E-16
if(Math.abs((a-b))<1e-8){
    System.out.println("相等");
}
```

## 数据类型的转换

#### 自动数据类型转换

short byte char参与运算后会自动转化为int型

表达式中最后的结果类型为参与运算的最大类型

```Java
byte a = 2;
short b = 3;
int c = 200;
double d = 300;
a + b + c + d;//此结果为double型
```

#### 强制数据类型转换

1.数据溢出

```java
double d = 300;
byte a = (byte) d;
System.out.println(a);//a = 44（2*128 + 44）
```

2.括号的使用

```java
int a = (int)10*1.5+6*4;//错误 double无法转化为int
int a = (int)(10*1.5+6*4);//正确
```

#### 字符串的转化

```java
String s1 = "123";
String s2 = "123.34";
int a = Integer.parseInt(s1);
double b = Double.parseDouble(s2);
```

```java
boolean x = Boolean.parseBoolean("true");//只有当字符串为“true”时
boolean y = Boolean.parseBoolean("tue");//返回“ture”，否则返回”false“
System.out.println(x);
System.out.println(y);
```

```java
String s1 = "xyz";
System.out.println(s1.charAt(0));//取出第一个字符
```

#### 注意事项

char - > int - > long- > float - > double

byte - > short - >i nt - > long - > float - > double

```Java
float n = 5 + 1.1;//报错，5为int型，1.1为double型（float型无法兼容）
```





## 算数运算符

#### 取模

a % b = a - a / b * b

当a位小数

a % b = a - (int)a / b * b

#### 自增

```java
int a = 1;
a = a++;//temp = a;a = a + 1;a = temp;
System.out.println(a);//输出1
```

## 关系运算符

#### instanof

检查是否为类

```java
boolean  c = "ab" instanceof String;
System.out.println(c);//true
```

## 逻辑运算符

#### 真值表

短路与&&，短路或||，逻辑异或^

| a     | b     | a&b   | a&&b  | a\|b  | a\|\|b | !a    | a^b   |
| ----- | ----- | ----- | ----- | ----- | ------ | ----- | ----- |
| True  | True  | True  | True  | True  | True   | False | False |
| True  | False | False | False | True  | True   | False | True  |
| False | True  | False | False | True  | True   | True  | True  |
| False | False | False | False | False | False  | True  | False |

#### 短路与和逻辑与的区别

短路与

```java
 int a = 5;
 int b = 9;
 boolean c = a > 5 && b > a++;
 System.out.println(a);//输出5
```

逻辑与

```java
int a = 5;
int b = 9;
boolean c = a > 5 & b > a++;
System.out.println(a);//输出6
```

短路与当**语句1**为F时不会执行**语句2**

**短路或**与**逻辑或**同理

## 键盘输入

导入函数包

```java
import  java.util.Scanner;
```

```java
Scanner Sc = new Scanner(System.in);//Sc为Scanner类的对象
String name = Sc.next();//读取键盘内容
System.out.println(name);
```



## 位运算

~a			  按位**取反**		

a&b		   按位**与**					全真为真

a|b			按位**或**					一真则为真

a^b			按位**异或**		 		相同为0

a>>b		  **左移**b位（低位补0）

a<<b		  **右移**b位（低位溢出，符号位不变，并用符号位补溢出的高位）

a>>>b		**无符号**右移（逻辑右移）b位		

### 公式

#### 取反

##### 正数

~a =  -a - 1

##### 负数

~a = -a - 1

## 原码	反码	补码

[视频讲解]: 【计算机组成原理】原码反码补码 | 小白友好_哔哩哔哩_bilibili(https://www.bilibili.com/video/BV1oy4y1r7Ky?spm_id_from=333.337.search-card.all.click&vd_source=4cccd7d36f30bea1a2c896b0c

#### 原码

原码 	= 	最高位 	+ 	低位

#### 反码

##### 正数

与**原码**相同

##### 负数

符号位**不变**，其余位**取反**

#### 补码

##### 正数

与**原码**相同

##### 负数

补码 = 反码 + 1

#### 概念

1.正数**三码合一**

2.计算机运行时，都以**补码**的方式来运算

###  switch

switch（表达式）中表达式的返回值**必须**是（byte	short	int	char	enum[枚举]	String）

表达式的数据类型，应与case后**常量**的类型一致或时可以**自动**转换成为相同的类型。

## Break

break name；中止名字为name的循环

continue同理类似***C语言***的goto



# 面向对象基础

## 访问修饰符

pubic，protected，默认，private

## 返回数据类型

一个函数只能由一个返回值但返回值可以为**任意类型**

```java
public int[] getSumAndSub(int A,int B){
    int[] resArr = new int[2];
    resArr[0] = A +B;
    resArr[1] = A -B;
    return resArr;
}
```

## 方法的创建及使用

#### 1

```java
Cat p1 = new Cat();
p1.speak();//调用Cat中的speak方法
```

```java
class Cat{
    String name;
    int age;
    String color;
    //public为公开方法
    public void  speak(){
        System.out.println("OOOOOOK");
    }
}
```

#### 2

```java
int [][] map = {{1,2,3},{2,3,4},{7,6,5}}
MyTools tool =  new MyTools();
tool.printArr(map);
```

```java
class MyTools{
    public void printArr(int[][] map){
        for(int i = 0;i < map.length;i++){
            for(int j = 0;j < map[i].length;j++){
                System.out.print(map[i][j]);
            }
            System.out.println();
        }
    }
}
```

#### 3

```java
class MyTools{
    public int[] getSumAndSub(int A,int B){
        print(A,B);
        int[] resArr = new int[2];
        resArr[0] = A +B;
        resArr[1] = A -B;
        return resArr;
    }
    public void print(int a,int b){
        System.out.println(a + "" + b);
    }
}
```



## 堆和栈的理解

[参考视频]: 『教程』堆栈是个啥？_哔哩哔哩_bilibili(https://www.bilibili.com/video/BV1P44y1q7uL?spm_id_from=333.880.my_history.page.click)

可以简单的理解为**栈就是一本书的目录，堆是目录对应的内容。**

## **老鼠出迷宫\*\*

```java
public class hello {
		//1为路障
    	//2为移动路径
    	//3为死路
    public static  void  main(String[] args){
        int [][] map = new int [8][7];
        MyTools tools = new MyTools();
        for(int i = 0;i < 7;i++){
            map[0][i] = 1;
            map[7][i] = 1;
        }
        for(int i = 0;i < 8;i++) {
            map[i][0] = 1;
            map[i][6] = 1;
        }
        //设置路障
        map[3][2] = 1;
        map[3][1] = 1;
        map[2][2] = 1;
        tools.printArr(map);
        Active t1 = new Active();
        t1.findWay01(map,1,1);
        tools.printArr(map);

    }
}

class Active{
    public boolean findWay01(int[][] map ,int i,int j){
        if(map[6][5]==2){
            System.out.println("Find the way!!!!");
            return true;
        }else{
            if(map[i][j]==0){

                map[i][j]=2;
                //对四个方向尝试移动
                //移动方式下-》左-》上-》右
                if(findWay01(map,i+1,j)){
                    return true;
                }else if(findWay01(map,i,j+1)) {
                    return true;
                }else if(findWay01(map,i-1,j)) {
                    return true;
                }else if(findWay01(map,i,j-1)){
                    return true;
                }
                //四个方向都无法移动代表死路
                map[i][j] = 3;
                return false;
            }else{
                System.out.println("Can't find the way!!!!");
                return false;
            }
        }

    }

    public boolean findWay02(int[][] map ,int i,int j){
        if(map[6][5]==2){
            System.out.println("Find the way!!!!");
            return true;
        }else{
            if(map[i][j]==0){

                map[i][j]=2;
                //对四个方向尝试移动
                //移动方式上-》左-》下-》右
                if(findWay02(map,i-1,j)){
                    return true;
                }else if(findWay02(map,i,j+1)) {
                    return true;
                }else if(findWay02(map,i+1,j)) {
                    return true;
                }else if(findWay02(map,i,j-1)){
                    return true;
                }
                //四个方向都无法移动代表死路
                map[i][j] = 3;
                return false;
            }else{
                System.out.println("Can't find the way!!!!");
                return false;
            }
        }

    }
}


class MyTools{
    public void printArr(int[][] map){
        System.out.println("==当前地图情况======");
        for(int i = 0;i < map.length;i++){
            for(int j = 0;j < map[i].length;j++){
                System.out.print(map[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```

**更正后**

```java
public class hello {
    //1为路障
    //2为移动路径
    //3为死路
    public static  void  main(String[] args){
        int [][] map = new int [8][7];
        MyTools tools = new MyTools();
        //设置地图边界
        for(int i = 0;i < 7;i++){
            map[0][i] = 1;
            map[7][i] = 1;
        }
        for(int i = 0;i < 8;i++) {
            map[i][0] = 1;
            map[i][6] = 1;
        }
        //设置路障
        map[3][2] = 1;
        map[3][1] = 1;
        map[2][2] = 1;
        map[3][3] = 1;
        //调用函数打印地图
        tools.printArr(map);
        Active t1 = new Active();
        //使用函数进行找路
        t1.findWay01(map,1,1);
        //输出找路后的地图情况
        tools.printArr(map);
        int p = 0;
        //判断是否找路成功
        t1.isOut(p);
    }
}

class Active{
    int p = 0;
    public boolean findWay01(int[][] map ,int i,int j){
        if(map[6][5]==2){
            System.out.println("Find the way!!!!");
            //找路成功及改变全局变量p
            p++;
            return true;
        }else{
            if(map[i][j]==0){

                map[i][j]=2;
                //对四个方向尝试移动
                //移动方式下-》左-》上-》右
                if(findWay01(map,i+1,j)){
                    return true;
                }else if(findWay01(map,i,j+1)) {
                    return true;
                }else if(findWay01(map,i-1,j)) {
                    return true;
                }else if(findWay01(map,i,j-1)){
                    return true;
                }
                //四个方向都无法移动代表死路
                map[i][j] = 3;
                return false;
            }else{
                return false;
            }
        }

    }

    public boolean findWay02(int[][] map ,int i,int j){
        if(map[6][5]==2){
            System.out.println("Find the way!!!!");
            //找路成功及改变全局变量p
            p++;
            return true;
        }else{
            if(map[i][j]==0){

                map[i][j]=2;
                //对四个方向尝试移动
                //移动方式上-》左-》下-》右
                if(findWay02(map,i-1,j)){
                    return true;
                }else if(findWay02(map,i,j+1)) {
                    return true;
                }else if(findWay02(map,i+1,j)) {
                    return true;
                }else if(findWay02(map,i,j-1)){
                    return true;
                }
                //四个方向都无法移动代表死路
                map[i][j] = 3;
                return false;
            }else{
                return false;
            }
        }

    }
    public void isOut(int p){
        //将全局变量p的值传递
        p = this.p;
        if(p==0){
            //p == 0代表没有一条通路
            System.out.println("can't find the way!!!");
        }
    }

}


class MyTools{
    public void printArr(int[][] map){              //打印地图
        System.out.println("==当前地图情况======");
        for(int i = 0;i < map.length;i++){
            for(int j = 0;j < map[i].length;j++){
                System.out.print(map[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```



## ***汉诺塔\*\*\*

\*\***关于递归： 一定不要试图跟踪大型递归的过程！ 要写出递归，关键就是找出递归的递归方程式： 也就是说，要完成最后一步，那么最后一步的前一步要做什么。**

汉诺塔移动的整个过程可看做

**把（n-1）个盘子从A通过C移动到B**

**将第n个盘子从A移动到C**

**把（n-1）个盘子从B通过A移动到C**

从而实现递归

```java
public class hello {

    public static  void  main(String[] args){
            Tower tower = new Tower();
            tower.moveLine(3,'A','B','C');

    }
}


class Tower{

    public void moveLine(int num,char a,char b,char c){
        if(num == 1){
            System.out.println(a + "->" + c);
        }else{
            moveLine(num - 1,a,c,b);
            System.out.println(a + "->" + c);
            moveLine(num - 1,b,a,c);
        }
    }

}
```



## 方法的重载

方法名相同，但形参列表列表不相同（个数，顺序，类型）

```java
class MyTools{
    public int calculate(int a,int b){
        return a + b;
    }
    public double calculate(int a,double b){
        return a + b;
    }
    public double calculate(double a,int b){
        return a + b;
    }
    public int calculate(int a,int b,int c){
        return a + b + c;
    }
}
```

## 可变参数

可变参数可以和普通类型的参数一起放在形参列表，但必须保证可变参数在最后

```java
public int sum(int... nums){
    int res = 0;
    for(int i = 0;i< nums.length;i++){
        res +=nums[i];
    }
    return res;
}
```

## 构造器

完成对象的初始化

构造器名要与类名相同

构造器没有返回值

不写构造器系统会自动生成一个（默认）无参构造器

```java
Person p1 = new Person("Jack",20);
/*默认构造器为Person（）{

*///				}
```

```java
class Person{
    String name;
    int age;
    public Person(String pName,int pAge){
        name = pName;
        age = pAge;
    }
    public Person(String pName){
        name = pName;
    }
}
```

## this

```java
Person p1 = new Person("Jack",20);
System.out.println(p1.name);//输出null
System.out.println(p1.age);//输出0
```

```java
class Person{
    String name;
    int age;
    public Person(String name,int age){
        name = name;
        age = age;
    }
}
```

用this指向后

```java
Person p1 = new Person("Jack",20);
System.out.println(p1.name);//输出Jack
System.out.println(p1.age);//输出20
```

```java
class Person{
    String name;
    int age;
    public Person(String name,int age){
        this.name = name;
        this.age = age;
    }
}
```

##  猜拳模拟器

```java
import java.util.Random;
import  java.util.Scanner;

//文件名
public class hello {
    public static  void  main(String[] args){
            Tom t = new Tom();
            int isWinCount = 0;
            //二维数组存放局数及出拳情况
            int[][] arr1 = new int[3][3];
            //字符串数组存放三局游戏的输赢情况
            String[] arr2 = new String[3];
            Scanner scanner = new Scanner(System.in);
            for(int i = 0;i < 3;i++){
                System.out.println("请输入你要出的拳（0-拳头，1-剪刀，2-布）");
                //玩家出拳
                int num = scanner.nextInt();
                t.setTomGuessNum(num);
                //获得玩家出拳
                int tomGuess = t.getTomGuessNum();
                arr1[i][1] = tomGuess;
                //电脑随机出拳
                int comGuess = t.computerNum();
                arr1[i][2] = comGuess;
                //判断输赢情况
                String isWin = t.vsComputer();
                //输赢情况的存储
                arr2[i] = isWin;
                //局数
                arr1[i][0] = t.count;
                System.out.println("================");
                System.out.println("局数\t玩家的出拳\t电脑的出拳\t输赢情况");
                System.out.println(t.count + "\t" + tomGuess + "\t\t" + comGuess + "\t\t" + arr2[i]);
                System.out.println("================");
                //统计赢的局数
                isWinCount = t.winCount(isWin);
            }
        System.out.println("你赢了" + isWinCount + "次");
    }
}




class Tom{

    int tomGuessNum;
    int comGuessNum;

    int winCountNum;
    int count = 1;
    public void showInfo(){

    }
    //随机生成0-3的一个数字
    public int computerNum(){
        Random r = new Random();
        comGuessNum = r.nextInt(3);
        return comGuessNum;
    }

    public void setTomGuessNum(int tomGuessNum){
        if(tomGuessNum > 2||tomGuessNum < 0){       //异常的输入数据（退出程序）
            throw new IllegalArgumentException("数据输入错误");
        }
        this.tomGuessNum = tomGuessNum;         //将输入的值传给tomGuessNum
    }
    //获得tom所出的拳
    public int getTomGuessNum(){
        return tomGuessNum;
    }
    //判断是否获胜
    public String vsComputer(){
        if(tomGuessNum == 0 && comGuessNum == 1){
            return "You win!";
        }else if(tomGuessNum == 1 && comGuessNum == 2){
            return "You win!";
        }else if(tomGuessNum == 2 && comGuessNum == 0){
            return "You win!";
        }else if(tomGuessNum == comGuessNum){
            return "dogfall";
        }else{
            return "You default";
        }
    }
    //统计赢的局数
    public int winCount(String s){
        count++;
        if(s.equals("You win!")){
            winCountNum++;
        }
        return winCountNum;
    }
}
```



## 包

包的本质实际上就是创建不同的文件夹/目录来保存类文件

#### 命名

##### 规则

只能包含数字 字母 下划线 圆点，但不能用数字开头，不能用关键字级保留字

##### 规范

一般是小写字母+小圆点

com.公司名.项目名.公司业务名

com.sina.crm.user	//用户模块

com.sina.crm.order	//订单模块

com.sina.crm.utils		//工具类

#### 常用的包

java.lang.*	//lang包是基础包，默认引入，不需要再引入

java.util.*	//util包，系统提供的工具包工具类，使用Scanner

java.net.*	//网络包，网络开发

java.awt.*	//是做java的界面开发，GUI

#### 包的引入

```java
import  java.util.Scanner;//只引入java.until下的Scanner类
import  java.util.*;//引入java.until下的所有类
```



### 访问修饰符

| 访问级别   | 访问控制修饰符 | 同类 | 同包 | 子类 | 不同包 |
| ---------- | -------------- | ---- | ---- | ---- | ------ |
| 公开级别   | public         | T    | T    | T    | T      |
| 受保护级别 | protected      | T    | T    | T    | F      |
| 默认级别   | 没有修饰符     | T    | T    | F    | F      |
| 私有级别   | private        | T    | F    | F    | F      |

## *封装\*

将抽象出的数据和**数据**（属性）的**对数据的操作**（方法）**封装**再一起，**数据**被保护在**内部**，程序的其他部分只有通过**被授权的操作**（方法），才能对数据进行操作

#### 使用方法

封装数据中使用get和set操作数据

```java
public class hello {
    public static  void  main(String[] args){
        Person person = new Person();
        person.setName("Jack");
        person.setAge(30);
        person.setSalary(30000);

        Person smith = new Person("smith",2000,50000);
        System.out.println(smith.info());

    }
}

class Person{
    public String name;		//名字为公开类，年龄薪水为私有类即不可直接查询
    private int age;
    private double salary;
//无参构造器
    public Person(){

    }
//使用构造器时布直接指向保证数据安全
    public Person(String name,int age,double salary){
//        this.name = name;
//        this.age = age;
//        this.salary = salary;
        setName(name);
        setAge(age);
        setSalary(salary);
    }


    public String getName() {
        return name;
    }
//姓名长度为2 - 6个字符
    public void setName(String name) {
        if(name.length() >= 2 && name.length() <=6){
            this.name = name;
        }else{
            System.out.println("name Error");
            this.name = "Error";
        }

    }

    public int getAge() {
        return age;
    }
//年龄为1 - 120岁
    public void setAge(int age) {
        if(age >=1 && age <= 120){
            this.age = age;
        }else{
            System.out.println("age Error");
            this.age = 0;
        }
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
    public String info(){
        return "name = " + name + "\nage = " + age + "\nsalary = " + salary;
    }
}
```

#### 作用

隐藏实现细节

保证数据合理安全

## *继承\*

#### 注意事项

子类只能继承一个父类（即单继承机制）

子类无法直接访问父类的private的数据，只能通过父类的公共方法进行访问（即可将子类 父类视作同包不同类）

#### 使用方法

```java
class Student{
    public String name;
    public int age;
    private double score;


    public void setScore(double score) {
        this.score = score;
    }

    public void showInfo(){
        System.out.println("name " + name + " age " + age + " score " + score);
    }
}

class  Pupil extends Student{
    public void test(){
        System.out.println("Pupil " + name + " is testing.....");
    }
}


class Graduate extends Student{
    public void test(){
        System.out.println("Graduate " + name + " is testing.....");
    }
}
```

#### 作用

提升代码**复用性**

提高代码的**扩展性**和**维护性**



## super

super代表父类的引用，用于访问父类的**属性，方法，构造器**

且super必须放在**构造器**的**第一句**

#### super的使用

```java
public class A {
    public void  hi(){
        System.out.println("A hi is use");
    }
}
```



```java
public class B extends  A {

    public void sum(){
        System.out.println("B sum is use");
        hi();
        super.hi();
    }
    public  void hi(){
        System.out.println("B hi is use");
    }

}
```

#### super与this的区别

this从本类开始查找，super从父类开始查找

this调用的为奔雷构造器，而super调用父类构造器，但都需放在构造器的第一句

### 方法的重写

子类方法的参数，方法名称，要与父类方法的参数，方法名称一致

子类方法的返回类型要与父类一直或是父类返回类的子类

子类方法不能缩小父类方法的访问权限

| 名称 | 发生范围 | 方法名   | 形参列表                         | 返回类型                                           | 修饰符                             |
| ---- | -------- | -------- | -------------------------------- | -------------------------------------------------- | ---------------------------------- |
| 重载 | 本类     | 必须一样 | 类型，个数或者顺序至少又一个不同 | 无要求                                             | 无要求                             |
| 重写 | 父子类   | 必须一样 | 相同                             | 子类方法的返回类型要与父类一直或是父类返回类的子类 | 子类方法不能缩小父类方法的访问范围 |

## *多态\*

多态的前提是**两个对象（类）**存在**继承**关系

#### 编译类型与运行类型

可以访问的方法由编译类型决定

方法编译时的类型叫编译类型

方法运行时的类型叫运行类型

#### 向上转型

**语法** ：父类类型 引用名  =  new 子类类型();

可以调用父类可调用(符合访问权限)的成员

不可调用子类特有成员

调用时符合就近原则，即先找本类再找父类……

#### 向下转型

**语法** ：子类类型 引用名  =  (子类类型)   父类类型();

只能强转父类的引用，不能强转父类的对象

强转后可以调用子类类型中的所有成员

#### 动态绑定

当调用对象方法的时候，该对象回合该对象的内存地址/运行类型绑定

当调用对象属性时，没有动态绑定机制，哪里声明，哪里使用

```java
public class hello {
    public static  void  main(String[] args){
    A a = new B();
    System.out.println(a.sum());
    System.out.println(a.sum1());
    }
}

class A{
    int i = 10;
    public int sum(){
        return getI() + 10;
    }

    public int sum1(){
        return i + 10;
    }

    public int getI(){
        return i;
    }
}

class B extends  A{
    int i = 20;
//    public int sum(){
//        return getI() + 20;
//    }

//    public int sum1(){
//        return i + 10;
//    }

    public int getI(){
        return i;
    }
}
```





## equals



源码

```java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```



```java
public class hello {
    public static  void  main(String[] args){
        Integer integer1 = new Integer(5);
        Integer integer2 = new Integer(5);
        //判断地址是否相同
        System.out.println(integer1 == integer2);	//false
        //判断值是否相同
        System.out.println(integer1.equals(integer2));	//true
    }
}
```



## toString

源码

```java
public String toString() {
    //hashcode值是根据该值的地址运算过后所得到的一个值
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```



## 代码块

### 代码块的调用顺序

静态 > 普通 > 构造器

父类 > 子类

```java


public class hello {
    public static void main(String[] args) {
        A a = new A();
    }
}


class A {
    public A(){
        System.out.println("C");
    }
    
    private int b = getB();
    private static int a = getA();
    
    {
        System.out.println("B");
    }

    static {
        System.out.println("A");
    }

    public static int getA(){
        System.out.println("getA is use");
        return 1;
    }

    public int getB(){
        System.out.println("getB is use");
        return 1;
    }
}


```





## 单例设计模式



### 饿汉式

```java
public class hello {
    public static void main(String[] args) {
        Wife myWife = Wife.getWife();
        System.out.println(myWife);

    }
}

class Wife{
    private String name;

    private static Wife a = new Wife("Alice");

    private Wife (String name) {
        this.name = name;
    }

    public static Wife getWife(){
        return a;
    }

    private void s(){
        System.out.println("AAA");
    }
}
```





### 懒汉式



```java
public class hello {
    public static void main(String[] args) {
        System.out.println(Cat.n);
        Cat cat = Cat.getCat();
        System.out.println(cat);

        Cat cat2 = Cat.getCat();
        System.out.println(cat);
    }
}



class Cat {
    private String name;
    public static int n = 1;
    private static Cat cat ;

    private Cat (String name){
        System.out.println("构造器被调用");
        this.name = name;
    }

    public static Cat getCat() {
        if(cat == null){
            cat = new Cat("Dahuang");
        }
        return cat;
    }

}
```





## 接口

接口用来定义一些需要取实现的方法

java中可以通过接口来实现多继承

关键字**interface**





## 内部类

### 定义在外部类的局部位置上

#### 局部内部类

不能定义访问修饰符，但可以用final修饰

外部无法访问（局部变量）

可以访问外部类



#### 匿名内部类

可以当作实参直接传递

##### 基于接口

简化开发

```java
public class hello {
    public static void main(String[] args) {
        IA B = new IA() {
            @Override
            public void print() {
                System.out.println("OOk");
            }
        };
        B.print();
        //底层会自动创建对象分配，返回实例，该对象底层只会使用一次
        /*
            class XXXXX implements IA {
                  @Override
                  public void print() {
                     System.out.println("OK");
                  }
             }
         */
        
        
        A a = new A();
        a.print();
    }
}


interface IA {
    public void print();
}

class A implements IA {
    @Override
    public void print() {
        System.out.println("OK");
    }
}
```



##### 基于类

```java
public class hello {
    public static void main(String[] args) {

        C c = new C("AAA"){
            
        };
        System.out.println(c.getClass());
        /*
            class XXXXX extends C {
            
            }
        */
    }
}

class C {
    public C(String n){
        this.n = n;
    }
    String n;
}
```



### 定义在外部类的成员变量上

#### 成员内部类

创建及使用

```java
public class hello {
    public static void main(String[] args) {
        C c = new C();
        c.print();
		//第一种
        C.B b = c.new B();		
        System.out.println(b.n);
		//第二种
        C.B b2 = c.getB();
        System.out.println(b2.n);
    }
}

class C {
    class B {
        int n = 2;
    }
    B b = new B();
    public void print() {
        System.out.println(b.n);
    }

    public B getB() {
        return new B();
    }
}
```







#### 静态内部类

```java
public class hello {
    public static void main(String[] args) {
        C c = new C();
        C.B b = new C.B();
        b.print();

        C.B b1 = c.getB();
        b1.print();
		//通过类名创建
        C.B b2 = C.getB();
        b2.print();

    }
}

class C {
    int a = 2;
    static int b = 1;
    static class B {
        public void print() {
         //   System.out.println(a);		//无法访问非静态成员
            System.out.println(b);
        }
    }

    public  static B getB(){
        return new B();
    }
}
```



# 面向对象应用



## 枚举类

### 自定义枚举类

#### 原始代码

```java
public class hello {
    public static void main(String[] args) {
        Season season1 = new Season("春天","温暖");
        Season season2 = new Season("冬天","寒冷");

        

    }
}


class Season {
    private String name;
    private String desc;

    public Season(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
```

#### 不使用enum关键字

构造器私有化

去掉set方法

在对象内部直接创建

```java
public class hello {
    public static void main(String[] args) {
        System.out.println(Season.AUTUMN);
        System.out.println(Season.SPRING);

    }
}


class Season {
    private String name;
    private String desc;

    public static Season SPRING = new Season("春天","温暖");
    public static Season WINTER = new Season("冬天","寒冷");
    public static Season AUTUMN = new Season("秋天","凉爽");
    public static Season SUMMER = new Season("夏天","炎热");

    private Season(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public String getDesc() {
        return desc;
    }

    @Override
    public String toString() {
        return "Season{" +
                "name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                '}';
    }
}
```

#### 使用enum关键字

```java
public class hello {
    public static void main(String[] args) {
        System.out.println(Season.SPRING);
        System.out.println(Season.AUTUMN);


    }
}


enum Season {
    SPRING("春天","温暖"),WINTER("冬天", "寒冷"), AUTUMN ("秋天","凉爽"),SUMMER("夏天","炎热");
    private String name;
    private String desc;

    private Season(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public String getDesc() {
        return desc;
    }

    @Override
    public String toString() {
        return "Season{" +
                "name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                '}';
    }
}
```

### Enum成员方法

#### name

输出枚举对象的名字

#### ordinal

输出编号（次序）

#### values

返回类型为数组，包含所有枚举对象

#### valueOf

查找该名字的枚举对象后返回

#### compareTo

比较两个枚举常量（编号作差）

## 注解（Annotation）

### 三种基本注解

#### @Override

写在方法上表明该方法被重写

可以判断该方法是否被重写



#### @Deprecated

表明该元素以过时

即不推荐使用



#### @SuppressWarnings

抑制编译警告

### 四种元注解

元注解用于修饰其他注解

#### @Target

@Target说明了Annotation所修饰的对象范围：Annotation可被用于 packages、types（类、接口、枚举、Annotation类型）、类型成员（方法、构造方法、成员变量、枚举值）、方法参数和本地变量（如循环变量、catch参数）。在Annotation类型的声明中使用了target可更加明晰其修饰的目标。

作用：用于描述注解的使用范围（即：被描述的注解可以用在什么地方）



#### @Retention

@Retention定义了该Annotation被保留的时间长短：某些Annotation仅出现在源代码中，而被编译器丢弃；而另一些却被编译在class文件中；编译在class文件中的Annotation可能会被虚拟机忽略，而另一些在class被装载时将被读取（请注意并不影响class的执行，因为Annotation与class在使用上是被分离的）。使用这个meta-Annotation可以对 Annotation的“生命周期”限制。

作用：表示需要在什么级别保存该注释信息，用于描述注解的生命周期（即：被描述的注解在什么范围内有效）



#### @Documented

@Documented用于描述其它类型的annotation应该被作为被标注的程序成员的公共API，因此可以被例如javadoc此类的工具文档化。Documented是一个标记注解，没有成员。



#### @Inherited

@Inherited 元注解是一个标记注解，@Inherited阐述了某个被标注的类型是被继承的。如果一个使用了@Inherited修饰的annotation类型被用于一个class，则这个annotation将被用于该class的子类。

　　注意：@Inherited annotation类型是被标注过的class的子类所继承。类并不从它所实现的接口继承annotation，方法并不从它所重载的方法继承annotation。

　　当@Inherited annotation类型标注的annotation的Retention是RetentionPolicy.RUNTIME，则反射API增强了这种继承性。如果我们使用java.lang.reflect去查询一个@Inherited annotation类型的annotation时，反射[代码检查](https://www.baidu.com/s?wd=代码检查&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)将展开工作：检查class和其父类，直到发现指定的annotation类型被发现，或者到达类继承结构的顶层。



## 异常处理

当程序可能会出现不致命的异常，但需要程序继续运行时

```java
public class hello {
    public static void main(String[] args) {
        int a = 0;
        int b = 10;
        try {		//将可能会出现异常的语句放在try之内用来捕获异常
            int res = b/a;
        } catch (Exception e) {
            e.printStackTrace();	//输出异常
        }
        System.out.println("AA");		//程序继续运行

    }
}
```



### 异常介绍

#### Error

Java虚拟机无法解决的严重问题（JVM系统内部错误，资源耗尽 等）



#### Exception

因为编程错误，或偶然的外在因素导致的一般性问题，可以使用指对性的代码进行处理（空指针异常，读取不存在的文件 等）

分为运行时异常和编译时异常

### 运行时异常

#### NullPointerException

空指针异常

当程序访问对象时该对象为空

#### ArithmeticException

数学运算异常

当除数为’0‘时

#### ArrayIndexOutOfBoundsException

数组越界

#### ClassCastException

类型转换异常

当试图将对象强转为不是实例的子类时

#### NumberFormatException

数字格式不正确异常

当该字符串不能转换为适当格式时





## 常用类

### 包装类

指将基础数据类型封装为类



### String类

jdk8及之前使用char数组存储，9及以后使用byte数组存储



#### StringBuffer

String保存的是字符串常量，里面的值不能更改，每次String类的更新实际上就是更改地址，效率较低

private final char value[]		//存放在常量池

StringBuffer保存的是字符串变量，不用每次更新地址，效率较高

char[] value			//存放在堆区





#### StringBuilder

不是线程安全，但速度快于StringBuffer



## 注册模拟器

```java
/*
 *   @author楠哥
 *
 *
 */


public class hello {
    public static void main(String[] args) {
        String name = "jack";
        String pwd = "123456";
        String email = "Jack@123.com";

        try {
            user(name,pwd,email);
            System.out.println("注册成功");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }


    }

    public static void user(String name,String pwd,String emali) {

        int nameLen = name.length();
        if(nameLen < 2 || nameLen >4){
            throw new RuntimeException("用户名长度不符合要求");
        }

        if(!(pwd.length() == 6 && isDigital(pwd))) {
            throw new RuntimeException("密码长度为6，且去因全为数字");
        }

        int i = emali.indexOf('@');
        int j = emali.indexOf('.');
        if (!(i > 0 && j > i )){
            throw new RuntimeException("邮箱中包含‘@’和’.‘，且‘@’在‘.‘之前");
        }
        
    }

    public static boolean isDigital(String str) {
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if(chars[i] < '0' || chars[i] > '9') {
                return false;
            }
        }
        return true;
    }
}
```



## 集合

### 集合的基础方法

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */


import java.util.ArrayList;
import java.util.List;

public class hello {
    @SuppressWarnings({"all"})
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add("Jack");
        list.add(10);
        list.add(true);
        System.out.println("list = " + list);

        list.remove("Jack");
        System.out.println("list = " + list);

        list.remove(0);
        System.out.println("list = " + list);
        System.out.println(list.contains("Jack"));
        System.out.println(list.size());

        list.clear();
        System.out.println(list);

        ArrayList list2 = new ArrayList();
        list2.add("红楼梦");
        list2.add("三国演义");
        list2.add("Java");

        list.addAll(list2);
        System.out.println(list);
        System.out.println(list.containsAll(list2));

        list.add("金瓶梅");
        list.removeAll(list2);
        System.out.println(list);
    }
}
```



### 迭代器



```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class hello {
    @SuppressWarnings({"all"})
    public static void main(String[] args) {
        Collection col = new ArrayList();

        col.add(new Book("三国演义","罗贯中",1));
        col.add(new Book("水浒传","施耐庵",2));
        col.add(new Book("金瓶梅","楠哥",11451));

        System.out.println(col);

        Iterator iterator = col.iterator();
        while (iterator.hasNext()) {
            Object obj = iterator.next();
            System.out.println("obj = " + obj);
        }

        
    }
}

@SuppressWarnings({"all"})
class Book {
    private String name;
    private String author;
    private double price;

    public Book(String name, String author, double price) {
        this.name = name;
        this.author = author;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", price=" + price +
                '}';
    }
}
```



### HashSet

 

HashSet底层是HashMap

添加一个元素时，会先得到该元素的hash值，会转化成索引值

找到存储数据表table，看到这个索引位置是否已经存放有元素

如果没有，直接加入

如果有，调用equals比较，如果相同，就放弃添加，如果不相同，则添加到最后





```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */


import java.util.HashSet;
import java.util.Objects;

public class hello {
    @SuppressWarnings({"all"})
    public static void main(String[] args) {
        HashSet hashSet = new HashSet();

        hashSet.add(new Employee("milan", 18));
        hashSet.add(new Employee("smith", 28));
        hashSet.add(new Employee("milan", 18));

        System.out.println("hashSet = " + hashSet);


    }
}



class Employee {
    private String name;
    private int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return age == employee.age && Objects.equals(name, employee.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
```



### Map

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.util.*;

@SuppressWarnings({"all"})
public class hello {
    public static void main(String[] args) {
        Map hashMap = new HashMap();

        hashMap.put("no1", "aa");   //key - value
        hashMap.put("no2", "bb");   //key不可重复
        hashMap.put("no1", "cc");   //value可以重复

        System.out.println("map = " + hashMap);

        hashMap.put("no3", "cc");
        hashMap.put(null, "dd");   //key可以为空


        System.out.println("map = " + hashMap);
    }
}
```





### HashTable

是线程安全的，但是k-v都不允许为空



### 泛型

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.util.*;

@SuppressWarnings({"all"})
public class hello {
    public static void main(String[] args) {
        HashSet<Student> students = new HashSet<Student>();

        students.add(new Student("Jack",18));
        students.add(new Student("Tom",28));
        students.add(new Student("Marry",38));

        for (Student student : students) {
            System.out.println(student);
        }

        HashMap<String, Student> hm = new HashMap<>();

        hm.put("Taom",new Student("Taom",28));
        hm.put("Jeack",new Student("Jeack",18));
        hm.put("ww", new Student("ww", 17));

        Set<Map.Entry<String, Student>> entries = hm.entrySet();
        Iterator<Map.Entry<String, Student>> iterator = entries.iterator();

        while (iterator.hasNext()) {
            Map.Entry<String, Student> next = iterator.next();
            System.out.println(next.getKey() + "-" + next.getValue());

        }


    }
}


class Student {
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```







#### 自定义泛型

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.util.*;

@SuppressWarnings({"all"})
public class hello {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;

        Dog<Integer, Integer , String> dog = new Dog<>("aa",a,b,"3aa");
        Dog<Integer, Integer , Integer> dog2 = new Dog<>("aa",a,b,31);

        System.out.println(dog);
        System.out.println(dog2);

    }
}

class Dog<T, R, M> {
    String name;
    T t;
    R r;
    M m;



    public Dog(String name, T t, R r, M m) {
        this.name = name;
        this.r = r;
        this.m = m;
        this.t = t;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public T getT() {
        return t;
    }

    public void setT(T t) {
        this.t = t;
    }

    public R getR() {
        return r;
    }

    public void setR(R r) {
        this.r = r;
    }

    public M getM() {
        return m;
    }

    public void setM(M m) {
        this.m = m;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                ", t=" + t +
                ", r=" + r +
                ", m=" + m +
                '}';
    }
}
```



# 坦克大战



## 绘图

```java
package Draw;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import javax.swing.*;
import java.awt.*;

@SuppressWarnings({"all"})
public class DrawCircle extends JFrame{

    private MyPanel mp = null;

    public static void main(String[] args) {
        new DrawCircle();

    }

    public DrawCircle() {
        //创建一个画板
        mp = new MyPanel();
        //将画板加入框架
        this.add(mp);
        //设置画板大小
        this.setSize(800,600);
        //当画板关闭时程序退出
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //设置画板可视
        this.setVisible(true);

    }
}


class MyPanel extends JPanel {

    @Override
    public void paint(Graphics g) {
        System.out.println("print方法被调用");

        super.paint(g);
        //画圆
        g.drawOval(10,10,100,100);
        //画直线
        g.drawLine(10,10,110,110);
        //花矩形
        g.drawRect(110,110,100 ,100);
        //填充矩形
        g.setColor(Color.BLUE);     //设置画笔颜色
        g.fillRect(110,10,100,100);
        //填充椭圆
        g.setColor(Color.RED);
        g.fillOval(10,110,100,100);
        //接受图片
        Image image = Toolkit.getDefaultToolkit().getImage(Panel.class.getResource("/1.jpg"));
        g.drawImage(image,210,210,400,300,this);    //将图片加入画板
        //画字符串
        g.setColor(Color.GREEN);
        g.setFont(new Font("隶书", Font.BOLD, 50));   //设置字体，风格和大小
        g.drawString("你好",210,110);
    }
}
```



## 事件处理机制



### 小球的移动

```java
package Event;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class BallMove extends JFrame{

    MyPanel mp = null;
    public static void main(String[] args) {
        BallMove ballMove = new BallMove();
    }

    public BallMove() {
        mp = new MyPanel();
        this.add(mp);
        this.setSize(400, 300);
        this.addKeyListener(mp);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }

}


//KeyListener式键盘的监听器
class MyPanel extends JPanel implements KeyListener{

    //
    int x = 10;
    int y = 10;

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.fillOval(x, y, 20, 20);
    }

    //有字符输出时，该方法会触发
    @Override
    public void keyTyped(KeyEvent e) {

    }

    //当某个键按下时，该方法会触发
    @Override
    public void keyPressed(KeyEvent e) {
    //    System.out.println((char)e.getKeyCode() + "被按下");
        if(e.getKeyCode() == KeyEvent.VK_DOWN) {
            y++;
        } else if(e.getKeyCode() == KeyEvent.VK_UP) {
            y--;
        } else if(e.getKeyCode() == KeyEvent.VK_LEFT) {
            x--;
        } else if(e.getKeyCode() == KeyEvent.VK_RIGHT) {
            x++;
        }
        //
        this.repaint();


    }

    //当某个键松开时，该方法会触发
    @Override
    public void keyReleased(KeyEvent e) {

    }
}
```





## 线程



```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.util.*;

@SuppressWarnings({"all"})
public class hello {
    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.start();

        for (int i = 0; i < 10; i++) {
            System.out.println("主线程" + i + Thread.currentThread().getName());
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }


    }
}



class Cat extends Thread {
    int times = 0;

    @Override
    public void run() {
        while (true) {
            System.out.println("喵喵" + (++times) + "线程名" + Thread.currentThread().getName());

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if(times == 80) {
                break;
            }

        }
    }
}
```





```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.util.*;

@SuppressWarnings({"all"})
public class hello {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Thread thread = new Thread(dog);
        thread.start();

        for (int i = 0; i < 20; i++) {
            System.out.println("哈哈" + (i + 1) + Thread.currentThread().getName());

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}


class Dog implements Runnable {

    int count = 0;

    @Override
    public void run() {
        while (true) {
            System.out.println("汪汪" + (++count) + Thread.currentThread().getName());

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if(count == 20) {
                break;
            }
        }
    }
}
```





### 多窗口售票问题

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

public class SellTicket {
    public static void main(String[] args) {

//        SellTicket01 sellTicket01 = new SellTicket01();
//        SellTicket01 sellTicket02 = new SellTicket01();
//        SellTicket01 sellTicket03 = new SellTicket01();
//        sellTicket01.start();
//        sellTicket02.start();
//        sellTicket03.start();


        SellTicket02 sellTicket02 = new SellTicket02();
        new Thread(sellTicket02).start();
        new Thread(sellTicket02).start();
        new Thread(sellTicket02).start();


    }
}

class SellTicket01 extends Thread {

    private static int ticketNum = 100;
    static int count = 0;

    @Override
    public void run() {
        while (true) {



            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            if(ticketNum <= 0) {
                System.out.println("票已售空");
                break;
            }

            System.out.println("窗口" + Thread.currentThread().getName() +
                    "售出了1张票" + "剩余票数 = " + (--ticketNum));
            count++;
            System.out.println(count);
        }

    }
}

class SellTicket02 implements Runnable {

    private int ticketNum = 100;
    int count = 0;

    @Override
    public void run() {
        while (true) {



            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            if(ticketNum <= 0) {
                System.out.println("票已售空");
                break;
            }

            System.out.println("窗口" + Thread.currentThread().getName() +
                    "售出了1张票" + "剩余票数 = " + (--ticketNum));
            count++;
            System.out.println(count);
        }

    }
}
```





### 线程的中断

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

public class SellTicket {
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T();
        t1.setName("导管王");
        t1.setPriority(Thread.MIN_PRIORITY);

        System.out.println(t1.getName());

        t1.start();

        for (int i = 0; i < 5; i++) {

            Thread.sleep(1000);

            System.out.println("hi " + i);
        }
        

        t1.interrupt();


    }
}


class T extends Thread {

    @Override
    public void run() {
        while (true) {
            for (int i = 0; i < 5; i++) {
                System.out.println(Thread.currentThread().getName() + " 导管 " + i);
            }

            try {
                System.out.println(Thread.currentThread().getName() + "休眠中");
                Thread.sleep(20000);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + "被唤醒了");
            }

        }
    }
}
```



### 线程的插队

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

public class SellTicket {
    public static void main(String[] args) throws InterruptedException {
        T t = new T();
        t.start();

        for (int i = 0; i < 20; i++) {
            Thread.sleep(500);

            System.out.println("主线程(小弟) " + (i + 1));
            if(i == 5) {
                System.out.println("主线程让子线程先吃");
            //    t.join();     //插队
                Thread.yield();     //礼让，不一定成功
                System.out.println("子线程吃完了");
            }
        }
    }
}


class T extends Thread {

    int count = 0;
    @Override
    public void run() {
        while (true) {

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + "被唤醒了");
            }
            System.out.println("子线程（老大） " + (++count));
            if(count >= 20) {
                break;
            }

        }
    }
}
```





### 守护线程

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */



public class SellTicket {
    public static void main(String[] args) throws InterruptedException {
        MyDaemonThread myDaemonThread = new MyDaemonThread();
        myDaemonThread.setDaemon(true);
        myDaemonThread.start();

        for (int i = 0; i <= 10; i++) {
            System.out.println("你好");
            Thread.sleep(500);

        }

    }
}


class MyDaemonThread extends Thread {

    @Override
    public void run() {
        while (true) {

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {

            }
            System.out.println("Hello world");
        }
    }
}
```





### 线程的状态

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */



public class SellTicket {
    public static void main(String[] args) throws InterruptedException {
        T t = new T();
        System.out.println(t.getName() + " " + t.getState());
        t.start();
        while (true) {
            System.out.println(t.getName() + " " + t.getState());
            Thread.sleep(500);

            if(t.getState() == Thread.State.TERMINATED) {
                break;
            }
        }

        System.out.println(t.getName() + " " + t.getState());

    }
}


class T extends Thread {

    @Override
    public void run() {
        while (true) {

            for (int i = 0; i < 10; i++) {
                System.out.println("hi " + i);

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {

                }

            }

            break;

        }
    }
}
```





### 线程的同步



```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

public class SellTicket {
    public static void main(String[] args) {
        SellTicket03 sellTicket03 = new SellTicket03();
        new Thread(sellTicket03).start();
        new Thread(sellTicket03).start();
        new Thread(sellTicket03).start();

    }
}



class SellTicket03 implements Runnable {
    private int ticketNum = 100;
    int count = 0;
    private boolean loop = true;

    public synchronized void sell() {
        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        if(ticketNum <= 0) {
            System.out.println("票已售空");
            loop = false;
            return;
        }

        System.out.println("窗口" + Thread.currentThread().getName() +
                "售出了1张票" + "剩余票数 = " + (--ticketNum));
        count++;
        System.out.println(count);
    }


    @Override
    public void run() {
        while (loop) {
            sell();

//            try {
//                Thread.sleep(50);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
        }

    }
}
```





### 线程的死锁

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

public class DeadLock {
    public static void main(String[] args) {

        DeadLockDemo deadLockDemo1 = new DeadLockDemo(true);
        DeadLockDemo deadLockDemo2 = new DeadLockDemo(false);
        deadLockDemo1.setName("线程一");
        deadLockDemo2.setName("线程二");

        deadLockDemo1.start();
        deadLockDemo2.start();
    }
}






class DeadLockDemo extends Thread {
    static Object o1 = new Object();
    static Object o2 = new Object();
    boolean flag;

    public DeadLockDemo(boolean flag) {
        this.flag = flag;
    }

    @Override
    public void run() {
        if(flag) {
            synchronized (o1) {     //对象互斥锁
                System.out.println(Thread.currentThread().getName() + " 进入1");
                synchronized (o2) {
                    System.out.println(Thread.currentThread().getName() + " 进入2");
                }
            }
        } else {
            synchronized (o2) {
                System.out.println(Thread.currentThread().getName() + " 进入3");
                synchronized (o1) {
                    System.out.println(Thread.currentThread().getName() + " 进入4");
                }
            }
        }
    }


}
```





## io流



### 写文件

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.util.*;

public class hello {
    public static void main(String[] args) {
        


    }

    @Test
    public void create01() {
        String filepath = "d://Desktop//12.txt";
        File file = new File(filepath);

        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @Test
    public void create02() {
        File parentFile = new File("d://Desktop");
        String filename = "nnn2.txt";
        File file = new File(parentFile, filename);

        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }



}
```





### 输入流

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;

public class hello {
    public static void main(String[] args) {




    }


    @Test
    public void readFile01() {
        String filePath = "d://Desktop//1.txt";
        FileInputStream fileInputStream = null;
        int readData = 0;
        try {
            fileInputStream = new FileInputStream(filePath);
            while ((readData = fileInputStream.read()) != -1) {
                System.out.print((char) readData);
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fileInputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Test
    public void readFile02() {
        String filePath = "d://Desktop//1.txt";
        FileInputStream fileInputStream = null;
        byte[] buf = new byte[8];
        try {
            fileInputStream = new FileInputStream(filePath);
            while (true) {
                int len = fileInputStream.read(buf);
                if(len <= 0) {
                    break;
                }
                System.out.print(new String(buf, 0, len));
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fileInputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }





    @Test
    public void info() {
        File file = new File("d://Desktop//1.txt");

        System.out.println(file.getName());
        System.out.println(file.getAbsoluteFile());
        System.out.println(file.getParent());
        System.out.println(file.length());
        System.out.println(file.exists());
        System.out.println(file.isFile());
        System.out.println();

    }


}
```





### 输出流





```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) {




    }

    @Test
    public void writeFile() {

        String filePath = "d://Desktop//ab.txt";
        FileOutputStream fileOutputStream = null;

        try {
            //写入
            fileOutputStream = new FileOutputStream(filePath);
            //追加
        //    fileOutputStream = new FileOutputStream(filePath, true);
        //    fileOutputStream.write('H');

            String str = "Hello world";
            fileOutputStream.write(str.getBytes());

            fileOutputStream.write(str.getBytes(), 0, 3 );

        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            try {
                fileOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }


    }



}
```





### 文件拷贝

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */


import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) {
        String scrFilePath = "d://Desktop//myWife//1.jpg";
        String destFilePath = "d://Desktop//2.jpg";
        FileInputStream fileInputStream = null;
        FileOutputStream fileOutputStream = null;

        try {
            fileInputStream = new FileInputStream(scrFilePath);
            fileOutputStream = new FileOutputStream(destFilePath);
            byte[] buf = new byte[1024];
            int readLen = 0;
            while ((readLen = fileInputStream.read(buf)) != -1) {
                fileOutputStream.write(buf, 0, readLen);
            }
            System.out.println("拷贝成功");
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if(fileInputStream != null) {
                    fileInputStream.close();
                }
                if(fileOutputStream != null) {
                    fileOutputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        
    }


}
```





### FileReader

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */


import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) {

    }

    @Test
    public void readFile01() {
        String filePath = "d://Desktop//1.txt";
        FileReader fileReader = null;
        int data;


        try {
            fileReader = new FileReader(filePath);

            while ((data = fileReader.read()) != -1) {
                System.out.print((char)  data);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if(fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }


    @Test
    public void readFile02() {
        String filePath = "d://Desktop//1.txt";
        FileReader fileReader = null;
        int readLen = 0;
        char[] buf = new char[8];

        try {
            fileReader = new FileReader(filePath);

            while ((readLen = fileReader.read(buf)) != -1) {
                System.out.print(new String(buf, 0, readLen));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if(fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }
}
```





### FileWrite



```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */


import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) {

    }


    @Test
    public void writeFile() {
        String filePath = "d://Desktop//1.txt";
        FileWriter fileWriter = null;

        char[] chars = {'a','b','c'};

        try {
            fileWriter = new FileWriter(filePath);
            fileWriter.write('H');
            fileWriter.write(chars);
            fileWriter.write("ABCDEFGHI".toCharArray(),3,6);
            fileWriter.write("\n你好\n");
            fileWriter.write("我爱学习",1 ,3);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //不关闭流的话会导致数据无法录入
            if(fileWriter != null) {
                try {
                    fileWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }


    }

}
```





### BufferedReader

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) throws Exception{
        String filePath = "d://Desktop//1.txt";
        BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath));

        String line;
        //按行读取文件，返回为空时，代表读取完毕
        while (( line = bufferedReader.readLine()) != null) {
            System.out.println(line);
        }

        bufferedReader.close();


    }
}
```



### BufferedWrite



```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) throws Exception{
        String filePath = "d://Desktop//ab.txt";
    //    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(filePath,true));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(filePath));
        bufferedWriter.write("Hello world");
        bufferedWriter.newLine();
        bufferedWriter.write("Hello2 world");
        bufferedWriter.newLine();
        bufferedWriter.write("Hello3 world");
        bufferedWriter.newLine();


        bufferedWriter.close();
    }
}
```



### 序列化操作文件



#### 序列化写入文件

```java
package Test;/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.*;

public class hello2 {
    public static void main(String[] args) throws Exception{
        //序列化后保存的文件格式不是纯文本格式
        String filePath = "d://Desktop//ab.txt";

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filePath));

        //自动装箱实现Serializable接口
        oos.writeInt(100);
        oos.writeBoolean(true);
        oos.writeChar('a');
        oos.writeDouble(9.5);

        oos.writeUTF("你好");
        oos.writeObject(new Dog("旺财",10));
        oos.close();
        System.out.println("序列化形式保存完毕");

    }
}

//实现Serializable接口
class Dog implements Serializable{
    private String name;
    private int age;

    public Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```





#### 序列化读取文件

如果需要调用Dog类里的方法，则需要将Dog的定义拷贝到可以引用的地方

否则无法向下转型

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.*;

public class hello {
    public static void main(String[] args) throws Exception{
        //序列化后保存的文件格式不是纯文本格式
        String filePath = "d://Desktop//ab.txt";

        ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filePath));

        System.out.println(ois.readInt());
        System.out.println(ois.readBoolean());
        System.out.println(ois.readChar());
        System.out.println(ois.readDouble());
        System.out.println(ois.readUTF());
        System.out.println(ois.readObject());

        ois.close();
    }
}
```



### Properties

其父类为Hashtable底层为Hashtable的核心方法

#### 传统方法读取信息

```java
package Properties_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Properties {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("src//mysql.properties"));
        String line = "";
        while ((line = br.readLine()) != null) {
            String[] split = line.split("=");
            System.out.println(split[0] + "值是：" + split[1]);
        }
        br.close();

    }
}
```



#### 使用properties读取信息

```java
package Properties_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class Properties01 {
    public static void main(String[] args) throws IOException {

        Properties properties = new Properties();

        properties.load(new FileReader("src//mysql.properties"));

        properties.list(System.out);
        System.out.println("========================");
        String user = properties.getProperty("user");
        String pwd = properties.getProperty("pwd");
        String ip = properties.getProperty("ip");
        System.out.println("user = " + user);
        System.out.println("pwd = " + pwd);
        System.out.println("ip = " + ip);

    }
}
```



#### 写入和修改

```java
package Properties_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;

public class Properties01 {
    public static void main(String[] args) throws IOException {

        Properties properties = new Properties();

        //如果key不存在则则创建
        //如果key存在则修改
        properties.setProperty("charset", "utf8");
        properties.setProperty("user", "汤姆");
        properties.setProperty("pwd", "12345");

        properties.store(new FileWriter("src//mysql2.properties"), null);
    }
}
```



### 音乐播放

```java
package swx.music.play;

import java.io.File;
import java.io.IOException;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.SourceDataLine;
import javax.sound.sampled.UnsupportedAudioFileException;

/**
 * 如何实现播放音频文件（.wav文件）

 * 
 * 
 * @author 10570
 *
 */

public class MpDemo {
	public static void main(String[] args) throws Exception, Exception {
		
	
	//1 获取你要播放的音乐文件
	File file = new File("D:\\河图.wav");
	//2、定义一个AudioInputStream用于接收输入的音频数据
	AudioInputStream am;
	//3、使用AudioSystem来获取音频的音频输入流(处理（抛出）异常)
	am = AudioSystem.getAudioInputStream(file);
	//4、使用AudioFormat来获取AudioInputStream的格式
	AudioFormat af = am.getFormat();
	//5、一个源数据行
	SourceDataLine sd ;
	//6、获取受数据行支持的音频格式DataLine.info
	//DataLine.Info dl = new DataLine.Info(SourceDataLine.class, af);
	//7、获取与上面类型相匹配的行 写到源数据行里 二选一
	sd = AudioSystem.getSourceDataLine(af);//便捷写法
	//sd = (SourceDataLine) AudioSystem.getLine(dl);
	//8、打开具有指定格式的行，这样可以使行获得资源并进行操作
	sd.open();
	//9、允许某个数据行执行数据i/o
	sd.start();
	//10、写数据
	int sumByteRead = 0; //读取的总字节数
	byte [] b = new byte[320];//设置字节数组大小
	//11、从音频流读取指定的最大数量的数据字节，并将其放入给定的字节数组中。
	while (sumByteRead != -1) {//-1代表没有 不等于-1时就无限读取
		sumByteRead = am.read(b, 0, b.length);//12、读取哪个数组
		if(sumByteRead >= 0 ) {//13、读取了之后将数据写入混频器,开始播放
			sd.write(b, 0, b.length);
			
		}
	}
	//关闭
	sd.drain();
	sd.close();
	
	
	
	}
}


```







# 网络







## InetAdress

```java
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */


import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.*;

public class hello {
    public static void main(String[] args) throws UnknownHostException {
        //获取本机InetAddress对象
        InetAddress localHost = InetAddress.getLocalHost();
        System.out.println(localHost);
        //通过主机名获取InetAddress对象
        InetAddress host1 = InetAddress.getByName("LAPTOP-QQBRC4GT");
        System.out.println("host1 = " + host1);
        //通过域名返回InetAddress对象
        InetAddress host2 = InetAddress.getByName("www.baidu.com");
        System.out.println("host2 = " + host2);
        //通过InetAddress对象获得IP地址
        String hostAddress = host2.getHostAddress();
        System.out.println(hostAddress);
        //通过InetAddress对象，获取对应的主机名或域名
        String hostName = host2.getHostName();
        System.out.println(hostName);
    }
}
```





## TCP





### 字节流

实现两次握手

#### Server

```java
package socket_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketTCP02Server {
    public static void main(String[] args) throws IOException {
        //在本机9999端口监听,等待连接
        //9999端口未被占用
        ServerSocket serverSocket = new ServerSocket(9999);
        System.out.println("服务端在9999端口监听，等待连接…………");
        //当有客户端连接9999端口是，程序会阻塞，等待连接
        //如果有客户端连接则返回socket对象
        Socket socket = serverSocket.accept();
        System.out.println("服务器端socket = " + socket.getClass());

        //通过socket的输入流读取数据
        InputStream inputStream = socket.getInputStream();
        byte[] buf = new byte[1024];
        int readLen = 0;
        while ((readLen = inputStream.read(buf)) != -1) {
            System.out.println(new String(buf, 0, readLen));
        }

        OutputStream outputStream = socket.getOutputStream();
        outputStream.write("hello, client".getBytes());
        socket.shutdownOutput();        //结束标志


        outputStream.close();
        inputStream.close();
        socket.close();
		serverSocket.close();
    }
}
```





#### Client

```java
package socket_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class SocketTCP02Client {
    public static void main(String[] args) throws IOException {
        //连接这台主机的9999端口
        Socket socket = new Socket(InetAddress.getLocalHost(), 9999);
        System.out.println("客户端socket返回" + socket.getClass());
        //连接上后，得到和socket关联的输出流
        OutputStream outputStream = socket.getOutputStream();
        outputStream.write("Hello, server".getBytes());
        socket.shutdownOutput();        //结束标志

        InputStream inputStream = socket.getInputStream();
        byte[] buf = new byte[1024];
        int readLen = 0;
        while ((readLen = inputStream.read(buf)) != -1) {
            System.out.println(new String(buf, 0, readLen));
        }

        inputStream.close();
        outputStream.close();
        socket.close();
        System.out.println("客户端已退出");

    }
}
```





### 字符流



#### Server

```java
package socket_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketTCP03Server {
    public static void main(String[] args) throws IOException {
        //在本机9999端口监听,等待连接
        //9999端口未被占用
        ServerSocket serverSocket = new ServerSocket(9999);
        System.out.println("服务端在9999端口监听，等待连接…………");
        //当有客户端连接9999端口是，程序会阻塞，等待连接
        //如果有客户端连接则返回socket对象
        Socket socket = serverSocket.accept();
        System.out.println("服务器端socket = " + socket.getClass());

        //通过socket的输入流读取数据
        InputStream inputStream = socket.getInputStream();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String s = bufferedReader.readLine();
        System.out.println(s);
        //回复数据
        OutputStream outputStream = socket.getOutputStream();
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));
        bufferedWriter.write("hello, client");
        bufferedWriter.newLine();
        bufferedWriter.flush();


        bufferedWriter.close();
        bufferedReader.close();
        socket.close();
		serverSocket.close();

    }
}
```







#### Client

```java
package socket_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.*;
import java.net.InetAddress;
import java.net.Socket;

public class SocketTCP03Client {
    public static void main(String[] args) throws IOException {
        //连接这台主机的9999端口
        Socket socket = new Socket(InetAddress.getLocalHost(), 9999);
        System.out.println("客户端socket返回" + socket.getClass());
        //连接上后，得到和socket关联的输出流
        OutputStream outputStream = socket.getOutputStream();
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));
        //发送数据到server
        bufferedWriter.write("hello, server");
        bufferedWriter.newLine();       //换行，表示写入内容结束,对方必须使用readLine()读取
        bufferedWriter.flush();     //字符流需要手动刷新
        
        //接收数据
        InputStream inputStream = socket.getInputStream();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String s = bufferedReader.readLine();
        System.out.println(s);


        //关闭外层流
        bufferedWriter.close();
        bufferedReader.close();
        socket.close();
        System.out.println("客户端已退出");

    }
}
```



### TCP传输文件



#### Server



```java
package upload_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPFileUploadServer {
    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(8888);
        System.out.println("服务端在8888端口监听…………");

        Socket socket = serverSocket.accept();

        BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
        byte[] bytes = streamToByteArray(bis);

        String destFilePath = "d://Desktop//qwe.png";
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(destFilePath));
        bos.write(bytes);
        bos.close();

        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        writer.write("收到图片");
        writer.flush();
        socket.shutdownOutput();


        bis.close();
        socket.close();
        serverSocket.close();



    }

    public static byte[] streamToByteArray(InputStream is) throws  Exception {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        byte[] b = new byte[1024];
        int len;
        while ((len = is.read(b)) != -1) {
            bos.write(b, 0, len);
        }
        byte[] array = bos.toByteArray();
        bos.close();
        return array;
    }
}
```





#### Client

```java
package upload_;
/*
 *   @author楠哥
 *   @JDK 1.8.0
 *
 */

import com.sun.xml.internal.ws.util.StreamUtils;

import java.io.*;
import java.net.InetAddress;
import java.net.Socket;

public class TCPFileUploadClient {
    public static void main(String[] args) throws Exception {

        Socket socket = new Socket(InetAddress.getLocalHost(), 8888);

        String filePath = "d://Desktop//asd.png";
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream(filePath));

        //byte是filePath对应的字节数组
        byte[] bytes = streamToByteArray(bis);

        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        bos.write(bytes);       //将文件对应的字节数组的内容，写入到数据通道
        bis.close();
        socket.shutdownOutput();

        InputStream inputStream = socket.getInputStream();
        String s = streamToString(inputStream);
        System.out.println(s);

        inputStream.close();
        bos.close();
        socket.close();
    }

    public static byte[] streamToByteArray(InputStream is) throws  Exception {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        byte[] b = new byte[1024];
        int len;
        while ((len = is.read(b)) != -1) {
            bos.write(b, 0, len);
        }
        byte[] array = bos.toByteArray();
        bos.close();
        return array;
    }

    public static String streamToString(InputStream is) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder builder = new StringBuilder();
        String line;
        while((line = reader.readLine()) != null) {
            builder.append(line + "/r/n");
        }

        return builder.toString();



    }


}
```





# 反射











# MYSQL





建表

```
CREATE DATABASE XX
CREATE DATABASE XX CGARACTER SET XX		//使用得字符集
CREATE DATABASE XX CGARACTER SET XX COLLATE XX		//校对规则
```



删表

```
DROP DATABASE XX
```



显示数据库语句

```
SHOW DATABASES
```



显示数据库创建语句

```
SHOW CREATE DATABASE XX
```



建表

```mysql
CREATE TABLE 'user'(
	id INT,
	'name' VARCHAR(255),
	'password' VARCHAR(255),
	'birthday' DATE)
	CHARACTER SET utf8 COLLATE utf8_bin ENGINE INNODB;
```

