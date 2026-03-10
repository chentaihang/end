# end

> 宠乐星球 (Pet Joy Planet) — 面向宠物爱好者的综合性 Web 平台前端仓库。

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.2.13-4FC08D?style=flat-square&logo=vue.js" alt="vue" />
  <img src="https://img.shields.io/badge/Vue--Router-4.0.13-4FC08D?style=flat-square&logo=vue.js" alt="vue-router" />
  <img src="https://img.shields.io/badge/Vuex-4.0.2-4FC08D?style=flat-square&logo=vue.js" alt="vuex" />
  <img src="https://img.shields.io/badge/Element%20Plus-2.8.1-409EFF?style=flat-square&logo=element-plus" alt="element-plus" />
  <img src="https://img.shields.io/badge/date--fns-3.6.0-FFE053?style=flat-square" alt="date-fns" />
</p>

## 📦 仓库结构

```text
end/
└── petplatPC/    # PC 端 Vue 3 前端应用
```

## 📖 项目简介

宠乐星球是一个基于 **Vue 3** 构建的宠物社区平台，旨在为宠物主人提供一站式服务体验，涵盖以下核心功能模块：

- ✈️ **旅行助手** — 浏览宠物友好景点、养护好店和寄养平台服务
- 💬 **宠友圈** — 宠物专属社交动态，支持推荐、好友和个人动态分类浏览
- 📚 **攻略宝典** — 宠物养护知识社区，支持发布和阅读图文/视频攻略
- 📝 **内容发布** — 支持图文帖子、旅行笔记和体验评价的发布

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | ^3.2.13 | 核心前端框架 |
| Vue Router | ^4.0.13 | 单页面路由管理 |
| Vuex | ^4.0.2 | 集中式状态管理 |
| Element Plus | ^2.8.1 | 组件化 UI 库 |
| Font Awesome | ^6.6.0 | 矢量图标库 |
| Vue DatePicker | ^9.0.2 | 日期选择器 |
| date-fns | ^3.6.0 | 轻量级日期工具库 |
| Vue CLI | ~5.0.0 | 项目脚手架与构建工具 |

## 📁 核心目录结构

```text
petplatPC/src/
├── App.vue                    # 根组件
├── main.js                    # 入口文件
├── router/index.js            # 路由配置（14 个核心页面）
├── store/index.js             # Vuex 状态管理
├── assets/                    # 静态资源
├── views/                     # 页面级视图
│   ├── LoginPage.vue          # 登录页
│   ├── RegisterPage.vue       # 注册页
│   ├── AllHome.vue            # 系统主页
│   ├── TravelHomepage.vue     # 旅行助手
│   ├── SceneHomePage.vue      # 宠物友好景点
│   ├── ServiceHomePage.vue    # 宠物养护好店
│   ├── SetterHomePage.vue     # 宠物寄养平台
│   ├── TravelPostPage.vue     # 旅行笔记发布
│   ├── PetCircle.vue          # 宠友圈
│   ├── PublishPage.vue        # 发布个人动态
│   ├── Gongluemain.vue        # 攻略宝典主页
│   ├── Gongluefabu.vue        # 发布攻略帖子
│   └── Gongluexiangxi.vue     # 攻略详情页
└── components/                # 业务与通用组件
```

## 🚀 页面路由

| 路径 | 组件 | 描述 |
|------|------|------|
| `/` | `LoginPage` | 用户登录 |
| `/register` | `RegisterPage` | 新用户注册 |
| `/allhome` | `AllHome` | 登录后主页 |
| `/travelhome` | `TravelHomepage` | 旅行助手总览 |
| `/SceneHP` | `SceneHomePage` | 宠物友好景点 |
| `/ServiceHP` | `ServiceHomePage` | 宠物养护好店 |
| `/SetterHP` | `SetterHomePage` | 寄养服务 |
| `/TravelPost` | `TravelPostPage` | 发布旅行笔记 |
| `/petcircle` | `PetCircle` | 宠友圈动态 |
| `/publishpage` | `PublishPage` | 发布个人动态 |
| `/post-display` | `PostDisplay` | 图文详情 |
| `/gongluemain` | `Gongluemain` | 攻略宝典 |
| `/gongluefabu` | `Gongluefabu` | 发布攻略 |
| `/gongluexiangxi` | `Gongluexiangxi` | 攻略详情 |

## ⚡ 快速开始

```bash
# 进入项目目录
cd petplatPC

# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:8080）
npm run serve

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

> **环境要求**：Node.js >= 14，npm >= 6  
> **推荐编辑器**：VSCode + Vue - Official (Volar) 插件

## 📄 License

本项目仅供学习交流使用。