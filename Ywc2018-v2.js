let ans ;
let answerCard;
let number;

function funcCard(number){
    card = ['2','3','4','5','6','7','8','9','0','J','Q','K','A'];
        if((number>=0)&&(number<=12)){
            answerCard = card[number];
        } else if((number>12)&&(number<=25)){
            answerCard = card[number - 13];
        } else if((number>25)&&(number<=38)){
            answerCard = card[number - 26];
        } else if((number>38)&&(number<=51)){
            answerCard = card[number - 39];
        }
        return answerCard;
    }
function cardAt(n){
    let at = ['C','D','H','S'];
    if((n>=0)&&(n<=12)){
       ans = funcCard(n)+at[0];
    }
    else if((n>13)&&(n<=25)){
       ans = funcCard(n)+at[1];
        }
    else if((n>25)&&(n<=38)){
       ans = funcCard(n)+at[2];
    }
    else if((n>38)&&(n<=51)){
       ans = funcCard(n)+at[3];
    }
    return console.log(ans);
}
cardAt(0);
cardAt(1);
cardAt(34);
cardAt(35);
