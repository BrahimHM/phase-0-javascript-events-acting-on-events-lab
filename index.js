// Your code here
const moveDodgerLeft=()=>{
    const dodger = document.getElementById('dodger')
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left>0){
    dodger.style.left = `${left - 1}px`;
    }else{
    dodger.style.left = `${left}px`;
    }  

}

const moveDodgerRight=()=>{
    const dodger = document.getElementById('dodger')
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left<360){
        dodger.style.left = `${left + 1}px`;
    }else{
        dodger.style.left = `${left}px`;
    }
}
            
      