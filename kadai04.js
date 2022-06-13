{
//TODO:sliderの要件を要件を取得して、定義に入れる。
const SLIDER=document.querySelector('#slider');

//TODO:sliderの配下のliを取得して、定義に
const SLIDER_ITEM=content.querySelectorAll('li');

const INTERVAL = 10000;
let currentIndex = 0;

setInterval(
    () => {

let nextIndex=(currentIndex < SLIDER_ITEM.length - 1 ) ?
currentIndex + 1 : 0;
//表示切り替え
SLIDER_ITEM[currentIndex].style.display ='none';
SLIDER_ITEM[nextIndex].style.display ='block';
//現在のインデックスの更新
currentIndex=nextIndex;
},
INTERVAL
);
}