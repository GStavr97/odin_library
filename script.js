const myLibrary = [];

document.querySelector('#add').disabled = true;
let togg = document.querySelector('.fscreen');

function Book(author,name,pages,read){
    let book = document.createElement('div');

    let xicon = document.createElement('img');
    xicon.src = "./xicon.png";
    xicon.classList.add('xicon');

    xicon.addEventListener('click', function(){this.parentElement.remove();});

    book.append(xicon);
    book.classList.add('book');

    for(let i=0; i< 3; i++){
        book.append(document.querySelectorAll('input')[i].value + " ");
        book.append(document.createElement('br'));
    }
     
    book.addEventListener('click',function(){this.classList.toggle('readStatus');});

    if(document.querySelectorAll('input')[3].checked){
        book.classList.add("readStatus");
    }
    
    document.querySelector('#addedbooks').appendChild(book);
    togg.classList.toggle('hidden');
    addBookToLibrary(book);
    console.log(myLibrary);
}

function addBookToLibrary(booktoadd){
    myLibrary.push(booktoadd);
}

let addbook = document.querySelector('#addbook');
addbook.addEventListener('click', function(){togg.classList.toggle('hidden');});

let cancel = document.querySelector('#cancel');
cancel.addEventListener('click',function(){togg.classList.toggle('hidden');});

let submit = document.querySelector('#add');
submit.addEventListener('click',Book);

let inputs = document.getElementsByTagName('input');
inputs[0].addEventListener('keyup',checkparams);
inputs[1].addEventListener('keyup',checkparams);

function checkparams(){
    let author = document.querySelector('#author').value.length;
    let name = document.querySelector('#name').value.length;
    let addbutton = document.querySelector('#add');

    (name >= 2) && (author >= 2) ? addbutton.disabled = false : addbutton.disabled = true;
}