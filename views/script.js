function cal(){
    let height=parseFloat(document.getElementById('height').value)
    let weight=parseFloat(document.getElementById('weight').value)
    let name=(document.getElementById('name').value)

    let bmi=weight/(height*height)

    bmi=bmi.toFixed(3)

    findstatus(bmi)
   
  }


  function findstatus(bmi){
    let stat
 

   
    if(bmi<18.5){
      stat="you are underweight, so eat healthy and enough"
    }

    if(bmi>=18.5 && bmi<=24.9){
      stat="you are fit, keep it up"
    }

    if(bmi>24.9 && bmi<=29.9){
      stat="you are at pre obesity stage"
    }

    if(bmi>29.9 && bmi<=34.9){
      stat="you are at obesity level 1"
    }

    if(bmi>34.9 && bmi<=39.9){
      stat="you are at obesity level 2 "
    }

    if(bmi>39.9){
      stat="you are at obesity level 3 start doing exersise and eat healthy"
    }

    let answer=document.getElementById('bmi')
    answer.innerHTML=`hello ${name} your bmi score is ${bmi} hence ${stat}`


  
  }


  

  function calunit(){
    let feet=parseFloat(document.getElementById('feet').value)
    let inches=parseFloat(document.getElementById('inches').value)
    let meters=(feet*0.3048)+(inches*0.0254)
    document.getElementById('meters').innerHTML=meters;
  }
  