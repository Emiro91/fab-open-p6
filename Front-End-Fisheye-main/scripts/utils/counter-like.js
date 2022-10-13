document.getElementById("like").addEventListener('click', function(){
    var i = document.getElementById("like").innerHTML;
    i++;
      document.getElementById("like").innerHTML = i;
  })
  console.log