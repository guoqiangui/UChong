mui.plusReady(function () {
	// 点击视频跳到视频页
	mui(".recommend-items").on("tap", ".recommend-video", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "play-video.html", 
			id: "play-video.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
	
	// 点击文章跳到文章页
	mui(".recommend-items").on("tap", ".recommend-article", function () {
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