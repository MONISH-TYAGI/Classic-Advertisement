let check=false;
let scrollbarkadiv=document.getElementById("scrollbarkadiv");
let typeskadiv=document.getElementById("typeskadiv");
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