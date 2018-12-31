// 默认显示我的版块
$(function () {
	$.getJSON("../json/block.json", function (data) {
		var resultStr = template("template1", data);
		document.querySelector(".related-blocks ul").innerHTML = resultStr;
	});
});

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
		
		// 根据不同的索引修改页面显示不同的版块
		var idx = this.index;
		$(function () {
			// 我的版块
			if(idx == 0) {
				$.getJSON("../json/block.json", function (data) {
					var resultStr = template("template1", data);
					document.querySelector(".related-blocks ul").innerHTML = resultStr;
				});
			} else if(idx == 1) {	// 宠物家园
				$.getJSON("../json/block.json", function (data) {
					var resultStr = template("template2", data);
					document.querySelector(".related-blocks ul").innerHTML = resultStr;
				});
			} else if(idx == 2) {	// 综合话题
				$.getJSON("../json/block.json", function (data) {
					var resultStr = template("template3", data);
					document.querySelector(".related-blocks ul").innerHTML = resultStr;
				});
			}
		});
		
	});
}

// 点击某个版块,跳到相应版块页
mui.plusReady(function () {
	mui(".related-blocks").on("tap", "li", function () {
		// extras可以页面传值，需要重新打开本页
		// 传版块名过去
		var blockName = this.querySelector(".block-name").innerHTML;
		mui.openWindow({
			url: "bbs-block-posts.html", 
			id: "bbs-block-posts.html", 
			createNew: true, 
			extras: {
				blockName: blockName
			}
		});
	});
});
 