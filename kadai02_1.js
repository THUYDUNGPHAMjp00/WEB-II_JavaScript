{
    const DOC = document;
    DOC.onmousemove = (event)=>{
        DOC.querySelector('#client-x').value = event.clientX;
         // TODO:Y
        DOC.querySelector('#client-y').value = event.clientY;
       
        DOC.querySelector('#screen-x').value = event.screenX;
         // TODO:Y
        DOC.querySelector('#screen-y').value = event.screenY;

        DOC.querySelector('#global-x').value = DOC.documentElement.scrollLeft + event.clientX;
        // TODO:Y
        DOC.querySelector('#global-y').value = DOC.documentElement.scrollTop + event.clientY;
        }
}