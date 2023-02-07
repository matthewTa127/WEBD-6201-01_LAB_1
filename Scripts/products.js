(function (){
    
    let mainContent = document.getElementById("main")
    mainContent.setAttribute("class", "container")

    let mainParagraph = document.createElement("p")
    mainParagraph.setAttribute("id", "MainParagraph")
    mainParagraph.setAttribute("class", "mt-3")

    mainParagraph.textContent = "Welcome to our products page, here you will see our products."


    mainContent.appendChild(mainParagraph)
   
    var img = new Image()
    img.setAttribute("width", "300")
    img.setAttribute("height", "300")
    img.src = 'https://purepng.com/public/uploads/large/purepng.com-fresh-applefoodsweettastyhealthyfruitappleleaf-981524677946vfurf.png';
    mainContent.appendChild(img)
        
    
   




})()
