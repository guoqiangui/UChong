// 点击专栏项进入专栏文章页面
mui.plusReady(function () {
	mui(".column-articles-simple").on("tap", ".article-item", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "column-article.html", 
			id: "column-article.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
});