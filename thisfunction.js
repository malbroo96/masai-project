let user ={
    username:"akhil joseph",
    showusername:function(){
        console.log("method",this.username)
    }
};

function displayushername(){
    console.log("function:", this.username);
}

user.showusername();