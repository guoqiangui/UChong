mui.plusReady(function () {
	$(function () {
		// 加载推荐视频
		$.getJSON("../json/main-video.json", function (data) {
			var resultStr = template("template1", data);
			$(".recommend-items").append(resultStr);
		});
		
		// 加载推荐文章
		$.getJSON("../json/main-article.json", function (data) {
			var resultStr = template("template2", data);
			$(".recommend-items").append(resultStr);
		});
	});
	
	// 点击视频跳到视频页
	mui(".recommend-items").on("tap", ".recommend-video", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "play-video.html", 
			id: "play-video.html", 
			createNew: true, 
			extras: {
				url: "play-video.html", 
				id: "play-video.html", 
				createNew: true, 
				extras: {
					title: this.querySelector(".recommend-video h4").innerHTML,
					url: this.dataset.url, 
					nickname: this.querySelector(".recommend-video .recommend-author").innerHTML,
					icon: this.dataset.icon,
					fansnum: this.dataset.fansnum
				}
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