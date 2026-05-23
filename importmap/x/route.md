# 路由管理与跳转

- `nowUrl()`
  - 返回值：当前 URL 路径（不含首部斜杠）。

- `route(hook)`
  - `hook`: 路由变化时执行的回调函数。格式：
    - 参数：
      - `url`: 字符串，新 URL 路径。
      - `preUrl`: 字符串（可选），旧 URL 路径。
    - 返回值：无。
  - 返回值：取消订阅的函数，格式为 `() => void`。

- `setPre(url)`
  - `url`: 字符串，新的前一次 URL 路径。

- `preUrl()`
  - 返回值：前一次的 URL 路径。

- `refresh(url)`
  - `url`: 字符串（可选），要触发回调的 URL 路径，默认是当前 URL。

- `removeSlash(url)`
  - `url`: 字符串。
  - 返回值：移除首部斜杠后的字符串。

- `split(str, s)`
  - `str`: 待拆分字符串。
  - `s`: 分隔符。
  - 返回值：包含两个元素的数组 `[前部, 后部]`。

- `setUrl(url)`
  - `url`: 目标 URL 路径。
  - 返回值：若路径改变返回 `1`，若仅 hash 改变不返回值。

- `goto(url)`
  - `url`: 目标 URL 路径。
