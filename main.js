let messagebox = document.getElementById('messagebox');
let resultbox = document.getElementById('result');
let encodeButton = document.getElementById('encode');
let decodeButton = document.getElementById('decode');

encodeButton.addEventListener('click', (e) => {
    resultbox.value = encode(messagebox.value);
});

decodeButton.addEventListener('click', (e) => {
    decode(messagebox.value);
});

messagebox.addEventListener('keyup', () => {
    const str = messagebox.value;
    const str2 = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^0-9a-zA-Z ]/g, '').toLowerCase();
    if(str !== str2){
        messagebox.value = str2;
    }
});


function encode(text = ''){
    const encodedText = 
        text.replaceAll('e', 'enter')
        .replaceAll('i', 'imes' )
        .replaceAll('a', 'ai' )
        .replaceAll('o', 'ober' )
        .replaceAll('u', 'ufat' )
    console.log(encodedText);
    return encodedText;

}

function decode(hash){
    const decodedText = 
        hash
        .replaceAll('ufat', 'u')
        .replaceAll('ober', 'o')
        .replaceAll('ai', 'a')
        .replaceAll('imes', 'i')
        .replaceAll('enter', 'e');
        console.log(decodedText);
    }
    