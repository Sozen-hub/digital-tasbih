 const inputBtn =document.getElementById('input');
   const increaseBtn =document.getElementById('increase');
    const decreaseBtn =document.getElementById('decrease');
     const resetBtn =document.getElementById('reset');

     let count =0;

     increaseBtn.addEventListener('click' , () => {
     count++
     inputBtn.textContent =count 

     });
      decreaseBtn.addEventListener('click' , () => {
     count--
     inputBtn.textContent =count 
     
     });
 resetBtn.addEventListener('click' , () => {
     count = 0;
     inputBtn.textContent =count 
     
     });