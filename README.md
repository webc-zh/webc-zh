# 人工智能驱动的界面开发流程笔记

## 纯 web 组件，支持无样式

纯 web 组件，可适配全部前端框架。

组件样式和组件逻辑完全拆分。

可只引用组件的逻辑，然后自己写样式。

同时支持无打包直接引用的使用方式，及配合 vite 等构建器打包的构建。

点击组件右上角的『在线调试』可以调试无打包的组件。

## 使用

### 1. CDN 直接引用 (无需打包)

对于无需打包、直接在浏览器中引用的使用场景，你可以通过 CDN 直接引用 JS 与 CSS 文件。

> [!TIP]
> 如果你想**自定义 CSS 变量**（例如替换默认的 SVG 图标等背景资源）来重写组件默认的样式，可以引用在组件名前面加上 `_` 的纯组件样式文件（这个不包含 `var.css` 声明）：
>
> ```html
> <link href="//cdn.jsdelivr.net/npm/webc.site@0.1.23/_Scroll.css" rel="stylesheet" />
> ```

以 `Scroll` 组件（虚拟滚动条）为例（默认样式）：

#### 使用 jsdelivr:

```html
<link href="//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.css" rel="stylesheet" />
<script type="module">
  import "//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.js";
</script>
```

#### 使用 淘宝镜像 npmmirror（对中国大陆线路友好）:

```html
<link href="//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.css" rel="stylesheet" />
<script type="module">
  import "//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.js";
</script>
```

### 2. 按需添加至本地项目 (用于构建打包)

项目支持类似于 [shadcn](https://ui.shadcn.com) 的按需添加组件机制。如果你使用构建工具，可在你的项目中直接运行以下命令将组件下载并添加至本地：

```bash
bunx webc.add <组件名>
```

例如添加 `Scroll` 组件（虚拟滚动条）：

```bash
bunx webc.add Scroll
```

**命令行实现机制：**

- 运行该命令时，它会向 npm 注册表查询并解析 `webc.com` 对应的包源。
- 自动下载包源文件并提取对应的组件源码，将其按需编译并输出到本地项目中对应的 `lib/组件名` 目录下，且会把组件相关的 Stylus 自动编译成 CSS 放入公共样式中。

#### 配合 `vite-plugin-svg-var` 优化 SVG 资源

为了优化打包体积并大幅减少网络请求，建议在 Vite 构建器中配合使用 [vite-plugin-svg-var](https://www.npmjs.com/package/vite-plugin-svg-var) 插件。

#### 插件的用途与核心特性：

- **智能去重**：自动对 `public/svg` 下的所有 SVG 内容进行 MD5 哈希计算。即使不同路径或文件名对应同一个 SVG 内容，也只会在 CSS 中生成单一变量，所有引用都将映射到该变量，避免冗余打包。
- **UTF-8 安全编码**：将 SVG 直接转换为更轻量、体积更小的 UTF-8 编码 `data:image/svg+xml` URL 写入 CSS 变量，比传统的 Base64 编码方式体积更小、压缩率更高。
- **自动注入与替换**：在构建或运行开发服务器时，它会自动在项目入口 JS（如匹配 `/page/entry/**/*.js`）中注入虚拟的 CSS 变量样式，并将 CSS/Stylus/Svelte 中原本引用的 `url("/svg/xxx.svg")` 自动替换为 CSS 变量形式（如 `var(--xxxSvg)`）。这意味着所有 SVG 将被直接内联合并在 CSS 中，页面加载时无需发起任何多余的 SVG 图片 HTTP 请求。
- **开发阶段热更新 (HMR)**：自动监听 `public/svg` 文件夹，当新增、删除或修改 SVG 文件时，插件会自动重新扫描并生成 CSS 变量，且触发模块热重载，方便高效调试。

## 初衷

人工智能开发前端，比较大的问题是调试。

虽然[谷歌反重力](https://antigravity.google) 之类的开发工具，有打开浏览器调试能力，但因为交互流程比较深、需要登录才能访问、需要后台准备数据等等，人工智能全自动浏览器调试流程经常被阻塞，无法继续。

为了加速开发，我建议的方案是:

不在组件中直接调用后端接口读取数据，而是用异步回调的函数的方式，暴露给上层。

这样，就可以在 `Demo.svelte` 用假数据来展示组件的不同状态.

不再对后端数据状态有依赖。不需要登录，不需要在调试的之前，去后端准备数据。

也方便调整样式之后，查看在不同状态下，组件是否呈现有问题。

具体方案，可以参考我的演示前端库 [webc-zh](https://github.com/webc-zh/webc-zh.github.io)。

组件库在线浏览 [GitHub Page](https://webc-zh.github.io)

这里我把前端组件，都拆分为独立的组件文件夹，每个文件夹包含了所有需要的资源（比如 svg 等）。

如此做的好处是，可以类似[shadcn](https://ui.shadcn.com) 一样，实现按需添加。

比如， `./comDev.sh com/scroll`，就可以对滚动条进行单独的开发，调试。

调试默认会打开文件下的 `Demo.svelte` 作为调试入口。

完整的开发提示词，可以参考 [.agents/skills/com/SKILL.md](.agents/skills/com/SKILL.md)

谷歌反重力中 `/com ` 即可使用。

![](https://i-01.eu.org/1779351273.avif)
