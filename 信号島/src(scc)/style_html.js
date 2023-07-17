"use strict";

window.onload = function() {

const main = document.querySelector('main');
const article = document.querySelector('article');

main.insertAdjacentHTML('beforebegin', '<header><h1 class="image_title"><a href="https://gau37.github.io/traffic_light.net/"><img src="信号島/pictures/icon.png" alt="traffic_light" /></a></h1><nav class="pc_nav"><ul class="menu"><li><a href="#" class="mein">概要</a><ul class="menu_2"><li><a href="#">プロフィール</a></li><li><a href="#">ここについて</a></li></ul></li><li><a href="#" class="mein">記録</a><ul class="menu_2"><li><a href="#">独り言</a></li><li><a href="#">制作物</a></li><li><a href="#">更新履歴</a></li></ul></li></ul></nav></header>');


article.insertAdjacentHTML('afterend', '<footer><p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />このサイト内のコンテンツは <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。</p></footer>');

};
