// 点击选项卡，就给当前选项卡添加active类
var tabs = document.querySelectorAll(".top-nav-tab a");

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
		// 跳到指定轮播项
		mui(".tab-content-slide").slider().gotoItem(this.index);
	});
}

// 内容切换与tab栏切换同步
// 轮播事件
document.querySelector(".tab-content-slide").addEventListener("slide", function (e) {
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
	// 点击视频项打开视频播放页面
	mui(".video-wrapper").on("tap", ".video-item", function () {
		// extras可以页面传值
		mui.openWindow({
			url: "../pages/play-video.html", 
			id: "play-video.html", 
			extras: {
				
			}
		});
	});
	
	// 点击用户进入用户界面
	document.querySelector(".top i.icon-yonghu").addEventListener("tap", function () {
		// extras可以页面传值
		mui.openWindow({
			url: "../pages/user.html", 
			id: "user.html", 
			extras: {
				
			}
		});
	});
});


