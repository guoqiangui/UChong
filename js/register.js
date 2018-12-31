mui.plusReady(function () {
	// 点击注册账号跳转到用户页面
	document.querySelector("button:nth-child(1)").addEventListener("tap", function () {
		// 获取用户输入的用户名
		var userName = document.querySelector("input.mui-input-clear.username").value;
		if(userName == undefined || userName == "") {
			mui.alert("请输入用户名");
			return;
		}
		
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