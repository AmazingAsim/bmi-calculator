function cal(){
    let height=parseFloat(document.getElementById('height').value)
    let weight=parseFloat(document.getElementById('weight').value)
    let name=(document.getElementById('name').value)

    let bmi=weight/(height*height)

    alert(bmi)
  
  }
  

  function calunit(){
    let feet=parseFloat(document.getElementById('feet').value)
    let inches=parseFloat(document.getElementById('inches').value)
    let meters=(feet*0.3048)+(inches*0.0254)
    document.getElementById('meters').innerHTML=meters;
  }
  