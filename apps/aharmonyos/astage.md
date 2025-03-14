# ArkTS 工程目录结构（Stage 模型）

- `AppScope > app.json5`：应用的全局配置信息，详见[app.json5 配置文件](./index.md)。
- `entry`：HarmonyOS 工程模块，编译构建生成一个 HAP 包。
  - `src > main > ets`：用于存放 ArkTS 源码。
  - `src > main > ets > entryability`：应用/服务的入口。
  - `src > main > ets > entrybackupability`：应用提供扩展的备份恢复能力。
  - `src > main > ets > pages`：应用/服务包含的页面。
  - `src > main > resources`：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件，详见资源分类与访问。
  - `src > main > module.json5`：模块配置文件。主要包含 HAP 包的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。具体的配置文件说明，详见 module.json5 配置文件。
  - `build-profile.json5`：当前的模块信息 、编译信息配置项，包括 buildOption、targets 配置等。
  - `hvigorfile.ts`：模块级编译构建任务脚本。
  - `obfuscation-rules.txt`：混淆规则文件。混淆开启后，在使用 Release 模式进行编译时，会对代码进行编译、混淆及压缩处理，保护代码资产。详见开启代码混淆。
  - `oh-package.json5`：用来描述包名、版本、入口文件（类型声明文件）和依赖项等信息。
- `oh_modules`：用于存放三方库依赖信息。
- `build-profile.json5`：工程级配置信息，包括签名 signingConfigs、产品配置 products 等。其中 products 中可配置当前运行环境，默认为 HarmonyOS。
- `hvigorfile.ts`：工程级编译构建任务脚本。
- `oh-package.json5`：主要用来描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。

```
MyApplication
├─ .hvigor
├─ .idea
├─ AppScope
│  └─ app.json5 // 应用的全局配置信息
├─ entry // HarmonyOS 工程模块，编译构建生成一个 HAP 包
│  ├─ src
│  │  └─ main
│  │     ├─ ets // 用于存放 ArkTS 源码
│  │     │  ├─ entryability // 应用/服务的入口
│  │     │  ├─ entrybackupability // 应用提供扩展的备份恢复能力
│  │     │  └─ pages // 应用/服务包含的页面
│  │     ├─ resources // 用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等
│  │     └─ module.json5 // 模块配置文件
│  ├─ build-profile.json5 // 当前的模块信息 、编译信息配置项，包括 buildOption、targets 配置等
│  ├─ hvigorfile.ts // 模块级编译构建任务脚本
│  ├─ obfuscation-rules.txt // 混淆规则文件
│  └─ oh-package.json5 // 用来描述包名、版本、入口文件（类型声明文件）和依赖项等信息
├─ oh_modules // 用于存放三方库依赖信息
├─ build-profile.json5 // 工程级配置信息，包括签名 signingConfigs、产品配置 products 等
├─ hvigorfile.ts // 工程级编译构建任务脚本
└─ oh-package.json5 // 主要用来描述全局配置

```
