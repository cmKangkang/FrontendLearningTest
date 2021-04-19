**JS里设定延时：**

使用SetInterval和设定延时函数setTimeout 很类似。setTimeout 运用在延迟一段时间，再进行某项操作。

setTimeout("function",time) 设置一个超时对象 setInterval("function",time) 设置一个超时对象

SetInterval为自动重复，setTimeout不会重复。

clearTimeout(对象) 清除已设置的setTimeout对象 clearInterval(对象) 清除已设置的setInterval对象

setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

使用定时器实现JavaScript的延期执行或重复执行 window对象提供了两个方法来实现定时器的效果，分别是window.setTimeout()和window.setInterval。其中前者可以使一段代码在指定时间后运行；而后者则可以使一段代码每过指定时间就运行一次。它们的原型如下： window.setTimeout(expression,milliseconds); window.setInterval(expression,milliseconds); 其中，expression可以是用引号括起来的一段代码，也可以是一个函数名，到了指定的时间，系统便会自动调用该函数，当使用函数名作为调用句柄时，不能带有任何参数；而使用字符串时，则可以在其中写入要传递的参数。两个方法的第二个参数是milliseconds，表示延时或者重复执行的毫秒数。