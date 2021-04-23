<template>
    <header>
        <nav>
            <ul >
                <!-- logo -->
                <li><img src="../assets/images/Anachak_logo.svg" alt=""></li>
                <li class="Header-list" @click="clickHeader('Home')" :class="selectedHome" data-header="Home">HOME</li>
                <li class="Header-list" @click="clickHeader('AboutUs')" :class="selectedAboutUs" data-header="AboutUs">ABOUT US</li>
                <li class="Header-list" @click="clickHeader('Store')" :class="selectedStore"  data-header="Store">STORE</li>
                <li class="Header-list"  @click="clickHeader('News')" :class="selectedNews"  data-header="News">NEWS</li>
                <li class="Header-list" @click="clickHeader('Faq')" :class="selectedFaq" data-header="Faq">FAQ</li>
                <div :class="Hightlight" class="position">

                </div>
            </ul>
            <div class="Log-in">
                <i class="far fa-user"></i>
                <a href="http://localhost:8080/login">{{msg}}</a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name:"Header",

    data(){
        return{
            String:``
        }
    },
    props:{
        msg:String,
        selectedHome:String,
        selectedStore:String,
        selectedAboutUs:String,
        selectedNews:String,
        selectedFaq:String,
        Hightlight:String,
    },
    emits:['selectedHeader'],
    methods:{
        clickHeader:function(text){
            const position= document.querySelector('.position');
            const list = document.querySelectorAll('.Header-list');
            list.forEach(Element=>{
                const dataHeader=Element.getAttribute('data-Header');
                if(dataHeader==text){
                    Element.classList.add('selected-header')
                    this.$emit('selectedHeader',text)
                }
                else{
                    Element.classList.remove('selected-header')
                }
            })
            //make line run 
                if(text=="Home"){
                    position.style.setProperty('left',"6rem");
                }
                else if(text=="AboutUs"){
                    position.style.setProperty('left',"12.8rem");
                    
                }
                else if(text=="Store"){
                    position.style.setProperty('left',"19.6rem");
                    
                }
                else if(text=="News"){
                    position.style.setProperty('left',"26.4rem");
                    
                }
                else{
                    position.style.setProperty('left',"33.2rem");
                }
            //AboutUs 15.3rem
            //Store 22.5rem
            //News 29.4rem
            //Faq 35.5rem
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header{
    position: sticky;
    top: 0;
    background:linear-gradient(0deg, #3A4750, #3A4750);
    font-family: 'Ubuntu',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    z-index: 1;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    min-height: 6rem;
    margin: auto;
}
nav ul{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}
.Header-list{
    border-bottom: 0.2rem solid white;
    width: 6.8rem;
    text-align: center;
    cursor: pointer;
}
.Log-in a{
    color: #FFFFFF;
    text-decoration: none;
}
nav div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6.5%;
}
.line{
    position: absolute;
    top: 4rem;
    left: 8rem;
    height: 0.3rem;
    width: 34rem;
    background-color: white;
}
img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box; 
}
.position{
    position: absolute;
}
.highlight_line{
    height: 0.2rem;
    width: 6.7rem;
    top: 3.65rem;
    left: 6rem;
    background-color:#D72323;
    transition: all 0.5s ease-in;
}
.selected-header{
    color: #D72323;
}

</style>

