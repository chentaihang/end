# 🐾 宠乐星球 (Pet Joy Planet)

一个面向宠物爱好者的综合性 Web 平台，集宠物社交、旅行攻略、养护服务和寄养平台于一体。

## 📖 项目简介

宠乐星球是一个基于 Vue 3 构建的宠物社区平台，旨在为宠物主人提供一站式服务体验，涵盖以下核心功能模块：

- **旅行助手** — 浏览宠物友好景点、养护好店、寄养平台
- **宠友圈** — 宠物社交动态分享，支持推荐/好友/个人动态
- **攻略宝典** — 宠物养护知识社区，发布与阅读攻略文章
- **内容发布** — 支持图文帖子创建、旅行笔记发布

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | ^3.2.13 | 前端框架 |
| Vue Router | ^4.0.13 | 路由管理 |
| Vuex | ^4.0.2 | 状态管理 |
| Element Plus | ^2.8.1 | UI 组件库 |
| Font Awesome | ^6.6.0 | 图标库 |
| Vue DatePicker | ^9.0.2 | 日期选择器 |
| date-fns | ^3.6.0 | 日期工具库 |
| Vue CLI | ~5.0.0 | 构建工具 |

## 📁 项目结构

```
src/
├── App.vue                        # 根组件
├── main.js                        # 入口文件
├── router/index.js                # 路由配置
├── store/index.js                 # Vuex 状态管理
├── assets/images/                 # 静态资源
├── views/                         # 页面视图
│   ├── LoginPage.vue              # 登录页
│   ├── RegisterPage.vue           # 注册页
│   ├── AllHome.vue                # 首页（登录后入口）
│   ├── TravelHomepage.vue         # 旅行助手主页
│   ├── SceneHomePage.vue          # 宠物友好景点
│   ├── ServiceHomePage.vue        # 宠物养护好店
│   ├── SetterHomePage.vue         # 宠物寄养平台
│   ├── TravelPostPage.vue         # 旅行笔记发布
│   ├── PetCircle.vue              # 宠友圈（社交动态）
│   ├── PublishPage.vue            # 发布个人动态
│   ├── Gongluemain.vue            # 攻略宝典主页
│   ├── Gongluefabu.vue            # 发布攻略帖子
│   └── Gongluexiangxi.vue         # 攻略详情页
└── components/                    # 可复用组件
    ├── TravelHeader.vue           # 全局导航头部
    ├── SearchBar.vue              # 搜索栏
    ├── TravelCarousel.vue         # 轮播图
    ├── TravelContentCard.vue      # 旅行内容卡片
    ├── TravelPostUI.vue           # 旅行笔记表单
    ├── PostDisplay.vue            # 帖子详情展示
    ├── SceneSideBar.vue           # 景点筛选侧栏
    ├── SceneImageGrid.vue         # 景点图片网格
    ├── ServiceHomeCarousel.vue    # 服务轮播图
    ├── ServiceHomePageCalendar.vue# 服务日历选择
    ├── ServiceHomePageCard.vue    # 服务筛选卡片
    ├── SetterDateRangePicker.vue  # 寄养日期范围选择
    ├── SetterImageGalley.vue      # 寄养图片画廊
    ├── PersonalPosts.vue          # 个人动态列表
    ├── FriendPosts.vue            # 好友动态列表
    └── RecommendPosts.vue         # 推荐动态列表
```

## 🚀 页面路由

| 路径 | 页面 | 描述 |
|------|------|------|
| `/` | 登录页 | 用户登录入口 |
| `/register` | 注册页 | 新用户注册 |
| `/allhome` | 首页 | 登录后主页 |
| `/travelhome` | 旅行助手 | 景点/服务/寄养三大板块入口 |
| `/SceneHP` | 宠物友好景点 | 按地区浏览宠物友好景点 |
| `/ServiceHP` | 宠物养护好店 | 查找宠物洗护/美容服务 |
| `/SetterHP` | 宠物寄养平台 | 浏览寄养服务与时间选择 |
| `/TravelPost` | 旅行笔记发布 | 发布旅行笔记与评价 |
| `/petcircle` | 宠友圈 | 社交动态(推荐/好友/个人) |
| `/publishpage` | 发布动态 | 创建个人宠物动态 |
| `/post-display` | 帖子详情 | 展示发布的内容详情 |
| `/gongluemain` | 攻略宝典 | 攻略文章与视频浏览 |
| `/gongluefabu` | 发布攻略 | 创建攻略帖子 |
| `/gongluexiangxi` | 攻略详情 | 查看攻略文章详情与评论 |

## ⚡ 快速开始

### 环境要求

- Node.js >= 14
- npm >= 6

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run serve
```

### 构建生产版本

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

## 📄 License

本项目仅供学习交流使用。
