let messagebox = document.getElementById('messagebox');
let resultbox = document.getElementById('result');
let encodeButton = document.getElementById('encode');
let decodeButton = document.getElementById('decode');

encodeButton.addEventListener('click', (e) => {
    const str = messagebox.value;
    resultbox.value = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
});


function encode(text){

}

function decode(hash){
    
}
