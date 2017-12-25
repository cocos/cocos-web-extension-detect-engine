## web-extension-detect-engine

A chrome-extension to detect the facebook instant game's engine

## Load extension and run

1. Download this extension and unpacked it: https://github.com/cocos-creator/web-extension-detect-engine/archive/master.zip

2. Open chrome => More Tools(更多工具) => Extensions(扩展程序)
=> Select the developer mode(开发者模式) => Load unpacked extension(加载已解压的扩展程序) => Load this extension

3. Open facebook instant game => Engine information show in top 
**NOTE**
If you can't get engine information, please click PLAY or 马上玩

## Documentation
 
 ## manifest.json:
content_scripts: injection script (注入脚本)

--matches: 脚本注入的url

--js: 运行的脚本

--all_frames: 为true可注入所有的iframe

permissions: 允许运行插件的url

 ## contentscript.js:
 创建一个script元素将所需要注入的script写入
