mui.plusReady(function () {
	// 点击首页返回首页
	document.querySelector(".menu li:nth-child(1)").addEventListener("tap", function () {
		// extras可以页面传值
		mui.openWindow({
			url: "../index.html", 
			id: "index.html", 
			extras: {
				
			}
		});
	});
	
	// 如果获取的参数有值，就修改页面内容
	var self = plus.webview.currentWebview();
	var userName = self.userName;
	// 如果传值过来
	if(userName != undefined && userName != "") {
		document.querySelector(".top .user-nickname").innerHTML = userName;
		document.querySelector(".login-btn span").innerHTML = "退出登录";
	}
	
	// 点击头像跳转到登录页面
	document.querySelector(".login-btn .user-icon").addEventListener("tap", function () {
		// 如果没有登录，才允许跳到登录页面
		if(document.querySelector(".top .user-nickname").innerHTML == "") {
			// extras可以页面传值
			mui.openWindow({
				url: "../pages/login.html", 
				id: "login.html", 
				extras: {
					
				}
			});
		}
	});
	
	// 点击退出登录按钮退出登录
	document.querySelector(".login-btn span").addEventListener("tap", function () {
		// 登录了才给退出
		if(document.querySelector(".top .user-nickname").innerHTML != "") {
			document.querySelector(".top .user-nickname").innerHTML = "";
			document.querySelector(".login-btn span").innerHTML = "点击头像登录";
		}
	});
	
});