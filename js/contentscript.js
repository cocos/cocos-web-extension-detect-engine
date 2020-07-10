(function () {
  let script = document.createElement('script');

  function main() {
    const ID = 'web-game-engine-detector';
    const Z_INDEX = 999;

    let item = document.getElementById(ID);
    if (!item) {
      item = document.createElement('h3');
      item.id = ID;
      item.style.color = '#0000FF';
      item.style.backgroundColor = 'white';
      item.style.position = 'relative';
      item.style.zIndex = Z_INDEX;
    }

    const NAME_SPACE = 0;
    const ENGINE_NAME = 1;
    const VERSION_KEY = 2;

    let engines = [
      ['phina', 'phina', 'VERSION'],
      ['Phaser', 'Phaser', 'VERSION'],
      ['PIXI', 'PIXI', 'VERSION'],
      ['createjs', 'createjs'],
      ['THREE', 'THREE'],
      ['pc', 'PlayCanvas', 'version'],
      ['wwf', 'wwf', 'version'],
      ['CocosEngine', 'Cocos'],
      ['GC', 'Game Closure', ''],
      ['egret', 'Egret', 'egret.Capabilities.engineVersion'],
      ['cr_getC2Runtime', 'Construct 2', ''],
      ['Laya', 'Laya', 'version'],
      ['UnityLoader', 'Unity WebGL', ''],
      ['lime', 'OpenFl', ''],
    ];

    let engine_name = '';
    let engine_version = '';

    for (let i = 0; i < engines.length; i++) {
      if (window[engines[i][NAME_SPACE]]) {
        let engine = window[engines[i][NAME_SPACE]];
        engine_name = engines[i][ENGINE_NAME];
        let versionKey = engines[i][VERSION_KEY];
        if (versionKey) {
          if (engine[versionKey]) {
            engine_version = engine[versionKey];
          }
          else {
            try {
              let v = Function ('return ' + versionKey)();
              if (v) engine_version = v;
            }
            catch (e) {}
          }
        }
        else if (engines[i][ENGINE_NAME] === 'Cocos') {
          if (engine[0] !== 'C') {
            engine_name = 'Cocos Creator ';
          }
          engine_version = engine;
        }

        break;
      }
    }

    let canvas = document.querySelector('canvas');
    let hasGameCanvas = canvas && canvas.width > 200 && canvas.height > 200;

    if (!engine_name && !hasGameCanvas){
      item.innerText = '当前网页层级不含游戏或者游戏只用 DOM 实现';
    }
    else {
      item.innerText = '当前网页层级所用引擎是：' + (engine_name || '未知引擎') + ' ' + engine_version;
    }

    document.body.insertBefore(item, document.body.firstChild);
  }

  script.innerText = main.toString() + '; main(); var t1 = setInterval(main, 1000);';
  /* script.innerText = main.toString() + '; main();'; */

  document.body.appendChild(script);
})();
