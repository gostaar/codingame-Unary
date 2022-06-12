const MESSAGE = readline();

function text2Binary(string) {
        return string.split('').map(function (char) {
            char = char.charCodeAt(0).toString(2);
            while (char.length < 7) {
                char = '0' + char;
            }
            return char;
        }).join('');
};

let binary = text2Binary(MESSAGE);


let b = "";
for (i = 0; i < binary.length; i++) {

    if (binary[i-1] === undefined) {
        binary[i] === '0' ? b += '00 0' : b += '0 0';
    } else if (binary[i] === binary[i-1]){
        b += '0';
    } else if (binary[i-1] === '0'){
        b += ' 0 0';
    } else { b += ' 00 0'} ;
};

console.log(b);
