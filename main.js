let messagebox = document.getElementById('messagebox');
let resultbox = document.getElementById('result');
let encodeButton = document.getElementById('encode');
let decodeButton = document.getElementById('decode');
let copyButton = document.getElementById('copy');
let loadDiv = document.getElementById('loadDiv');
let copyDiv = document.getElementById('copyDiv');
let empty = document.getElementById('empty_space');
let nonEmpty = document.getElementById('non_empty');

encodeButton.addEventListener('click', (e) => {
    showResult(encode(messagebox.value));
});

decodeButton.addEventListener('click', (e) => {
    showResult(decode(messagebox.value));
});

copyButton.addEventListener('click', () => {
    loadDiv.classList.remove('hide');
    copyDiv.classList.add('hide');
    navigator.clipboard.writeText(resultbox.value)
    .then(() => {
        loadDiv.classList.add('hide');
        copyDiv.classList.remove('hide');
        copyButton.classList.add('copied');
        copyDiv.innerHTML = 'Copiado!';
        setTimeout(() => {
            copyDiv.innerHTML = 'Copiar';
            copyButton.classList.remove('copied');
        }, 1500);
    })
    .catch(err => {
        loadDiv.classList.add('hide');
        copyDiv.classList.remove('hide');
        copyButton.classList.add('copied');
        copyDiv.innerHTML = 'No copiado!';
        setTimeout(() => {
            copyDiv.innerHTML = 'Copiar';
            copyButton.classList.remove('copied');
        }, 1500);    
    });
});

function showResult(result){
    empty.classList.add('hide');
    nonEmpty.classList.remove('hide');
    resultbox.value = result;
}

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
    return decodedText;
}
    