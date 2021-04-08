function increase(){
    let elem = document.getElementById('minus-btn');
    elem.value++;
    price();
    totalprice()
}
function decrease(){
    let elem = document.getElementById('minus-btn')
    elem.value--;
    price();
    totalprice()

}
function increase1(){
    let elem = document.getElementById('minus-btn1');
    elem.value++;
    price1();
    totalprice()
    
}

function decrease1(){
    let elem = document.getElementById('minus-btn1')
    elem.value--;
    price1();
    totalprice()

}

function increase2(){
    let elem = document.getElementById('minus-btn2');
    elem.value++;
    price2();
    totalprice()

    
}
function decrease2(){
    let elem = document.getElementById('minus-btn2')
    elem.value--;
    price2();
    totalprice()

}
function price(){
    var pr=document.getElementById("minus-btn").value;
    document.getElementById("p").innerHTML=pr*1379.00;

}

function price1(){
    var pr=document.getElementById("minus-btn1").value;
    document.getElementById("p1").innerHTML=pr*176.80;

}

function price2(){
    var pr=document.getElementById("minus-btn2").value;
    document.getElementById("p2").innerHTML=pr*249.00;

}
function totalprice(){
    var s= parseInt(document.getElementById("p").innerHTML);
    var s1= parseInt(document.getElementById("p1").innerHTML);
    var s2= parseInt(document.getElementById("p2").innerHTML);
    var sum=s+s1+s2;
    document.getElementById("finalPrice").value=sum;
}
function changeColor(){
    var elem = document.getElementById('like');
    elem.style.color = 'red';
}
function changeColor1(){
    var elem = document.getElementById('like1');
    elem.style.color = 'red';
}
function changeColor2(){
    var elem = document.getElementById('like2');
    elem.style.color = 'red';
}
function remove(){
    var myobj = document.getElementById("demo");
    myobj.remove();
}
function remove1(){
    var myobj = document.getElementById("demo1");
    myobj.remove();
}
function remove2(){
    var myobj = document.getElementById("demo2");
    myobj.remove();
}