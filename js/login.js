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
	
	// 点击登录账号跳转到用户页
	document.querySelector("button:nth-child(2)").addEventListener("tap", function () {
		// 获取用户输入的用户名
		var userName = document.querySelector("input.mui-input-clear").value;
		// extras可以页面传值，需要重新创建页面，否则无法更改
		mui.openWindow({
			url: "../pages/user.html", 
			id: "user.html", 
			createNew: true, 
			extras: {
				userName: userName
			}
		});
	});
});