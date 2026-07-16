# 每日数据通报 H5 · 交接说明

## 项目用途

这是一个面向电信内部每日经营数据通报的 React H5 页面。页面以浅蓝、天蓝色为主，提供 5 个可切换的通报栏目；每个栏目包含关键指标、数据表格和通报解读。

## 本地运行

```bash
npm install
npm run dev
```

开发服务固定运行在 `http://localhost:5188`。

构建生产版本：

```bash
npm run build
```

构建产物输出到 `dist/`。

## 目录说明

```text
.
├── src/
│   ├── main.jsx       # 页面组件、Tab 配置、表格数据与通报文案
│   └── styles.css     # 全部视觉样式及移动端适配
├── vite.config.js     # Vite 服务端口配置（5188）
├── package.json       # 脚本和依赖
└── 夏收行动通报.pptx  # 原始参考材料
```

## 数据维护

所有展示数据目前集中在 `src/main.jsx`：

- `companyRows`：夏收行动分公司进度
- `branchRows`：夏收行动分支局进度
- `pkRows`：当周增量积分 PK 赛
- `growthRows`：当月净增积分通报
- `businessRows`：当月重点业务通报
- `reports`：各 Tab 的标题、指标卡、表头和通报解读配置

替换日报数据时，按现有二维数组字段顺序更新对应数据即可；如需要增减列，请同时修改该 Tab 的 `headers` 和对应行数组。

## 当前状态与注意事项

- 已完成生产构建验证：`npm run build`。
- 原始 PPT 的表格来源为外部 Excel 链接，Excel 文件未随 PPT 提供；当前表格数据为示例数据，需替换为实际日报数据后使用。
- 页面已适配窄屏手机端：Tab 和表格支持横向滚动。
- `.gitignore` 已忽略 `node_modules/`、`dist/`、环境变量和本机配置文件。
