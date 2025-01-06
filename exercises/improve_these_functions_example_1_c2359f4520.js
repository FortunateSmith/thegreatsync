// A FUNCTION WHICH GETS THE SUBDOMAIN OF A WEBSITE IN UPPERCASE

const getSubDomain = (url) => {
  let subDomain = null;
  if (url.includes("://")) subDomain = "http";
  else if (url.includes("www.")) subDomain = "www";
  else if (url.includes("shop.")) subDomain = "shop";
  else if (url.includes("blog.")) subDomain = "blog";
  return subDomain.toUpperCase();
};

getSubDomain("blog.thefortunatesmith.com");

// CHANGE THE TEXT INSIDE A DOM ELEMENT ON A WEB PAGE

const changeElementInnerText = (id, text) => {
  const el = document.getElementById(id);
  el.innerText = text;
};

// GET ITEMS IN THE FIRST ARRAY THAT CAN BE FOUND IN THE SECOND ARRAY
const inArray = (array1, array2) => {
  const r = array1.filter((str) => {
    let matchedItem = null;
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(str)) matchedItem = str;
    }
    return matchedItem;
});
  return r;
};


inArray(['bob', 'feg', 'blurny'], ['rob', 'leg', 'blurny'])