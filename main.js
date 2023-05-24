const textEncode = document.getElementById('text_encode');
const textResult = document.getElementById('text_result');
const buttonDecode = document.getElementsByClassName('button_decode')[0];
const buttonEncode = document.getElementsByClassName('button_encode')[0];
const buttonCopy = document.getElementsByClassName('button_copy')[0];
const nonContent = document.getElementsByClassName('non_content')[0];
const resultContent = document.getElementsByClassName('result_content')[0];

textEncode.addEventListener('keyup', () => {
    const aux = textEncode.value;
    const text = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^0-9a-zA-Z ]/g, '').toLowerCase();
    if(aux !== text) textEncode.value = text;
});

buttonEncode.addEventListener('click', () => {
    showResult(encode(textEncode.value));
});

buttonDecode.addEventListener('click', () => {
    showResult(decode(textEncode.value));
});

buttonCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(textResult.value)
    .then(() => {
        buttonCopy.innerHTML = 'Copiado!';
        setTimeout(() => {
            buttonCopy.innerHTML = 'Copiar';
        }, 1000);
    })
});

function showResult(result){
    nonContent.classList.add('hide');
    resultContent.classList.remove('hide');
    window.scrollTo(0, document.body.scrollHeight);
    textResult.value = result;
}

function encode(text = ''){
    return text.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
}

function decode(hash){
    return hash.replaceAll('ufat', 'u')
        .replaceAll('ober', 'o')
        .replaceAll('ai', 'a')
        .replaceAll('imes', 'i')
        .replaceAll('enter', 'e');
}