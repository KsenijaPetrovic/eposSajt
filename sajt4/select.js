window.totalIt= function() {
    var input = document.getElementsByName("proizvod");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
      document.getElementById("total").value = total.toFixed(2) + "RSD";
  }
  function provera(){
    var x,y,z;
    x = document.getElementById("textIme").value
    y = document.getElementById("textGrad").value
    z = document.getElementById("textAdresa").value
  
    if((x == "") || (y == "") || (z == "")){
      alert("Polja kao što su Ime i prezime, grad i adresa moraju biti popunjena!");
      return false;
    }else{
      return true;
    }
  }
  function uslov(){
    var checkBox = document.getElementById("check");
    var text = document.getElementById("text");
    if(checkBox.checked == true){
      text.style.display = "block";
    }else{
      text.style.display = "none";
    }
  }
  function handleAClick(event){
    event.preventDefault();
    alert("Već se nalazite na ovoj stranici!");
}


  