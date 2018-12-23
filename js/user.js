mui.plusReady(function () {
	// 点击首页返回首页
	document.querySelector(".menu li:nth-child(1)").addEventListener("tap", function () {
		mui.back();
	});
	
	// 点击头像跳转到登录页面
	document.querySelector(".login-btn .user-icon").addEventListener("tap", function () {
		// extras可以页面传值
		mui.openWindow({
			url: "../pages/login.html", 
			id: "login.html", 
			extras: {
				
			}
		});
	});
});