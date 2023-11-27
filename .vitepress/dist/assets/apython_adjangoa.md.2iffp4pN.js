import{_ as a,c as s,o as e,R as t}from"./chunks/framework.UW5XB0bR.js";const v=JSON.parse('{"title":"安装 Django 库","description":"","frontmatter":{},"headers":[],"relativePath":"apython/adjangoa.md","filePath":"apython/adjangoa.md"}'),p={name:"apython/adjangoa.md"},i=t('<h1 id="安装-django-库" tabindex="-1">安装 Django 库 <a class="header-anchor" href="#安装-django-库" aria-label="Permalink to &quot;安装 Django 库&quot;">​</a></h1><h2 id="安装-pipx-开发环境" tabindex="-1">安装 pipx 开发环境 <a class="header-anchor" href="#安装-pipx-开发环境" aria-label="Permalink to &quot;安装 pipx 开发环境&quot;">​</a></h2><p>pipx 开发环境作为全局的开发环境代替 python + pip 。</p><ol><li>安装 pipx 工具:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install pipx</span></span></code></pre></div><ol start="2"><li>检查 pipx 安装:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pipx --version</span></span></code></pre></div><h2 id="安装配置-poetry-虚拟环境及模块管理工具" tabindex="-1">安装配置 poetry 虚拟环境及模块管理工具 <a class="header-anchor" href="#安装配置-poetry-虚拟环境及模块管理工具" aria-label="Permalink to &quot;安装配置 poetry 虚拟环境及模块管理工具&quot;">​</a></h2><ol><li>安装 poetry 虚拟环境管理与模块安装管理工具:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pipx install poetry</span></span></code></pre></div><ol start="2"><li>检查 poetry 安装:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry --version</span></span></code></pre></div><ol start="3"><li>更改 poetry 配置，将项目模块存储在项目根文件夹的 <code>.venv</code> 中:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry config virtualenvs.in-project true</span></span></code></pre></div><h2 id="创建-django-项目" tabindex="-1">创建 Django 项目 <a class="header-anchor" href="#创建-django-项目" aria-label="Permalink to &quot;创建 Django 项目&quot;">​</a></h2><ol><li>创建项目根文件夹:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir PySiteServer</span></span></code></pre></div><ol start="2"><li>进入项目目录:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd PySiteServer</span></span></code></pre></div><ol start="3"><li>使用 poetry 初始化项目:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry init</span></span></code></pre></div><ol start="4"><li>使用此虚拟环境:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry env use python</span></span></code></pre></div><ol start="5"><li>使用 poetry 安装 django 模块库:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry add django</span></span></code></pre></div><details class="details custom-block"><summary>更多</summary><p>poetry 其他模块管理命令:</p><ul><li>卸载已安装模块</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry remove django</span></span></code></pre></div><ul><li><p>安装开发环境使用的模块</p><p>在开发环境中需要用到的一些模块部署时并不需要就可以安装在开发环境中</p><p>例如:black</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry add black --group dev</span></span></code></pre></div><ul><li>卸载开发模块</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry remove black -D</span></span></code></pre></div><ul><li>更新全部模块</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry update</span></span></code></pre></div><ul><li>更新指定模块</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry update django</span></span></code></pre></div></details><ol start="6"><li>查看已安装模块:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry show</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry show --tree</span></span></code></pre></div><ol start="7"><li>导出虚拟环境模块配置文件</li></ol><p>在开发环境中不需要此命令，此处导出的 <code>requirements.txt</code> 文件是为了在部署时使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry export -f requirements.txt -o requirements.txt --without-hashes</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>命令行进入虚拟环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry shell</span></span></code></pre></div><ul><li>命令行退出虚拟环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>exit</span></span></code></pre></div></div>',33),l=[i];function o(n,c,d,h,r,u){return e(),s("div",null,l)}const b=a(p,[["render",o]]);export{v as __pageData,b as default};
