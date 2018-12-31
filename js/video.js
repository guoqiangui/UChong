// 点击导航选项卡，就给当前选项卡添加active类
var tabs = document.querySelectorAll(".top-nav li");
for(var i=0 ; i<tabs.length ; i++) {
	// 给每个项绑定索引
	tabs[i].index = i;
	// 绑定点击事件
	tabs[i].addEventListener("tap", function () {
		// 排他思想
		for(var j=0 ; j<tabs.length ; j++) {
			tabs[j].classList.remove("active");
		}
		this.classList.add("active");
	});
}

// 读取json中的视频数据
$(function () {
	$.getJSON("../json/video.json", function (data) {
		var resultStr = template("template", data);
		document.querySelector(".content-videos").innerHTML = resultStr;
	});
});

// 点击视频进入播放页面
mui.plusReady(function () {
	mui(".content-videos").on("tap", ".content-video-item", function () {
		// 获取视频url
		var urlStr = this.dataset.url;
		
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "play-video.html", 
			id: "play-video.html", 
			createNew: true, 
			extras: {
				title: this.querySelector("h4").innerHTML,
				url: urlStr, 
				nickname: this.dataset.nickname,
				icon: this.dataset.icon,
				fansnum: this.dataset.fansnum
			}
		});
	});
});