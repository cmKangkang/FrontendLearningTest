# 文字选择样式定义

1. 字体：font-family
2. 斜体：font-style:italic;（或oblique）。取消斜体为font-style:normal;
3. 粗体：font-weight:bold;(此时为平均加粗，适应各种情况；输入100~900之间100的倍数，其中400表示正常粗细)。取消粗体为font-weight:normal。
4. 设置字体大小：font-size
5. 行高：line-height
6. 设置字体颜色：color
7. 设置背景：background-color、background-image、background-repeat、background-attachment、background-position。可将上述简记为background
8. 指定字间距：word-spacing
9. 指定字偶间距：letter-spacing
10. 添加(段落)缩进：text-indent：length（带单位）;
11. 对齐文本：text-align
12. 修改文本大小写：text-transform
13. 使用小型（缩小）大写字母：font-variant
14. 装饰文本：text-decoration。可用在a及文本等上
15. 设置空白：white-space

# css布局

**固定（fixed）布局**：整个页面和 每一栏都有基于像素的宽度。

**响应式页面**：也称为流式（fluid 或 liquid）页面，它使用百分数定义宽度， 允许页面随显示环境的改变进行放大 或缩小。除了具有流动栏，响应式页 面还可以根据屏幕尺寸以特定方式调 整其设计。

## 固定布局

主要分四个区块：**masthead、main、sidebar和footer**。

**盒子模型**：

### 元素的显示类型

* 块级元素：display: block；(对于li元素为display: list-item)（个人理解为会换行显示）

* 行内元素：display: inline。（个人理解会在行内显示）

可使用css改变元素的默认显示类型。（所示）。（还有一种混合显示方式称为 inline-block，让元素与其他内容出现在同一行，同 时具有块级元素的属性）

* 显示与否：visibility:hidden/visible;（注意，设置为hidden仅仅让元素隐藏，但文档流中仍然存在，这点与display:none不同；display：none的内容完全不存在。）

## 设置元素宽高

对定宽页面使用像素，对响应式Web 设计 使用百分数（百分数相对于父元素）。

* **auto**：width 的 auto 值是由包含块的宽 度减去元素的内边距、边框和外边距计算出 来的
* **min-height 通常比 height 更适用**：如果希望元素至少具有某一特
  定高度，可以设置 min-height。如果内容 日后变多，元素的高度会自动按需增长。 这是 height 与 min-height 的区别，width 和 **min-width** 也是类似的



## 边距

* **内边距和外边距的em值**: 当 em 值用于内边距和外边距时，它的值是相对于元素的字体大小的，而不是相对于父
  元素的字体大小的（你可能会这样认为）。计算外边距或内边距的 em 值 的公式为：
  要指定的字体大小／元素的字体大小＝值

## 元素浮动float

* float:left/right/none;

* 浮动的元素不属于文档流，并不会影响父元素或其他祖先元素 的高度。可利用**clear**属性清除浮动效果，如果对 某个元素使用该属性，该元素和它后面的元 素就会显示在浮动元素的下面。

  .post-footer { clear: left;}

  也可定义clearfix类，且在样式表中引入。

  ```html
  <div class="container clearfix"> <main role="main"> ...
  </main>
  <div class="sidebar"> ...
  </div>
  </div>
  ```

  ```css
  .clearfix:before, .clearfix:after { content: " "; display: table;
  }
  .clearfix:after { clear: both;
  }
  .clearfix { *zoom: 1;
  }
  ```

## 溢出 overflow

决定浏览器如何处理溢出：overflow: 

  * visible，让元素盒子中的所有 内容可见，这是默认项； 
  * hidden，隐藏元素盒子容纳不了的内容； 
  *  scroll，无论元素是否需要， 都在元素上添加滚动.
  *  auto，让滚动条仅在访问者访 问溢出内容时出现。

  

## 垂直对齐 vertical-align

使元素垂直对齐:vertical-align:

* baseline，使元素的基准线对齐 父元素的基准线;
* middle，使元素位于父元素中央；
* sub，使元素成为父元素的下标;
*  super，使元素成为父元素的上标；
* text-top，使元素的顶部对齐 父元素的顶部；
* text-bottom，使元素的底部对 齐父元素的底部； 
* top，使元素的顶部对齐当前行 里最高元素的顶部； 
*  bottom，使元素的底部对齐当 前行里最低元素的底部； 
* 元素行高的百分比，可以是正 数，也可以是负数； 或者输入某个值（正负均可，单位为像素或 em）分别按照特定的值向上或者向下移 动元素。

vertical-align 属性仅适 用于行内元素，不能应用于块级元。默认样式为中间对齐。



## 修改鼠标指针 cursor

修改指针形状：cursor:

* 1) pointer 表示停留在链接上时通常显示的指针形状
* default表示箭头，
* crosshair
* move
* wait
*  help
* text
* progress
* auto 显示特定情形下通常使用的指针形状；
* x-resize 显示双向箭头，这里的x是其中一个箭头需要指向的方向，可以 是 n（北）、nw（西北）、e（东），等等。 例如，e-resize 指针显示成 。





tips: 

* 不能对内联元素设置宽高，若需要，则需要将其设置为块级元素display: block
* 对元素设置margin:auto（或margin：0 auto)后，子元素水平居中
* 对使用position定位后显示在同一位置的多个内容，可用z-index，配合js控制其显示，实现类似tab的效果。
* 可通过checkbox hack技术实现通过按钮控制一个元素。（点击checkbox的label标签后，好像点击了这个checkbox自己一样。）



# 弹性盒子布局 flex

* display:flex; //若想设置行内元素为flex，可设置为display:inline-flex;
* 主轴：flex元素放置延伸的轴；交叉轴：垂直于主轴的轴。
* 设置了flex的父元素被称为flex容器；容器中表现为柔性的元素被称为flex项。**display：flex**不可继承。
* **flex-direction**: row/colume/row-reverse/colume-reverse; 指定**主轴方向**。
* flex-warp 换行。//子容器超出范围是是否换行
* **flex-flow**: 为flex-direction 和flex-wrap的缩写，可直接指定。flex-flow:row wrap;

## flex动态尺寸

flex: number; //eg: flex:1

number为无单位比例值，表示每个 flex 项沿主轴的可用空间大小。

* flex：1时这表示每个元素占用空间都是相等的，占用的空间是在设置 padding 和 margin 之后剩余的空间。
* flex:2时，元素的占用空间是flex:1的元素的2倍。
* 可以指定flex的最小值：flex:1 200px;这表示会给项先分配200px可用空间，再按比例分享剩余空间。

## 水平与垂直对齐

* justyfy-content 控制项在主轴上的对齐方式
* align-items控制flex项在交叉轴上的位置



# 响应式布局

方法根植于以下三点：

* 灵活的图像和媒体。图像和媒体资源 的尺寸是用百分数定义的，从而可以 根据环境进行缩放。
* 灵活的、基于网格的布局，也就是流 式布局。对于响应式网站，所有的 width 属性都用百分数设定，因此所有 的布局成分都是相对的。其他水平属 性通常也会使用相对单位（em、百分 数和 rem 等）。
* 媒体查询。使用这项技术，可以根据 媒体特征（如浏览器可视页面区域的 宽度）对设计进行调整

##  可伸缩图像 max-width

为每个想做成可伸缩图像的图像设置max-width:100%;(图像会在0-100%本来尺寸中变换，该方法于width：100%不同)

## 弹性布局网络 使用max-width替代width

要指定的宽度（以像素为单位）／容器宽度（以像 素为单位）＝值



## 媒体查询

 指向外部样式表的链接：
<l   ink rel="stylesheet" media="logic ➝ type and (feature: value)" ➝ href="your-stylesheet.css" />

 位于样式表中的媒体查询：
@media logic type and (feature: ➝ value) {   /* 目标CSS样式规则写在这里 */ }

可在这里针对不同的显示设备定义不同的样式

eg:

```css
/* 基准样式 ----------------------------------- */ ...
/* 20em (大于等于320px) ----------------------------------- */
@media only screen and (min-width: 20em) { 
    .nav-main li { 
        border-left: 1px solid #c8c8c8;
        display: inline-block; 
        text-align: left;
}
.nav-main li:first-child { 
    border-left: none;
}
.nav-main a { 
    display: inline-block; 
    font-size: 1em; 
    padding: .5em .9em .5em 1.15em;
} }
```



# css3 增强

## border-radius添加圆角。

* 示 border-radius 仅影响施加该样式的 元素的角，不会影响其子元素的角。因此， 如果一个子元素有背景，该背景就有可能显 示在一个或多个父元素的角的位置，从而影 响圆角样式。
* 有时元素的背景（这里讲的不是子元 素的背景）会透过其圆角。为了避免这种情况， 可以在元素的 border-radius 声明后面增加一 条样式规则：**background-clip: padding-box**;

## 为文本添加阴影：

* text-shadow
  * x-offset（水平偏移
    量）、y-offset（垂直偏移量）、blur-radius（模 糊半径）和color的值（前三个值带长度单位， 四个值之间不用逗号分隔）.
  * 改回默认：text-shadow:none

## 为其他元素添加阴影

* box-shadow: 为元素本身添加shadow
  * box-shadow 属性接受六个值：带长度单 位的 x-offset 和 y-offset、可选的带长度单位的 blur-radius、可选的 inset 关键字、可 选的带长度单位的 spread 值及 color 值。如 果不指定 blur-radius 和 spread 的值，则设 为 0。

## 渐变背景

background：liner-gradient()/radical-gradient();



## 不透明度

opacity



## 生成内容的效果

