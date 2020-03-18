const replaceUrlSpaces = (str) => {
  let strAr = str.split(" ")
  return strAr.join("%20")
}

 console.log(replaceUrlSpaces("Sai Charan P"));
