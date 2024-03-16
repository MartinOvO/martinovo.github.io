import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.Q3SrqsVC.js";const b=JSON.parse('{"title":"Python 学习文档","description":"","frontmatter":{},"headers":[],"relativePath":"apython/index.md","filePath":"apython/index.md","lastUpdated":1699693529000}'),l={name:"apython/index.md"},e=n(`<h1 id="python-学习文档" tabindex="-1">Python 学习文档 <a class="header-anchor" href="#python-学习文档" aria-label="Permalink to &quot;Python 学习文档&quot;">​</a></h1><h2 id="安装-python" tabindex="-1">安装 Python <a class="header-anchor" href="#安装-python" aria-label="Permalink to &quot;安装 Python&quot;">​</a></h2><p>安装 Python3 最新版:</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 MacOS 系统中安装的 python 可以有多个版本，也可以在不同目录下安装多个 python 环境。为了在终端中执行 python 命令运行的是期望的 python 环境，需要配置 python 环境变量。</p><h2 id="方法一、环境配置-软链接" tabindex="-1">方法一、环境配置(软链接) <a class="header-anchor" href="#方法一、环境配置-软链接" aria-label="Permalink to &quot;方法一、环境配置(软链接)&quot;">​</a></h2><p>推荐使用此方法配置环境变量，不需要修改任何文件，新创建的软链接如果因版本升级或其他原因失效可以直接删除。</p><h4 id="一、说明" tabindex="-1">一、说明 <a class="header-anchor" href="#一、说明" aria-label="Permalink to &quot;一、说明&quot;">​</a></h4><ol><li><p>MacOS 的两个<code>bin</code>目录</p><ul><li><p>相同点：</p><ul><li><code>/usr/bin</code>和<code>/usr/local/bin</code>都是用来存储终端命令二进制文件或终端命令的软链接。</li><li>两个 bin 目录都是已经包含在环境变量里的目录，程序放在里面或者链接到里面的命令都可以在终端里直接执行。</li></ul></li><li><p>不同点：</p><ul><li><code>/usr/bin</code>目录是不允许增删文件的，<code>/usr/local/bin</code>目录可以通过增删文件来实现在终端里直接运行，只需要有管理员权限。</li></ul></li></ul></li><li><p>使用 HomeBrew 安装的软件位于 <code>/usr/local/Cellar/</code> 目录下，记住此路径。</p></li></ol><h4 id="二、创建软链接" tabindex="-1">二、创建软链接 <a class="header-anchor" href="#二、创建软链接" aria-label="Permalink to &quot;二、创建软链接&quot;">​</a></h4><ol><li><p>配置 python 软链接</p><ul><li><p>清除失效/多余软链接数据</p><ul><li>跳转 <code>/usr/local/bin</code> 目录</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看软链接文件</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -la</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果存在任何类似以下的软链接选项，删除</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>python -&gt; ......</span></span>
<span class="line"><span>python3 -&gt; ......</span></span>
<span class="line"><span>python3.11 -&gt; ......</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>删除软链接</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/python3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/python3.11</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>添加软链接</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/Cellar/python@3.12/3.12.0/bin/python3.12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/Cellar/python@3.12/3.12.0/bin/python3.12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/python3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/Cellar/python@3.12/3.12.0/bin/python3.12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/python3.12</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p>配置 pip 软链接</p></li></ol><p>python3.12 中包含了 pip。</p><p>同样的方法清除失效/多余软链接数据并创建新的 pip 软链接。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/Cellar/python@3.12/3.12.0/bin/pip3.12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/pip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/Cellar/python@3.12/3.12.0/bin/pip3.12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/pip3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/Cellar/python@3.12/3.12.0/bin/pip3.12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/pip3.12</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="方法二、环境配置" tabindex="-1">方法二、环境配置 <a class="header-anchor" href="#方法二、环境配置" aria-label="Permalink to &quot;方法二、环境配置&quot;">​</a></h2><p>使用 HomeBrew 安装的软件位于 <code>/usr/local/Cellar/</code> 目录下，记住此路径。</p><p>配置 Python3 环境变量:</p><p>编辑 <code>.zshrc</code> 文件，该文件位于用户根目录。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加以下内容：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>alias python3=&#39;/usr/local/Cellar/python@3.12/3.12.0/bin/python3.12&#39;</span></span>
<span class="line"><span>alias python=python3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>刷新 <code>.zshrc</code> 文件：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>环境配置成功。</p>`,24),p=[e];function t(h,r,d,o,c,k){return i(),a("div",null,p)}const F=s(l,[["render",t]]);export{b as __pageData,F as default};
