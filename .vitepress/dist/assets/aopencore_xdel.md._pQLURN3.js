import{_ as e,o as a,c as o,a5 as c}from"./chunks/framework.Q3SrqsVC.js";const f=JSON.parse('{"title":"删除 config 多余配置项","description":"","frontmatter":{},"headers":[],"relativePath":"aopencore/xdel.md","filePath":"aopencore/xdel.md","lastUpdated":1708132837000}'),t={name:"aopencore/xdel.md"},r=c('<h1 id="删除-config-多余配置项" tabindex="-1">删除 config 多余配置项 <a class="header-anchor" href="#删除-config-多余配置项" aria-label="Permalink to &quot;删除 config 多余配置项&quot;">​</a></h1><p>OC 的 config 配置文件是针对各种不同的硬件平台，根据不同个性化配置将所有配置项全部展示出来，但是在默认的配置文件中有些是针对特殊的硬件的配置项。如果针对自己的硬件平台并没有启用的配置项，而这些配置项的父级选项为<code>Array</code>类型则可以删除这些配置项（完全是强迫症，不做此步骤完全不影响）。<span style="color:#FF3030;">删除这些项目前请确保没有对其做定制化的修改并且没有生效的配置项。</span></p><h2 id="apci" tabindex="-1">APCI <a class="header-anchor" href="#apci" aria-label="Permalink to &quot;APCI&quot;">​</a></h2><p>删除<code>Delete</code>、<code>Patch</code>中的<span style="color:#FF3030;">子项目</span>。</p><h2 id="booter" tabindex="-1">Booter <a class="header-anchor" href="#booter" aria-label="Permalink to &quot;Booter&quot;">​</a></h2><p>删除<code>MmioWhitelist</code>、<code>Patch</code>中的<span style="color:#FF3030;">子项目</span>。</p><h2 id="kernel" tabindex="-1">Kernel <a class="header-anchor" href="#kernel" aria-label="Permalink to &quot;Kernel&quot;">​</a></h2><p>删除<code>Block</code>、<code>Force</code>、<code>Patch</code>中的<span style="color:#FF3030;">子项目</span>。</p><h2 id="misc" tabindex="-1">Misc <a class="header-anchor" href="#misc" aria-label="Permalink to &quot;Misc&quot;">​</a></h2><ul><li>Debug <ul><li>DisplayLevel:<span style="color:#FF3030;">0</span></li><li>Target:<span style="color:#FF3030;">0</span></li></ul></li></ul><p>删除<code>Entries</code>中的<span style="color:#FF3030;">子项目</span>。</p><h2 id="uefi" tabindex="-1">UEFI <a class="header-anchor" href="#uefi" aria-label="Permalink to &quot;UEFI&quot;">​</a></h2><p>删除<code>ReservedMemory</code>中的<span style="color:#FF3030;">子项目</span>。</p>',13),l=[r];function n(s,i,d,p,h,_){return a(),o("div",null,l)}const m=e(t,[["render",n]]);export{f as __pageData,m as default};
