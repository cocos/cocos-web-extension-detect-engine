let script = document.createElement('script');

function main() {
  let item = document.createElement('h1');
  item.style['z-index'] = '999';
  item.style.position = 'absolute';
  item.style.color = '#FF0000';

  let engine_judge = false;
  let engine = [
    [window.phina, 'phina: ', 'VERSION'],
    [window.Phaser, 'Phaser: ', 'VERSION'],
    [window.PIXI, 'PIXI: ', 'VERSION'],
    [window.createjs, 'createjs: ', 'EaselJS', 'PreloadJS', 'SoundJS', 'TweenJS'],
    [window.THREE, 'THREE'],
    [window.pc, 'playcanvas :', 'version'],
    [window.wwf, 'wwf: ', 'version'],
    [window.CocosEngine, 'Cocos:']
  ];

  item.innerText = '该游戏所用引擎是: ';

  for (var i = 0; i < 8; i++) {
    if (engine[i][0]) {
      engine_judge = true;

      if (engine[1][0] && engine[2][0]) {
        item.innerText += engine[1][1] + engine[1][0][engine[1][2]] + ' ';

        if (engine[2][0][engine[2][2]]) {
          item.innerText += engine[2][1] + engine[2][0][engine[2][2]];
        }
        engine[2][0] = 0;
      }

      else if (engine[3][0]) {
        item.innerText += engine[3][1];

        for (var j = 2; j < engine[i].length; j++) {
          if (engine[3][0][engine[3][j]]) {
            item.innerText += engine[3][j] + engine[3][0][engine[i][j]].version + ' ';
          }
        }
      }

      else if (engine[7][0]) {
        item.innerText += engine[i][1] + engine[i][0];
      }

      else {
        item.innerText += engine[i][1] + engine[i][0][engine[i][2]];
      }
    }
  }
  if (!engine_judge) { item.innerText += '其他引擎' };
  document.body.insertBefore(item, document.body.firstChild);
}

script.innerText = main.toString() + ';main();'
document.body.appendChild(script);