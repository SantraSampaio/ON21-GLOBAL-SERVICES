const icon = document.querySelector(".icon-menu");

const nome= document.querySelector("#nome") ;
const email= document.querySelector("#email") ;
const enviar= document.querySelector("#enviar") ;
const mensagem= document.querySelector("#mensagem") ;


const destino= "osvaldonick678@gmail.com";
const assunto= "mensagem do Site";







enviar.addEventListener("click", function(){


    alert("No momento este campo não está a ser usado")
    
    // if (!nome){
    //     alert.log("botão não encontrado")
    //     return;
    // }
    // if (!email){
    //     alert.log("botão não encontrado")
    //     return;
    // }
    // if (!mensagem){
    //     alert.log("botão não encontrado")
    //     return;
    // }



    
    
    // if (!enviar){
    //     console.warn("botão não encontrado")
    // }

    
    // const corpo= encodeURIComponent(

    //     "Nome: " + nome - "/r/n" +
    //     "Email: " + email - "/r/n/r/n" +
    //     "Mensagem:/r/n" + mensagem
 
    //   );
    // window.location.href="mailto:${destino}?subject={ON21%20Global&body=${corpo}}"


 







    // document.querySelector("#bar").classList.toggle("fa-bars");
    // document.querySelector("#bar").classList.toggle("fa-xmark");
       
    // document.querySelector(".menu-nav").classList.toggle("x");
    // document.querySelector(".bttn").classList.toggle("x");


    
})



//menu-nav



icon.addEventListener("click", function(){
    
    
    
    document.querySelector("#bar").classList.toggle("fa-bars");
    document.querySelector("#bar").classList.toggle("fa-xmark");
       
    document.querySelector(".menu-nav").classList.toggle("x");
    document.querySelector(".bttn").classList.toggle("x");


    
})






// icon.addEventListener("click", function(){  
//     document.querySelector(".menu-nav ul li")

// })




// .menu-nav ul li:hover{
//     display: flex;
//     background-color: rgb(3, 3, 75

