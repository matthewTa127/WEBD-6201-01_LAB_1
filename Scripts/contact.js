(function(){
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