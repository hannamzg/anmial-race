let DivDog = document.getElementById("DivDog");
let DivHourse = document.getElementById("DivHourse");
let DivDuke = document.getElementById("DivDuke");
let DivChiken = document.getElementById("DivChiken");
let anmailDiv = document.querySelector(".anmailDiv");
let startTheGame = document.getElementById("startTheGame");
let restartBtn = document.getElementById("restartBtn");

let runners = {
    dog:{
        "name":"dog",
        "voice" : "woof",
        "id" : "dogIcon",
        "img" : "https://static.thenounproject.com/png/2167330-200.png",
        "step": 50,
    },
    hourse:{
        "name":"hourse",
        "voice" : "woof",
        "id" : "hourseIcon",
        "img" : "https://cdn4.iconfinder.com/data/icons/animals-57/500/horse_animal-512.png",
        "step": 70,
    },
    duck:{
        "name":"duck",
        "voice" : "woof",
        "id" : "duckIcone",
        "img" : "https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/512/rubber-duck-icon.png",
        "step": 40,
    },
    chick:{
        "name":"chick",
        "voice" : "woof",
        "id" : "chickIcon",
        "img" : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75058c70337915.5ba07d5af28c5.jpg",
        "step": 30,
    }
}
buildImgs();
function buildImgs(){ 
    
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");

    img1.src = runners.dog.img;
    img1.setAttribute("id",runners.dog.id);

    img2.src = runners.hourse.img;
    img2.setAttribute("id",runners.hourse.id);

    img3.src = runners.duck.img;
    img3.setAttribute("id",runners.duck.id);

    img4.src = runners.chick.img;
    img4.setAttribute("id",runners.chick.id);

    DivDog.appendChild(img1);
    DivHourse.appendChild(img2);
    DivDuke.appendChild(img3);
    DivChiken.appendChild(img4);

    restartBtn.addEventListener("click",()=>{
        img1.style.marginInlineStart = "0px";
       img2.style.marginInlineStart = "0px";
       img3.style.marginInlineStart = "0px";
       img4.style.marginInlineStart = "0px";
    }) 

    let dataSpeed ={
        a:0,
        b:0,
        c:0,
        d:0,
    };


    function run(){   
    img1.style.marginInlineStart = dataSpeed.a + "px";
    img2.style.marginInlineStart = dataSpeed.b + "px";
    img3.style.marginInlineStart = dataSpeed.c + "px";
    img4.style.marginInlineStart = dataSpeed.d + "px";
    move(runners.dog.step,runners.hourse.step,runners.duck.step,runners.chick.step);
    }
    
    function move(one,two,three,four){
        dataSpeed.a  += one;
        dataSpeed.b += two;
        dataSpeed.c += three;
        dataSpeed.d += four;
    }
    

    function check(){
        let str1 =  img1.style.marginInlineStart.substring(0, img1.style.marginInlineStart.length -2);
        let str2 =  img2.style.marginInlineStart.substring(0, img2.style.marginInlineStart.length -2);
        let str3 =  img3.style.marginInlineStart.substring(0, img3.style.marginInlineStart.length -2);
        let str4 =  img4.style.marginInlineStart.substring(0, img4.style.marginInlineStart.length -2);
          
        if(Number(str1) > Number(anmailDiv.offsetWidth) -50){
            alert("1 is win");
            clearInterval(startSet);
        }
        if(Number(str2) > Number(anmailDiv.offsetWidth) -50){
            alert("2 is win");
            clearInterval(startSet);
        }
        if(Number(str3) > Number(anmailDiv.offsetWidth) -50){
            alert("3 is win");
            clearInterval(startSet);
        }
        if(Number(str4) > Number(anmailDiv.offsetWidth) -50){
            alert("4 is win");
            clearInterval(startSet);
        }
    }

      
    let startSet = setInterval(startTheGamee, 1000);
    startTheGame.addEventListener("click" , ()=>{
        startSet
    });

    function startTheGamee(){
        run();
        check();
    }

    
}


