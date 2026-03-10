# 🐾 宠乐星球 (Pet Joy Planet)

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.2.13-4FC08D?style=flat-square&logo=vue.js" alt="vue" />
  <img src="https://img.shields.io/badge/Vue--Router-4.0.13-4FC08D?style=flat-square&logo=vue.js" alt="vue-router" />
  <img src="https://img.shields.io/badge/Vuex-4.0.2-4FC08D?style=flat-square&logo=vue.js" alt="vuex" />
  <img src="https://img.shields.io/badge/Element%20Plus-2.8.1-409EFF?style=flat-square&logo=element-plus" alt="element-plus" />
  <img src="https://img.shields.io/badge/Date--fns-3.6.0-FFE053?style=flat-square" alt="date-fns" />
</p>

一个面向宠物爱好者的综合性 Web 平台，集宠物社交、旅行攻略、养护服务和寄养平台于一体。

## 📖 项目简介

宠乐星球是一个基于 Vue 3 构建的宠物社区平台，旨在为宠物主人提供一站式服务体验，涵盖以下核心功能模块：

- ✈️ **旅行助手** — 浏览宠物友好景点、养护好店、以及寄养平台服务。
- 💬 **宠友圈** — 宠物专属的社交动态分享，支持按“推荐”、“好友”和“个人动态”进行分类浏览。
- 📚 **攻略宝典** — 丰富的宠物养护知识社区，用户可以发布、阅读各类宠物攻略文章和视频。
- 📝 **内容发布** — 支持丰富的图文帖子创建、旅行笔记和体验的发布。

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | ^3.2.13 | 核心前端框架 |
| Vue Router | ^4.0.13 | 单页面路由管理 |
| Vuex | ^4.0.2 | 集中式状态管理 (用于 `formData` 等全局状态传递) |
| Element Plus | ^2.8.1 | 组件化 UI 库 |
| Font Awesome | ^6.6.0 | 丰富的矢量图标库 |
| Vue DatePicker | ^9.0.2 | 现代化的日期选择器 |
| date-fns | ^3.6.0 | 轻量级日期处理工具库 |
| Vue CLI | ~5.0.0 | 项目脚手架与构建工具 |

## 📁 项目核心结构

```text
src/
├── App.vue                        # 根组件
├── main.js                        # 入口文件 (引入 Element Plus, 字体图标等)
├── router/index.js                # 路由配置 (含 14 个核心页面路由)
├── store/index.js                 # Vuex 状态管理 (处理 formData 等数据流)
├── assets/images/                 # 静态资源
├── views/                         # 页面级视图 (Views)
│   ├── LoginPage.vue              # 登录页
│   ├── RegisterPage.vue           # 注册页
│   ├── AllHome.vue                # 首页（登录后系统入口）
│   ├── TravelHomepage.vue         # 旅行助手主板块
│   ├── SceneHomePage.vue          # 宠物友好景点列表
│   ├── ServiceHomePage.vue        # 宠物养护好店列表
│   ├── SetterHomePage.vue         # 宠物寄养平台
│   ├── TravelPostPage.vue         # 旅行笔记发布页
│   ├── PetCircle.vue              # 宠友圈（社交动态流）
│   ├── PublishPage.vue            # 发布个人动态页
│   ├── Gongluemain.vue            # 攻略宝典主页
│   ├── Gongluefabu.vue            # 发布攻略帖子页
│   ├── Gongluexiangxi.vue         # 攻略详情内容页
│   └── post-display/              # 帖子内容详情展示
└── components/                    # 业务级与通用组件 (Components)
    ├── 自定义导航: TravelHeader.vue, SearchBar.vue
    ├── 列表展示: TravelContentCard.vue, PersonalPosts.vue, FriendPosts.vue, RecommendPosts.vue
    ├── 表单填写: TravelPostUI.vue (内置表单与上传组件)
    ├── 互动与查看: PostDisplay.vue, SceneImageGrid.vue
    └── 寄养与服务: SetterDateRangePicker.vue, ServiceHomePageCalendar.vue
```

## 🚀 页面路由配置

| 路径 | 页面组件 | 描述 |
|------|----------|------|
| `/` | `LoginPage` | 用户登录入口 |
| `/register` | `RegisterPage` | 新用户注册界面 |
| `/allhome` | `AllHome` | 登录后主页 |
| `/travelhome` | `TravelHomepage` | 旅行助手：景点/服务/寄养三大板块 |
| `/SceneHP` | `SceneHomePage` | 按地区浏览宠物友好景点 |
| `/ServiceHP` | `ServiceHomePage` | 查找宠物洗护/美容服务 |
| `/SetterHP` | `SetterHomePage` | 收容与寄养服务、时间选择 |
| `/TravelPost` | `TravelPostPage` | 发布详细的旅行笔记与评价 |
| `/petcircle` | `PetCircle` | 宠友圈动态展示与互动流 |
| `/publishpage` | `PublishPage` | 快速创建个人宠物动态图文 |
| `/post-display` | `PostDisplay` | 展示发布的图文内容详情 |
| `/gongluemain` | `Gongluemain` | 攻略宝典主页面 |
| `/gongluefabu` | `Gongluefabu` | 创作与发布新的攻略帖子 |
| `/gongluexiangxi` | `Gongluexiangxi`| 查看具体攻略文章与用户评论 |

## ⚡ 快速开始与开发指南

### 1. 环境准备
确保您的本地环境已有 Node.js >= 14 以及 npm >= 6。
推荐使用 **VSCode** 作为编辑器，并安装 **Vue - Official (Volar)** 插件以获得最佳的 TypeScript/Vue 3 语法支持。

### 2. 安装依赖
克隆项目后，在项目根目录运行以下命令安装所需依赖：
```bash
npm install
```

### 3. 本地开发服务器
启动开发服务器支持热更新：
```bash
npm run serve
```
默认会在本地 `http://localhost:8080` (或控制台提示的其他端口) 启动应用。

### 4. 构建生产版本
当准备部署到线上环境时，执行构建打包命令：
```bash
npm run build
```
打包生成的文件将存放在 `dist/` 目录下。

### 5. 代码质量检查
运行 ESLint 检查并自动修复部分代码风格问题：
```bash
npm run lint
```

## 📄 License
本项目仅供学习交流使用。
