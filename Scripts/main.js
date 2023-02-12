(function (){
    
        let mainContent = document.getElementById("main")
        mainContent.setAttribute("class", "container")

        let title = document.getElementById("title")

        title.textContent = "WEBD 6201 LAB 1 HOMEPAGE"

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")

        mainParagraph.textContent = "Welcome to our website for WEB6201 Lab 1! Here you will find a plethora of interesting information as well as the use of Javascript and HTML to produce the content you see on your screen right now. You can also click through our services and products to see exactly what we provide and how it can serve your needs."
    

        mainContent.appendChild(mainParagraph)
        

        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/pink-sky-background-with-white-clouds-fantasy-cloudy-sky-abstract-image-use-background_156745-959.jpg?w=2000')"
        let bottomNavBar = document.createElement("NAV")
        bottomNavBar.setAttribute("class", "navbar fixed-bottom bg-light")
        bottomNavBar.textContent = "@Copyright 2023"
        mainContent.appendChild(bottomNavBar)

        let products = (document.getElementById("products").textContent)
        console.log(products)
        switch (products) {
            case "Products":
                document.getElementById("products").innerHTML = `<i class="fa-solid fa-bag-shopping"></i>Projects`
                break;
        }
     

        
        
        let humanResourcesIcon = document.createElement("i")
        humanResourcesIcon.setAttribute("class", "fa-solid fa-person")
        
        let navBar = document.getElementById("navbarNav")


        let humanResourcesLink = document.createElement("a")
        let humanResources = document.createElement("li")
        humanResources.setAttribute("class", "nav-item")
        humanResourcesLink.innerHTML = "<i class = fa-solid fa-person></i>Human Resources"
        humanResourcesLink.setAttribute("href", "")
        humanResourcesLink.setAttribute("class", "nav-link")
        humanResourcesLink.insertBefore(humanResourcesIcon, humanResourcesLink.children[0])
        humanResources.appendChild(humanResourcesLink)
        navBar.insertBefore(humanResources, navBar.children[4])
         
       

        
        
        
        
      

      
        

        

        
  


})()
