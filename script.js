//$( window ).on("load", ()=>{
    $(".game-preview").outerHeight($(".game-preview").width()*1.5);
    console.log($(".game-preview").width())

    $( window ).on( "resize", ()=> {
        $(".game-preview").outerHeight($(".game-preview").width()*1.5);
        console.log($(".game-preview").width())
    })
//});