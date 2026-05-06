# 中医智行 — PC 端官网

> 传统中医智慧与现代互联网技术的融合，为用户提供全方位的中医健康服务

## 项目简介

中医智行 PC 端官网是一个展示型网站，为用户提供中医健康咨询、预约挂号、医生推荐等服务。网站采用响应式设计，在 PC 端展示完整功能，同时会自动检测移动设备并跳转到移动端版本。

**在线访问**: [zyzx.netlify.app/](https://zyzx.netlify.app/)

**移动端**: [m-zyzx.netlify.app](https://m-zyzx.netlify.app/)

| 项目 | PC 端 | 移动端 |
|------|-------|--------|
| 仓库 | [zyzx-official-website](https://github.com/bigmanBass666/zyzx-official-website) | [zyzx-official-website-mobile](https://github.com/bigmanBass666/zyzx-official-website-mobile) |
| 构建工具 | 原生（无） | Vite |
| 响应式策略 | 跳转 | 自适应 |
| 导航 | 顶部导航栏 | 底部 TabBar |

## 技术架构

### 核心技术栈

| 技术 | 说明 |
|------|------|
| **HTML5 + CSS3 + JavaScript** | 原生前端技术，无框架依赖 |
| **Bootstrap 5.3.0** | UI 框架，响应式栅格系统和组件 |
| **Less** | CSS 预处理器 |
| **Lenis** | 平滑滚动库 |
| **Magic Mouse** | 鼠标指针效果增强 |

### 设计资源

- **图标**: iconfont 字体图标库
- **图片资源**: 统一目录管理
- **样式架构**: 基础样式 + 公共样式 + 页面特定样式

## 功能模块

### 1. 顶部导航栏
- **品牌标识**: 左侧 Logo，点击返回首页
- **位置选择**: 药房位置选择
- **导航菜单**: 首页 / 商城 / 健康 / 社区
- **搜索功能**: 顶部搜索框
- **个人中心**: 用户登录入口

### 2. 轮播横幅
- 自动轮播宣传图片
- 底部指示器手动切换
- 平滑动画过渡

### 3. 工具快捷入口

| 图标 | 名称 | 功能 |
|------|------|------|
| 智能问诊 | AI 辅助病情分析 |
| 健康咨询 | 专业健康问题解答 |
| 智能配方 | 中药配方建议 |
| 智能识别 | 药材/处方识别 |
| 药方检测 | 处方合理性分析 |
| 健康自测 | 自我健康评估 |
| 睡眠助手 | 睡眠质量改善 |
| 疾病动态 | 最新疾病资讯 |

### 4. 预约服务卡片
- **预约挂号**: 在线预约专家门诊
- **线下预约**: 实体店预约服务
- **专家讲解**: 专家科普视频/文章

### 5. 推荐医生
展示优秀医生详细信息，支持横向滚动浏览

## 目录结构

```
zyzx-official-website/
├── index.html                      # 首页
├── favicon.ico                     # 网站图标
├── bootstrap-5.3.0-alpha1-dist/    # Bootstrap 库
├── css/                            # 样式文件
│   ├── base.css                    # 基础样式
│   ├── normalize.css               # 样式重置
│   └── common.css                  # 公共样式
├── iconfont/                       # 字体图标
├── img/                            # 图片资源
├── js/                             # 脚本文件
│   ├── flexible.js                 # 响应式适配
│   ├── index.js                    # 首页逻辑
│   ├── magic_mouse.js              # 鼠标效果
│   └── lenis/                      # 平滑滚动
├── less/                           # Less 源文件
└── html/                           # 其他页面
    ├── mall.html                   # 商城页
    ├── healthy.html                # 健康页
    └── community.html              # 社区页
```

## 移动端适配

智能响应式跳转策略：

```javascript
function redirectToMobileOrDesktop() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
  const threshold = 768

  if (screenWidth <= threshold) {
    window.location.href = 'https://m-zyzx.netlify.app'
  }
}
```

## 开发环境

直接用浏览器打开 `index.html` 即可预览。

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
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

## 作者

- **GitHub**: [bigmanBass666](https://github.com/bigmanBass666)
- **Gitee**: [paeonia-lactiflora](https://gitee.com/paeonia-lactiflora)

---

**声明**: 本网站为学习和演示项目，部分资源来自互联网，仅供学习参考使用。
