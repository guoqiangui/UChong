mui.plusReady(function () {
	$(function () {
		$.getJSON("../json/main-rank.json", function (data) {
			var resultStr = template("template", data);
			$(".rank-items").append(resultStr);
			
			// 前三名的排名颜色不同
			var arr = document.querySelectorAll(".rank-number");
			// 第一个金色
			arr[0].style.backgroundColor = "#FCE734";
			arr[1].style.backgroundColor = "silver";
			arr[2].style.backgroundColor = "sandybrown";
		});
	});
	
	// 点击排行榜中的视频跳到视频页
	mui(".rank-items").on("tap", ".rank-item", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "play-video.html", 
			id: "play-video.html", 
			createNew: true, 
			extras: {
				title: this.querySelector(".rank-item h4").innerHTML,
				url: this.dataset.url, 
				nickname: this.querySelector(".rank-item .rank-nickname").innerHTML,
				icon: this.dataset.icon,
				fansnum: this.dataset.fansnum
			},
		});
	});
});

