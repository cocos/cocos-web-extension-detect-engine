## web-extension-detect-engine

A chrome-extension to detect the facebook instant game's engine

## Load extension and run

Download and open chrome => More Tools => Extensions
=> Load unpacked extension => load this extension

Open facebook instant game => engine information show in top 
**NOTE**
If you can't get engine information, please click PLAY or 马上玩

## Documentation
 
 ## manifest.json:
content_scripts: 注入脚本
  --matches: 脚本注入的url
  --js: 运行的脚本
  --all_frames: 为true可注入所有的iframe

permissions: 允许运行插件的url

 ## contentscript.js:
 创建一个script元素将所需要注入的script写入
