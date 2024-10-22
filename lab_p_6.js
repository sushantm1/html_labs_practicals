// functions for ID
function changetxt(){
    document.getElementById("chngtxt").textContent="GLA University Mathura";
}

function change_color(){
    document.getElementById("chng_clr").style.color="red";
}
function hide_ele(){
    document.getElementById("hide_ele").style.display="none";
}

function make_visible(){
    document.getElementById("hide_ele").style.display="block";
}
function change_img(){
    document.getElementById("car_img").src="bike_img.jpg";
}

// funtions for classes
function change_txt_byclass(){
    var elements=document.getElementsByClassName("change_txt");
    for (var i=0;i<elements.length;i++){
        elements[i].textContent="text has been changed";
    }
}

function change_color_byclass(){
    var boxes=document.getElementsByClassName("change_color");
    for (var i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="lightblue";
    }
}

function hide_ele_byclass(){
    var elements=document.getElementsByClassName("hide_class");
    for (var i =0;i<elements.length;i++){
        elements[i].style.display="none";
    }
}

function border_byclass(){
    var item=document.getElementsByClassName("border_class");
    for(var i=0;i<item.length;i++){
    item[i].style.border="2px solid black";
    // item[i].style.border.width="200";
    }
}

function change_size_byclass(){
    var item=document.getElementById("x").ariaValueMax;
    var elements=document.getElementsByClassName("resize");
    // console.log("Changing font size to:", item + "px");
    for(var i=0;i<elements.length;i++){
        elements[i].style.fontSize=item ;
    }
}

// functios for tags

function change_txt_byID(){
    var element=document.getElementsByTagName("p");
    for(var i=0;i<element.length;i++){
        element[i].textContent="this is a new text."
    }
}
function change_color_bytag(){
    var div=document.getElementsByTagName("div2");
    for(var i=0;i<div.length;i++){
    div[i].style.backgroundColor="purple";
    }
}
function hide_ele_bytag(){
    var item=document.getElementsByTagName("div3");
    for(var i=0;i<item.length;i++){
        item[i].style.display="none";
    }
}   

function border_bytag(){
    var brdr=document.getElementsByTagName("ul");
    for(var i=0;i<brdr.length;i++){
        brdr[i].style.border="2px solid black";
    }
}

function change_size_bytag(){
    var ch_size=document.getElementsByTagName("span");
    for(var i=0;ch_size.length;i++){
        ch_size[i].style.fontSize="20px";
    }
}