const workSection=document.getElementById('workexp');

const progressBar=document.querySelector('.wbarcontainer::before');


function showProgress(){
  


}





window.addEventListener('scroll',()=>{

const sectionPos = workSection.getBoundingClientRect().top;
// const sectionPos1 = workSection.getBoundingClientRect().bottom;
const screenPos=window.innerHeight;

if(sectionPos < screenPos){
    showProgress();
    // console.log(screenPos);
    // console.log(sectionPos);
}
// if(sectionPos<0){
//     console.log("hide progress")
// }

else{
    // console.log(screenPos);
    // console.log(sectionPos);
    hideProgress();
}
  


})