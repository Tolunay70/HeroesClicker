var hpbar = 100;
var score = 0;
var bought = false;
var damage = 5;
var level = 1;


function kleiner() {
    hpbar = hpbar - damage;
    score = score + 20;
    console.log(hpbar);


    if (hpbar <= 0) {
        hpbar = 50 * level + 100;
        score = score + 25;
        document.getElementById("scoredood").innerHTML = "+ 25";
        document.getElementById("scoredood").style.display = "block";
        document.getElementById("killed").style.display = "block";
        document.getElementById("groen").style.width = hpbar + "%";
        level++;

    }else{
        document.getElementById("killed").style.display = "none";
        document.getElementById("scoredood").style.display = "none"
    }
    document.getElementById("score").innerHTML = "HeroCoins : " + score;
    document.getElementById("groen").style.width = hpbar + "%";
    console.log(hpbar);
    document.getElementById("levenmonster").innerHTML = 'HP: ' + hpbar;
}
function shop() {


    if(score < 1000) {
        alert("You don't have enough HeroCoins!")
    }

    if  (score >= 1000 && bought === false){
        score = score - 1000;
        document.getElementById("score").innerHTML = "HeroCoins : " + score;
        document.getElementById('bought').innerHTML = "Sold Out!";
        document.getElementById('bought').style.color = "yellow";
        bought = true;
        damage = 10;

        console.log(score);
        hpbar = hpbar - 10;
        alert("You bought this item!")
    }

}
