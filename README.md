# 中医智行 - PC 端官网

> 传统中医智慧与现代互联网技术的融合，为用户提供全方位的中医健康服务

## 项目简介

中医智行 PC 端官网是一个展示型网站，为用户提供中医健康咨询、预约挂号、医生推荐等服务。网站采用响应式设计，在 PC 端展示完整功能，同时会自动检测移动设备并跳转到移动端版本。

**在线访问**: [zyzx.pro](https://zyzx.pro/) (或通过 [m-zyzx.netlify.app](https://m-zyzx.netlify.app/) 访问移动端)

## 技术架构

### 核心技术栈

| 技术 | 说明 |
|------|------|
| **HTML5 + CSS3 + JavaScript** | 原生前端技术，无框架依赖 |
| **Bootstrap 5.3.0** | UI 框架，提供响应式栅格系统和组件 |
| **Less** | CSS 预处理器，便于样式管理 |
| **Lenis** | 平滑滚动库，提升页面滚动体验 |
| **Magic Mouse** | 鼠标指针效果增强库 |

### 设计系统

- **图标**: iconfont 字体图标库
- **图片资源**: 统一的图片资源目录管理
- **样式架构**: 基础样式 + 公共样式 + 页面特定样式

## 响应式设计

本项目实现了智能响应式跳转：

```javascript
// 在 index.html 中嵌入的检测脚本
function redirectToMobileOrDesktop() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
  const threshold = 768  // 阈值

  if (screenWidth <= threshold) {
    window.location.href = 'https://m-zyzx.netlify.app'
  }
}
```

当屏幕宽度 ≤ 768px 时，自动跳转到移动端版本。

## 功能模块

### 1. 顶部导航栏
- **品牌标识**: 左侧 Logo，点击返回首页
- **位置选择**: 药房位置选择（当前：汕尾）
- **导航菜单**: 首页 / 商城 / 健康 / 社区
- **搜索功能**: 顶部搜索框，支持医院和药品搜索
- **个人中心**: 用户登录入口

### 2. 轮播横幅
- 自动轮播的宣传图片
- 底部指示器支持手动切换
- 平滑的动画过渡效果

### 3. 工具快捷入口
| 图标 | 名称 | 功能描述 |
|------|------|----------|
| ![智能问诊](img/tool/znwz.png) | 智能问诊 | AI 辅助病情分析 |
| ![健康咨询](img/tool/jkzx.png) | 健康咨询 | 专业健康问题解答 |
| ![智能配方](img/tool/znpf.png) | 智能配方 | 中药配方建议 |
| ![智能识别](img/tool/znsb.png) | 智能识别 | 药材/处方识别 |
| ![药方检测](img/tool/yfjc.png) | 药方检测 | 处方合理性分析 |
| ![健康自测](img/tool/jkzc.png) | 健康自测 | 自我健康评估 |
| ![睡眠助手](img/tool/smzs.png) | 睡眠助手 | 睡眠质量改善 |
| ![疾病动态](img/tool/jbdt.png) | 疾病动态 | 最新疾病资讯 |

### 4. 预约服务卡片
- **预约挂号**: 在线预约专家门诊
- **线下预约**: 实体店预约服务
- **专家讲解**: 专家科普视频/文章

### 5. 推荐医生
展示优秀医生的详细信息：
- 医生照片
- 姓名、职称、科室
- 患者评分
- 接诊次数
- 专业擅长描述

支持横向滚动浏览更多医生。

## 目录结构

```
zyzx_official_website/
├── index.html                      # 首页
├── favicon.ico                     # 网站图标
├── bootstrap-5.3.0-alpha1-dist/    # Bootstrap 库
│   └── css/
│       └── bootstrap-reboot.css   # 重置样式
├── css/                            # 样式文件
│   ├── base.css                    # 基础样式
│   ├── normalize.css               # 样式重置
│   └── common.css                  # 公共样式
├── iconfont/                       # 字体图标
│   └── iconfont.css
├── img/                            # 图片资源
│   ├── banner/                     # 轮播横幅
│   ├── tool/                       # 工具图标
│   ├── appointment/                # 预约卡片素材
│   ├── recommend-doctor/           # 医生推荐图片
│   ├── logo_white.png              # 白色 Logo
│   └── ...
├── js/                             # 脚本文件
│   ├── flexible.js                 # 响应式适配
│   ├── index.js                    # 首页逻辑
│   ├── magic_mouse.js              # 鼠标效果
│   └── lenis/                      # 平滑滚动
│       └── lenis.min.js
├── less/                           # Less 源文件
└── html/                           # 其他页面
    ├── mall.html                   # 商城页
    ├── healthy.html                # 健康页
    └── community.html              # 社区页
```

## 页面开发

### CSS 架构

样式采用分层架构：

1. **base.css** - 基础变量和重置
2. **normalize.css** - 跨浏览器一致性
3. **common.css** - 公共组件样式
4. **页面特定样式** - 如 index.css

### Less 编译

项目使用 Less 作为 CSS 预处理器。开发时可使用 VSCode 的 Easy LESS 插件或命令行编译：

```bash
# 安装 less
npm install -g less

# 编译 Less 文件
lessc less/index.less css/index.css
```

### 第三方库集成

#### Magic Mouse 效果

为交互元素添加鼠标指针增强效果：

```javascript
document.querySelectorAll('a, button, label, .recommend-doctor .card, .icon')
  .forEach(el => {
    el.classList.add('magic-hover')
  })

const options = {
  "outerStyle": "disable",
  "hoverEffect": "pointer-overlay",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options)
```

#### Lenis 平滑滚动

```javascript
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
```

## 移动端适配

本项目采用"PC 优先 + 跳转移动端"的策略：

1. PC 端（>768px）：完整功能展示
2. 移动端（≤768px）：自动跳转到 [m-zyzx.netlify.app](https://m-zyzx.netlify.app/)

这样做的好处是：
- PC 端用户获得最佳浏览体验
- 移动端用户获得专门的移动端优化界面
- 代码分离便于各自独立迭代

## 开发环境

无需特殊开发环境配置，直接用浏览器打开 `index.html` 即可预览。

如需使用本地服务器：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 版权信息

```
copyright © M&T developed by Jason Liu
```

## 联系方式

- **作者**: Jason Liu
- **Gitee**: [paeonia-lactiflora](https://gitee.com/paeonia-lactiflora)

---

**声明**: 本网站为学习和演示项目，部分图片和内容来自互联网，仅供学习参考使用。
