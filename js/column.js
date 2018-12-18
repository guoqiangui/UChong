mui.plusReady(function () {
	// 点击顶部导航的分类，进入分类页（作者分类）
	document.querySelector(".top-nav .category").addEventListener("tap", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "column-category.html", 
			id: "column-category.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
	
	// 点击专栏,进入专栏详情页 
	mui(".column-items").on("tap", ".column-item", function () {
		// extras可以页面传值，需要重新打开本页
		mui.openWindow({
			url: "column-detail.html", 
			id: "column-detail.html", 
			createNew: true, 
			extras: {
				
			},
		});
	});
});

