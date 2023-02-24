//  (Text...)

export const addellips = (text) => {
 if(text.length >40) {
    return text.substring(0, 40) + '...';
 }else{
    return text;
 }
}