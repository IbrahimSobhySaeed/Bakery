
 
let mainInfo=$("#Info").offset().top;

$(window).scroll(function(){

    let SecollPage=$(window).scrollTop();

if( SecollPage >=  mainInfo )
{

$("#Navbar").css("backgroundColor","rgba(0,0,0,.5)");
$("#btnUp").fadeIn(500);
}
else{
    
$("#Navbar ").css("backgroundColor","transparent");
$("#btnUp").fadeOut(500);
}


})



$("#btnUp").click(function(){

    $("body,html").animate({scrollTop:"0"},1000);
});




/*------------------change color---------------*/
let colItem= $(".color-item")
colItem.eq(0).css("backgroundColor","green");
colItem.eq(1).css("backgroundColor","#0c9");
colItem.eq(2).css("backgroundColor","orange");
colItem.eq(3).css("backgroundColor","yellow");
colItem.eq(4).css("backgroundColor","red");



colItem.click(function(){

    let col=$(this).css("backgroundColor");
    $("body").css("color",col);
});
/********************************************** */


$("a").click(function(){

let aHrf= $(this).attr("href");
let SectionOffset =$(aHrf).offset().top;
$("body,html").animate({scrollTop:SectionOffset},1000);


});
/************************************* */

$("#option i").click(function(){



let optionWidth=$(".color-box").outerWidth();


if( $("#option").css(`left`) == "0px"){

    $("#option").animate({left:`-${optionWidth}`},500);

}
else
{
    $("#option").animate({left:"0px"},500);

}



});










