let script = document.createElement('script');

function main() {
  let item = document.createElement('h1');
  item.style['z-index'] = '999';
  item.style.position = 'absolute';
  item.style.color = '#FF0000';

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
    ['CocosEngine', 'Cocos']
  ];

  let engine_name = '';
  let engine_version = '';

  for (let i = 0; i < engines.length; i++) {

    if (window[engines[i][NAME_SPACE]]) {
      let engine = window[engines[i][NAME_SPACE]];
      engine_name = engines[i][ENGINE_NAME];

      if (engine[engines[i][VERSION_KEY]]) {
        engine_version = engine[engines[i][VERSION_KEY]];
      }
      else {
        if (engines[i][ENGINE_NAME] == 'Cocos') {
          if (engine.substring(0, 1) != 'C') {
            engine_name = 'Cocos creator ';
          }
          else {
            engine_name = '';
          }

          engine_version = engine;
        }
      }
      break;
    }
  }

  item.innerText = '该游戏所用引擎是: ' + ((engine_name + engine_version) || '未知引擎');
  document.body.insertBefore(item, document.body.firstChild);
}
setTimeout(function () {
  script.innerText = main.toString() + ';main();'
  document.body.appendChild(script);
}, 3000);