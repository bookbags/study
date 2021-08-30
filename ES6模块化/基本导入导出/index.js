/**
 * 为了区别html文件导入普通js文件和js模块的区别，模块导入写为：
 * <script src="./xxx" type="module"></script>,添加一个type属性值
 * 数据的导出：
 *  export 声明(任何声明都可以，但是必须要有名字，不然导出时无法寻找到该变量/函数/对象)
 * export{
 *  变量名称
 * }
 * 注意不是导出一个对象，该处的{}只是一个符号
 * 导入：
 *  注意浏览器端的容错能力很强，即使导入语句不写在文件开头，也不会报错，存在提升，但是最好写在文件开头
 *  import {变量名称} from "路径(最好./或者../开头)"
 * 改一个名字 使用as，类似对象的结构
 * 如果只想运行一遍模块不需要返回值，可以写为：
 *  import "路径"
 * {}中的变量，全部是常量，隐式const声明的
 * 同样也存在模块缓存
 * 将模块中的所有基本导出，去不导出到一个对象中：
 * import * as obj from "路径";必须重命名，不然无法获取该对象
 */
import {name as a, age, sex} from "./module.js";
import "./module1.js";
console.log(a, age, sex);