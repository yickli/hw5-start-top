// Generated by LiveScript 1.3.1
var pan, count, answ, isclicking, isclicked, i$, i, getRandomNumber, getNumbers, activation;
window.onload = function(){
  activation();
  getNumbers();
};
pan = 0;
count = 0;
answ = 0;
isclicking = [];
isclicked = [];
for (i$ = 0; i$ <= 4; ++i$) {
  i = i$;
  isclicked[i] = 0;
  isclicking[i] = 0;
}
function getRandomNumber(circle){
  var buttons, lis, xmlHttpReg;
  if (count != 5) {
    buttons = document.getElementsByTagName("ul");
    lis = buttons[1].getElementsByTagName("li");
    xmlHttpReg = null;
    circle[count].style.display = "inline";
    circle[count].innerHTML = "...";
    xmlHttpReg = new XMLHttpRequest();
      if (xmlHttpReg != null) {
          xmlHttpReg.open("get", "/", true);
          xmlHttpReg.send();
          xmlHttpReg.onreadystatechange = function(){
            if (xmlHttpReg.readyState==4 && xmlHttpReg.status == 200) {
                for (var i = 0; i < 5; i++) {
                    if (i == count+1) {
                      lis[i].style.backgroundColor = "#234991";
                    }
                    else {
                      lis[i].style.backgroundColor = "#7E7E7E"
                    }
                  }
                  circle[count].innerHTML=(xmlHttpReg.responseText);

                  answ += parseInt(circle[count].innerHTML);
                  count++;
                  getRandomNumber(circle);
              }
          };
      }
  }
  if (count == 5) {
    buttons = document.getElementsByTagName("ul");
    buttons[0].getElementsByTagName("li")[0].getElementsByTagName("span")[0].innerHTML = answ;
  }
};
getNumbers = function(){
  var buttons, lis, ans, atplus, flag, sum;
  buttons = document.getElementsByTagName("ul");
  lis = buttons[1].getElementsByTagName("li");
  ans = buttons[0].getElementsByTagName("li")[0];
  atplus = document.getElementById("button");
  flag = [];
  sum = 0;
  atplus.onclick = function(){
    var i$, i, circle;
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      lis[i].style.backgroundColor = "#234991";
      flag[i] = 1;
    }
    circle = [];
    for (i = 0; i <= 4; ++i) {
      circle[i] = lis[i].getElementsByTagName("span")[0];
    }
    getRandomNumber(circle);
  };
};
activation = function(){
  var buttons, area;
  buttons = document.getElementById("button");
  buttons.onmouseover = function(){
    document.getElementById("area").className = "at-plus-container-block";
    this.id = "button_hover";
  };
  area = document.getElementById("area");
  area.onmouseleave = function(){
    location.reload();
  };
  return area = document.getElementById("area");
};