# AI赚钱指南网站

## 📋 项目简介

这是一个展示AI赚钱方法的网站，包含：

- 首页：5种AI赚钱方式介绍
- 文章详情页：实战经验分享
- 响应式设计：支持手机和电脑

## 🚀 快速开始

### 本地预览

1. 克隆或下载项目
2. 用浏览器打开 `index.html` 即可预览

### 部署到GitHub Pages

#### 方法一：通过GitHub网页操作

1. 在GitHub创建新仓库（仓库名：`ai-money-site`）
2. 上传所有文件
3. 进入仓库设置 → Pages
4. 选择分支：`main` 或 `master`，文件夹：`/(root)`
5. 保存，等待部署完成（约1-2分钟）
6. 访问：`https://你的用户名.github.io/ai-money-site/`

#### 方法二：通过Git命令

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "初始提交"

# 添加远程仓库（替换你的用户名）
git remote add origin https://github.com/你的用户名/ai-money-site.git

# 推送到GitHub
git push -u origin main
```

## 📁 项目结构

```
ai-money-site/
├── index.html              # 首页
├── README.md               # 项目说明
└── articles/               # 文章目录
    └── 普通人如何用AI赚钱.html
```

## 🎨 技术栈

- HTML5
- CSS3（响应式设计）
- JavaScript（可选）
- 部署：GitHub Pages（免费）

## 📝 添加新文章

1. 在 `articles/` 文件夹创建新的HTML文件
2. 复制现有文章的格式
3. 在首页 `index.html` 的文章卡片中添加链接

## 🔧 自定义

### 修改配色

在HTML文件中搜索 `#667eea`（主色调）和 `#764ba2`（渐变色），替换为你喜欢的颜色。

### 修改内容

直接编辑HTML文件中的文本即可。

## 🌐 免费域名

### GitHub Pages自带

- 格式：`https://你的用户名.github.io/ai-money-site/`
- 优点：完全免费，HTTPS自动配置

### 自定义域名（可选）

1. 购买域名（推荐：阿里云、腾讯云）
2. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
3. 在域名DNS设置中添加CNAME记录：`你的用户名.github.io`

## 📊 数据统计（可选）

可以使用以下工具统计访问数据：

- 百度统计
- Google Analytics
- 腾讯分析

## 🚀 未来计划

- [ ] 添加更多文章
- [ ] 增加评论区（使用giscus）
- [ ] 添加搜索功能
- [ ] 集成AI问答机器人
- [ ] 添加订阅功能

## 📄 许可证

MIT License - 可自由使用、修改、分发

---

**Created by 小七** 🐶
**Date:** 2026年3月5日
