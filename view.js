AFRAME.registerComponent("house-view", {
    init:function(){
        this.createview();
        this.HandleMouseEnterEvent();
    },
    tick:function(){
        const houseContainer = document.querySelector("#house-container");
        
        
        const { state } = houseContainer.getAttribute("cursor-listener");
    },
    createview:function(homeSideViewContainer,localitySideViewContainer,gardenSideViewContainer){
        const homeViewContainer = document.querySelector("#home-view-container");
        const localityViewContainer = document.querySelector("#locality-view-container");
        const gardenViewContainer = document.querySelector("#garden-view-container");

        const home_position = {
            x:0,
            y:30,
            z:-70
        };
        const homeEl = this.createHomeVeiwThumbnail(home_position);
        homeViewContainer.appendChild(homeEl);

        const locality_position = {
            x:2.5,
            y:30,
            z:-40
        };
        const localityEl = this.createLocalityVeiwThumbnail(locality_position);
        localityViewContainer.appendChild(localityEl);

        const garden_position = {
            x:5,
            y:30,
            z:-20
        };
        const gardenEl = this.createGardenVeiwThumbnail(garden_position);
        gardenViewContainer.appendChild(gardenEl);
    },
    createHomeVeiwThumbnail:function(home_position){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `house_icon`);
        entityEl.setAttribute("geometry", {
            primitive:"circle",
            radius:"2.5"
        });
        entityEl.setAttribute("material", {
            src:"house_icon.png",
            opacity:1
        });
        entityEl.setAttribute("position", home_position);
        entityEl.setAttribute("cursor-listener",{});

        return entityEl;
    },
    createLocalityVeiwThumbnail:function(locality_position){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `locality_icon`);
        entityEl.setAttribute("geometry", {
            primitive:"circle",
            radius:"2.5"
        });
        entityEl.setAttribute("material", {
            src:"locality_icon.png",
            opacity:0.9
        });
        entityEl.setAttribute("position", locality_position);
        entityEl.setAttribute("cursor-listener",{});

        return entityEl;
    },
    createGardenVeiwThumbnail:function(garden_position){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `garden_icon`);
        entityEl.setAttribute("geometry", {
            primitive:"circle",
            radius:"2.5"
        });
        entityEl.setAttribute("material", {
            src:"garden_icon.png",
            opacity:0.9
        });
        entityEl.setAttribute("position", garden_position);
        entityEl.setAttribute("cursor-listener",{});

        return entityEl;
    },
    HandleMouseEnterEvent:function(){
        this.el.addEventListener("click", evt=>{
            console.log("mouse entered")
            const id = this.el.getAttribute("id");
            console.log(id)
            if(id.includes("home-view-container")){
                console.log("if condition entered")
                const skyEl = document.querySelector("#main-container");
                skyEl.setAttribute("material",{
                    src:`house.png`,
                    color:"#fff"
                });
            };
            if(id.includes("locality-view-container")){
                console.log("if condition entered")
                const skyEL = document.querySelector("#main-container");
                skyEL.setAttribute("material", {
                    src:`locality3.png`,
                    color:"#fff"
                })
            };
            if(id.includes("garden-view-container")){
                console.log("if condition entered")
                const skyEL = document.querySelector("#main-container");
                skyEL.setAttribute("material", {
                    src:`garden.png`,
                    color:"#fff"
                })
            };
        });
    },
});