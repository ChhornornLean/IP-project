<template>
    <div>
        <Header msg="ADMIN" ></Header>
        <main>
        <section>
            <div class="Admin">
                <div>
                    <span>ADMINSTATION PANEL</span>
                </div>
                <div>
                    <button class="btn btn-danger">LOG OUT</button>
                </div>
            </div>
            <div class="line"></div>
            <ul>
                <li><button class="btn btn-danger selected-btn">GAME</button></li>
                <li><button class="btn btn-light selected-btn News-style">NEWS</button></li>
            </ul>
        </section>
        <section>
            <div>
                <div><span>ADD GAME</span></div>
            </div>
            <div class="line"></div>
            <form action="">
            <div >
                <ul class="addGame">
                    <li>
                        <div>
                            <span>GAME TITLE: </span>
                        </div>
                        <div>
                            <input type="text">
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>GAME DESCRIPTIION: </span>
                        </div>
                        <div>
                            <input type="text">
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>ORIGINAL PRICE: </span>
                        </div>
                        <div>
                            <input type="text">
                            <span> RIELS</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>DISCOUNT PRICE: </span>
                        </div>
                        <div>
                            <input type="text">
                            <span> RIELS</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>SUPPORTED OS: </span>
                        </div>
                        <div class="supports">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    WINDOW OS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    APPLE OS
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>IMAGE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>BACKGROUND IMAGE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>SOURCE FILE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
            <div class="createGame">
                <button class="btn btn-danger ">CREATE GAME <i class="fas fa-plus"></i></button>
            </div>
            </form>
        </section>
        <section>
            <div>
                <div><span>EDIT & DELETE GAME</span></div>
            </div>
            <div class="line"></div>
            <div class="list-game">
                <div class="main-list">
                    <div class="list-game-img">

                    </div>
                    <ul class="list-game-detail">
                        <li>GAME TITLE</li>
                        <li>GAME DESCRIPTION</li>
                        <li class="discount">20000 RIELS</li>
                        <li>1000 RIELS</li>
                        <li>AVERAGE STAR: 4.5/5</li>
                    </ul>
                </div>
                <div class="edit-delete-btn">
                    <div>
                        <button class="btn btn-danger">EDIT GAME <i class="fas fa-wrench"></i></button>
                    </div>
                    <div>
                        <button class="btn btn-danger">DELETE GAME <i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name:"AdminPanel",
    components:{
        Header,
        Footer,
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
main{
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    background-color:  #303841;
}
main section{
    display: block;
    align-items: center;
    padding: 2rem 10rem 2rem 10rem;
}
.Admin{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
    border-radius: 30rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
}
.line{
    width: 100%;
    height: 0.1rem;
    background: #B5B1B2;
    margin: 1rem 0 1rem 0;
}
section ul{
    display: flex;
    list-style: none;
}
.selected-btn{
    width: 10rem;
    border-radius: 0rem;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 18px;
}
.News-style{
    color: #D72323;
}
.addGame{
    display: block;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
}
.addGame li{
    display: flex;
    margin: 0.5rem;
}
li input{
    margin-left: 1rem;
}
.form-check input{
    margin-left: 0.1rem;
}
.supports{
    display: flex;
    align-items: center;
}
.supports label{
    margin-left: 0.2rem;
}
.createGame{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.list-game{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.list-game-img{
    width: 8rem;
    height: 10rem;
    background: #C4C4C4;
}
.list-game-detail{
    display: block;
    
}
.discount{
    text-decoration-line: line-through;
    color: #FFFFFF;
}
.main-list{
    width: 18rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.edit-delete-btn{
    width: 16rem;
    display: flex;
    justify-content: space-between;
}
</style>