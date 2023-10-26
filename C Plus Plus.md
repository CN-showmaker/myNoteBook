## 数组求和

```c++
#include<iostream>

using namespace std;

int addArray(int arr[] , int n);

int main()
{
	int data[] = {1,2,3,4,5,6,7,8,9};
	int size = sizeof(data)/sizeof(data[0]);
	

	cout << "result is " << addArray(data,size) << endl;
	
	return 0;

}

int addArray(int arr[] , int n)
{
	int i,sum=0;
	for(i=0;i<n;i++){
		sum+=arr[i];
	}	
	return sum;
}
```

## 两种常量的定义

常量不可修改

### 宏常量

#define 常量名 常量值

### const修饰的变量

const 数据类型 常量名 = 常量值

## 数据类型

### 整形

| 数据类型  | 占用空间             | 取值范围         |
| --------- | -------------------- | ---------------- |
| short     | 2字节                | （-2^15~2^15-1） |
| int       | 4字节                | （-2^31~2^31-1） |
| long      | 4字节，8字节（64位） | （-2^31~2^31-1） |
| long long | 8字节                | （-2^63~2^63-1） |

### 浮点型（实型）

| 数据类型         | 占用空间 | 取值范围        |
| ---------------- | -------- | --------------- |
| float（单精度）  | 4字节    | 7位有效数字     |
| double（双精度） | 8字节    | 15~16位有效数字 |

### 字符串型

#### 两种声明方式

```c++
char str1[] = "hellw world1";
string str2 = "hellw world2";
```

### 布尔类型

1代表true，0代表false

## 数据的输入

数据的输入

```c++
int a=0;
cout << "set a  " <<endl;
cin >> a;
cout << a <<endl;
```

字符串的输入

```c++
string str;
cout << "set str  " <<endl;
cin >> str;
cout << str <<endl;
```

## 二维数组

c++中二维数组每行和每列的大小必须相同

## 指针

### 空指针

指向内存中编号位0的指针

用于指针的初始化

且不可以访问

0~255的内存编号为系统占用，禁止用户访问

### 野指针

指针变量指向非法的内存空间

#### 危害

指针指向的内容已经无效了，而指针没有被置空，解引用一个非空的无效指针是一个未被定义的行为，也就是说不一定导致错误，野指针被定位到是哪里出现问题，在哪里指针就失效了，不好查找错误的原因。

#### 规避方法

初始化指针的时候将其置为nullptr，之后对其操作。

释放指针的时候将其置为nullptr

### const修饰指针

#### 常量指针

```c++
int a=10,b=20; 
const int *p = &a;
```

可以修改指向不可修改值

```c++
*p = 20;		//false
p = &b;			//true
```

#### 指针常量

可以修改值不可修改指向

```c++
*p = 20;		//true
p = &b;			//false
```

#### const即修饰指针，又修饰变量

```c++
const int * const p = &a;
```

值与指向均不可修改

## 引用

### 引用必须初始化

```c++
	int a=10;
	int &b=a;
```

### 引用一旦初始化就不可更改

```c++
	int a=10;
	int &b=a;
	int c=20;
	b=c;
	cout << a <<endl;		//输出20
```

### 函数的参数传递

#### 值传递

形参不会修饰实参

#### 地址传递

形参会修饰实参

#### 引用传递

形参也会修饰实参

### 函数的返回值

```c++
int& test()
{
	int a=10;		//局部变量存放在栈区
	return a;
}

int main()
{
	int &res=test();		
	cout << res <<endl;		//10，第一次结果正确，时因为编译器做了保留
	cout << res <<endl;		//0，第二次结果错误，因为内存以释放
}
```



```c++
int& test2()
{
	static int a=10;
	return a;
}

int main()
{
	int &res=test2();
	cout << res <<endl;    		//两次结果都正确，因为静态变量在全局区只有在程序结束
	cout << res <<endl;			//时才会被释放
}
```

#### 引用的本质就是一个常量指针

```c++
	const int & res= 10; 
	res=20;//报错，常量引用
	cout << res <<endl;
```

