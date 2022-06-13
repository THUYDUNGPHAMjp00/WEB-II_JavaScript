{
//定義
//table(todo)
const TODO_LIST_WRAP  = document.querySelector(".todo");
//tableのtbody
const TODO_LIST_ITEM_WRAP = TODO_LIST_WRAP.querySelector("tbody");
//追加ボタン
const ADDBUTTON
= document.querySelector("[type=submit]");
//コメントボックス
const COMMENT_FIELD
= document.querySelector("[name=comment]");

//todo itemp templete
//行
const TODO_LIST_ITEM_TEMPLATE = document.createElement("tr");
//セル1(コメント)
const COMMENT_COL = document.createElement("td");
//セル2ボタン入れる
const CONTROL_COL = document.createElement("td");
//ボタン
const REMOVE_BUTTON = document.createElement("button");

//セル1（コメント用）にクラス名設定
COMMENT_COL.setAttribute("class","comment");  
//削除ボタンの表示文字を設定
REMOVE_BUTTON.innerText ="削除";
//削除ボタンにクラス名を設定
REMOVE_BUTTON.setAttribute("class","remove");

//セル2(ボタン入れる用)に
CONTROL_COL.setAttribute("class","control");
//セル2(ボタンに入れる用)に削除ボタンを追加
CONTROL_COL.append(REMOVE_BUTTON);

TODO_LIST_ITEM_TEMPLATE.append(COMMENT_COL);
TODO_LIST_ITEM_TEMPLATE.append(CONTROL_COL);

//追加ボタン押された時
ADDBUTTON.addEventListener("click",(event) =>{
    event.preventDefault(); //ブラウザのデフォルトの処理を無効
    const row = TODO_LIST_ITEM_TEMPLATE.cloneNode(true);
    row.querySelector(".comment").innerText = COMMENT_FIELD.value;
    TODO_LIST_ITEM_WRAP.append(row);
});
//削除ボタンを押された時
document.querySelector(".todo").addEventListener("click",(event) =>{
    const element = event.target;
    if(element.classList.contains("remove")){
        const row = element.parentNode.parentNode;
        row.remove();  
    }
});
}