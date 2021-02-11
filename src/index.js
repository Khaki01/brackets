module.exports = function check(str, bracketsConfig) {
  // your solution
  if(str.length%2!=0) return false;

  let res = '';
  let openBracket = '';
  let closeBracket = '';
  for(let i = 0; i<bracketsConfig.length; ++i){
    openBracket+=String(bracketsConfig[i][0]);
    closeBracket+=String(bracketsConfig[i][1]);
  }

  for(let i = 0; i<str.length; ++i){
    if(res.length==0) {
      res+=str[i];
      continue;
    }

    if(openBracket.includes(str[i]) && !closeBracket.includes(str[i])) res+=str[i];
    else if(openBracket.includes(str[i]) && closeBracket.includes(str[i])){
      if(res[res.length-1]==str[i]) res = res.slice(0, -1);
      else res+=str[i];
    }else{
      let ind = 0;
      while(str[i]!=closeBracket[ind] && ind<closeBracket.length) ++ind;
      if(res[res.length-1]==openBracket[ind]) res = res.slice(0, -1);
      else {res='wrong';
      break;
    }
    }

  }

  return (res.length==0)
}
