import{_ as a,c as e,o as s,R as i}from"./chunks/framework.UW5XB0bR.js";const k=JSON.parse('{"title":"Django 项目中安装数据库驱动模块","description":"","frontmatter":{},"headers":[],"relativePath":"apython/adjangoc.md","filePath":"apython/adjangoc.md"}'),t={name:"apython/adjangoc.md"},o=i('<h1 id="django-项目中安装数据库驱动模块" tabindex="-1">Django 项目中安装数据库驱动模块 <a class="header-anchor" href="#django-项目中安装数据库驱动模块" aria-label="Permalink to &quot;Django 项目中安装数据库驱动模块&quot;">​</a></h1><h2 id="数据库配置" tabindex="-1">数据库配置 <a class="header-anchor" href="#数据库配置" aria-label="Permalink to &quot;数据库配置&quot;">​</a></h2><p>Django 项目的默认数据库配置使用 SQLite 作为默认数据库。如果你不熟悉数据库，或者只是想尝试下 Django，这是最简单的选择。Python 内置 SQLite，所以无需安装额外的模块使用它。创建一个真正的项目时可能更倾向使用更具扩展性的数据库，例如 PostgreSQL、MySQL，避免中途切换数据库这个令人头疼的问题。</p><p>接下来的文档中需要用到 Django 的数据库 API 功能，首先需要确保有一个数据库服务正在运行中。Django 支持许多不同的数据库服务器，官方支持 PostgreSQL、MySQL、MariaDB、Oracle、SQLite。</p><p>除了运行中的数据库，还需要安装 Python 数据库驱动模块。</p><ul><li><p>如果数据库使用的是 MySQL 或 MariaDB 需要安装 <code>mysqlclient</code> 模块</p></li><li><p>如果数据库使用的是 PostgreSQL 需要安装 <code>psycopg</code> 或 <code>psycopg2</code> 模块</p></li></ul><h2 id="安装-mysqlclient-模块" tabindex="-1">安装 <code>mysqlclient</code> 模块 <a class="header-anchor" href="#安装-mysqlclient-模块" aria-label="Permalink to &quot;安装 `mysqlclient` 模块&quot;">​</a></h2><p>如果数据库是 MySQL 或 MariaDB 推荐安装 <code>mysqlclient</code>。</p><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><ol><li>在本地环境中安装 <code>mysql</code>,<code>mysql-client</code>,<code>pkg-config</code>并导出</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql-client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg-config</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PKG_CONFIG_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/user/local/Cellar/mysql-client/8.1.0/lib/pkgconfig&quot;</span></span></code></pre></div><ol start="2"><li>虚拟环境安装 <code>mysqlclient</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry add mysqlclient</span></span></code></pre></div><p><a href="https://pypi.org/project/mysqlclient/" target="_blank" rel="noreferrer">参考链接</a></p><h2 id="安装-psycopg-模块" tabindex="-1">安装 <code>psycopg</code> 模块 <a class="header-anchor" href="#安装-psycopg-模块" aria-label="Permalink to &quot;安装 `psycopg` 模块&quot;">​</a></h2><p>如果数据库是 PostgreSQL 需要安装 <code>psycopg</code> 模块。</p><p><a href="https://www.psycopg.org/psycopg3/docs/basic/install.html" target="_blank" rel="noreferrer">参考链接</a></p>',18),l=[o];function n(c,p,h,r,d,g){return s(),e("div",null,l)}const m=a(t,[["render",n]]);export{k as __pageData,m as default};
