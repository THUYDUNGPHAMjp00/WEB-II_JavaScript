{
//element
const DOC = document;
/*作品名の要素を取得る*/
const USER_NAME_FIELD = DOC.querySelector("#user_name");
console.log(user_name);
/*作品者名の要素を取得る*/
const AUTHOR_NAME_FIELD = DOC.querySelector("#author_name");
/*作品URLの要素を取得る*/
const PRODUCT_URL_FIELD = DOC.querySelector("#product_url");
/*動画URLの要素を取得る*/
const VIDEO_URL_FIELD = DOC.querySelector("#video_url");
/*カテゴリーの要素を取得る*/
const PRODUCT_CATEGORY_FIELD = DOC.querySelector("#product_category");
/*説明の要素を取得る*/
const DESCRIPTION_FIELD = DOC.querySelector("#description");


const BTN = DOC.querySelector("[type=submit]");
//入力ボックスの初期化
USER_NAME_FIELD.value = sessionStorage.getItem("user_name");
AUTHOR_NAME_FIELD.value = sessionStorage.getItem("author_name");
PRODUCT_URL_FIELD.value = sessionStorage.getItem("product_url");
VIDEO_URL_FIELD.value = sessionStorage.getItem("video_url");
DESCRIPTION_FIELD.value = sessionStorage.getItem("description");
//PRODUCT_CATEGORY_FIELD.value = sessionStorage.getItem("product_category");

BTN.addEventListener('click',(e) => {
   e.stopImmediatePropagation();
   e.preventDefault();

   let user_name = USER_NAME_FIELD.value; //作品名
   //TODO:debug
   console.log(user_name);
   //全データ分console.logで表示してみる
   let author_name = AUTHOR_NAME_FIELD.value;
   console.log(author_name);
   let product_url = PRODUCT_URL_FIELD.value;
   console.log(product_url);
   let video_url = VIDEO_URL_FIELD.value;
   console.log(video_url);
   let description = DESCRIPTION_FIELD.value;
   console.log(description);

});
}