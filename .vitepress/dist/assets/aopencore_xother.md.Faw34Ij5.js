import{_ as e,c as o,o as c,a5 as a,a7 as t}from"./chunks/framework.ezaP4bTZ.js";const C=JSON.parse('{"title":"其他优化项","description":"","frontmatter":{},"headers":[],"relativePath":"aopencore/xother.md","filePath":"aopencore/xother.md","lastUpdated":1708132837000}'),d={name:"aopencore/xother.md"},i=a('<h1 id="其他优化项" tabindex="-1">其他优化项 <a class="header-anchor" href="#其他优化项" aria-label="Permalink to &quot;其他优化项&quot;">​</a></h1><p>以下的优化项不影响黑苹果的运行状态，只是为了在 OC 的引导过程中的一些修改。</p><h2 id="优化-oc-引导界面的标题" tabindex="-1">优化 OC 引导界面的标题 <a class="header-anchor" href="#优化-oc-引导界面的标题" aria-label="Permalink to &quot;优化 OC 引导界面的标题&quot;">​</a></h2><p>配置项 <code>Misc</code> -&gt; <code>Security</code> -&gt; <code>ExposeSensitiveData</code>: <span style="color:#FF3030;">2</span></p><p>官方的文档中的描述：用于向操作系统暴露敏感数据的位掩码（总和）。</p><p>实际配置中，发现对引导黑苹果没有特别的影响，也可能没发现，最明显的差异是在 OC 引导界面选择系统时标题的差异。</p><p>有以下值可供选择：</p><ul><li><code>0x01</code> 将可打印的引导器路径作为 UEFI 变量暴露出来</li><li><code>0x02</code> 将 OpenCore 版本作为 UEFI 变量暴露出来</li><li><code>0x04</code> 将 OpenCore 版本暴露在启动选择菜单的标题位置</li><li><code>0x08</code> 将 OEM 信息作为一组 UEFI 变量暴露出来</li></ul><p>在这里选择的值为 <code>2</code> 没有什么特别的原因，只是因为这样显示标题比较顺眼。</p><p><img src="'+t+'" alt="后台管理"></p><h2 id="修改-oc-引导的等待时间" tabindex="-1">修改 OC 引导的等待时间 <a class="header-anchor" href="#修改-oc-引导的等待时间" aria-label="Permalink to &quot;修改 OC 引导的等待时间&quot;">​</a></h2><p>配置项 <code>Misc</code> -&gt; <code>Boot</code> -&gt; <code>Timeout</code>: <span style="color:#FF3030;">10</span></p><p>官方的文档中的描述：开机引导菜单中，启动默认启动项之前超时时间（以秒为单位）。 使用 <code>0</code> 禁用倒计时。</p><p>改为 <code>10</code> 在开机后等待 10 秒钟进入默人的系统，使用 4K 显示器的黑苹果硬件可能会在引入 OC 引导的过程中出现 1 ～ 2 秒钟的黑屏，给自己长点的时间选择要进入的系统。</p><h2 id="注册-oc-引导" tabindex="-1">注册 OC 引导 <a class="header-anchor" href="#注册-oc-引导" aria-label="Permalink to &quot;注册 OC 引导&quot;">​</a></h2><p>配置项 <code>Misc</code> -&gt; <code>Boot</code> -&gt; <code>LauncherOption</code>: <span style="color:#FF3030;">Full</span></p><p>配置项 <code>UEFI</code> -&gt; <code>Quirks</code> -&gt; <code>RequestBootVarRouting</code>: <span style="color:#FF3030;">True</span></p><p>官方的文档中的描述：在固件偏好设置中注册启动器选项，以保证 bootloader 的持久与一致性。</p><p>在这里要说明一下整个计算机启动的一个整体过程：</p><ol><li>计算机硬件通电</li><li>加载 BIOS 系统</li><li>加载操作系统(Windows、Linux、MacOS)</li><li>启动系统</li></ol><p>整体而言可以归纳为这么四个步骤，至于详细的启动流程非专业人士不需要了解更多。而 OC 引导就在启动过程中的第 2 步和第 3 步介入，并对硬件做一些优化修改使之更符合 MacOS 的标准。在拥有 Windows 和 MacOS 双系统时有可能 Windows 的更新或者其他的情况导致 OC 的介入失败。此配置就是在第 2 步之后永远让 OC 作为第一启动项，之后的系统启动通过 OC 选择。</p><p>对于 <code>LauncherOption</code> 选项有以下值可供选择：</p><ul><li><code>Disabled</code> 什么都不做。</li><li><code>Full</code> 在 bootloader 启动时，在 UEFI 变量存储中创建或更新最高优先级的启动项。要使用这个选项，必须同时开启 <code>RequestBootVarRouting</code>。</li><li><code>Short</code> 创建一个短的、非完整的启动项。此值对于某些固件很有用（例如：Insyde），或者其他无法处理完整设备路径的固件。</li><li><code>System</code> 不创建启动项，而是认为该项是 blessed 的。这种 variant 在依赖 <code>ForceBooterSignature</code> 属性和 OpenCore 启动器路径时非常有用。管理是通过 bless 工具进行的，不涉及 OpenCore。</li></ul>',23),l=[i];function r(p,s,n,h,u,_){return c(),o("div",null,l)}const m=e(d,[["render",r]]);export{C as __pageData,m as default};
