// creating close button but list that are not created with the function 
var myList = document.getElementsByTagName('li');
var index;
for (index = 0; index < myList.length; index++) {
    var aSpanTag = document.createElement("SPAN");
    var someTxt = document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someTxt);
    myList[index].appendChild(aSpanTag);
}

// close button
var closeButton = document.getElementsByClassName("close");
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}


// creating ckecked todo
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false);


function createNewElement() {
    var li = document.createElement('li');
    var theInputValue = document.getElementById('the-input').value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    // console.log(li); helps you to ckeck if there are some errors
    if (theInputValue === '') {
        alert('This can not be empty')
    } else {
        document.getElementById('the-ul').appendChild(li);
    }
    document.getElementById('the-input').value = "";
    var theSpanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    theSpanTag.className = "close";
    theSpanTag.appendChild(txt);
    li.appendChild(theSpanTag);
    // removing item when clicked span butoon
    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }

}
// var ulList=document.querySelector('ul');
// ulList.addEventListener('click',function(event){
// if(event.target.tagName==='LI')
// event.target.classlist.toggle('checked')
// })
createNewElement()