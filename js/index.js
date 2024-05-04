let img = document.querySelector('.banner img') // 获取图片元素
let imageIndex = 1 // 图片索引，从第二张开始

// 定义图片路径数组
let imagePaths = [
	'/img/banner/banner1.png',
	'/img/banner/banner2.png',
	'/img/banner/banner3.png',
]

// 设置定时器，每隔一定时间切换图片
setInterval(() => {
	document.querySelector(".banner .indicator>div.active").classList.remove("active")

	imageIndex = (imageIndex + 1) % imagePaths.length // 更新图片索引，循环播放
	img.src = imagePaths[imageIndex] // 更换图片的 src 属性

	document.querySelectorAll('.banner .indicator>div')[imageIndex].classList.add("active") // 更新指示器样式
}, 6000)


// 监听滚动事件
const navbar = document.querySelector('.navbar') // 获取导航栏元素

window.addEventListener('scroll', function (e) {
	// 获取当前页面已经滚动的垂直距离
	var scrollDistance = window.scrollY
	console.log(scrollDistance)

	// 判断是否已经滚动了100vh的距离
	if (scrollDistance >= window.innerHeight) {
		console.log('用户已经滚动了100vh的距离')
		navbar.classList.add('hide')
	} else {
		navbar.classList.remove('hide')
	}
})