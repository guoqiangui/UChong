// 点击选项卡，就给当前选项卡添加active类
var tabs = document.querySelectorAll(".video-nav-tab a");
// 绑定事件
for(var i=0 ; i<tabs.length ; i++) {
	// 绑定索引
	tabs[i].index = i;
	tabs[i].addEventListener("tap", function () {
		// 排他思想
		for(var j=0 ; j<tabs.length ; j++) {
			tabs[j].classList.remove("active");
		}
		this.classList.add("active");
		// 跳到指定轮播项
		mui(".video-slider").slider().gotoItem(this.index);
	});
}

// 内容切换与tab栏切换同步
// 轮播事件
document.querySelector(".video-slider").addEventListener("slide", function (e) {
	// 获取当前播放项的索引,从0开始
	var curIndex = e.detail.slideNumber;
	// 将对应索引的tab栏修改同步
	// 排他思想
	for(var i=0 ; i<tabs.length ; i++) {
		tabs[i].classList.remove("active");
	}
	tabs[curIndex].classList.add("active");
});

mui.plusReady(function () {
	// 获取url
	var self = plus.webview.currentWebview();
	document.querySelector("video").src = self.url;
	// 获取昵称
	document.querySelector(".video-author-nickname").innerHTML = self.nickname;
	// 获取头像
	document.querySelector(".video-author-icon").style.backgroundImage = "url(" + self.icon + ")";
	// 获取粉丝
	document.querySelector(".video-author-fans span").innerHTML = self.fansnum;
	// 获取标题
	document.querySelector(".video-summary h4").innerHTML = self.title;
	
	// 点击相关视频项跳转到视频播放页
	mui(".video-related-videos").on("tap", ".related-videos-item", function () {
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