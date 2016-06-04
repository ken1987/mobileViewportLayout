/**
 * 基于Viewport属性的移动WEB弹性布局解决方案
 * @author ken
 * @param  {number} baseSize 原始尺寸。默认值：640
 * @param  {number} maxSize  最大尺寸，通过次参数来限制最大的缩放比例。默认值：undefined（不限制）
 */
var mobileViewportLayout = function(baseSize, maxSize) {
    baseSize = parseFloat(baseSize) || 640;
    maxSize = parseFloat(maxSize);

    //默认值
    var win = window;
    var doc = win.document;

    //检查是否存在viewport
    var el = doc.querySelector("meta[name=viewport]");

    //获取scale
    var getScale = function() {
        var screenSize = win.screen.width;
        screenSize = screenSize > maxSize ? maxSize : screenSize;
        return screenSize / baseSize;
    };

    //设置viewport
    var setViewport = function() {
        var scale = getScale();
        el.setAttribute('content',
            'width=device-width,'+
            'initial-scale=' + scale +
            ', maximum-scale=' + scale +
            ', minimum-scale=' + scale +
            ', user-scalable=no');
    };

    //绑定resize事件
    var timer;
    win.addEventListener('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(setViewport, 300);
    }, false);

    //初始化
    if (!el) {
        el = doc.createElement('meta');
        el.setAttribute('name', 'viewport');

        setViewport();

        if (doc.documentElement.firstElementChild) {
            doc.documentElement.firstElementChild.appendChild(el);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(el);
            doc.write(wrap.innerHTML);
        }
    } else {
        setViewport();
    }
};
