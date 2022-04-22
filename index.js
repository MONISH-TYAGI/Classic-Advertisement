let check=false;
let scrollbarkadiv=document.getElementById("scrollbarkadiv");
let typeskadiv=document.getElementById("typeskadiv");
let firstblock=document.getElementById("firstblock");
let secondblock=document.getElementById("secondblock");
let thirdblock=document.getElementById("thirdblock");
scrollbarkadiv.addEventListener("click", function () {
    check=true;
    scrollbarkadiv.style.display="none";
    typeskadiv.style.display="flex";

})
let close=document.getElementById("close");
close.addEventListener("click", function () {
check=false;
    scrollbarkadiv.style.display="flex";
    typeskadiv.style.display="none";

})
// let google=document.getElementsByClassName("fa-google");
// google.addEventListener("click",function(){
         
// })
// window.addEvent('scroll',function(e) {
//     //do stuff
// if(check==true)
// close.click();
// }
// );
window.addEventListener('scroll',function(e) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // enter code here
            if(check==true)
close.click();
        }
});
firstblock.addEventListener("click",function(){
window.open('https://monish-tyagi.github.io/Digital-Marketing-Classic-Advertisement/');
})
secondblock.addEventListener("click",function(){
    window.open('https://monish-tyagi.github.io/Flex-Advertising-Classic-Advertisement/');
    })
thirdblock.addEventListener("click",function(){
    window.open('https://monish-tyagi.github.io/Professional-Tools-Classic-Advertisement/');
    })

    
    let typeskipic=document.getElementById("typeskipic");
function changepic1(){
typeskipic.src="./digitalmarketingis.png";
// typeskipic.style.marginLeft="0%"; 
}
function changepic2(){
    typeskipic.src="./flex.jpg";
    // typeskipic.style.marginLeft="0%"; 
    }
    function changepic3(){
        typeskipic.src="./profess.png";
        // typeskipic.style.padding="2% 2%" ;
        // typeskipic.style.marginLeft="5%"; 
        }