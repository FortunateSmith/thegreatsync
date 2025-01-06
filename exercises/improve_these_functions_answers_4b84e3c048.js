const getSubDomain = function(url){
    let subDomain = null; // Use null to show an intentionally missing value
    if (url.includes('://')) subDomain = 'http';
    else if (url.includes('www.')) subDomain = 'www';
    else if (url.includes('shop.')) subDomain = 'shop';
    else if (url.includes('blog.')) subDomain = 'blog';
    const final = subDomain.toUpperCase();
    return final;
    // OR you could simply return the expression:
    // return subDomain.toUpperCase()
}


function changeElementInnerText(id, text){
    const el = document.getElementById(id); 
    el.innerText = text;
    // el will hold a DOM object value. 
    // The genie will not change island, so we use const
}



function inArray(array1,array2){
    const r = array1.filter(str => {
        let matchedItem = null;
            for (var x = 0; x < array2.length; x++){
                if (array2[x].includes(str)) matchedItem = str;
            }
        return  matchedItem;
    })
   return r;

   // We don't need a var declared variable to exist outside the loop and be visible 
   // Simply place a let declared variable inside the function. 
 }