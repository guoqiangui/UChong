// 复制多个推荐项
var recItem = document.querySelector(".posts li");
for(var i=0;i<5;i++) {
	// 深复制
	var copy = recItem.cloneNode(true);
	recItem.parentNode.appendChild(copy);
}

mui.plusReady(function () {
	mui("ul.posts").on("tap", "li", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "bbs-post-detail.html", 
			id: "bbs-post-detail.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
});