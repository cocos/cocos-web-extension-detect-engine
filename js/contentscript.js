var script = document.createElement('script');
console.log(script);
script.innerText = "var item = document.createElement('h1');";
script.innerText += "item.style['z-index'] = '999';";
script.innerText += "item.style.position = 'absolute';";
script.innerText += "item.style.color = '#FF0000';";
script.innerText += "item.innerText ='该游戏所用引擎是' + (window.CocosEngine || '其他引擎');";
script.innerText += "document.body.insertBefore(item, document.body.firstChild);";
document.body.appendChild(script);
