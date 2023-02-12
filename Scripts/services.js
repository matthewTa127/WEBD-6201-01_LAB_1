(function(){

    let mainContent = document.getElementById("main")
    mainContent.setAttribute("class", "container")

    let title = document.getElementById("title")
    title.textContent = "WEBD 6201 LAB 1 SERVICES"

    let firstHeading = document.createElement("h1")
    firstHeading.textContent = "Service 1: Web Design"
    let firstParagraph = document.createElement("p")
    firstParagraph.textContent = "Welcome to our services page, here you will see the services we provide. As you can see, we provide web design services to make your website pop"
    let secondHeading = document.createElement("h1")
    secondHeading.textContent = "Service 2: Mobile Development"
    let nextParagraph = document.createElement("p")
    nextParagraph.textContent = "We also provide mobile development services to allow your websites to be viewed on mobile devices efficiently and dynamically"
    let thirdHeading = document.createElement("h1")
    thirdHeading.textContent = "Service 3: Code Review"
    let thirdParagraph = document.createElement("p")
    thirdParagraph.textContent = "We also provide code review services. Give us your proprietary code that isn't working and we'll be able to find the bug for you."
    
    var img1 = new Image()
    img1.setAttribute("width", "200")
    img1.setAttribute("height", "200")
    img1.src = 'https://static.vecteezy.com/system/resources/previews/013/475/424/original/open-laptop-icon-illustration-png.png'
    var img2 = new Image()
    img2.setAttribute("width", "200")
    img2.setAttribute("height", "200")
    img2.src='https://cdn-icons-png.flaticon.com/512/0/191.png'
    var img3 = new Image()
    img3.setAttribute("width", "200")
    img3.setAttribute("height", "200")
    img3.src='https://www.nicepng.com/png/detail/861-8614750_code-icon-icon.png'
    
    mainContent.appendChild(firstHeading)
    mainContent.appendChild(firstParagraph)
    mainContent.appendChild(img1)
    mainContent.appendChild(secondHeading)
    mainContent.appendChild(nextParagraph)
    mainContent.appendChild(img2)
    mainContent.appendChild(thirdHeading)
    mainContent.appendChild(thirdParagraph)
    mainContent.appendChild(img3)

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

    







}())