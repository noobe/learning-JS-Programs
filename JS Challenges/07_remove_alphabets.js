/* Given a string with content, remove all alphabets(lower and uppe case) from it */

let str = '11ab.23';

const charStripper = str => {
    return str.split('').filter(item => {
        if(item.charCodeAt() > 64 && item.charCodeAt()<91 ||
           item.charCodeAt() > 96 && item.charCodeAt()<123) {
            return false
           }
        return true;
    }).join('');
}



charStripper(str);