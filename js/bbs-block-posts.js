// 获取版块名并显示到页面中
mui.plusReady(function () {
	var self = plus.webview.currentWebview();
	// 获取版块名
	var blockName = self.blockName;
	// 显示到页面中
	document.querySelector(".mui-bar.mui-bar-nav h1").innerHTML = blockName;
	
	// 点击帖子跳转到帖子详情页面
	mui("ul.posts").on("tap", "li", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "bbs-post-detail.html", 
			id: "bbs-post-detail.html", 
			createNew: true, 
			extras: {
				
			}
		});
	});
});