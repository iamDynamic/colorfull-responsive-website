if(navigator.onLine){
          console.log("you are online")
}else{
          console.log("you are ofline")
          alert("you are ofline")
          document.querySelector("body").innerHTML = "<h1 style='font-size:100px;'>you are ofline</h1>"
}