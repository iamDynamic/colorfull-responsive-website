function website() {
   var section = document.getElementById("section")
   var typeofcolor = document.getElementById("typeofcolor")
   var text = document.getElementById("text")
   var submit = document.getElementById("submit")
   var article = document.getElementById("article")
   var name = document.getElementById("name")
   var hex = document.getElementById("hex")
   var rgb = document.getElementById("rgb")
   var hsl = document.getElementById("hsl")
   var cmyk = document.getElementById("cmyk")
   var hsv = document.getElementById("hsv")
   submit.addEventListener("click", () => {
      if (typeofcolor.value == "hex" || typeofcolor.value == "Hex" && text.value != "") {
         section.remove()
         article.classList.remove("hide")
         article.classList.add("show")
         async function ApiReqest_HEX() {
            var url = `https://www.thecolorapi.com/id?hex=${text.value}`
            var ftch = await fetch(url)
            var res = await ftch.json()
            console.log(res)
            name.innerHTML = `name : ${res.name.value}`
            hex.innerHTML = `Hex: ${res.hex.value}`
            rgb.innerHTML = `rgb: ${res.rgb.value}`
            hsl.innerHTML = `hsl : ${res.hsl.value}`
            cmyk.innerHTML = `cmyk : ${res.cmyk.value}`
            hsv.innerHTML = `hsv : ${res.hsv.value}`
            // ========================================== \\
            console.log(`name : ${res.name.value}`)
            console.log(`Hex: ${res.hex.value}`)
            console.log(`rgb: ${res.rgb.value}`)
            console.log(`hsl : ${res.hsl.value}`)
            console.log(`cmyk : ${res.cmyk.value}`)
            console.log(`hsv : ${res.hsv.value}`)
         }
         ApiReqest_HEX()
      }
      if (typeofcolor.value == "rgb" || typeofcolor.value == "Rgb" && text.value != "") {
         section.remove()
         article.classList.remove("hide")
         article.classList.add("show")
         async function ApiReqest_HEX() {
            var url = `https://www.thecolorapi.com/id?rgb=${text.value}`
            var ftch = await fetch(url)
            var res = await ftch.json()
            console.log(res)
            name.innerHTML = `name : ${res.name.value}`
            hex.innerHTML = `Hex: ${res.hex.value}`
            rgb.innerHTML = `rgb: ${res.rgb.value}`
            hsl.innerHTML = `hsl : ${res.hsl.value}`
            cmyk.innerHTML = `cmyk : ${res.cmyk.value}`
            hsv.innerHTML = `hsv : ${res.hsv.value}`            
            console.log(`name : ${res.name.value}`)
            console.log(`Hex: ${res.hex.value}`)
            console.log(`rgb: ${res.rgb.value}`)
            console.log(`hsl : ${res.hsl.value}`)
            console.log(`cmyk : ${res.cmyk.value}`)
            console.log(`hsv : ${res.hsv.value}`)
         }
         ApiReqest_HEX()
      }
      if (typeofcolor.value == "hsl" || typeofcolor.value == "Hsl" && text.value != "") {
         section.remove()
         article.classList.remove("hide")
         article.classList.add("show")
         async function ApiReqest_HEX() {
            var url = `https://www.thecolorapi.com/id?hsl=${text.value}`
            var ftch = await fetch(url)
            var res = await ftch.json()
            console.log(res)
            name.innerHTML = `name : ${res.name.value}`
            hex.innerHTML = `Hex: ${res.hex.value}`
            rgb.innerHTML = `rgb: ${res.rgb.value}`
            hsl.innerHTML = `hsl : ${res.hsl.value}`
            cmyk.innerHTML = `cmyk : ${res.cmyk.value}`
            hsv.innerHTML = `hsv : ${res.hsv.value}`
            console.log(`name : ${res.name.value}`)
            console.log(`Hex: ${res.hex.value}`)
            console.log(`rgb: ${res.rgb.value}`)
            console.log(`hsl : ${res.hsl.value}`)
            console.log(`cmyk : ${res.cmyk.value}`)
            console.log(`hsv : ${res.hsv.value}`)            
         }
         ApiReqest_HEX()
      }
      if (typeofcolor.value == "cmyk" || typeofcolor.value == "Cmyk" && text.value != "") {
         section.remove()
         article.classList.remove("hide")
         article.classList.add("show")
         async function ApiReqest_HEX() {
            var url = `https://www.thecolorapi.com/id?cmyk=${text.value}`
            var ftch = await fetch(url)
            var res = await ftch.json()
            console.log(res)
            name.innerHTML = `name : ${res.name.value}`
            hex.innerHTML = `Hex: ${res.hex.value}`
            rgb.innerHTML = `rgb: ${res.rgb.value}`
            hsl.innerHTML = `hsl : ${res.hsl.value}`
            cmyk.innerHTML = `cmyk : ${res.cmyk.value}`
            hsv.innerHTML = `hsv : ${res.hsv.value}`
            console.log(`name : ${res.name.value}`)
            console.log(`Hex: ${res.hex.value}`)
            console.log(`rgb: ${res.rgb.value}`)
            console.log(`hsl : ${res.hsl.value}`)
            console.log(`cmyk : ${res.cmyk.value}`)
            console.log(`hsv : ${res.hsv.value}`)            
         }
         ApiReqest_HEX()
      }
      if (typeofcolor.value == "hsv" || typeofcolor.value == "Hsv" && text.value != "") {
         section.remove()
         article.classList.remove("hide")
         article.classList.add("show")
         async function ApiReqest_HEX() {
            var url = `https://www.thecolorapi.com/id?hsv=${text.value}`
            var ftch = await fetch(url)
            var res = await ftch.json()
            console.log(res)
            name.innerHTML = `name : ${res.name.value}`
            hex.innerHTML = `Hex: ${res.hex.value}`
            rgb.innerHTML = `rgb: ${res.rgb.value}`
            hsl.innerHTML = `hsl : ${res.hsl.value}`
            cmyk.innerHTML = `cmyk : ${res.cmyk.value}`
            console.log(`name : ${res.name.value}`)
            console.log(`Hex: ${res.hex.value}`)
            console.log(`rgb: ${res.rgb.value}`)
            console.log(`hsl : ${res.hsl.value}`)
            console.log(`cmyk : ${res.cmyk.value}`)
         }
         ApiReqest_HEX()
      }
   })
}
website()