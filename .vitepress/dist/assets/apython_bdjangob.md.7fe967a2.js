import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1fc80e1c.js";const p="/assets/djangoa.7c3c039d.png",o="/assets/djangob.ae2d0f65.png",u=JSON.parse('{"title":"第一个 Django 应用程序 - 2","description":"","frontmatter":{},"headers":[],"relativePath":"apython/bdjangob.md","filePath":"apython/bdjangob.md"}'),e={name:"apython/bdjangob.md"},c=l(`<h1 id="第一个-django-应用程序-2" tabindex="-1">第一个 Django 应用程序 - 2 <a class="header-anchor" href="#第一个-django-应用程序-2" aria-label="Permalink to &quot;第一个 Django 应用程序 - 2&quot;">​</a></h1><h2 id="安装数据库模块" tabindex="-1">安装数据库模块 <a class="header-anchor" href="#安装数据库模块" aria-label="Permalink to &quot;安装数据库模块&quot;">​</a></h2><p>此配置文档是通过 <code>mysql-client</code> 连接到 Docker 启动的 MySQL 详情步骤。</p><p>首先需要说明整个连接的路径:</p><p>开发服务器(虚拟)--&gt;mysql-client 模块(虚拟)--&gt;mysqlclient(本地)--&gt;MySQL 数据库(Docker)</p><ol><li>在本地环境中安装 <code>mysql</code>,<code>mysql-client</code>,<code>pkg-config</code>并导出</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql-client</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg-config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql-client</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg-config</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> PKG_CONFIG_PATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/user/local/Cellar/mysql-client/8.1.0/lib/pkgconfig&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> PKG_CONFIG_PATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/user/local/Cellar/mysql-client/8.1.0/lib/pkgconfig&quot;</span></span></code></pre></div><ol start="2"><li>虚拟环境安装 <code>mysqlclient</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">poetry add mysqlclient</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">poetry add mysqlclient</span></span></code></pre></div><h2 id="django-配置-mysql-相关" tabindex="-1">Django 配置 MySQL 相关 <a class="header-anchor" href="#django-配置-mysql-相关" aria-label="Permalink to &quot;Django 配置 MySQL 相关&quot;">​</a></h2><ol><li>配置数据库 <code>./siteserver/settings.py</code></li></ol><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DATABASES</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;ENGINE&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;django.db.backends.mysql&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;NAME&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;dbsite&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;USER&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;PASSWORD&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;HOST&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;PORT&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3306&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#005CC5;">DATABASES</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;ENGINE&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;django.db.backends.mysql&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;NAME&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;dbsite&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;USER&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;PASSWORD&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;password&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;HOST&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;PORT&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3306&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ol start="2"><li>配置时区 <code>./siteserver/settings.py</code></li></ol><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">LANGUAGE_CODE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;zh-hans&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#79B8FF;">TIME_ZONE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Asia/Shanghai&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">USE_I18N</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">USE_TZ</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#005CC5;">LANGUAGE_CODE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;zh-hans&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#005CC5;">TIME_ZONE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Asia/Shanghai&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">USE_I18N</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">USE_TZ</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span></code></pre></div><ol start="3"><li>生成默认数据库表</li></ol><p>Django 项目默认包含了一些项目需要的数据库表</p><ul><li><code>django.contrib.admin</code> 后台管理</li><li><code>django.contrib.auth</code> 身份验证</li><li><code>django.contrib.contenttypes</code> 内容类型框架</li><li><code>django.contrib.sessions</code> 会话框架</li><li><code>django.contrib.messages</code> 消息传递框架</li><li><code>django.contrib.staticfiles</code> 静态文件管理框架</li></ul><p>开发环境已经连接了 MySQL 数据库，但是现在数据库中还没有这些表。在 PyCharm 内置终端中输入以下命令生成这些表:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manage.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">migrate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manage.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">migrate</span></span></code></pre></div><ol start="4"><li>创建模型 <code>./polls/models.py</code></li></ol><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.db </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Create your models here.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Question</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    pub_date </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.DateTimeField(</span><span style="color:#9ECBFF;">&quot;date published&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Choice</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.ForeignKey(Question, </span><span style="color:#FFAB70;">on_delete</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">models.</span><span style="color:#79B8FF;">CASCADE</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    choice_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    votes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.IntegerField(</span><span style="color:#FFAB70;">default</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.db </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Create your models here.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Question</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    question_text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    pub_date </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.DateTimeField(</span><span style="color:#032F62;">&quot;date published&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Choice</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.ForeignKey(Question, </span><span style="color:#E36209;">on_delete</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">models.</span><span style="color:#005CC5;">CASCADE</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    choice_text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    votes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.IntegerField(</span><span style="color:#E36209;">default</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span></code></pre></div><ol start="5"><li>激活模型 上一步在应用 <code>polls</code> 中创建了两个模型 <code>Question</code> , <code>Choice</code> 需要激活</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manage.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">makemigrations</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">polls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manage.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">makemigrations</span><span style="color:#24292E;"> </span><span style="color:#032F62;">polls</span></span></code></pre></div><p>输入以上指令将在 <code>./polls/migrations/</code> 中生成 <code>0001_initial.py</code> 文件。成功激活。但是数据库此时还没有创建这张表，运行以下命令创建表</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manage.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">migrate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manage.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">migrate</span></span></code></pre></div><p>5.将应用 <code>polls</code> 的模型注册到项目中 <code>./siteserver/settings.py</code></p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">INSTALLED_APPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.auth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.sessions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.messages&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;polls.apps.PollsConfig&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 子应用模型注册 </span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#005CC5;">INSTALLED_APPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.auth&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.sessions&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.messages&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;polls.apps.PollsConfig&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 子应用模型注册 </span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="django-后台管理系统" tabindex="-1">Django 后台管理系统 <a class="header-anchor" href="#django-后台管理系统" aria-label="Permalink to &quot;Django 后台管理系统&quot;">​</a></h2><ol><li>创建管理员</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manage.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">createsuperuser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manage.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">createsuperuser</span></span></code></pre></div><ol start="2"><li>输入用户名</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Username:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Username:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span></span></code></pre></div><ol start="3"><li>输入电子邮件</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">address:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin@example.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">address:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin@example.com</span></span></code></pre></div><ol start="4"><li>输入密码</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Password:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">**********</span></span>
<span class="line"><span style="color:#B392F0;">Password</span><span style="color:#E1E4E8;"> (again): </span><span style="color:#F97583;">*********</span></span>
<span class="line"><span style="color:#B392F0;">Superuser</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">created</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">successfully.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Password:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">**********</span></span>
<span class="line"><span style="color:#6F42C1;">Password</span><span style="color:#24292E;"> (again): </span><span style="color:#D73A49;">*********</span></span>
<span class="line"><span style="color:#6F42C1;">Superuser</span><span style="color:#24292E;"> </span><span style="color:#032F62;">created</span><span style="color:#24292E;"> </span><span style="color:#032F62;">successfully.</span></span></code></pre></div><ol start="5"><li>启动服务，访问 <code>http://127.0.0.1:8000/admin/</code> 输入上一步创建的账号密码将成功访问后台。</li></ol><p><img src="`+p+`" alt="后台管理"></p><h2 id="将应用-polls-添加到管理系统" tabindex="-1">将应用(polls)添加到管理系统 <a class="header-anchor" href="#将应用-polls-添加到管理系统" aria-label="Permalink to &quot;将应用(polls)添加到管理系统&quot;">​</a></h2><p>虽然已经有了应用(polls)的模型，但是在管理后台依然看不到，需要将模型添加到后台管理中。 <code>./polls/admin.py</code></p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">admin.site.register(Question)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">admin.site.register(Question)</span></span></code></pre></div><p>启动服务，访问 <code>http://127.0.0.1:8000/admin/</code> 可以在后台看到(Question)选项。</p><p><img src="`+o+'" alt="后台管理"></p>',44),t=[c];function r(i,y,E,d,h,g){return n(),a("div",null,t)}const C=s(e,[["render",r]]);export{u as __pageData,C as default};
