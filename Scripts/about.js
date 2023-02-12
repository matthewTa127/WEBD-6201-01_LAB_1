(function(){

    let mainContent = document.getElementById("main")
    mainContent.setAttribute("class", "container")

    let title = document.getElementById("title")
    title.textContent = "WEBD 6201 LAB 1 ABOUT US"


    let firstParagraph = document.createElement("p")
    firstParagraph.textContent = "Essam Fendish, Computer Programming Student, 26 years of age, avid Dungeons and Dragons player"
    let firstHeading = document.createElement("h1")
    firstHeading.textContent = "Essam Fendish"
    var essamPhoto = new Image()
    essamPhoto.setAttribute("width", "400")
    var essamResume = new Image()
    essamResume.setAttribute("width", "500")

    essamPhoto.src = "Photos/e94163e1-6313-4a4c-9e2d-238c5e9c443f.jpg"
    essamResume.src = "Photos/EssamFendishResume_page-0001.jpg"


    mainContent.appendChild(firstHeading)
    mainContent.appendChild(firstParagraph)
    mainContent.appendChild(essamPhoto)
    mainContent.appendChild(essamResume)

   
   


    
    




































}())