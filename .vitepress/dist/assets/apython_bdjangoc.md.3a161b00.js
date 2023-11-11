import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.b83ad774.js";const q=JSON.parse('{"title":"第一个 Django 应用程序 - 3","description":"","frontmatter":{},"headers":[],"relativePath":"apython/bdjangoc.md","filePath":"apython/bdjangoc.md"}'),p={name:"apython/bdjangoc.md"},o=l(`<h1 id="第一个-django-应用程序-3" tabindex="-1">第一个 Django 应用程序 - 3 <a class="header-anchor" href="#第一个-django-应用程序-3" aria-label="Permalink to &quot;第一个 Django 应用程序 - 3&quot;">​</a></h1><h2 id="添加应用视图" tabindex="-1">添加应用视图 <a class="header-anchor" href="#添加应用视图" aria-label="Permalink to &quot;添加应用视图&quot;">​</a></h2><p>通过之前的文档在后台管理系统中已经显示出 <code>Question</code> 相关的配置项了，在后台管理中也可以对 <code>Question</code>进行增、删、改、查相关的操作。</p><p>在开始本章节之前先在后台中增加了三个问题，本章节的目标就是在视图层面将已经添加的问题展示出来。</p><p>在应用 <code>./polls/views.py</code> 中添加更多的视图</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建问卷详情视图</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">detail</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponse(</span><span style="color:#9ECBFF;">&quot;查看问卷详情 </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> question_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建问卷选项视图</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">results</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;问卷选项 </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">.&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponse(response </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> question_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建投票结果视图</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vote</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponse(</span><span style="color:#9ECBFF;">&quot;投票结果 </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> question_id)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建问卷详情视图</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">detail</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponse(</span><span style="color:#032F62;">&quot;查看问卷详情 </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> question_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建问卷选项视图</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">results</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;问卷选项 </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">.&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponse(response </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> question_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建投票结果视图</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vote</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponse(</span><span style="color:#032F62;">&quot;投票结果 </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> question_id)</span></span></code></pre></div><p>为添加的视图添加路由 <code>./polls/urls.py</code></p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 创建的第一个视图函数绑定的路由。访问&#39;/polls&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, views.index, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 问卷详情绑定路由。访问&#39;/polls/&lt;id&gt;&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/&quot;</span><span style="color:#E1E4E8;">, views.detail, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;detail&quot;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 问卷选项绑定路由。访问&#39;/polls/results/&lt;id&gt;/&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;results/&lt;int:question_id&gt;/&quot;</span><span style="color:#E1E4E8;">, views.results, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;results&quot;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 投票结果绑定路由。访问&#39;/polls/vote/&lt;id&gt;/&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;vote/&lt;int:question_id&gt;/&quot;</span><span style="color:#E1E4E8;">, views.vote, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;vote&quot;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 创建的第一个视图函数绑定的路由。访问&#39;/polls&#39;</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, views.index, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 问卷详情绑定路由。访问&#39;/polls/&lt;id&gt;&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/&quot;</span><span style="color:#24292E;">, views.detail, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;detail&quot;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 问卷选项绑定路由。访问&#39;/polls/results/&lt;id&gt;/&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;results/&lt;int:question_id&gt;/&quot;</span><span style="color:#24292E;">, views.results, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;results&quot;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 投票结果绑定路由。访问&#39;/polls/vote/&lt;id&gt;/&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;vote/&lt;int:question_id&gt;/&quot;</span><span style="color:#24292E;">, views.vote, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;vote&quot;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="为视图绑定模型-数据库操作-读" tabindex="-1">为视图绑定模型(数据库操作-读) <a class="header-anchor" href="#为视图绑定模型-数据库操作-读" aria-label="Permalink to &quot;为视图绑定模型(数据库操作-读)&quot;">​</a></h2><p>以上添加的三个视图及其绑定的路由实际上并没有与模型绑定，在实际运行访问之后也可以发现展示的内容仅仅只是将上传的参数直接显示在页面当中。这并没有达到预期的效果，我们希望视图能够通过提交的参数在页面中显示数据库当中的内容。</p><p>在应用 <code>./polls/views.py</code> 中改写 <code>index</code> 视图以绑定模型</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 导入模型</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建关联模型的调查问卷视图</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># objects.order_by:查询模型</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    output </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;, &quot;</span><span style="color:#E1E4E8;">.join([q.question_text </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> q </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> latest_question_list])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponse(output)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 导入模型</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建关联模型的调查问卷视图</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># objects.order_by:查询模型</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    output </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;, &quot;</span><span style="color:#24292E;">.join([q.question_text </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> q </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> latest_question_list])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponse(output)</span></span></code></pre></div><h2 id="为视图绑定模型-数据库操作-读-、绑定模版-优化页面" tabindex="-1">为视图绑定模型(数据库操作-读)、绑定模版(优化页面) <a class="header-anchor" href="#为视图绑定模型-数据库操作-读-、绑定模版-优化页面" aria-label="Permalink to &quot;为视图绑定模型(数据库操作-读)、绑定模版(优化页面)&quot;">​</a></h2><ol><li><p>创建模版文件 <code>./polls/templates/polls/index.html</code>。</p><details class="details custom-block"><summary>模版命名空间</summary><p>查看旧的文档或一些其他的教程可能会把 <code>/templates</code> 目录创建在项目的其他路径，但是为了项目中的每个应用的独立性推荐将其创建在应用根目录 <code>/polls</code> 当中。</p><p>一个项目可能包含很多的应用，你也可以将 <code>index.html</code> 文件创建在应用下的 <code>/templates</code> 目录下，但是这并不是一个好的选择，因为 Django 会匹配整个项目的模版而不是单独每个应用的模版。如果在不同应用下存在同名的模版，Django 将无法区分他们。</p><p>推荐的做法在每个应用中的模版文件夹 <code>/templates</code> 下创建一个与应用同名的文件夹，再创建应用的模版。所以模版的目录看起来像这样 <code>./polls/templates/polls/</code>。</p></details></li><li><p>将以下代码放入该模版 <code>/polls/templates/polls/index.html</code> 中：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% if latest_question_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {% for question in latest_question_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/polls/{{ question.id }}/&quot;</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% else %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;No polls are available.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endif %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% if latest_question_list %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  {% for question in latest_question_list %}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/polls/{{ question.id }}/&quot;</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  {% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% else %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;No polls are available.&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endif %}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>为了使文档更短，所有模板示例都使用不完整的 HTML。在您的项目，您应该使用完整的 HTML 文件。</p></div></li><li><p>在应用 <code>./polls/views.py</code> 中改写 <code>index</code> 视图以绑定模版</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 导入模版</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.template </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> loader</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建关联模型、模版的调查问卷视图</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    template </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> loader.get_template(</span><span style="color:#9ECBFF;">&quot;polls/index.html&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;latest_question_list&quot;</span><span style="color:#E1E4E8;">: latest_question_list,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponse(template.render(context, request))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 导入模版</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.template </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> loader</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建关联模型、模版的调查问卷视图</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    template </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> loader.get_template(</span><span style="color:#032F62;">&quot;polls/index.html&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;latest_question_list&quot;</span><span style="color:#24292E;">: latest_question_list,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponse(template.render(context, request))</span></span></code></pre></div></li><li><p>在应用 <code>./polls/views.py</code> 中改写 <code>index</code> 视图以绑定模版(简写)</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建关联模型、模版的调查问卷视图(简写)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;latest_question_list&quot;</span><span style="color:#E1E4E8;">: latest_question_list}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/index.html&quot;</span><span style="color:#E1E4E8;">, context)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建关联模型、模版的调查问卷视图(简写)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;latest_question_list&quot;</span><span style="color:#24292E;">: latest_question_list}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/index.html&quot;</span><span style="color:#24292E;">, context)</span></span></code></pre></div></li></ol>`,14),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{q as __pageData,F as default};
