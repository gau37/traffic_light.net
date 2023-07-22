"use strict";

window.onload = function() {

const main = document.querySelector('main');
const article = document.querySelector('article');

main.insertAdjacentHTML(
  'beforebegin', 
  '<header><h1 class="image_title"><a href="https://gau37.github.io/traffic_light.net/"><img src="https://gau37.github.io/traffic_light.net/pictures/icon.png" alt="traffic_light_" /></a></h1><nav class="pc_nav"><ul class="menu"><li><a href="#" class="mein">概要</a><ul class="menu_2"><li><a href="https://gau37.github.io/traffic_light.net/%E6%A6%82%E8%A6%81/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB">プロフィール</a></li><li><a href="https://gau37.github.io/traffic_light.net/%E6%A6%82%E8%A6%81/%E3%81%93%E3%81%93%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">ここについて</a></li></ul></li><li><a href="#" class="mein">記録</a><ul class="menu_2"><li><a href="#">独り言</a></li><li><a href="#">制作物</a></li><li><a href="#">更新履歴</a></li></ul></li></ul></nav></header>');


article.insertAdjacentHTML(
  'afterend',
  '<footer><p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />このサイト内のコンテンツは <a style="text-decoration: none; color: blue" rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。</p></footer>');

};
