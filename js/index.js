// 设置打开首页默认显示的子页索引
var defaultIndex = 0;
// 子页的路径
var subpages = ["pages/main.html", "pages/video.html", "pages/column.html", "pages/bbs.html"];

// 所有的html5+方法写在mui.plusReady中或者后面
mui.plusReady(function () {
	// 获取当前页面的窗口对象
	var self = plus.webview.currentWebview();
	// 逐个创建webview子页
	for(var i=0;i<subpages.length;i++) {
		// 这里参数分别为子页url、子页id、子页窗口的样式
		var sub = plus.webview.create(subpages[i], subpages[i], {
			top: "0px",
			bottom: "50px"
		});
		// 判断：如果不是设定的默认子页索引，则隐藏
		if(i != defaultIndex) {
			sub.hide();
		} 
		// 将webview对象填充到窗口
		self.append(sub);
	}
	
	// 当前激活选项的地址
	var activeTab = subpages[defaultIndex];
	// 选项卡点击事件
	mui(".mui-bar-tab").on("tap", "a", function (e) {
		// 获取目标子页url，我们将它写在了href属性中
		var targetTab = this.getAttribute("href");
		// 如果点击的和显示的url相同，则不做改变
		if(targetTab == activeTab) {
			return;
		}
		// 否则改变页面
		// 显示目标选项卡
		plus.webview.show(targetTab);
		// 隐藏当前选项卡
		plus.webview.hide(activeTab);
		// 更改激活的选项卡
		activeTab = targetTab;
	});
	
});