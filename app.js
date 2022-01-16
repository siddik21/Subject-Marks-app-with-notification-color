const start = document.getElementById('start');
const output = document.getElementById('output');
const mark = document.getElementById('mark');



start.addEventListener('click', function(){

    
      if(mark.value<=100 && mark.value>=80){
          output.innerHTML="Congratulation, You Are Pass and Get A+";
          output.style.color= "blue";
      }
      else if(mark.value>=70 && mark.value<=79){
        output.innerHTML="You Are Pass and Get A";
        output.style.color= "yellow";
      }
      else if(mark.value>=60 && mark.value<=69){
        output.innerHTML="You Are Pass and Get A-";
        output.style.color= "pink";
      }
      else if(mark.value>=50 && mark.value<=59){
        output.innerHTML="You Are Pass and Get B";
        output.style.color= "orange";
      }
      else if(mark.value>=40 && mark.value<=49){
        output.innerHTML="You Are Pass and Get C";
        output.style.color= "black";
      }
      else if(mark.value>=33 && mark.value<=39){
        output.innerHTML="You Are Pass and Get D";
        output.style.color= "green";
      }
      else if(mark.value>=0 && mark.value<=32){
        output.innerHTML="Oh Sorry You Are Fail. Better Next Time.";
        output.style.color= "red";
      }
          
    

});

