/** 复制提示 监听copy事件 */
document.addEventListener("copy", function(e) {
	//复制的内容
	btf.snackbarShow('复制成功，请遵循GPL协议', false, 3000)
})
// F12提示 检测按键
window.onkeydown = function(e) {
	if (e.keyCode === 123) {
		btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
	}
}
// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
	let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
	b =
		Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
	) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
	result = Math.round((a / b) * 100), // 计算百分比
	btn = document.querySelector("#percent"); // 获取图标

	result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | XC's Blog")[0];
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
	let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
	b =
		Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
	) - document.documentElement.clientHeight, // 整个网页高度
	result = Math.round((a / b) * 100), // 计算百分比
	up = document.querySelector("#go-up"); // 获取按钮

	if (result <= 95) {
		up.childNodes[0].style.display = "none";
		up.childNodes[1].style.display = "block";
		up.childNodes[1].innerHTML = result;
	} else {
		up.childNodes[1].style.display = "none";
		up.childNodes[0].style.display = "block";
	}
}
//切换夜间
function switchDarkMode() {
	const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
	if (nowMode === 'light') {
		activateDarkMode()
		saveToLocal.set('theme', 'dark', 2)
		GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
	} else {
		activateLightMode()
		saveToLocal.set('theme', 'light', 2)
		GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
	}
	// handle some cases
	typeof utterancesTheme === 'function' && utterancesTheme()
	typeof changeGiscusTheme === 'function' && changeGiscusTheme()
	typeof FB === 'object' && window.loadFBComment()
	typeof runMermaid === 'function' && window.runMermaid()
}
categoriesBarActive()
topCategoriesBarScroll()

//分类条
function categoriesBarActive() {
	var urlinfo = window.location.pathname;
	urlinfo = decodeURIComponent(urlinfo)
	console.log(urlinfo);
	//判断是否是首页
	if (urlinfo == '/') {
		if (document.querySelector('#category-bar')) {
			document.getElementById('首页').classList.add("select")
		}
	} else {
		// 验证是否是分类链接
		var pattern = /\/categories\/.*?\//;
		var patbool = pattern.test(urlinfo);
		console.log(patbool);
		// 获取当前的分类
		if (patbool) {
			var valuegroup = urlinfo.split("/");
			console.log(valuegroup[2]);
			// 获取当前分类
			var nowCategorie = valuegroup[2];
			if (document.querySelector('#category-bar')) {
				document.getElementById(nowCategorie).classList.add("select");
			}
		}
	}

}
//鼠标控制横向滚动
function topCategoriesBarScroll() {
	if (document.getElementById("category-bar-items")) {
		let xscroll = document.getElementById("category-bar-items");
		xscroll.addEventListener("mousewheel", function(e) {
			//计算鼠标滚轮滚动的距离
			let v = -e.wheelDelta / 2;
			xscroll.scrollLeft += v;
			//阻止浏览器默认方法
			e.preventDefault();
		}, false);
	}
}