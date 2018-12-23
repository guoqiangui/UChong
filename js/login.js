mui.plusReady(function () {
	// 点击注册账号跳转到注册页面
	document.querySelector("button:nth-child(1)").addEventListener("tap", function () {
		// extras可以页面传值
		mui.openWindow({
			url: "../pages/register.html", 
			id: "register.html", 
			extras: {
				
			}
		});
	});
});