/*---------------------------------CLASS MOBILE NAVBAR-------------------------------------------------------------*/

class MobileNavbar{

    constructor(mobileMenu, navList, navLinks){

        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

        console.log();

    }

    /*--------------------------------------------------------------------------------------------------------*/

    /*-----------------------------------------FUNCÃO ANIMAÇÃO LINKS------------------------------------------*/

    animateLinks(){

        this.navLinks.forEach((link,index) => {

            link.style.animation 
                ? (link.style.animation = "") 
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);

        });

    }

    /*--------------------------------------------------------------------------------------------------------*/

    /*-------------------------------------FUNCÃO AÇÃO DO CLICK----------------------------------------------*/

    handleClick(){

        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }

    /*--------------------------------------------------------------------------------------------------------*/

    /*----------------------------------------FUNÇÃO EVENTO DO CLICK-----------------------------------------*/

    addClickEvent(){

        this.mobileMenu.addEventListener("click",this.handleClick);
    
    }   

    /*------------------------------------------FUNÇÃO DE CONDIÇÃO--------------------------------------------------------------*/

    init(){

        if(this.mobileMenu){

            this.addClickEvent();

        }

        return this;

    }

    /*--------------------------------------------------------------------------------------------------------*/

      
}

/*----------------------------------------CONSTANTE MOBILE NAV BAR--------------------------------------------*/

const mobileNavBar = new MobileNavbar(

    ".mobile-menu",
    ".nav-list",
    ".nav-list li",

)

/*--------------------------------ADICIONANDO VALORES AOS OBJETOS--------------------------------------------*/

/*-----------------------------------------INICIO DA AÇÃO CLICK-----------------------------------------------------*/

mobileNavBar.init();

/*-------------------------------------------------------------------------------------------------------------*/

  
   
