# MySQL



## CRUD

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



DQL

```mysql
DROP TABLE if EXISTS stu;


CREATE TABLE stu(
id INT,
name VARCHAR(20),
age INT,
sex VARCHAR(5),
address VARCHAR(100),
math double(5,2),
english double(5,2),
hire_date DATE
);



INSERT INTO stu(id,name,age,sex,address,math,english,hire_date)
VALUE
(1,'马云',55,'男','杭州',66,78,'1995-09-01'),
(2,'马化腾',45,'男','深圳',98,87,'1998-09-01'),
(3,'张娜英',21,'女','高丽',60,61,'2009-01-02');




#查询name age两列
SELECT name,age FROM stu;

#查询所有列
SELECT * FROM stu;

#去除重复数据
SELECT DISTINCT sex FROM stu;

#取别名
SELECT name as 姓名,math as 数学成绩, english as 英语成绩 FROM stu;

#条件搜索
SELECT * FROM stu WHERE age > 25;

SELECT * FROM stu WHERE age > 25 AND age < 50;

SELECT * FROM stu WHERE age BETWEEN 20 and 50;

SELECT * FROM stu WHERE hire_date BETWEEN '1998-09-01' AND '2000-01-01';

SELECT * FROM stu WHERE age = 21;

SELECT * FROM stu WHERE age != 45;

SELECT * FROM stu WHERE age <> 25;

SELECT * FROM stu WHERE age = 25 or age = 21 or age = 45;
SELECT * FROM stu WHERE age in (25,21,45);


SELECT * FROM stu WHERE math is null;

SELECT * FROM stu WHERE math is not null;

SELECT * FROM stu WHERE name like '马%';

SELECT * FROM stu WHERE name like '_化%';

SELECT * FROM stu WHERE name like '%马%';

#排序查询
SELECT * FROM stu ORDER BY age ASC;

SELECT * FROM stu ORDER BY math DESC;

#数学相同的按英语排
SELECT * FROM stu ORDER BY math DESC, english ASC;

#聚合查询			null不参与计算
SELECT count(*) FROM stu;

SELECT max(math) FROM stu;

SELECT min(math) FROM stu;

SELECT sum(math) FROM stu;

SELECT avg(math) FROM stu;

#分组查询
SELECT sex,avg(math) from stu GROUP BY sex;

SELECT sex,avg(english),count(*) from stu GROUP BY sex;

SELECT sex,avg(english),count(*) from stu where english > 60 GROUP BY sex;

SELECT sex,avg(english),count(*) from stu where english > 60 GROUP BY sex having count(*) > 1;

#分页查询
SELECT * FROM stu LIMIT 0 , 2;  #从0开始显示3条数据

SELECT * FROM stu LIMIT 2 , 1;



```



## 约束



```mysql

DROP TABLE IF EXISTS emp;

CREATE TABLE emp (
	id INT PRIMARY KEY auto_increment,		#员工id，主键且自增长
	ename VARCHAR(50) NOT NULL UNIQUE,		#员工姓名，非空且唯一
	joindate DATE NOT NULL,				#入职日期，非空
	salary DOUBLE(7,2) NOT NULL,		#工资，非空
	bonus DOUBLE(7,2) DEFAULT 0		#奖金，默认为0
);

INSERT INTO emp(id,ename,joindate,salary,bonus) VALUES(1,'张三','1999-11-11',8800,5000);

SELECT * FROM emp;

#主键，非空且唯一,加了auto_increment后会自动增长

INSERT INTO emp(id,ename,joindate,salary,bonus) VALUES(null,'张三','1999-11-11',8800,5000);
INSERT INTO emp(id,ename,joindate,salary,bonus) VALUES(1,'张三','1999-11-11',8800,5000);
INSERT INTO emp(id,ename,joindate,salary,bonus) VALUES(2,'李四','1999-11-11',8800,5000);



#默认约束
INSERT INTO emp(id,ename,joindate,salary) VALUES(3,'王五','1999-11-11',8800);


```



### 外键约束



```mysql


DROP TABLE IF EXISTS dept;
DROP TABLE IF EXISTS emp;


CREATE TABLE dept (
	id INT PRIMARY KEY auto_increment,
	dep_name VARCHAR(20),
	addr VARCHAR(20)
);


CREATE TABLE emp (
	id INT PRIMARY KEY auto_increment,
	name VARCHAR(20),
	age INT,
	dep_id INT,
	
	CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id)
);


INSERT INTO dept(dep_name,addr) VALUES
('研发部','广州'),('销售部','深圳');

INSERT INTO emp(name,age,dep_id) VALUES
('张三',20,1),
('李四',20,1),
('王五',20,1),
('赵六',20,2),
('孙七',22,2),
('周八',18,2);

SELECT * FROM dept;
SELECT * FROM emp;

ALTER TABLE emp DROP FOREIGN KEY fk_emp_dept;

ALTER TABLE emp ADD CONSTRAINT fk_emp_dept FOREIGN key(dep_id) REFERENCES dept(id);





```



## 数据库设计





### 多表查询



#### 内链接

```mysql


DROP TABLE IF EXISTS dept;
DROP TABLE IF EXISTS emp;


CREATE TABLE dept (
	id INT PRIMARY KEY auto_increment,
	dep_name VARCHAR(20),
	addr VARCHAR(20)
);


CREATE TABLE emp (
	id INT PRIMARY KEY auto_increment,
	name VARCHAR(20),
	age INT,
	dep_id INT
);


INSERT INTO dept(dep_name,addr) VALUES
('研发部','广州'),('销售部','深圳'),('管理部','上海');

INSERT INTO emp(name,age,dep_id) VALUES
('张三',20,1),
('李四',20,1),
('王五',20,1),
('赵六',20,2),
('孙七',22,2),
('周八',18,null);

SELECT * FROM dept;
SELECT * FROM emp;

#隐式内连接
SELECT * FROM emp, dept WHERE emp.dep_id = dept.id;


SELECT
	emp.`name`,
	emp.age,
	dept.dep_name 
FROM
	emp,
	dept 
WHERE
	emp.dep_id = dept.id;
	
#给表起别名
SELECT
	t1.`name`,
	t1.age,
	t2.dep_name 
FROM
	emp t1,
	dept t2 
WHERE
	t1.dep_id = t2.id;
	
#显示内连接
SELECT * FROM emp INNER JOIN dept ON emp.dep_id = dept.id;

SELECT * FROM emp JOIN dept ON emp.dep_id = dept.id;



```





#### 外连接

```mysql


DROP TABLE IF EXISTS dept;
DROP TABLE IF EXISTS emp;


CREATE TABLE dept (
	id INT PRIMARY KEY auto_increment,
	dep_name VARCHAR(20),
	addr VARCHAR(20)
);


CREATE TABLE emp (
	id INT PRIMARY KEY auto_increment,
	name VARCHAR(20),
	age INT,
	dep_id INT
);


INSERT INTO dept(dep_name,addr) VALUES
('研发部','广州'),('销售部','深圳'),('管理部','上海');

INSERT INTO emp(name,age,dep_id) VALUES
('张三',20,1),
('李四',20,1),
('王五',20,1),
('赵六',20,2),
('孙七',22,2),
('周八',18,null);

SELECT * FROM dept;
SELECT * FROM emp;

#左外连接
SELECT * FROM emp LEFT JOIN dept ON emp.dep_id = dept.id;

#右外连接
SELECT * FROM emp RIGHT JOIN dept ON emp.dep_id = dept.id;


```



#### 子查询

```mysql


DROP TABLE IF EXISTS dept;
DROP TABLE IF EXISTS emp;


CREATE TABLE dept (
	id INT PRIMARY KEY auto_increment,
	dep_name VARCHAR(20),
	addr VARCHAR(20)
);


CREATE TABLE emp (
	id INT PRIMARY KEY auto_increment,
	name VARCHAR(20),
	age INT,
	dep_id INT
);


INSERT INTO dept(dep_name,addr) VALUES
('研发部','广州'),('销售部','深圳'),('管理部','上海');

INSERT INTO emp(name,age,dep_id) VALUES
('张三',23,1),
('李四',22,1),
('王五',21,1),
('赵六',26,2),
('孙七',29,2),
('周八',18,null);

SELECT * FROM dept;
SELECT * FROM emp;

#子查询
#单行单列
SELECT age FROM emp where name = '张三';
SELECT * FROM emp WHERE age > 23;

SELECT * FROM emp WHERE age > (SELECT age FROM emp where name = '张三');

#多行单列
SELECT id FROM dept WHERE dep_name = '研发部' or dep_name = '销售部';
SELECT * FROM emp WHERE dep_id in (SELECT id FROM dept WHERE dep_name = '研发部' or dep_name = '销售部');

#多行多列
SELECT * FROM emp WHERE age > 21;

SELECT * FROM emp, dept WHERE emp.dep_id = dept.id;

SELECT * FROM (SELECT * FROM emp WHERE age > 21) t1, dept WHERE t1.dep_id = dept.id;




```







## 事务



```mysql


CREATE TABLE account (
id INT PRIMARY KEY auto_increment,
name VARCHAR(10),
money double(10,2)
);

INSERT INTO account(name,money) VALUES('张三',1000),('李四',1000);

SELECT * FROM account;
UPDATE account set money = 1000;

BEGIN;	-- 开启事务

UPDATE account set money = money - 500 WHERE name = '李四';

-- 出错		-- 模拟出错

UPDATE account set money = money + 500 WHERE name = '张三';
COMMIT;-- 提交事务

ROLLBACK;-- 回滚事务





```



### 四大特征









# JDBC



```java



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class JDBCDemo {
    public static void main(String[] args) throws Exception{
        //注册驱动
        Class.forName("com.mysql.jdbc.Driver");
        //获取连接
        String url = "jdbc:mysql://127.0.0.1:3306/db01";
        String username = "root";
        String password = "1234";
        Connection conn =  DriverManager.getConnection(url, username, password);
        //定义sql语句
        String sql = "update account set money = 2000 where id = 1";
        //获取执行sql对象
        Statement stmt = conn.createStatement();
        //执行sql
        int count = stmt.executeUpdate(sql);
        //返回执行结果
        System.out.println(count);

        //关闭资源
        stmt.close();
        conn.close();

    }
}

```



## 事务的处理

```java



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCDemo2 {
    public static void main(String[] args) throws Exception{
        //注册驱动
        //Class.forName("com.mysql.jdbc.Driver");
        //获取连接
        //如果连接的是本机mysql且端口为3306则可省略
        String url = "jdbc:mysql:///db01?useSSL=false";
        String username = "root";
        String password = "1234";
        Connection conn =  DriverManager.getConnection(url, username, password);
        //定义sql语句
        String sql1 = "update account set money = 2000 where id = 1";
        String sql2 = "update account set money = 6000 where id = 2";
        //获取执行sql对象
        Statement stmt = conn.createStatement();
        //执行sql


        try {
            conn.setAutoCommit(false);
            int count1 = stmt.executeUpdate(sql1);
            System.out.println(count1);

            int i = 3/0;

            int count2 = stmt.executeUpdate(sql2);
            System.out.println(count2);

            conn.commit();
        } catch (Exception e) {
            conn.rollback();
            e.printStackTrace();
        }

        //关闭资源
        stmt.close();
        conn.close();

    }
}

```



## ResuleSet



```java



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCDemo {
    public static void main(String[] args) throws Exception{
        //注册驱动
        //Class.forName("com.mysql.jdbc.Driver");
        //获取连接
        String url = "jdbc:mysql://127.0.0.1:3306/db01";
        String username = "root";
        String password = "1234";
        Connection conn =  DriverManager.getConnection(url, username, password);
        //编写sql语句
        String sql = "select * from account";
        //获取stmt对象
        Statement stmt = conn.createStatement();
        //执行sql
        ResultSet rs = stmt.executeQuery(sql);

        while (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("name");
            double money = rs.getDouble("money");

            System.out.println(id);
            System.out.println(name);
            System.out.println(money);
            System.out.println("========================");
        }

        rs.close();
        stmt.close();
        conn.close();

    }
}

```



### 将数据存储到集合中

```java



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class JDBCDemo {
    public static void main(String[] args) throws Exception{
        //注册驱动
        //Class.forName("com.mysql.jdbc.Driver");
        //获取连接
        String url = "jdbc:mysql://127.0.0.1:3306/db01";
        String username = "root";
        String password = "1234";
        Connection conn =  DriverManager.getConnection(url, username, password);
        //编写sql语句
        String sql = "select * from account";
        //获取stmt对象
        Statement stmt = conn.createStatement();
        //执行sql
        ResultSet rs = stmt.executeQuery(sql);

        List<Account> list = new ArrayList<>();

        while (rs.next()) {
            Account account = new Account();
            int id = rs.getInt("id");
            String name = rs.getString("name");
            double money = rs.getDouble("money");

            account.setId(id);
            account.setName(name);
            account.setMoney(money);

            list.add(account);
        }

        System.out.println(list);


        rs.close();
        stmt.close();
        conn.close();

    }
}

```







## sql注入



```java



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCDemo {
    public static void main(String[] args) throws Exception{
        //获取连接
        String url = "jdbc:mysql://127.0.0.1:3306/db01";
        String username = "root";
        String password = "1234";
        Connection conn =  DriverManager.getConnection(url, username, password);

//        String name = "zhangsan";
//        String pwd = "123";
        String name = "ww";
        String pwd = "' or'1' = '1";

        String sql = "select * from tb_user where username = '"+name+"' and password = '"+pwd+"'";
        System.out.println(sql);
        Statement stmt = conn.createStatement();

        ResultSet rs = stmt.executeQuery(sql);

        if(rs.next()) {
            System.out.println("成功");
        } else {
            System.out.println("失败");
        }
        
    }
}

```



### 解决方法



```java



import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) throws Exception{
        //获取连接
        String url = "jdbc:mysql://127.0.0.1:3306/db01";
        String username = "root";
        String password = "1234";
        Connection conn =  DriverManager.getConnection(url, username, password);

        String name = "zhangsan";
        String pwd = "123";
//        String name = "ww";
//        String pwd = "' or'1' = '1";

        String sql = "select * from tb_user where username = ? and password = ?";

        PreparedStatement pstmt = conn.prepareStatement(sql);

        pstmt.setString(1,name);
        pstmt.setString(2,pwd);

        ResultSet rs = pstmt.executeQuery();

        if(rs.next()) {
            System.out.println("成功");
        } else {
            System.out.println("失败");
        }

    }
}

```





# MAVEN



## 依赖范围



| 依赖范围 | 编译classpath |    测试classpath     | 运行classpath | 例子              |
| -------- | :-----------: | :------------------: | :-----------: | ----------------- |
| comppile |       Y       |          Y           |       Y       | logback           |
| test     |       -       |          Y           |       -       | Junit             |
|          |       Y       |          Y           |       -       | servlet-api       |
| runtime  |       -       |          Y           |       Y       | jdbc驱动          |
| system   |       Y       |          Y           |       -       | 存储在本地的jar包 |
| import   |     引入      | DependencyManagement |               |                   |





# MyBatis





```mysql
CREATE DATABASE mybatis;
use mybatis;


DROP TABLE IF EXISTS tb_user;

CREATE TABLE tb_user(
	id INT PRIMARY KEY auto_increment,
	username VARCHAR(20),
	password VARCHAR(20),
	gender char(1),
	addr VARCHAR(30)
	);
	
INSERT INTO tb_user VALUES(1,'zhangsan', '123', '男', '北京');
INSERT INTO tb_user VALUES(2,'李四', '234', '女', '太原');
INSERT INTO tb_user VALUES(3,'王五', '11', '男', '上海');
```





依赖文件

```xml
<dependencies>
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.5</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.46</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

![image-20231017174105318](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20231017174105318.png)





```java
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;


import java.io.InputStream;
import java.util.List;

public class MybatisDemo {
    public static void main(String[] args) throws Exception{
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        SqlSession sqlSession = sqlSessionFactory.openSession();

        List<Object> users = sqlSession.selectList("test1.selectAll");

        System.out.println(users);

        sqlSession.close();

    }
}

```









## Mapper代理开发



```java
import mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import pojo.User;

import java.io.InputStream;
import java.util.List;

public class MyBatisDemo2 {
    public static void main(String[] args) throws Exception{
        //String resource = "org/mybatis/example/mybatis-config.xml";
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        SqlSession sqlSession = sqlSessionFactory.openSession();

        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
        List<User> users = userMapper.selectAll();

        System.out.println(users);

        sqlSession.close();

    }
}

```



## 查询和结果映射

java

```java
package test;

import mapper.BrandMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import pojo.Brand;

import java.io.InputStream;
import java.util.List;

public class MyBatisTest {
    @Test
    public void  testSelectAll() throws Exception{
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        List<Brand> brands = brandMapper.selectAll();
        System.out.println(brands);

        sqlSession.close();


    }
}

```

xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">




<mapper namespace="mapper.BrandMapper">

    <resultMap id="brandResultMap" type="brand">
        <result column="brand_name" property="brandName" />
        <result column="company_name" property="companyName" />
    </resultMap>

    <select id="selectAll" resultMap="brandResultMap">
        select *
        from tb_brand;

    </select>
</mapper>
```





## Test



```java
package test;

import mapper.BrandMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import pojo.Brand;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MyBatisTest {
    @Test
    public void  testSelectAll() throws Exception{
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        List<Brand> brands = brandMapper.selectAll();
        System.out.println(brands);

        sqlSession.close();


    }

    @Test
    public void  testSelectById() throws Exception{
        int id = 1;
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        Brand brand = brandMapper.selectById(id);
        System.out.println(brand);

        sqlSession.close();


    }

    @Test
    public void  testSelectByCondition() throws Exception{
        int status = 1;
        String companyName = "华为";
        String brandName = "华为";

        companyName = "%" + companyName + "%";
        brandName = "%" + brandName + "%";

        //封装对象
//        Brand brand = new Brand();
//        brand.setStatus(status);
//        brand.setCompanyName(companyName);
//        brand.setBrandName(brandName);

        Map map = new HashMap();
        //map.put("status", status);
        map.put("companyName", companyName);
       // map.put("brandName", brandName);


        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        //List<Brand> brands = brandMapper.selectByCondition(status, companyName, brandName);
        List<Brand> brands = brandMapper.selectByCondition(map);
        System.out.println(brands);


        sqlSession.close();
    }

    @Test
    public void  testSelectByConditionSingle() throws Exception{
        int status = 1;
        String companyName = "华为";
        String brandName = "华为";

        companyName = "%" + companyName + "%";
        brandName = "%" + brandName + "%";

        //封装对象
        Brand brand = new Brand();
        brand.setStatus(status);
//        brand.setCompanyName(companyName);
//        brand.setBrandName(brandName);



        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        //List<Brand> brands = brandMapper.selectByCondition(status, companyName, brandName);
        List<Brand> brands = brandMapper.selectByConditionSingle(brand);
        System.out.println(brands);

        sqlSession.close();
    }

    @Test
    public void  testAdd() throws Exception{
        int status = 1;
        String companyName = "锤子手机";
        String brandName = "锤子";
        String description = "交个朋友";
        int order = 100;

        //封装对象
        Brand brand = new Brand();
        brand.setStatus(status);
        brand.setCompanyName(companyName);
        brand.setBrandName(brandName);
        brand.setDescription(description);
        brand.setOrdered(order);



        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        //List<Brand> brands = brandMapper.selectByCondition(status, companyName, brandName);
        brandMapper.add(brand);

        sqlSession.commit();

        sqlSession.close();
    }


    @Test
    public void  testAdd2() throws Exception{
        int status = 1;
        String companyName = "锤子手机";
        String brandName = "锤子";
        String description = "交个朋友";
        int order = 100;

        //封装对象
        Brand brand = new Brand();
        brand.setStatus(status);
        brand.setCompanyName(companyName);
        brand.setBrandName(brandName);
        brand.setDescription(description);
        brand.setOrdered(order);



        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        //List<Brand> brands = brandMapper.selectByCondition(status, companyName, brandName);
        brandMapper.add(brand);
        Integer id = brand.getId();
        System.out.println(id);

        //sqlSession.commit();

        sqlSession.close();
    }

    @Test
    public void  testUpdate() throws Exception{
        int status = 1;
        String companyName = "锤子手机";
        String brandName = "大锤子";
        String description = "你好，交个朋友";
        int order = 600;
        int id = 5;

        //封装对象
        Brand brand = new Brand();
        brand.setStatus(status);
        brand.setCompanyName(companyName);
        brand.setBrandName(brandName);
        brand.setDescription(description);
        brand.setOrdered(order);
        brand.setId(id);



        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        //List<Brand> brands = brandMapper.selectByCondition(status, companyName, brandName);
        int count = brandMapper.update(brand);
        System.out.println(count);

        sqlSession.commit();

        sqlSession.close();
    }


    @Test
    public void  testDelete() throws Exception{
        int id = 5;


        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        brandMapper.deleteById(id);

        sqlSession.commit();

        sqlSession.close();
    }

    @Test
    public void  testDeleteByIds() throws Exception{
        int[] ids = {10,11,12};


        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);


        SqlSession sqlSession = sqlSessionFactory.openSession();

        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        brandMapper.deleteByIds(ids);

        sqlSession.commit();

        sqlSession.close();
    }



}

```





## BrandMapper.java

```java
package mapper;

import org.apache.ibatis.annotations.Param;
import pojo.Brand;

import java.util.List;
import java.util.Map;

public interface BrandMapper {

   List<Brand> selectAll();

   Brand selectById(int id);

   /**
    *
    * 散装参数，荣国方法中有多个参数，需要使用@Param
    *
    * @param status
    * @param companyName
    * @param brandName
    * @return
    */
   List<Brand> selectByCondition(@Param("status")int status, @Param("companyName") String companyName, @Param("brandName") String brandName);

   List<Brand> selectByCondition(Brand brand);
   List<Brand> selectByCondition(Map map);
   List<Brand> selectByConditionSingle(Brand brand);

   void add(Brand brand);

   int update(Brand brand);

   void deleteById(int id);

   void deleteByIds(@Param("ids")int[] ids);


}


```



## BrandMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">




<mapper namespace="mapper.BrandMapper">

    <resultMap id="brandResultMap" type="brand">
        <result column="brand_name" property="brandName" />
        <result column="company_name" property="companyName" />
    </resultMap>



    <select id="selectAll" resultMap="brandResultMap">
        select *
        from tb_brand;

    </select>
<!--
        * 参数占位符
        1. #{} : 会将其替换为： ？，防止sql注入
        2. ${} : 拼sql，存在sql注入问题
        3. *参数传递时用 #{}
           *表名或者列名不固定的情况下：${} 会存在SQL注入问题


-->
    <select id="selectById" resultMap="brandResultMap">
        select *
        from tb_brand where id = #{id};
    </select>


<!--    <select id="selectByCondition" resultMap="brandResultMap">-->
<!--        select *-->
<!--        from tb_brand-->
<!--        where status = #{status}-->
<!--            and company_name like #{companyName}-->
<!--            and brand_name like #{brandName}-->
<!--    </select>-->


	//where标签
    <select id="selectByCondition" resultMap="brandResultMap">
        select *
        from tb_brand
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="companyName != null and companyName != ''">
                 and company_name like #{companyName}
            </if>
            <if test="brandName != null and brandName != ''">
                and brand_name like #{brandName}
            </if>
        </where>


    </select>
    
    
    //chose标签
    <select id="selectByConditionSingle" resultMap="brandResultMap">
        select *
        from tb_brand
        <where>
        <choose>
            <when test="status != null">
                status = #{status}
            </when>
            <when test="companyName != null and companyName != ''">
                company_name like #{companyName}
            </when>
            <when test="brandName != null and brandName != ''">
                brand_name like #{brandName}
            </when>
            <otherwise>		//相当于default
                1 = 1
            </otherwise>
        </choose>
        </where>
    </select>


    
    <insert id="add" useGeneratedKeys="true" keyProperty="id">
        insert into tb_brand(brand_name, company_name, ordered, description, status)
        values (#{brandName},#{companyName},#{ordered},#{description},#{status});
    </insert>

    

    //set标签
    <update id="update">
        update tb_brand
        <set>
            <if test="brandName != null and brandName != ''">
                brand_name = #{brandName},
            </if>
            <if test="companyName != null and companyName != ''">
                company_name = #{companyName},
            </if>
            <if test="ordered != null">
                ordered = #{ordered},
            </if>
            <if test="description != null and description != ''">
                description = #{description},
            </if>
            <if test="status != null">
                status = #{status}
            </if>
            where id = #{id};
        </set>
    </update>

    <delete id="deleteById">
        delete from tb_brand where id = #{id};
    </delete>

    //删除多个数据foreach标签
    <delete id="deleteByIds">
        delete from tb_brand where id
        in
            <foreach collection="ids" item="id" separator="," open="(" close=")">
                #{id}
            </foreach>
        ;
    </delete>

</mapper>
```







# JavaScript



## 基础语法



```JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>


</head>
<body>


<script>
    alert("Hello js");

    document.write("你好");

    console.log("Run Run Run");

</script>

<script src="../js/demo.js"></script>

</body>
</html>
```





## 变量

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>


</head>
<body>


<script>
    /*
    var
    全局变量
    可以重复定义
     */
    /*
    let
    局部变量
    不能重复定义
     */
    var test = 20;
    var test = "你好";

    alert(test);


    {
        var demo = 10;
        let demo2 = 5;
        //let demo2 = 1;
    }
    alert(demo);
    
    //alert(demo2);
</script>


</body>
</html>
```



## 数组

```javascript
<script>

    var arr = [1,"hello",3];
    arr[10] = 5;
    var arr2 = [1,2,3,"hello",4];
    arr2[10] = 1;
    //arr.splice(0,1);
    alert(arr);
   alert(arr.length);
    //alert(arr2.length)


</script>
```







## 对象

```javascript
<script>
    var person = {
        name : "zhangsan",
        age : 20,
        eat : function () {
            alert("eat eat~~");
        }
    }
    //alert(person.name);
    //person.eat();

    //var flag = confirm("确认？");
    //document.write(flag);

    //定时器
    setTimeout(function () {
        alert("haha");
    }, 2000);

    setInterval(function () {
        alert("haha");
    }, 2000);






</script>
```





## 定时器案例

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>


</head>
<body>
    <input type="button" onclick="on()" value="open"></input>
    <input type="button" onclick="flash()" value="flash"></input>
    <img id = "myImage" border="0" src="../imgs/off.gif" style="...">
    <input type="button" onclick="off()" value="close"></input>






<script>
    var x = 0;

    function flash() {
        setInterval(function () {
            if(x % 2){
                on();
            } else {
                off();
            }
            x++;
        },10);
    }
    function on() {
        document.getElementById('myImage').src='../imgs/on.gif';
    }

    function off() {
        document.getElementById('myImage').src='../imgs/off.gif';
    }
</script>
</body>
</html>
```









## Element对象

### 获取element对象

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>


</head>
<body>
<img id="light" src="../imgs/off.gif"> <br>

<div class="cls">你好</div>  <br>

<div class="cls">Hello</div> <br>

<input type="checkbox" name="hobby"> 电影

<input type="checkbox" name="hobby"> 旅游

<input type="checkbox" name="hobby"> 游戏

<br>

<script>
    var img = document.getElementById("light");
    //alert(img);

    var divs = document.getElementsByTagName("div");

    for (let i = 0; i < divs.length; i++) {
        //alert(divs[i])
    }
    
    var hobbys = document.getElementsByName("hobby");
    for (let i = 0; i < hobbys.length; i++) {
        //alert(hobbys[i]);
    }
    
    var clss = document.getElementsByClassName("cls");
    for (let i = 0; i < clss.length; i++) {
        alert(clss[i]);
    }


</script>


</body>
</html>
```



### Element对象使用

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>


</head>
<body>
<img id="light" src="../imgs/off.gif"> <br>

<div class="cls">你好</div>  <br>

<div class="cls">Hello</div> <br>

<input type="checkbox" name="hobby"> 电影

<input type="checkbox" name="hobby"> 旅游

<input type="checkbox" name="hobby"> 游戏

<br>

<script>
    var img = document.getElementById("light");
    //alert(img);

    var divs = document.getElementsByTagName("div");

    for (let i = 0; i < divs.length; i++) {
        divs[i].style.color = 'red';
        divs[i].innerHTML = "Test";
    }
    
    var hobbys = document.getElementsByName("hobby");
    for (let i = 0; i < hobbys.length; i++) {
        hobbys[i].checked = true;
    }
    
    var clss = document.getElementsByClassName("cls");
    for (let i = 0; i < clss.length; i++) {
        //alert(clss[i]);
    }



</script>





<script>



</script>


</body>
</html>
```





## 表单验证



### HTML

```javascript
<!DOCTYPE html>

<html lang="en">
<head>

    <meta charset="UTF-8">

    <title>欢迎注册</title>

    <link href="../css/register.css" rel="stylesheet">
</head>
<body>

<div class="form-div">
    <div class="reg-content">
        <h1>欢迎注册</h1>
        <span>已有帐号？</span> <a href="#">登录</a>
    </div>

    <form id="reg-form" action="#" method="get">

        <table>
            <tr>
                <td>用户名</td>
                <td class="inputs">
                    <input name="username" type="text" id="username">
                    <br>
                    <span id="username_err" class="err_msg" style="display: none">用户名不符合规则</span>
                </td>
            </tr>
            <tr>
                <td>密码</td>
                <td class="inputs">
                    <input name="password" type="password" id="password">
                    <br>
                    <span id="password_err" class="err_msg" style="display: none">密码格式有误</span>
                </td>
            </tr>
            <tr>
                <td>手机号</td>
                <td class="inputs"><input name="tel" type="text" id="tel">
                    <br>
                    <span id="tel_err" class="err_msg" style="display: none">手机号格式有误
</span>
                </td>
            </tr>
        </table>
        <div class="buttons">
            <input value="注 册" type="submit" id="reg_btn">
        </div>
        <br class="clear">
    </form>
</div>

<script>

    var usernameInput = document.getElementById("username");
    usernameInput.onblur = checkUsername;

    function checkUsername() {

        var username = usernameInput.value.trim();
        var reg = /^\w{6,12}$/;
        var flag = reg.test(username);

        if (flag) {
            document.getElementById("username_err").style.display = 'none';
        } else {
            document.getElementById("username_err").style.display = '';
        }

        return flag;
    }


    var passwordInput = document.getElementById("password");
    passwordInput.onblur = checkPassword;
    function checkPassword() {
        var password = passwordInput.value.trim();

        var reg = /^\w{6,12}$/;
        var flag = reg.test(password);

        if (flag) {
            document.getElementById("password_err").style.display = 'none';
        } else {
            document.getElementById("password_err").style.display = '';
        }

        return flag

    }

    var telInput = document.getElementById("tel");
    telInput.onblur = checkTel;
    function checkTel() {
        var tel = telInput.value.trim();
        var reg = /^[1]\d{10}$/;
        var flag = reg.test(tel);

        if (flag) {
            document.getElementById("tel_err").style.display = 'none';
        } else {
            document.getElementById("tel_err").style.display = '';
        }

        return flag;
    }

    var regForm = document.getElementById("reg-form");
    regForm.onsubmit = function () {
      var flag = checkUsername() && checkPassword() && checkTel();
      return flag;
    }


</script>
</body>

</html>
```





### css



```css
* {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.reg-content{
    padding: 30px;
    margin: 3px;
}
a, img {
    border: 0;
}

body {
    background-image: url("../imgs/reg_bg_min.jpg") ;
    text-align: center;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

td, th {
    padding: 0;
    height: 90px;

}
.inputs{
    vertical-align: top;
}

.clear {
    clear: both;
}

.clear:before, .clear:after {
    content: "";
    display: table;
}

.clear:after {
    clear: both;
}

.form-div {
    background-color: rgba(255, 255, 255, 0.27);
    border-radius: 10px;
    border: 1px solid #aaa;
    width: 424px;
    margin-top: 150px;
    margin-left:1050px;
    padding: 30px 0 20px 0px;
    font-size: 16px;
    box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.5), 0px 0px 15px rgba(75, 75, 75, 0.3);
    text-align: left;
}

.form-div input[type="text"], .form-div input[type="password"], .form-div input[type="email"] {
    width: 268px;
    margin: 10px;
    line-height: 20px;
    font-size: 16px;
}

.form-div input[type="checkbox"] {
    margin: 20px 0 20px 10px;
}

.form-div input[type="button"], .form-div input[type="submit"] {
    margin: 10px 20px 0 0;
}

.form-div table {
    margin: 0 auto;
    text-align: right;
    color: rgba(64, 64, 64, 1.00);
}

.form-div table img {
    vertical-align: middle;
    margin: 0 0 5px 0;
}

.footer {
    color: rgba(64, 64, 64, 1.00);
    font-size: 12px;
    margin-top: 30px;
}

.form-div .buttons {
    float: right;
}

input[type="text"], input[type="password"], input[type="email"] {
    border-radius: 8px;
    box-shadow: inset 0 2px 5px #eee;
    padding: 10px;
    border: 1px solid #D4D4D4;
    color: #333333;
    margin-top: 5px;
}

input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus {
    border: 1px solid #50afeb;
    outline: none;
}

input[type="button"], input[type="submit"] {
    padding: 7px 15px;
    background-color: #3c6db0;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    min-width: 80px;
    border: none;
    color: #FFF;
    box-shadow: 1px 1px 1px rgba(75, 75, 75, 0.3);
}

input[type="button"]:hover, input[type="submit"]:hover {
    background-color: #5a88c8;
}

input[type="button"]:active, input[type="submit"]:active {
    background-color: #5a88c8;
}
.err_msg{
    color: red;
    padding-right: 170px;
}
#password_err,#tel_err{
    padding-right: 195px;
}

#reg_btn{
    margin-right:50px; width: 285px; height: 45px; margin-top:20px;
}
```









## 正则表达式





* ^：表示开始
* $：表示结束
* [ ]：代表某个范围内的单个字符，比如： [0-9] 单个数字字符
* .：代表任意单个字符，除了换行和行结束符
* \w：代表单词字符：字母、数字、下划线(_)，相当于 [A-Za-z0-9_]
* \d：代表数字字符： 相当于 [0-9]
* 

* +：至少一个

* *：零个或多个

* ？：零个或一个

* {x}：x个

* {m,}：至少m个

* {m,n}：至少m个，最多n个





**如**：

英文字母6 - 12 个	/^\w{6,12}$/;

11个数字且1开头	/^[1]\d{10}$/;

# HTTP





## 请求数据格式

### 请求行：

请求数据的第一行。其中GET表示请求方式，/表示请求资源路径，HTTP/1.1表示协议版本





### 请求头：

第二行开始，格式为key：value形式。



常见的HTTP 请求头：

•Host: 表示请求的主机名

•User-Agent: 浏览器版本，例如Chrome浏览器的标识类似Mozilla/5.0 ... Chrome/79，IE浏览器的标识类似Mozilla/5.0 (Windows NT ...) like Gecko；

•Accept：表示浏览器能接收的资源类型，如text/**，image/*、*或者*/*表示所有；

•Accept-Language：表示浏览器偏好的语言，服务器可以据此返回不同语言的网页；

•Accept-Encoding：表示浏览器可以支持的压缩类型，例如gzip, deflate等。



### 请求体：

 POST请求的最后一部分，存放请求参数









## 响应数据格式





### 响应行

响应数据的第一行。HTTP/1.1表示协议版本。200表示响应状态码，OK表示状态码描述







### 响应头

第二行开始，格式为key：value形式。



l常见的HTTP 响应头：

•Content-Type：表示该响应内容的类型，例如text/html，image/jpeg；

•Content-Length：表示该响应内容的长度（字节数）；

•Content-Encoding：表示该响应压缩算法，例如gzip；

•Cache-Control：指示客户端应如何缓存，例如max-age=300表示可以最多缓存300秒





### 响应体

最后一部分，存放响应数据



# Servlet



## 生命周期

Servlet运行在Servlet容器(web服务器)中，其生命周期由容器来管理，分为4个阶段：

1.加载和实例化：默认情况下，当Servlet第一次被访问时，由容器创建Servlet对象

2.初始化：在Servlet实例化之后，容器将调用Servlet的init()方法初始化这个对象，完成一些如加载配置文件、创建连接等初始化的工作。该方法只调用一次

3.请求处理：每次请求Servlet时，Servlet容器都会调用Servlet的service()方法对请求进行处理。

4.服务终止：当需要释放内存或者容器关闭时，容器就会调用Servlet实例的destroy()方法完成资源的释放。在destroy()方法调用之后，容器会释放这个Servlet实例，该实例随后会被Java的垃圾收集器所回收



## Request



### 获取请求行数据

```java
package web;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/req1")
public class RequestDemo1 extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String method = req.getMethod();
        System.out.println(method);

        String contextPath = req.getContextPath();
        System.out.println(contextPath);

        StringBuffer requestURL = req.getRequestURL();
        System.out.println(requestURL);

        String requestURI = req.getRequestURI();
        System.out.println(requestURI);

        String queryString = req.getQueryString();
        System.out.println(queryString);
    }
}

```



### 页面跳转

```java
package web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/req4")
public class RequestDemo4 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("req4 get......");

        Object msg = req.getAttribute("msg");
        System.out.println("msg = " + msg);
    }
}

```





```java
package web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/req3")
public class RequestDemo3 extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("demo3...");

        req.setAttribute("msg","hello req4");

        req.getRequestDispatcher("/req4").forward(req,resp);
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}

```







## Response



### 响应数据

```java
package web.response;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/resp3")
public class ResponseDemo3 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=utf8");
        PrintWriter writer = resp.getWriter();
        //resp.setHeader("content-type","text/html");
        writer.write("aaa");
        writer.write("你好");
        writer.write("<h1>aaa</h1>");
    }
}

```









## 登录注册案例







### UserMapper

```java
package mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import pojo.User;

public interface UserMapper {

    @Select("select * from tb_user where username = #{username} and password = #{password}")
    User select(@Param("username") String username,@Param("password") String password);

    @Select("select * from tb_user where username = #{username}")
    User selectByUsername(String username);

    @Insert("insert into tb_user values(null,#{username},#{password})")
    void add(User user);
}

```



### LoginServlet

```java
package web;

import mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import pojo.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        SqlSession sqlSession = sqlSessionFactory.openSession();

        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        User user = userMapper.select(username, password);

        sqlSession.close();

        resp.setContentType("text/html;charset=utf-8");
        PrintWriter writer = resp.getWriter();

        if(user != null) {
            writer.write("登录成功");
        } else {
            writer.write("登录失败");
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}

```





### RegisterServlet



```java
package web;

import mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import pojo.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

@WebServlet("/registerServlet")
public class RegisterServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        User user = new User();
        user.setPassword(password);
        user.setUsername(username);

        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        SqlSession sqlSession = sqlSessionFactory.openSession();

        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        User u = userMapper.selectByUsername(username);

        if(u == null) {
            userMapper.add(user);

            sqlSession.commit();

            sqlSession.close();
        } else {
            resp.setContentType("text/html;charset=utf-8");
            resp.getWriter().write("用户名已存在");
        }


    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}

```

