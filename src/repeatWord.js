export function repeatWord(word, count) {
    let words='';
    for (let i = 1; i<=count;i++)
      {
       if(i===count){
        words += word + i + '.';
        return(words)
       }
        words += word + i + ', ';
        
      }
    return(words);
  }
  
