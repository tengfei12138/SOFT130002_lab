###lab8设计文档  
***
陈思帆&nbsp;&nbsp;19302010046
  
 * lab8实现过程总结  
    * 轮播图的实现  
     1.分析助教给出的html代码得：wrap为盛放图片的容器，其中一系列图片水平排列，将容器的宽和高设置为单幅图片的宽和高（前提是每幅图片的宽高均相等）
     且设置为overflow：hidden，可保证每次只显示一张图片。   
     2.容器内有放置图片的wrap进行postion定位，其中放置的图片采用float方式。改变wrap的left值，即可显示不同的图片，也就实现了图片的轮播。  
     （如当wrap的left加上或减去每幅图片的宽时，相当于一系列图片相对于容器向左或向右移动，即可显示出上一张或下一张图片）  
     3.Button（）函数利用循环先清除图片所有小圆点的类名（即均为绿色），根据指示图片标号的全局变量index，向指定小圆点的span添加“on”类名（使其变为红色）  
     3.图片的手动轮播实现：给左（右）箭头添加点击事件，当点击左箭头时，表明当前图片标号的全局变量index值减一，再调用Buttons函数，使得相应图片标号的小圆点
     变红，再调用animate（）函数进行图片的切换并保证切换动画的合理性。（当点击左箭头且此时index=5时，index应变为1）当点击右箭头时且此时index=1时，index应
     变为5，anmate（）传入的参数应为负值，其余于点击左箭头同理。  
     4.图片的自动播放：利用计时器，通过计时器每隔两秒调用一次animate（）函数且传入的参数为负值即实现图片自动向后播放（即每一次切换与点击next、箭头一致）。当鼠标
     滑到图片上时即清除定时器，图片停止轮播；当鼠标移出时，图片继续轮播。（利用mouseover与mouseout）  
     5.图片的点击播放：利用循环，为每一个小圆点设置点击事件，当点击相应的小圆点时，index变为对应图片的标号，且根据newIndex与index来计算传入animate（）函数的参数值
     最后调用Button函数，即实现点击小圆点，播放对应标号的图片。  
     6.anmaite函数用于实现图片的播放且利用计时器保证图片的播放不突兀。  
    * 可编辑表格的实现  
     主要利用jquery，给表格中的每一个td添加一个dbclick事件（双击事件）。先取地点击的td的原值，再将该td变成一个输入框input：text并保持输入框显示的原值不变
       当失去焦点时，该td又变为原来的不可输入的text，其值变为用户修改过后的值。  
 ***    
 注：为还原助教实例中的页面，lab8的页面的整体布局通过自己改变了css实现（助教给出的任务完全用js写且按照要求），具体改变如下：  
     1.为父div #id 设置背景颜色，宽和高。并使其居中排列。设置padding：1px；使得父div与子div的位置关系更加合理，美观。  
     2.修改container的margin-top的值将其改的较小一些便于适应页面。  
     3.修改table的每一个td的宽度。并使其文字加粗。使table居中，并合理调整与图片之间的间距。
    
       
       