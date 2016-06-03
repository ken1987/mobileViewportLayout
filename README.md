# mobileViewportLayout
基于Viewport属性的移动WEB弹性布局解决方案

## 原理

通过动态修改name=viewport的meta标签的属性来缩放网页。
* 移动端根据设置自动缩放比例
* PC端无影响，显示原始比例

## 使用方法

````html
<head>
  <script src='mobileViewportLayout.js'></script>
  <script>
    /**
     * mobileViewportLayout
     * @param  {number} baseSize 原始尺寸。默认值：640
     * @param  {number} maxSize  最大尺寸，通过次参数来限制最大的缩放比例。默认值：undefined（不限制）
     */
    mobileViewportLayout();
  </script>
</head>
````
## demo

[hiphop专题](http://h5.runjiaoyu.com.cn/theme/hiphop/index.htm)

## 开发初衷

在制作专题页时，设计师给到的往往是一个固定尺寸的设计稿，但我们需要根据不同屏幕做适配。

### 已有方案

考虑过阿里出品的[lib-flexible.js](https://github.com/amfe/lib-flexible)的方案，工作中已经应用。

这个方案主要是采用rem进行布局计算，而设计稿是以px为单位的。

做法是在less中定义一个px2rem方法px编译成rem，搭建构建工具来编译成最后的文件。

### 简单快乐的写代码

实际开发中遇到如下几个问题

* 需要了解less语法，不能写标准的css属性（虽然postcss有px2rem相关插件来处理）
* 需要有能力搭建构建工具
* 需要花时间搭建。如果专题页比较简单的时候，搭建项目或许更费间，更有甚者，电脑刚重装过，任务又很紧急...

综上所述，于是有了这个简单的解决方案。

## 后记
论项目构建的重要性，例子中的源码没有被压缩！
