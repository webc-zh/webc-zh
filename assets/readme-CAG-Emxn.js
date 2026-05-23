var n = [
	[
		1,
		"WebC.site",
		"面向 AI 辅助开发设计的 Web Components 组件库与开发规范。"
	],
	[
		2,
		"特性",
		"- **跨框架**：基于原生 Web Components 构建，兼容 React、Vue、Svelte、Solid 等前端框架。\n- **无样式**：逻辑与样式解耦，支持仅引入逻辑以自定义样式。\n- **免构建与构建双模式**：\n  - **免构建（CDN 模式）**：在浏览器中直接通过 CDN 引用 JS 与 CSS 文件。\n  - **构建模式（本地命令行）**：提供本地命令行工具，按需将组件源码集成至项目。\n- **在线调试**：提供组件预览与“在线调试”入口，支持直接调试免构建组件。"
	],
	[
		2,
		"快速上手",
		""
	],
	[
		3,
		"1. CDN 引入（免构建模式）",
		"在免构建场景下，可通过 CDN 直接在浏览器中引用 JS 与 CSS 文件。\n\n适用于无需开发环境配置、直接引用的轻量化场景。\n\n以 `Scroll`（虚拟滚动条）组件为例："
	],
	[
		4,
		"使用 jsdelivr",
		"```html\n<link href=\"//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.css\" rel=\"stylesheet\" />\n<script type=\"module\">\n  import \"//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.js\";\n<\/script>\n```"
	],
	[
		4,
		"使用 npmmirror（中国大陆镜像源）",
		"```html\n<link href=\"//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.css\" rel=\"stylesheet\" />\n<script type=\"module\">\n  import \"//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.js\";\n<\/script>\n```\n\n> [!TIP]\n> **自定义 CSS 变量（重写样式与替换背景资源）**\n> 如需重写默认样式，可引用前缀为 `_` 的样式文件（该文件不包含 `var.css` 声明）：\n\n```html\n<link href=\"//cdn.jsdelivr.net/npm/webc.site@0.1.23/_Scroll.css\" rel=\"stylesheet\" />\n```"
	],
	[
		3,
		"2. 构建模式",
		"支持摇树优化与按需引入以减少构建体积，并支持静态资源优化（如 SVG 资源内联与去重）。\n\n源码会直接下载至本地，便于直接修改源码二次开发。\n\n例如添加 `Scroll`（虚拟滚动条）组件：\n\n```bash\nbunx webc.add Scroll\n```"
	],
	[
		4,
		"运行后生成文件如下",
		"添加组件后，本地项目将生成以下目录结构与文件（使用只需导入 `lib/<组件名>.js` 即可，会自动引入组件下的 JS 与 CSS）：\n\n```text\n├── lib/\n│   ├── <组件名>.js                # 组件入口文件\n│   ├── <组件名>/                  # 组件源码编译目录\n│   │   ├── index.js              # 组件 JavaScript 逻辑文件\n│   │   └── index.css             # 组件 CSS 样式文件（Stylus 编译产物）\n│   ├── css/                      # 公共样式目录\n│   │   └── <样式名>.css           # 公共 Stylus 样式编译出的 CSS（如 reset.css）\n│   └── x/                        # 依赖的公共基础模块目录（按需下载）\n│       └── <模块名>.js\n└── public/\n    └── com/\n        └── <组件名>/              # 组件静态资源目录\n            └── <资源名>.svg       # 组件引用的 SVG 静态资源\n```"
	],
	[
		3,
		"3. SVG 资源优化",
		"在 Vite 构建配置中，推荐配合使用 [vite-plugin-svg-var](https://www.npmjs.com/package/vite-plugin-svg-var) 插件优化 SVG 资源加载。"
	],
	[
		4,
		"核心功能",
		"构建或开发阶段，插件在项目入口 JS（匹配 `/page/entry/**/*.js`）中注入 CSS 变量样式，并将 CSS/Stylus/Svelte 中引用的本地 SVG 路径（如 `url(\"/com/Scroll/cursor/grab.svg\")`）自动替换为 `var(--grabSvg)` 形式，以减少网络请求。"
	],
	[
		4,
		"特性",
		"- **UTF-8 编码**：将 SVG 转为 UTF-8 编码的 `data:image/svg+xml`（而不是 base64）并写入 CSS 变量，降低编码体积，提升压缩率。\n- **内容去重**：内容相同的 SVG 文件仅生成单个 CSS 变量，避免资源冗余。\n- **热更新**：监听 `public` 目录变动，在新增、修改或删除 SVG 文件时，重新计算 CSS 变量并触发热重载。"
	],
	[
		3,
		"4. 中文字体分片",
		"为了优化中文字体在 Web 端的加载体验，组件库引入了中文字体分片包 **[18s](https://www.npmjs.com/package/18s)**。\n\n- **按需分片加载**：通过中文字体分片技术，将体积庞大的中文字体（如思源黑体）和代码/等宽字体（如 JetBrains Mono）切分为 128KB 左右的 WOFF2 小分片，浏览器根据页面实际显示的字符按需下载分片，显著缩短中文字体加载的白屏与闪烁时间。\n- **内容寻址与长缓存**：字体分片基于其内容的 MD5 Base64url 哈希值命名，防止命名冲突，并提升 CDN 缓存命中率。\n- **项目结构**：\n  - 构建工作区位于 **[font/gen](https://github.com/webc-site/font/tree/main/gen)** (包含原始 TTF 字体、分片及样式重写脚本等)。\n  - 编译后发布的分发资源及文档位于 **[font](https://github.com/webc-site/font)**。\n- **全局样式集成**：\n  在基础样式重置文件 **[styl/reset.styl](https://github.com/webc-site/webc-zh/blob/main/styl/reset.styl)** 中通过 `@import` 引入了 `18s` 包的合并样式，并为全局和代码元素配置了字体别名：\n\n```stylus\n  // 引入 18s 合并后的字体样式映射表\n  @import url('//cdn.jsdelivr.net/npm/18s@0.2.9/_.css')\n\n  // 全局正文字体配置（思源黑体，别名为 t）\n  html, :host\n    font-family t, ui-sans-serif, ...\n\n  // 代码及等宽字体配置（JetBrains Mono，别名为 c）\n  code, kbd, samp, pre\n    font-family c, ui-monospace, ...\n```"
	],
	[
		2,
		"AI 驱动开发规范",
		""
	],
	[
		3,
		"1. 状态与逻辑解耦",
		"AI 通过自动化浏览器（如 Antigravity）进行开发与调试时，常因交互链路长、鉴权限制以及对后端数据的依赖而导致调试中断。\n\n为提效，采用以下设计规范：\n\n- **不调用后端**：组件内部不直接调用后端接口，数据交互均通过异步回调函数向外暴露。\n- **数据模拟**：在 `Demo.svelte` 中传入模拟数据，以展现组件在多种状态下的交互表现，免除鉴权及后端环境依赖。"
	],
	[
		3,
		"2. 组件架构与本地调试",
		"组件采用独立目录结构，每个组件文件夹内包含其全部的逻辑、样式及静态资源（如 SVG）。\n\n- **按需添加**：支持通过命令行独立拉取组件。\n- **隔离调试**：执行以下命令，针对指定组件启动开发服务，调试入口为该组件目录下的 `Demo.svelte`：\n  ```bash\n  ./comDev.sh com/<组件名>\n  ```"
	],
	[
		3,
		"3. 智能体提示词配置",
		"开发提示词配置参见 [.agents/skills/com/SKILL.md](.agents/skills/com/SKILL.md)。在谷歌反重力（Antigravity）环境下，使用 `/com` 命令即可调用。\n\n![](https://i-01.eu.org/1779351273.avif)"
	]
];
export { n as default };
