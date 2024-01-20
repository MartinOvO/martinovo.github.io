import{_ as e,c as a,o as s,V as t}from"./chunks/framework.7LvNvuG_.js";const v=JSON.parse('{"title":"创建 Django 项目","description":"","frontmatter":{},"headers":[],"relativePath":"apython/adjangob.md","filePath":"apython/adjangob.md","lastUpdated":1695974400000}'),o={name:"apython/adjangob.md"},l=t('<h1 id="创建-django-项目" tabindex="-1">创建 Django 项目 <a class="header-anchor" href="#创建-django-项目" aria-label="Permalink to &quot;创建 Django 项目&quot;">​</a></h1><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用终端进入虚拟环境可以在终端中快速的创建 Django 项目。</p><ul><li>使用终端进入虚拟环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry shell</span></span></code></pre></div><ul><li>使用终端退出虚拟环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>exit</span></span></code></pre></div></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><p>通过终端的命令提示符判断是否处于虚拟环境中。</p><p>正常的终端命令提示符类似这样 <code>user@localhost &lt;dir&gt;</code> ，其中 <code>user</code> 是此时使用终端的用户，<code>localhost</code> 是设备名, <code>&lt;dir&gt;</code> 是此时所处的路径类似 <code>/</code> 。</p><p>虚拟环境的终端命令提示符则类似这样 <code>(pysiteserver-py3.11) user@localhost &lt;dir&gt;</code> ，多出来的 <code>(pysiteserver-py3.11)</code> 就是此时所处在的虚拟环境。</p><ol><li>进入虚拟环境并确认此时终端处于项目的根目录:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>poetry shell</span></span></code></pre></div><p>查看命令提示符是否类似 <code>(pysiteserver-py3.11) user@localhost PySiteServer</code> 此时命令提示符所在的路径就是 <code>PySiteServer</code> 项目根目录。</p><ol start="2"><li>创建项目:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>django-admin startproject siteserver</span></span></code></pre></div><ol start="3"><li>在 PyCharm 中打开项目。</li></ol>',13),i=[l];function c(p,d,n,r,h,u){return s(),a("div",null,i)}const b=e(o,[["render",c]]);export{v as __pageData,b as default};
