(function () {
  let script = document.createElement('script');

  function main() {
    const ID = 'web-game-engine-detector';
    const Z_INDEX = 1;

    let item = document.getElementById(ID);
    if (!item) {
      item = document.createElement('h2');
      item.id = ID;
      item.style.zIndex = Z_INDEX;
      item.style.position = 'absolute';
      item.style.color = '#FF0000';
      item.style.backgroundColor = 'white';
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
      ['pc', 'playcanvas', 'version'],
      ['wwf', 'wwf', 'version'],
      ['CocosEngine', 'Cocos'],
      ['GC', 'Game Closure', ''],
      ['egret', 'Egret', 'egret.Capabilities.engineVersion'],
      ['cr_getC2Runtime', 'Construct 2', ''],
      ['Laya', 'Laya', 'version'],
    ];

    let engine_name = '';
    let engine_version = '';

    if (!document.querySelector('canvas') || document.querySelector('canvas').width < 200 || document.querySelector('canvas').height < 200 ){
      engine_name = 'DOM';
      /*item.style.zIndex = Z_INDEX - 1;    don't cover other iframe */
    }

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
          else {
            engine_name = '';
          }

          engine_version = engine;
        }

        break;
      }
    }

    item.innerText = '该游戏所用引擎是: ' + ((engine_name + ' ' + engine_version) || '未知引擎');
    if (!engine_name) {
      /*item.style.zIndex = Z_INDEX - 1;    don't cover other iframe */
    }
    document.body.insertBefore(item, document.body.firstChild);
  }

  script.innerText = main.toString() + '; main(); var t1 = setInterval(main, 1000);';
  document.body.appendChild(script);
})();
