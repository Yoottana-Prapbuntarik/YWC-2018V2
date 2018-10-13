function cardAt(n){
    var count = 0 , c = 0;

    var card = ['2','3','4','5','6','7','8','9','0','J','Q','K','A']
    var at = ['C','D','H','S'];

    for(i=0, c=0; i <= n; c++, i++){
        if(c == 13){
            count ++ 
            c = 0
       }   
       
       if(i == n){
          return (card[c]+""+at[count])  
       }
    } 

}
console.log(cardAt(0));
