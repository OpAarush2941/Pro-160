AFRAME.registerComponent("cursor-listener", {
    schema:{
        state:{default:"locality",type:"string"}
    },
    init:function(){
        this.houseContainer = document.querySelector("#house-container");
    },
    
});