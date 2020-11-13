<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> PROJECT 01 - MOOD BREW | MONGO MANIACS </title>
    <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css">
    <link rel="stylesheet" href="./assets/style.css">
</head>
    <body>

      <article class="holy-grail-grid">

        <header class=" wrap holy-grail-header">
        <img src="./assets/Images/img01.gif" id="img04"><br>
        <h1> Mood Brew </h1> <br>
        <h6> Brought to you by the Mongo Manciacs Group</h6>
        </header>

        <nav class="holy-grail-left">
           <h3><img class="img01" src="./assets/Images/icon01.png"> Mood </h3>
            <ul>
                <li><a href="#javaContent"> Game day <br><img class="thumbnail" id="gameDay" src="./assets/Images/gameday.png"></a></li>
                <hr>
                <li><a href="#javaContent"> Breakup<br><img class="thumbnail" id="breakUp" src="./assets/Images/breakup.png"></a></li>
                <hr>
                <li><a href="#javaContent"> My Code works<br><img class="thumbnail" id="codeWorks" src="./assets/Images/codeworks.png"></a></li>
                <hr>
                <li><a href="#javaContent"> Wildcard<br><img  class="thumbnail" id="option4" src="./assets/Images/wildcard.PNG"></a></li>


            </ul>
          </nav>

    <main class="holy-grail-middle">
        <h3><img class="img01" src="./assets/Images/icon01.png"> Description</h3>
        A simulation that allows you to brew a special drink recipe based on a specific mood. Select your mood on the left and the coin image below to reveal your drink for the day. Cheers!

        <hr>
        <div class="row">
          <h3><img class="img01" src="./assets/Images/icon01.png"> Main Ingredients </h3>
        <ul>
        <li><img class="drinkimg" id="imageGin" src="https://www.thecocktaildb.com/images/ingredients/Gin.png"> Gin</li>
        <li><img class="drinkimg" id="imageVodka" src="https://www.thecocktaildb.com/images/ingredients/Vodka.png">Vodka</li>
        <li><img class="drinkimg" id="imageTequilla" src="https://www.thecocktaildb.com/images/ingredients/Tequila.png">Tequila</li>
        <li><img class="drinkimg" id="imageRum" src="https://www.thecocktaildb.com/images/ingredients/Rum.png">Rum</li><br>
       </ul></div>
       <hr>
       <h3><img class="img01" src="./assets/Images/icon01.png"> Generate your drink </h3>


        <button type="button" id="saveBtn"> <a>  Save Results </a></button> || <button  id="clearHist" ><a> Clear History </a></button>
        <br>
        <div id=’drinkData’></div>

       
        <div id=“coinFlip”>
        <div class=“side-a”></div>
        <div id=“#coinFlip.tails”></div>
        <div class=“side-b”></div>
        <div id=“#coinFlip.heads”></div>
    </div>
    </div>
    <br>
    <h5>Flip the Coin</h5>

    <br>
<!-- SS -->

<input type="image" src="https://placehold.it/550x550" name="saveForm" class="btTxt submit" id="alcGin"/>
<h5>Gin</h5>
<th class="ginDrinkdetails">
<div id="ginDrinkNAME">
<p id="ginDrinkICON"></p>
<p id="ginDrinkID"></p>
<p id="ginRecipe"></p>
</div>
</th>

<input type="imageVodka" src="https://placehold.it/180x180" name="saveForm" class="btTxt submit" id="alcVodka"/>
<h5>Vodka</h5>
<th class="vodkaDrinkdetails">
<div id="vodkaDrinkNAME">
<p id="vodkaDrinkICON"></p> 
<p id="vodkaDrinkID"></p>
<p id="vodkaRecipe"></p>
</div>
</th>

<input type="imageRum" src="https://placehold.it/180x180" name="saveForm" class="btTxt submit" id="alcRum"/>
<h5>Rum</h5>
<th class="rumDrinkdetails">
<div id="rumDrinkNAME">
<p id="rumDrinkICON"></p>
<p id="rumDrinkID"></p>
<p id="rumRecipe"></p>
</div>
</th>

<input type="imageTequilla" src="https://placehold.it/180x180" name="saveForm" class="btTxt submit" id="cocktailSurprise"/>
<h5>Tequilla</h5>
<th class="TequillaDrinkdetails">
<div id="TequillaDrinkNAME">
<p id="TequillaDrinkICON"></p>
<p id="TequillaDrinkID"></p>
<p id="TequillaRecipe"></p>
</div>
</th>

<!-- SS -->


</main>

<footer class="holy-grail-footer">
</footer> 
  
</article>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
<script>$(document).foundation();</script>
<script src="./assets/script.js"></script>

</body>
</html>



