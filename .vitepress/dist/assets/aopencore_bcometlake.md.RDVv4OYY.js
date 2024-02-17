import{_ as e,o as t,c as a,V as d}from"./chunks/framework.uGWWoR85.js";const m=JSON.parse('{"title":"Comet Lake 十代台式主机安装文档","description":"","frontmatter":{},"headers":[],"relativePath":"aopencore/bcometlake.md","filePath":"aopencore/bcometlake.md","lastUpdated":1708049404000}'),r={name:"aopencore/bcometlake.md"},o=d(`<h1 id="comet-lake-十代台式主机安装文档" tabindex="-1">Comet Lake 十代台式主机安装文档 <a class="header-anchor" href="#comet-lake-十代台式主机安装文档" aria-label="Permalink to &quot;Comet Lake 十代台式主机安装文档&quot;">​</a></h1><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h2><p>当看到 OC 的 <code>config.plist</code> 有非常多的配置项及子配置时会让人误以为配置起来很难，事实上并非如此。针对自己的硬件配置一个可用的 OC 引导需要修改的内容非常有限，只需要一点点耐心就可以。</p><p>配置 OC 的 <code>config.plist</code> 文件需要以下注意点：</p><ul><li>除非有明确的说明否则不要删除任何配置项及子配置，文档中未提及的配置项保持默认。</li><li>不要使用文档中未提及的编辑工具，这有可能损坏 <code>config.plist</code> 原有的编码格式或配置内容。</li><li><code>Sample.plist</code> 一定要重命名为 <code>config.plist</code> 并放到正确的文件夹内。</li></ul><p>需要的一些工具：</p><ul><li><a href="https://github.com/corpnewt/ProperTree" target="_blank" rel="noreferrer">ProperTree</a><ul><li>通用的 <code>.plist</code> 文件编辑器</li></ul></li><li><a href="https://github.com/acidanthera/OpenCorePkg/releases" target="_blank" rel="noreferrer">OpenCore</a><ul><li>OpenCore 引导工具</li></ul></li></ul><h2 id="acpi" tabindex="-1">ACPI <a class="header-anchor" href="#acpi" aria-label="Permalink to &quot;ACPI&quot;">​</a></h2><h3 id="add" tabindex="-1">Add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;Add&quot;">​</a></h3><p>这里添加一些启动 MacOS 系统非常重要的 SSDT。他们的作用非常重要，包含电源管理、USB 映射、RTC 时钟等。对于十代台式主机必要的 SSDT 有：</p><table><thead><tr><th>SSDT</th><th>描述</th></tr></thead><tbody><tr><td>SSDT-PLUG</td><td>修复 CPU 原生电源管理</td></tr><tr><td>SSDT-EC-USBX</td><td>EC 控制器及 USB 电源管理</td></tr><tr><td>SSDT-AWAC</td><td>传统 RTC 时钟控制器，使用 AWAC 控制器的 B460 和 Z490 主板必须添加。</td></tr><tr><td>SSDT-RHUB</td><td>修复华硕主板的其他潜在错误，其他主板按需添加</td></tr></tbody></table><p>在下载的 OpenCore 文件夹中已经存在一些常用的 SSDT 文件，解压后处于<code>./Docs/AcpiSamples/Binaries</code>目录下。</p><p>其他的 SSDT 文件可以在<a href="https://github.com/dortania/Getting-Started-With-ACPI/tree/master/extra-files/compiled" target="_blank" rel="noreferrer">此处下载</a>。</p><h3 id="delete、patch、quirks" tabindex="-1">Delete、Patch、Quirks <a class="header-anchor" href="#delete、patch、quirks" aria-label="Permalink to &quot;Delete、Patch、Quirks&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h2 id="booter" tabindex="-1">Booter <a class="header-anchor" href="#booter" aria-label="Permalink to &quot;Booter&quot;">​</a></h2><h3 id="mmiowhitelist、patch" tabindex="-1">MmioWhitelist、Patch <a class="header-anchor" href="#mmiowhitelist、patch" aria-label="Permalink to &quot;MmioWhitelist、Patch&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h3 id="quirks" tabindex="-1">Quirks <a class="header-anchor" href="#quirks" aria-label="Permalink to &quot;Quirks&quot;">​</a></h3><table><thead><tr><th>快捷配置项</th><th>启用</th><th>描述</th></tr></thead><tbody><tr><td>DevirtualiseMmio</td><td>Yes</td><td></td></tr><tr><td>EnableWriteUnprotector</td><td>No</td><td></td></tr><tr><td>ProtectUefiServices</td><td>Yes</td><td></td></tr><tr><td>RebuildAppleMemoryMap</td><td>Yes</td><td></td></tr><tr><td>ResizeAppleGpuBars</td><td>-1</td><td>如果主板支持 GPUBar 功能设置为 <code>0</code></td></tr><tr><td>SetupVirtualMap</td><td>No</td><td></td></tr><tr><td>SyncRuntimePermissions</td><td>Yes</td><td></td></tr></tbody></table><h2 id="deviceproperties" tabindex="-1">DeviceProperties <a class="header-anchor" href="#deviceproperties" aria-label="Permalink to &quot;DeviceProperties&quot;">​</a></h2><h3 id="add-1" tabindex="-1">Add <a class="header-anchor" href="#add-1" aria-label="Permalink to &quot;Add&quot;">​</a></h3><p><code>PciRoot(0x0)/Pci(0x2,0x0)</code> 配置项中没有此选项，请手动创建。如果 CPU 的后缀为 <code>F</code> 代表没有核显，忽略此项。</p><table><thead><tr><th>AAPL,ig-platform-id</th><th>描述</th></tr></thead><tbody><tr><td><code>07009B3E</code></td><td>台式机使用核显连接显示器</td></tr><tr><td><code>00009B3E</code></td><td><code>07009B3E</code> 如果不起作用的替代值</td></tr><tr><td><code>0300C89B</code></td><td>有独立显卡，核显只参与计算任务</td></tr></tbody></table><h3 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;Delete&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h2 id="kernel" tabindex="-1">Kernel <a class="header-anchor" href="#kernel" aria-label="Permalink to &quot;Kernel&quot;">​</a></h2><h3 id="add-2" tabindex="-1">Add <a class="header-anchor" href="#add-2" aria-label="Permalink to &quot;Add&quot;">​</a></h3><table><thead><tr><th>kexts</th><th>描述</th></tr></thead><tbody><tr><td>Lilu.kext</td><td></td></tr><tr><td>VirtualSMC.kext</td><td>电源管理驱动</td></tr><tr><td>WhateverGreen.kext</td><td>显卡驱动</td></tr><tr><td>AppleALC.kext</td><td>声卡驱动</td></tr><tr><td>SMCProcessor.kext</td><td>电源管理驱动</td></tr><tr><td>SMCSuperIO.kext</td><td>电源管理驱动</td></tr><tr><td>NVMeFix.kext</td><td></td></tr></tbody></table><h3 id="quirks-1" tabindex="-1">Quirks <a class="header-anchor" href="#quirks-1" aria-label="Permalink to &quot;Quirks&quot;">​</a></h3><table><thead><tr><th>快捷配置项</th><th>启用</th><th>描述</th></tr></thead><tbody><tr><td>AppleXcpmCfgLock</td><td>Yes</td><td>如果 BIOS 中有 <code>CFG-Lock</code> 选项并且已经设为关闭则不需要开启</td></tr><tr><td>DisableIoMapper</td><td>Yes</td><td>如果 BIOS 中有 <code>VT-D</code> 选项并且已经设为关闭则不需要开启</td></tr><tr><td>LapicKernelPanic</td><td>No</td><td>惠普电脑需要开启</td></tr><tr><td>PanicNoKextDump</td><td>Yes</td><td></td></tr><tr><td>PowerTimeoutKernelPanic</td><td>Yes</td><td></td></tr><tr><td>XhciPortLimit</td><td>Yes</td><td>支持 15 个以上 USB 接口</td></tr></tbody></table><h3 id="block、emulate、force、patch、scheme" tabindex="-1">Block、Emulate、Force、Patch、Scheme <a class="header-anchor" href="#block、emulate、force、patch、scheme" aria-label="Permalink to &quot;Block、Emulate、Force、Patch、Scheme&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h2 id="misc" tabindex="-1">Misc <a class="header-anchor" href="#misc" aria-label="Permalink to &quot;Misc&quot;">​</a></h2><h3 id="boot" tabindex="-1">Boot <a class="header-anchor" href="#boot" aria-label="Permalink to &quot;Boot&quot;">​</a></h3><table><thead><tr><th>快捷配置项</th><th>启用</th><th>描述</th></tr></thead><tbody><tr><td>HideAuxiliary</td><td>Yes</td><td>OC 引导界面点击空格键显示其他隐藏启动项</td></tr></tbody></table><h3 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h3><table><thead><tr><th>快捷配置项</th><th>启用</th><th>描述</th></tr></thead><tbody><tr><td>AllowSetDefault</td><td>Yes</td><td>允许在 OC 引导界面设置默认启动项</td></tr><tr><td>BlacklistAppleUpdate</td><td>Yes</td><td>禁用更新</td></tr><tr><td>ScanPolicy</td><td>0</td><td></td></tr><tr><td>SecureBootModel</td><td><code>Disabled</code></td><td></td></tr><tr><td>Vault</td><td><code>Optional</code></td><td></td></tr></tbody></table><h3 id="blessoverride、debug、entries、serial、tools" tabindex="-1">BlessOverride、Debug、Entries、Serial、Tools <a class="header-anchor" href="#blessoverride、debug、entries、serial、tools" aria-label="Permalink to &quot;BlessOverride、Debug、Entries、Serial、Tools&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h2 id="nvram" tabindex="-1">NVRAM <a class="header-anchor" href="#nvram" aria-label="Permalink to &quot;NVRAM&quot;">​</a></h2><h3 id="add-3" tabindex="-1">Add <a class="header-anchor" href="#add-3" aria-label="Permalink to &quot;Add&quot;">​</a></h3><h4 id="_7c436110-ab2a-4bbb-a880-fe41995c9f82" tabindex="-1">7C436110-AB2A-4BBB-A880-FE41995C9F82 <a class="header-anchor" href="#_7c436110-ab2a-4bbb-a880-fe41995c9f82" aria-label="Permalink to &quot;7C436110-AB2A-4BBB-A880-FE41995C9F82&quot;">​</a></h4><p>删除 <code>#INFO (prev-lang:kbd)</code> 选项。注释的说明文档，没有实际功能。</p><p><code>boot-args</code> 选项</p><ul><li><code>-v</code> 调试模式，在启动 macOS 时显示调试代码而不是 apple 图标，能清楚的显示启动时的调试代码及抛出的异常。</li><li><code>keepsyms=1</code> 启动时出现严重的内核崩溃情况显示调试代码而不是重启。</li><li><code>alcid=1</code> AppleALC.kext 的仿冒声卡参数</li><li><code>agdpmod=pikera</code> 用于 WhateverGreen.kext 驱动 AMD 的 5000 系列、6000 系列显卡，如果使用此系列的显卡添加此参数防止黑屏，如果是免驱显卡不用添加此参数。</li></ul><p>根据需要添加以上参数，每个参数中间需要加入空格。例：<code>-v keepsyms=1 agdpmod=pikera alcid=1</code></p><h4 id="csr-active-config" tabindex="-1">csr-active-config <a class="header-anchor" href="#csr-active-config" aria-label="Permalink to &quot;csr-active-config&quot;">​</a></h4><p>完整性系统保护（SIP）设置为 <code>00000000</code></p><h4 id="prev-lang-kbd" tabindex="-1">prev-lang:kbd <a class="header-anchor" href="#prev-lang-kbd" aria-label="Permalink to &quot;prev-lang:kbd&quot;">​</a></h4><p>安装的 macOS 系统默认地区、语言</p><ul><li>英语：Type 为<code>String</code>Value 为<code>en:252</code></li><li>中文：Type 为<code>String</code>Value 为<code>zh:0</code></li></ul><p>设置地区、语言的完整列表可以在<a href="https://github.com/acidanthera/OpenCorePkg/blob/master/Utilities/AppleKeyboardLayouts/AppleKeyboardLayouts.txt" target="_blank" rel="noreferrer">AppleKeyboardLayouts.txt</a>查找。</p><p>冒号前面的 <code>zh</code> 为设置的默认地区。后面的 <code>0</code> 为键盘类型，中国大陆使用的是美国通用 QWER 键盘。</p><h3 id="delete、legacyoverwrite、legacyschema" tabindex="-1">Delete、LegacyOverwrite、LegacySchema <a class="header-anchor" href="#delete、legacyoverwrite、legacyschema" aria-label="Permalink to &quot;Delete、LegacyOverwrite、LegacySchema&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h3 id="writeflash" tabindex="-1">WriteFlash <a class="header-anchor" href="#writeflash" aria-label="Permalink to &quot;WriteFlash&quot;">​</a></h3><p>启用</p><h2 id="platforminfo" tabindex="-1">PlatformInfo <a class="header-anchor" href="#platforminfo" aria-label="Permalink to &quot;PlatformInfo&quot;">​</a></h2><h3 id="generic" tabindex="-1">Generic <a class="header-anchor" href="#generic" aria-label="Permalink to &quot;Generic&quot;">​</a></h3><p>如果是十代 i7 或者以下处理器机型设置为<code>iMac20,1</code>， 如果是十代 i9 或者以上处理器机型设置为<code>iMac20,2</code> 使用三码生成工具生成以下参数</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SystemProductName:iMac20,2</span></span>
<span class="line"><span>SystemSerialNumber:&lt;生成参数&gt;</span></span>
<span class="line"><span>MLB:&lt;生成参数&gt;</span></span>
<span class="line"><span>SystemUUID:&lt;生成参数&gt;</span></span>
<span class="line"><span>ROM:&lt;&gt; // 留空</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="automatic、custommemory、updatedatahub、updatenvram、updatesmbios、updatesmbiosmode、userawuuidencoding" tabindex="-1">Automatic、CustomMemory、UpdateDataHub、UpdateNVRAM、UpdateSMBIOS、UpdateSMBIOSMode、UseRawUuidEncoding <a class="header-anchor" href="#automatic、custommemory、updatedatahub、updatenvram、updatesmbios、updatesmbiosmode、userawuuidencoding" aria-label="Permalink to &quot;Automatic、CustomMemory、UpdateDataHub、UpdateNVRAM、UpdateSMBIOS、UpdateSMBIOSMode、UseRawUuidEncoding&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p><h2 id="uefi" tabindex="-1">UEFI <a class="header-anchor" href="#uefi" aria-label="Permalink to &quot;UEFI&quot;">​</a></h2><h3 id="connectdrivers" tabindex="-1">ConnectDrivers <a class="header-anchor" href="#connectdrivers" aria-label="Permalink to &quot;ConnectDrivers&quot;">​</a></h3><p>启用</p><h3 id="drivers" tabindex="-1">Drivers <a class="header-anchor" href="#drivers" aria-label="Permalink to &quot;Drivers&quot;">​</a></h3><p>此处添加<code>.efi</code>驱动，位于 OpenCore 解压文件的 <code>./X64/EFI/OC/Drivers</code> 文件夹下。 需要添加以下驱动：<code>OpenRuntime.efi</code>、<code>OpenHfsPlus.efi</code></p><h3 id="apfs、appleinput、audio、input、output、protocoloverrides、quirks、reservedmemory" tabindex="-1">APFS、AppleInput、Audio、Input、Output、ProtocolOverrides、Quirks、ReservedMemory <a class="header-anchor" href="#apfs、appleinput、audio、input、output、protocoloverrides、quirks、reservedmemory" aria-label="Permalink to &quot;APFS、AppleInput、Audio、Input、Output、ProtocolOverrides、Quirks、ReservedMemory&quot;">​</a></h3><p><span style="color:#FF3030;">初始配置略过</span></p>`,71),i=[o];function l(s,c,n,h,p,u){return t(),a("div",null,i)}const k=e(r,[["render",l]]);export{m as __pageData,k as default};