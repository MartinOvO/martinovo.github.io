import{_ as e,c as a,o,a5 as t}from"./chunks/framework.ezaP4bTZ.js";const S=JSON.parse('{"title":"PlatformInfo","description":"","frontmatter":{},"headers":[],"relativePath":"aopencore/aplatforminfo.md","filePath":"aopencore/aplatforminfo.md","lastUpdated":1707968147000}'),l={name:"aopencore/aplatforminfo.md"},i=t('<h1 id="platforminfo" tabindex="-1">PlatformInfo <a class="header-anchor" href="#platforminfo" aria-label="Permalink to &quot;PlatformInfo&quot;">​</a></h1><blockquote><p>本文档会把 config 的项目分开来，内容繁琐，请仔细阅读相关配置项。配置 <code>config.plist</code> 强制要求在 Windows 环境下使用 <span style="color:#FF3030;">Propertree</span> 来编辑，其他任何软件都不建议使用。</p></blockquote><h2 id="automatic" tabindex="-1">Automatic <a class="header-anchor" href="#automatic" aria-label="Permalink to &quot;Automatic&quot;">​</a></h2><p>True</p><p>基于 <code>Generic</code> 属性而不是 <code>DataHub</code>、<code>NVRAM</code> 和 <code>SMBIOS</code> 属性生成机型信息。</p><p>默人的 OC 配置项中使用的是<code>Generic</code>，不需要考虑其他的配置机型的方式。只需要开启此项，并在下面的<code>Generic</code>配置项中正确填写相关配置即可。</p><h2 id="custommemory" tabindex="-1">CustomMemory <a class="header-anchor" href="#custommemory" aria-label="Permalink to &quot;CustomMemory&quot;">​</a></h2><p>False</p><p>使用 OC 自定义内存开启此项则会完全取代 SMBIOS 中任何现有的内存配置。只有当 <code>UpdateSMBIOS</code> 设置为 <code>True</code> 时才生效。</p><h2 id="generic" tabindex="-1">Generic <a class="header-anchor" href="#generic" aria-label="Permalink to &quot;Generic&quot;">​</a></h2><ul><li><p>AdviseFeatures: <span style="color:#FF3030;">True</span></p><ul><li>用支持的 bit 更新 <code>FirmwareFeatures</code>，升级 macOS 时可能需要该选项。</li></ul></li><li><p>MLB: <span style="color:#FF3030;">M0000000000000001</span></p><ul><li>生成三码填写</li></ul></li><li><p>MaxBIOSVersion: <span style="color:#FF3030;">0</span></p><ul><li>将 <code>BIOSVersion</code> 设置为 <code>9999.999.999.999.999</code>，在使用 Automatic PlatformInfo 时推荐用于旧版的 Mac，以避免在非官方支持的 macOS 版本中进行 BIOS 更新。</li></ul></li><li><p>ProcessorType: <span style="color:#FF3030;">0</span></p><ul><li>一些因特尔 ES、QS 或其他不能正确显示 CPU 的处理器及 AMD 的 CPU 配置正确的 CPU 及核心数。</li></ul></li><li><p>ROM: <span style="color:#FF3030;">空</span></p><ul><li>此处留空</li></ul></li><li><p>SpoofVendor: <span style="color:#FF3030;">True</span></p><ul><li>将 SMBIOS 中的 Vendor 字段设置为 <code>Acidanthera</code>。</li></ul></li><li><p>SystemMemoryStatus: <span style="color:#FF3030;">Auto</span></p><ul><li>用来表示内存是否可以更换和升级，此值也控制着「关于本机」中「内存」选项卡的可见性。</li></ul></li><li><p>SystemProductName: <span style="color:#FF3030;">iMac19,1</span></p><ul><li>配置机型</li></ul></li><li><p>SystemSerialNumber: <span style="color:#FF3030;">W00000000001</span></p><ul><li>生成三码填写</li></ul></li><li><p>SystemUUID: <span style="color:#FF3030;">00000000-0000-0000-0000-000000000000</span></p><ul><li>生成三码填写</li></ul></li></ul><h2 id="updatedatahub" tabindex="-1">UpdateDataHub <a class="header-anchor" href="#updatedatahub" aria-label="Permalink to &quot;UpdateDataHub&quot;">​</a></h2><p>True</p><p>更新 <code>Data Hub</code> 字段。根据 <code>Automatic</code> 的值，这些字段会从 <code>Generic</code> 或 <code>DataHub</code> 中读取。</p><h2 id="updatenvram" tabindex="-1">UpdateNVRAM <a class="header-anchor" href="#updatenvram" aria-label="Permalink to &quot;UpdateNVRAM&quot;">​</a></h2><p>True</p><p>是否更新 NVRAM 中关于机型信息的相关字段。</p><h2 id="updatesmbios" tabindex="-1">UpdateSMBIOS <a class="header-anchor" href="#updatesmbios" aria-label="Permalink to &quot;UpdateSMBIOS&quot;">​</a></h2><p>True</p><p>更新 <code>SMBIOS</code> 字段。根据 <code>Automatic</code> 的值，这些字段会从 <code>Generic</code> 或 <code>SMBIOS</code> 中读取。</p><h2 id="updatesmbiosmode" tabindex="-1">UpdateSMBIOSMode <a class="header-anchor" href="#updatesmbiosmode" aria-label="Permalink to &quot;UpdateSMBIOSMode&quot;">​</a></h2><p>Create</p><p>更新 SMBIOS 字段的方式。</p><h2 id="userawuuidencoding" tabindex="-1">UseRawUuidEncoding <a class="header-anchor" href="#userawuuidencoding" aria-label="Permalink to &quot;UseRawUuidEncoding&quot;">​</a></h2><p>False</p><p>对 <code>SMBIOS</code> 的 <code>UUID</code> 使用原始编码。</p>',26),r=[i];function c(d,p,n,s,u,m){return o(),a("div",null,r)}const f=e(l,[["render",c]]);export{S as __pageData,f as default};
