// 动态指定距离顶部的边距
// 获取标题的高度
var titleHeight = document.querySelector(".article h1").offsetHeight;
// 给头像加上上外边距
document.querySelector(".article .author-icon").style = "padding-top: "+titleHeight+"px";