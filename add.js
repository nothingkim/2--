var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

document.querySelector(".btn_open").addEventListener("mouseenter", MouseEntered);
document.querySelector(".btn_open").addEventListener("mouseleave", MouseLeaved);

function MouseEntered() {
    document.querySelector(".btn_open").style.background = "coral";
}
function MouseLeaved() {
    document.querySelector(".btn_open").style.background = "black";
}


// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });

 // 팝업 닫기
 for(var j = 0; j < target.length; j++){
    btnPopClose[j].addEventListener('click', function(){
      this.parentNode.parentNode.style.display = 'none';
    });
  }
}

document.getElementById("inputbutton").addEventListener("click", addItem);

function addItem() {
    console.log("hello");
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const doc = document.getElementById("doc").value;
    var a = `
    <div id="imageinnerblock">
    <img src= "${image}" alt="${name}" width="300px">
    <span>${doc}</span> 
    </div>
    `;
    document.querySelector('#new_block').insertAdjacentHTML('beforeend', a);


} 
