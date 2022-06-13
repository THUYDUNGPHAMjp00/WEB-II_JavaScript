{
//
    const content = document.querySelector('#content');
    const blank = content.querySelectorAll('.blank')


blank.forEach((element) => {
        // element がクリックされた時
        /* TODO:1 */ element.addEventListener('click',(event) => {
         /* TODO:2 */ event.preventDefault();
          /* TODO:3 新しいを聞く*/ window.open(event.currentTarget.href,'kadai03');
    })
 

}

);
}