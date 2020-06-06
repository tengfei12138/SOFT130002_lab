###  lab10设计文档  
19302010046 &nbsp;&nbsp; 陈思帆   
***  
* exercise 7 :  
     * exercise7给出两种php操作数据库的方法:PDO访问数据库和Mysqli访问数据库.
     * PDO访问数据库代码: <?php require_once('config.php'); 引入包含数据库参数的配置文件且只执行
     一遍。try catch语句用于判断数据库是否连接成功。$pdo = new PDO（DBCONNSTRING，DBUSER,DBPASS）  
      PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION 设置错误处理方式为抛出异常。  
      接着写好spl语句（从artists数据库中选取数据并以LastName排序），把sql语句放在服务器上等待执行，然后执行sql
      语句得到$result,while语句指依次按行取$result中的数据，并显示“所取行数据的artistID-LastName”;最后关闭数据库访问。 
     * Mysqli访问数据库代码: 与PDO访问数据库方式相似，先导入数据库参数，利用mysqli_connect与数据库建立链接，并判断是否链接
     成功。接着写好sql语句（从Genre中选取数据并以GenreName排序),后执行sql语句得到结果$result,利用mysqli_fetch_assoc依次
     按行取所得数据，并使每行数据作为一个option，值为GenreID，内容是GenreName，后将所得数据$result清空,利用mysqli_close关闭与数据
     库的链接。  
 * exercise 8 :
      * outputArtists函数:从Artists数据库中按LastName排序选取数据，数据最少为0，最多为30条。每行数据作为一个超链接,超链接的首部为数据的script_Name，
      id为artistID,每个超链接的class初始均为"item",超链接内容均为数据的lastName。如果得到前端以get方式提交的数据的id与aritistID相同，则为超链接添加“active"的class。  
      *  outputPaintings函数:获取到前端以get方式提交的id（即用户点击的作者名）后，在数据库paintings中查询作者名字与id相同的作品，查询结果作为参数传入
      outputSinglePainting函数。  
      *  outputSinglePainting函数:主要是用于展示所查询到的符合条件的作品的html语句。其中url尾部为数据的imgeFileName.同时数据的Title，expert
      分别用于显示画作的名称与描述。  
  * exercise 9 :  
      * 执行sql语句的方式: 
        * 方法executeQuery 
        用于产生单个结果集（ResultSet）的语句，例如 SELECT 语句。 被使用最多的执行 SQL 语句的方法。这个方法被用来执行 SELECT 语句，它几乎是使用最多的 SQL 语句。但也只能执行查询语句，执行后返回代表查询结果的ResultSet对象。
        * 方法executeUpdate
        用于执行 INSERT、UPDATE 或 DELETE 语句以及 SQL DDL（数据定义语言）语句，例如 CREATE TABLE 和 DROP TABLE。INSERT、UPDATE 或 DELETE 语句的效果是修改表中零行或多行中的一列或多列。executeUpdate 的返回值是一个整数（int），指示受影响的行数（即更新计数）。对于 CREATE TABLE 或 DROP TABLE 等不操作行的语句，executeUpdate 的返回值总为零。
        * 方法execute： 
         可用于执行任何SQL语句，返回一个boolean值，表明执行该SQL语句是否返回了ResultSet。如果执行后第一个结果是ResultSet，则返回true，否则返回false。但它执行SQL语句时比较麻烦，通常我们没有必要使用execute方法来执行SQL语句，而是使用executeQuery或executeUpdate更适合，但如果在不清楚SQL语句的类型时则只能使用execute方法来执行该SQL语句了。
      * Prepared Statement 优点:
         * 代码的可读性与可维护性增强。  
         * 尽可能大地提高性能。PreparedStatement支持预编译，对于多次重复执行的sql语句，使用PreparedStament使代码的执行效率提高。  
         * 提高代码地安全性能，防止sql注入式攻击。  
         * 参数设置更加优化。 需要根据sql语句创建PreparedStatement；还能够通过设置参数，指定相应的值，而不是Statement那样使用字符串拼接；
 