function change_color(){
    document.body.style.backgroundColor="red";
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