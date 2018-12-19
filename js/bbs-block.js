// 点击导航选项卡，就给当前选项卡添加active类
var tabs = document.querySelectorAll("ul.blocks li");
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

// 点击某个版块,跳到相应版块页
mui.plusReady(function () {
	mui(".related-blocks").on("tap", "li", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "bbs-recommend.html", 
			id: "bbs-recommend.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
});