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