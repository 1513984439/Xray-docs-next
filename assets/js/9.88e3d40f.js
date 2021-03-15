(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{369:function(a,s,t){"use strict";t.r(s);var r=t(26),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前序工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前序工作"}},[a._v("#")]),a._v(" 前序工作")]),a._v(" "),t("p",[a._v("Xray 使用 "),t("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Golang"),t("OutboundLink")],1),a._v(" 作为编程语言，你需要先安装最新版本 Golang 才能够编译。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("安装 Golang: "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("golang.org/doc/install"),t("OutboundLink")],1)])]),a._v(" "),t("blockquote",[t("p",[a._v("如果你不幸使用 Windows, 请 "),t("strong",[a._v("务必")]),a._v(" 使用 Powershell")])]),a._v(" "),t("h2",{attrs:{id:"拉取-xray-源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取-xray-源代码"}},[a._v("#")]),a._v(" 拉取 Xray 源代码")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/XTLS/Xray-core.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Xray-core "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" go mod download\n")])])]),t("blockquote",[t("p",[a._v("如果你闲的没事干，可以试试 GitHub 官方工具: "),t("code",[a._v("gh repo clone XTLS/Xray-core")])])]),a._v(" "),t("p",[a._v("注意：在无法正常访问 Google 的网络环境，依赖无法被正常拉取，需要先设置 "),t("code",[a._v("GOPROXY")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://goproxy.io,direct\n")])])]),t("h2",{attrs:{id:"构建二进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建二进制"}},[a._v("#")]),a._v(" 构建二进制")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("本小节的命令需要在 Xray 根目录内运行。")])]),a._v(" "),t("h3",{attrs:{id:"windows-powershell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-powershell"}},[a._v("#")]),a._v(" Windows(Powershell):")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":CGO_ENABLED=0\ngo build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("o xray"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("trimpath "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("main\n")])])]),t("h3",{attrs:{id:"macos-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-linux"}},[a._v("#")]),a._v(" macOS, Linux:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o xray -trimpath -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" ./main\n")])])]),t("p",[a._v("运行以上命令会在目录下生成 xray 可执行文件。")]),a._v(" "),t("h2",{attrs:{id:"交叉编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交叉编译"}},[a._v("#")]),a._v(" 交叉编译：")]),a._v(" "),t("p",[a._v("这里以在 Windows(Powershell) 环境中，编译到 Linux 服务器为例：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":CGO_ENABLED=0\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":GOOS="),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"linux"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":GOARCH="),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"amd64"')]),a._v("\n\ngo build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("o xray "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("trimpath "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("main\n")])])]),t("p",[a._v("上传到服务器后，记得在服务器终端内执行 "),t("code",[a._v("chmod +x xray")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("执行 "),t("code",[a._v("go tool dist list")]),a._v(" 查看所有支持的系统与架构。")])]),a._v(" "),t("h2",{attrs:{id:"可复现构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可复现构建"}},[a._v("#")]),a._v(" 可复现构建：")]),a._v(" "),t("p",[a._v("按照上述步骤，能够编译出与 Release 中完全相同的二进制文件。")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("请先确认您使用的 Golang 版本与编译 Release 的一致。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);