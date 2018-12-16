// 点击导航选项卡，就给当前选项卡添加active类
var tabs = document.querySelectorAll(".top-nav li");
// 长度-1是因为最后一个是添加按钮，功能不一样
for(var i=0 ; i<tabs.length-1 ; i++) {
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

// 点击视频进入播放页面
mui.plusReady(function () {
	mui(".content-videos").on("tap", ".content-video-item", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "play-video.html", 
			id: "play-video.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
});