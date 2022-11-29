/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    let arr=[]
    if(n>0 && null!=text){
        arr=text.split('');
        for(let counter=0;counter<n;counter++){        
            let arrLeft=[]
            let arrRight=[]
            for(let i=1;i<arr.length;i=i+2){
                arrLeft.push(arr[i]);
            }
            for(let j=0;j<arr.length;j=j+2){
                arrRight.push(arr[j]);
            }
            arr=arrLeft.concat(arrRight);
        }
        console.log(arr.join(''))
    }else{
        console.log(text);

        return text;
    }
    return arr.join('');
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt