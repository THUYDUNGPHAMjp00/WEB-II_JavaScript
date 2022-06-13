{
    document.querySelector('#box1-bg-btn').onclick=(e)=>{
        let bg_color=document.querySelector('#set-bg-txt').value;
       //alert(bg_color);
        document.querySelector('#box1').style.backgroundColor = bg_color;
    }
}


{
    document.querySelector('#box2-color-btn').onclick=(e)=>{
        let moji_color=document.querySelector('#set-color-txt').value;
        //alert(moji_color);
        document.querySelector('#box2').style.color = moji_color;
    }
}


{
    document.querySelector('#box3-font-size-btn').onclick=(e)=>{
        let font_size=document.querySelector('#set-font-size-txt').value;
        document.querySelector('#box3').style.fontSize = font_size;
    }
}

{
    document.querySelector('#box4-border-btn').onclick=(e)=>{
        let line=document.querySelector('#set-border-txt').value;
        document.querySelector('#box4').style.Line = line;
    }
}






