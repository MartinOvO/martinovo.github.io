# 信息收集

## 信息收集大纲

1. 信息收集概述
2. DNS 域名解析原理 - 收集网站域名解析记录
3. 使用 Maltego 收集子域名信息
4. 使用 Shodan 暗黑谷歌搜索引擎收集信息
5. Google 搜索引擎使用技巧
6. 常见最新漏洞公布网站

## 信息收集内容

1. IP 地址
2. 域名信息
3. 网站指纹信息
4. 网站目录结构
5. 网站后台地址
6. 网站数据库信息
7. 网站敏感文件
8. 网站漏洞信息
9. 网站安全防护措施
10. 网站管理员信息
11. 网站服务器信息
12. 目标系统技术架构

## 信息用途

1. 确定攻击目标
2. 确定攻击方法
3. 确定攻击工具
4. 确定攻击时间
5. 确定攻击地点
6. 确定攻击目标价值

## 信息收集方法

被动信息收集：通过搜索引擎、社交平台、公开信息等渠道获取目标信息。不与目标系统直接交互，不留下痕迹。

主动信息收集：通过扫描、渗透测试等方式获取目标信息。

## 获取目标的 IP 地址

#### 通过 Ping 命令获取网址解析的 IP 地址

```bash
ping www.baidu.com
```

#### 通过 nslookup 命令获取网址解析的 IP 地址

```bash
nslookup www.baidu.com
```

#### 通过 dig 命令获取网址解析的 IP 地址

```bash
dig www.baidu.com
```

## 获取服务器中开放的服务端口

#### 通过 nmap 命令获取服务器中开放的服务端口

```bash
nmap -p 1-65535 -sV -T4 192.168.1.1
```

#### 通过 netcat 命令获取服务器中开放的服务端口

```bash
nc -nv 192.168.1.1 80
```

#### 通过 telnet 命令获取服务器中开放的服务端口

```bash
telnet 192.168.1.1 80
```

## 获取服务器操作系统信息