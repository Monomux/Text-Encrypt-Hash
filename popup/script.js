const edRadio = document.getElementById('EDRadio');
const hRadio = document.getElementById('HRadio');
const encryptBtn = document.getElementById('EncryptBtn');
const decryptBtn = document.getElementById('DecryptBtn');
const encryptText = document.getElementById('EncryptedText');
const decryptText = document.getElementById('DecryptedText');
const key = document.getElementById('key');
const encryptType = document.getElementById('EncryptType');
const hashType = document.getElementById('HashType');
const text2 = document.getElementById('text2')

var isHash = false;

edRadio.addEventListener('click', function (){
    text2.innerText = "Encrypted"
    encryptBtn.innerText = "Encrypt"
    encryptType.style.display = "inline"
    hashType.style.display = "none"
    decryptBtn.style.display = "inline"
    encryptText.value = ""
    isHash = false
})

hRadio.addEventListener('click', function (){
    text2.innerText = "Hash"
    encryptBtn.innerText = "Hash"
    encryptType.style.display = "none"
    hashType.style.display = "inline"
    decryptBtn.style.display = "none"
    encryptText.value = ""
    isHash = true
})

encryptBtn.addEventListener('click',function (){
    var text = decryptText.value;
    var convertedText, keyText = key.value;
    if(isHash){
        switch (hashType.value) {
            case 'md5':{
                convertedText = CryptoJS.MD5(text)
                break
            }
            case 'sha1':{
                convertedText = CryptoJS.SHA1(text)
                break
            }
            case 'sha256':{
                convertedText = CryptoJS.SHA256(text)
                break
            }
            case 'sha224':{
                convertedText = CryptoJS.SHA224(text)
                break
            }
            case 'sha512':{
                convertedText = CryptoJS.SHA512(text)
                break
            }
            case 'sha384':{
                convertedText = CryptoJS.SHA384(text)
                break
            }
            case 'sha3':{
                convertedText = CryptoJS.SHA3(text)
                break
            }
            case 'ripemd160':{
                convertedText = CryptoJS.RIPEMD160(text)
                break
            }
            case 'hmac-md5':{
                convertedText = CryptoJS.HmacMD5(text, keyText)
                break
            }
            case 'hmac-sha1':{
                convertedText = CryptoJS.HmacSHA1(text, keyText)
                break
            }
            case 'hmac-sha256':{
                convertedText = CryptoJS.HmacSHA256(text, keyText)
                break
            }
            case 'hmac-sha224':{
                convertedText = CryptoJS.HmacSHA224(text, keyText)
                break
            }
            case 'hmac-sha512':{
                convertedText = CryptoJS.HmacSHA512(text, keyText)
                break
            }
            case 'hmac-sha384':{
                convertedText = CryptoJS.HmacSHA384(text, keyText)
                break
            }
            case 'hmac-sha3':{
                convertedText = CryptoJS.HmacSHA3(text, keyText)
                break
            }
            case 'hmac-ripemd160':{
                convertedText = CryptoJS.HmacRIPEMD160(text, keyText)
                break
            }
            default:{
                convertedText = ''
            }
        }
    }else {
        switch (encryptType.value) {
            case 'base64':{
                convertedText = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text))
                break
            }
            case 'aes':{
                convertedText = CryptoJS.AES.encrypt(text, keyText)
                break
            }
            case 'des':{
                convertedText = CryptoJS.DES.encrypt(text, keyText)
                break
            }
            case 'tripledes':{
                convertedText = CryptoJS.TripleDES.encrypt(text, keyText)
                break
            }
            case 'rc4':{
                convertedText = CryptoJS.RC4.encrypt(text, keyText)
                break
            }
            case 'rabbit':{
                convertedText = CryptoJS.Rabbit.encrypt(text, keyText)
                break
            }
            case 'rabbit-legacy':{
                convertedText = CryptoJS.RabbitLegacy.encrypt(text, keyText)
                break
            }
            default:{
                convertedText = ""
            }
        }
    }
    encryptText.value = convertedText;
})

decryptBtn.addEventListener('click', function (){
    var text = encryptText.value;
    var convertedText, keyText = key.value;
    switch (encryptType.value) {
        case 'base64':{
            convertedText = CryptoJS.enc.Base64.parse(text).toString(CryptoJS.enc.Utf8)
            break
        }
        case 'aes':{
            convertedText = CryptoJS.AES.decrypt(text, keyText).toString(CryptoJS.enc.Utf8)
            break
        }
        case 'des':{
            convertedText = CryptoJS.DES.decrypt(text, keyText).toString(CryptoJS.enc.Utf8)
            break
        }
        case 'tripledes':{
            convertedText = CryptoJS.TripleDES.decrypt(text, keyText).toString(CryptoJS.enc.Utf8)
            break
        }
        case 'rc4':{
            convertedText = CryptoJS.RC4.decrypt(text, keyText).toString(CryptoJS.enc.Utf8)
            break
        }
        case 'rabbit':{
            convertedText = CryptoJS.Rabbit.decrypt(text, keyText).toString(CryptoJS.enc.Utf8)
            break
        }
        case 'rabbit-legacy':{
            convertedText = CryptoJS.RabbitLegacy.decrypt(text, keyText).toString(CryptoJS.enc.Utf8)
            break
        }
        default:{
            convertedText = ""
        }
    }
    decryptText.value = convertedText;
})