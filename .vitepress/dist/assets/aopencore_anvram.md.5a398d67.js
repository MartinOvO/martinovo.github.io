import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1fc80e1c.js";const h=JSON.parse('{"title":"NVRAM","description":"","frontmatter":{},"headers":[],"relativePath":"aopencore/anvram.md","filePath":"aopencore/anvram.md"}'),o={name:"aopencore/anvram.md"},e=l(`<h1 id="nvram" tabindex="-1">NVRAM <a class="header-anchor" href="#nvram" aria-label="Permalink to &quot;NVRAM&quot;">​</a></h1><blockquote><p>本文档会把 config 的项目分开来，内容繁琐，请仔细阅读相关配置项。配置 <code>config.plist</code> 强制要求在 Windows 环境下使用 <span style="color:#FF3030;">Propertree</span> 来编辑，其他任何软件都不建议使用。</p></blockquote><p>NVRAM 注入（如引导标识符和 SIP） 设置易失性 UEFI 变量（通常被称作 NVRAM 变量）。使用 man nvram 获取详细信息。macOS 广泛使用 NVRAM 变量使 操作系统、BootLoader、固件 之间互通，因此需要提供多个 NVRAM 变量才能正常运行 macOS。</p><h2 id="add" tabindex="-1">Add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;Add&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">4D1EDE05-38C7-4A6A-9CC6-4BCCA8B38C14</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">DefaultBackgroundColor</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">Data</span><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">0000000</span><span style="color:#F97583;">0&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//默认开机背景色为黑色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">7C436110-AB2A-4BBB-A880-FE41995C9F82</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">boot-args</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">String</span><span style="color:#E1E4E8;">     </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">csr-active-config</span><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">Data</span><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">E703000</span><span style="color:#F97583;">0&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//关闭</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SIP</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">保护</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">prev-lang:kbd</span><span style="color:#E1E4E8;">               </span><span style="color:#9ECBFF;">String</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">zh:0</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//语言设置相关,这个是中文</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">ForceDisplayRotationInEFI</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">Number</span><span style="color:#E1E4E8;">     </span><span style="color:#79B8FF;">0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">4D1EDE05-38C7-4A6A-9CC6-4BCCA8B38C14</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">DefaultBackgroundColor</span><span style="color:#24292E;">      </span><span style="color:#032F62;">Data</span><span style="color:#24292E;">       </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">0000000</span><span style="color:#D73A49;">0&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//默认开机背景色为黑色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">7C436110-AB2A-4BBB-A880-FE41995C9F82</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">boot-args</span><span style="color:#24292E;">                   </span><span style="color:#032F62;">String</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">-v</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">csr-active-config</span><span style="color:#24292E;">           </span><span style="color:#032F62;">Data</span><span style="color:#24292E;">       </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">E703000</span><span style="color:#D73A49;">0&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//关闭</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SIP</span><span style="color:#24292E;"> </span><span style="color:#032F62;">保护</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">prev-lang:kbd</span><span style="color:#24292E;">               </span><span style="color:#032F62;">String</span><span style="color:#24292E;">     </span><span style="color:#032F62;">zh:0</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//语言设置相关,这个是中文</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">ForceDisplayRotationInEFI</span><span style="color:#24292E;">   </span><span style="color:#032F62;">Number</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">0</span></span></code></pre></div><h2 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;Delete&quot;">​</a></h2><p>根据官方的说法在上一个配置项中(2.6.1-Add)添加的选项只有在本身不存在且未被屏蔽的情况下才会被设置,如果想要覆盖一个现有的变量值,需要先在此处(2.6.2-Delete)将现有的值删除才能添加,初始配置略过。</p><h2 id="legacyenable" tabindex="-1">LegacyEnable <a class="header-anchor" href="#legacyenable" aria-label="Permalink to &quot;LegacyEnable&quot;">​</a></h2><p>False</p><h2 id="legacyoverwrite" tabindex="-1">LegacyOverwrite <a class="header-anchor" href="#legacyoverwrite" aria-label="Permalink to &quot;LegacyOverwrite&quot;">​</a></h2><p>False</p><h2 id="legacyschema" tabindex="-1">LegacySchema <a class="header-anchor" href="#legacyschema" aria-label="Permalink to &quot;LegacySchema&quot;">​</a></h2><h2 id="writeflash" tabindex="-1">WriteFlash <a class="header-anchor" href="#writeflash" aria-label="Permalink to &quot;WriteFlash&quot;">​</a></h2><p>False</p>`,14),p=[e];function t(r,c,y,E,i,F){return n(),a("div",null,p)}const C=s(o,[["render",t]]);export{h as __pageData,C as default};