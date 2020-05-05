var doc = document.querySelector("body")
var winPlayers = document.getElementById("Players")
var winForm = document.getElementById("formPlayer")
var winRV = document.getElementById("avisos");
var winGame = document.getElementById("ventana")
var plus = document.getElementById("add");
var less = document.getElementById("remove");
var start = document.getElementById("play")
var pvp = document.getElementById("Players");
var toco = document.getElementById("which")
var parra = document.getElementById("parraRV");
var winMode =document.getElementById("seleccionar")
var mode1 = document.getElementById("vr1");
var mode2 = document.getElementById("vr2");
var mIt = document.getElementById("cumplido");
var nomIt = document.getElementById("fallido");
var turn = document.getElementById("turno");
var tit =document.getElementById("contenedorTitulo")
var iniHome = document.getElementById("inicio");
var iniGame =document.getElementById("inicioGame");

var score1 = document.getElementById("scoreP1")
var score2 = document.getElementById("scoreP2")
var score3 = document.getElementById("scoreP3")
var score4 = document.getElementById("scoreP4")
var score5 = document.getElementById("scoreP5")
var score6 = document.getElementById("scoreP6")
var score7 = document.getElementById("scoreP7")
var score8 = document.getElementById("scoreP8")

var player1= document.getElementById("p1");
var player2= document.getElementById("p2");
var player3 = document.createElement("input")
var player4 = document.createElement("input")
var player5 = document.createElement("input")
var player6 = document.createElement("input")
var player7 = document.createElement("input")
var player8 = document.createElement("input")

var name1 = document.getElementById("nameP1");
var name2 =document.getElementById("nameP2")
var name3 =document.getElementById("nameP3")
var name4 =document.getElementById("nameP4")
var name5 =document.getElementById("nameP5")
var name6 =document.getElementById("nameP6")
var name7 =document.getElementById("nameP7")
var name8 =document.getElementById("nameP8")


var spin = document.getElementById("girar");
var rul = document.getElementById("flecha");


var igrados = -40; 
var grados = 0;
var giros = 0;
score1=0;
score2=0;
score3=0;
score4=0;
score5=0;
score6=0;
score7=0;
score8=0;

var x = 2;
var game = 0;

window.onload = function(){
    tit.style.display = "block";
    if(game == 0){
        this.tit.style.display= "none";
    }
}

tit.onclick = function(){
    winMode.style.display = "block";
    tit.style.display = "none";
}

function gameType1(){
    game=1; 
    if(game>0){
        winMode.style.display="none";
    }
}
mode1.addEventListener("click",gameType1);

function gameType2(){
    game=2;
    if(game>0){
        winMode.style.display="none";
    }
}
mode2.addEventListener("click",gameType2);


var s = [score1,score2,score3,score4,score5,score6,score7,score8]
var num =[1,2,3,4,5,6,7,8]
var n = [player1,player2,player3,player4,player5,player6,player7,player8]
var pname = [name1,name2,name3,name4,name5,name6,name7,name8]

var y =0;
var thefirstT = "Turno de:";

iniHome.onclick = function(){
    tit.style.display = "block";
}

start.onclick =function namePlayers(){
       
    for(var p=0;p<num.length;p++){
        var thenum = num[p];
        var theplayer =  n[p];
       var thename = pname[p];
        var thescore = 0;
        thename.textContent =  " P"+thenum+":"+theplayer.value+" ";
        thename.style.marginTop= 10+"px";
        thename.style.fontSize= 30+"px";
        thename.style.padding = 5+"px";
        if(theplayer.value == ""){
            thename.textContent = "";
        }
        if(theplayer.value != ""){
        thename.style.border= 2+"px white solid";
        }
        
    }  
    if(game==0){
        alert("Selecciona una versión");
        winMode.style.display="block";
        winMode.style.backgroundColor="black";  
        winMode.style.position="center";
        winMode.style.marginTop=200+"px"
        winMode.style.zIndex = 1;
        winGame.style.display = "none";
    }
    if(y==0){
        var nameTurn=n[y];
        var thenameT = nameTurn.value
        turn.textContent = thefirstT+thenameT;
    }
    if(game!=0){
    winGame.style.display="block";
    turn.style.marginTop = -40+"px";
    turn.style.fontSize = 20+"px";
    }
    console.log(game)
}


function agregar(){
    x++;
    if(x==3){
        player3.setAttribute("type","text")
        player3.setAttribute("placeholder","Player 3")
        player3.setAttribute("required","")
        player3.setAttribute("maxlenght","7")
        player3.setAttribute("minlenght","3")
       winPlayers.appendChild(player3)
        winPlayers.style.height =95+"px"
        winForm.style.height = 230 +"px"
    }
    if(x==4){
        player4.setAttribute("type","text")
        player4.setAttribute("placeholder","Player 4")
        player4.setAttribute("required","")
        player4.setAttribute("maxlenght","7")
        player4.setAttribute("minlenght","3")
        winPlayers.appendChild(player4)
        winPlayers.style.height =125+"px"
        winForm.style.height = 260 +"px"
    }
    if(x==5){
        player5.setAttribute("type","text")
        player5.setAttribute("placeholder","Player 5")
        player5.setAttribute("required","")
        player5.setAttribute("maxlenght","7")
        player5.setAttribute("minlenght","3")
        winPlayers.appendChild(player5)
        winPlayers.style.height =155+"px"
        winForm.style.height = 290 +"px"
        
    }
    if(x==6){
        player6.setAttribute("type","text")
        player6.setAttribute("placeholder","Player 6")
        player6.setAttribute("required","")
        player6.setAttribute("maxlenght","7")
        player6.setAttribute("minlenght","3")
        winPlayers.appendChild(player6)
        winPlayers.style.height =185+"px"
        winForm.style.height = 320 +"px"
    }
    if(x==7){
        player7.setAttribute("type","text")
        player7.setAttribute("placeholder","Player 7")
        player7.setAttribute("required","")
        player7.setAttribute("maxlenght","7")
        player7.setAttribute("minlenght","3")
        winPlayers.appendChild(player7)
        winPlayers.style.height =215+"px"
        winForm.style.height = 350 +"px"
    }
    if(x==8){
        player8.setAttribute("type","text")
        player8.setAttribute("placeholder","Player 8")
        player8.setAttribute("required","")
        player8.setAttribute("maxlenght","7")
        player8.setAttribute("minlenght","3")
        winPlayers.appendChild(player8)
        winPlayers.style.height =245+"px"
        winForm.style.height = 380 +"px"
    }
    if(x>8){
        x=8
    }
    console.log(x)
    }

plus.addEventListener("click",agregar)

function quitar(){
    x--;
    if(x<2){
        x=2
    }
    if(x<3){
        player3.value = "";
        winPlayers.removeChild(player3)
        winPlayers.style.height =65+"px"
        winForm.style.height = 200 +"px"
    }
    if(x<4){
        player4.value = "";
        winPlayers.removeChild(player4)
        winPlayers.style.height =95+"px"
        winForm.style.height = 230 +"px"
    }
    if(x<5){
        player5.value = "";
        winPlayers.removeChild(player5)
        winPlayers.style.height =125+"px"
        winForm.style.height = 260 +"px"
        
    }
    if(x<6){
        player6.value = "";
        winPlayers.removeChild(player6)
        winPlayers.style.height =155+"px"
        winForm.style.height = 290 +"px"
    }
    if(x<7){
        player7.value = "";

        winPlayers.removeChild(player7)
        winPlayers.style.height =185+"px"
        winForm.style.height = 320 +"px"
    }
    if(x<8){
        player8.value = "";
        winPlayers.removeChild(player8)
        winPlayers.style.height =215+"px"
        winForm.style.height = 350 +"px"
    }
}

less.addEventListener("click",quitar)


var nameRan = "";

function ranName(){
        var nameRandom = Math.floor(Math.random()*x);
    var randomname = n[nameRandom];
    nameRan = randomname.value;
    return nameRan;
}

function verdades(){ranName();
    if(game==1){
        var verdadRan = Math.floor(Math.random()*verdadN.length);
        parra.textContent = verdadN[verdadRan];
        if(parra.textContent== "Que un jugador te haga una pregunta"){
            parra.textContent = "Que "+ranName()+" te haga una pregunta";
        }
    }
    if(game==2){
            var verdadRan = Math.floor(Math.random()*verdadH.length)+1;
            parra.textContent = verdadH[verdadRan];
            if(parra.textContent== "Que un jugador te haga una pregunta"){
                parra.textContent = "Que "+ranName()+" te haga una pregunta";
            }
    }
    console.log(verdadRan)
}


function retos(){
    if(game==1){ranName();
    var retoRan = Math.floor(Math.random()*retoN.length);
    parra.textContent = retoN[retoRan];
    if(parra.textContent == "Recibir una bofetada de" ){
        parra.textContent = "Recibir una bofetada de " + ranName();;
    }

    else if(parra.textContent == "Comerse el moco de" ){
        parra.textContent = "Comerse el moco de " + ranName();;
    }
    else if(parra.textContent =="Lamer el dedo gordo del pie de"){
        parra.textContent = "Lamer el dedo gordo del pie de "+ ranName();
    }
}
    if(game==2){ ranName();
        var retoRan = Math.floor(Math.random()*retoH.length);
        parra.textContent = retoN[retoRan];
    if(parra.textContent=="Darle un beso a"){
        parra.textContent= "Darle un beso a "+ranName()
    }
    if(parra.textContent=="Besar a alguien en el cuello"){
        parra.textContent= "Besar a "+ranName()+" en el cuello";
    }
    if(parra.textContent == "Dar un beso en la boca a un jugador"){
        parra.textContent = "Dar un beso en la boca a "+ranName();
    }
    if(parra.textContent=="Intercambiar toda la vestimenta con"){
        parra.textContent = "Intercambiar toda la vestimenta con "+ranName();
    }
    if(parra.textContent=="Chupar el cuello a un jugador del otro género y dejarle la marca"){
      parra.textContent = "Chupar el cuello a "+ranName()+ " y dejarle la marca";
    }
    if(parra.textContent =="Dar un beso a un jugador en la parte que quieras"){
        parra.textContent = "Dar un beso a "+ranName()+" en la parte que quieras"
    }
    if(parra.textContent == "Quédate a oscuras con la persona que más te gusta del grupo"){
        parra.textContent = "Quédate a oscuras con "+ranName();
    }
    
    }
    console.log(retoRan);
}


/* https://frasespedia.com/preguntas/preguntas-verdad-reto   verdades */
var verdadN= ["¿Qué es lo más infantil que has hecho últimamente?","¿Hay algo que ocultes a tus padres?","¿Cuál es tu mayor miedo?","¿Alguna vez te ha arrestado la policía?"
,"¿Alguna vez has robado?","¿Alguna vez has cometido un delito?","Que un jugador te haga una pregunta","¿Hablas contigo mismo en voz alta?"
,"¿Qué es lo peor que has publicado en una red social?","¿Alguna vez has intentado ligar a través de una red social?","¿Cuál es la peor apuesta que has hecho?"
,"¿Cuál ha sido tu mayor mentira?","¿Cuál es la broma más desagradable que has hecho?","¿Qué harías si fueras rico?","¿Qué harías si tuvieras el poder de la invisibilidad?"
,"¿Qué harías si pudieras viajar en el tiempo?","¿Si pudieras dejar de ver a alguien, a quién elegirías?","¿A quién te llevarías a una isla desierta?"
,"¿Qué harías si te encontraras un maletín lleno de dinero por la calle?","¿Alguna persona de esta habitación que antes te caía mal?"
,"Que un jugador te haga una pregunta","¿Cuál es la persona de esta habitación que peor te cae?","¿Qué es lo peor que has hecho por amor?","¿Qué canción escuchas en secreto?"
,"¿Cuál ha sido la peor etapa de tu vida?","¿Cuál es el hábito más desagradable que tienes?","¿Qué es lo más asqueroso que has comido?","¿Cuál es tu foto más vergonzosa?"
,"¿Cantas en la ducha?","¿Bailas en la ducha?","¿Cuánto tiempo has estado sin ducharte?","¿Cuál es tu talento más raro?","¿Qué es lo peor que le has dicho a tus padres?"
,"Qué prefieres, ¿villano o superhéroe?","¿Podrías pasar dos meses sin teléfono móvil?","¿Le mentirías a un amigo para no hacerle daño?"
,"Si fueras otra persona, ¿quién te gustaría ser?","¿Has empezado un rumor sobre alguien para hacerle daño?","¿Serías capaz de matar a alguien?"
,"Que un jugador te haga una pregunta","¿Cuál ha sido tu peor fracaso?","¿Qué es lo más surrealista que te ha pasado?","¿Cuál es el sueño más surrealista que has tenido?"
,"¿Qué es lo más ridículo que te ha pasado por la calle?","¿Qué es lo más ridículo que te ha pasado durante una cita?","¿Qué es lo peor que has hecho estando borracho?"
,"¿Alguna vez has orinado en la piscina?","¿Alguna vez has orinado en la ducha?","¿Cuál es la mayor locura que has hecho?","¿Cuál es el vídeo de Youtube que más gracia te ha hecho?"
,"¿Te vestirías con ropa del sexo opuesto?","¿La última vez que te tiraste un pedo?"," ¿Qué harías si te quedas sin papel en un baño público?"];

var retoN = ["Caminar como un pingüino","Hacer 8 flexiones de pecho","Usar uno de sus calzados como teléfono en público"
,"Comerse un ajo","Hacer una confesión falsa a su mamá","Ir al retrete y meter la mano"," Depilarse un brazo"
,"Decirle <<Te amo>> a la última persona con la que has hablado por chat","Recibir una bofetada de","Imitar el baile de La Macarena frente a todos"
,"Eliminar todas las apps de redes sociales en el teléfono","Suplicar a su ex que vuelvan","Llamar a un número desconocido"
,"Halar el cabello a una mujer desconocida (solo para mujeres)"," Declarársele a la persona que te gusta","Escribir algo tonto en un estado de Facebook"
,"Decir «Te odio» a algún profesor","Lamer el dedo gordo del pie de","Tomarse una foto impublicable y subirla a Facebook"
,"Actuar como el animal que el grupo elija","Publicar en su estado de WhatsApp que la tiene pequeña","Comerse el moco de","Cantar una canción completa a capela"
,"Hacer una bebida con sabores que no combinen","Salir a la puerta de la casa y gritar a todo pulmón: «¡Ya salí del clóset!","Tomar una cucharada de salsa picante"];

var verdadH=["¿Cómo conquistarías a un hombre o una mujer?","¿Cómo sería tu cita perfecta?","¿Cómo sería tu pareja perfecta?","¿Cómo sería tu experiencia sexual perfecta?"
,"¿Cuál es la parte que más te gusta de tu cuerpo?","¿Cómo fue tu último sueño erótico?","¿En quién pensaste la última vez que te masturbaste?","¿Con qué frecuencia te masturbas?"
,"¿Con cuántas personas te has acostado?","¿Quién es la persona más sexy de esta habitación?","¿Lo harías con alguien de esta habitación?","¿Con qué persona famosa te gustaría tener sexo?"
,"¿Tienes algún fetiche raro?","¿Qué tipo de pornografía ves?","¿Qué páginas de pornografía ves?","Que un jugador te haga una pregunta","¿Has fingido un orgasmo?"
,"Que un jugador te haga una pregunta","¿Qué palabras te excitan?","¿Te gustan los disfraces eróticos?","¿Podrías definir el orgasmo en una palabra?","¿Has tenido sexo telefónico alguna vez?"
,"¿Te has besado o lo has hecho con alguien de tu mismo sexo?","¿Qué prefieres, dormir o tener sexo?","¿Qué prefieres, comer o tener sexo?","¿Quién tiene mejor físico de esta habitación?"
,"¿Has mentido acerca de tu vida sexual?","¿Serías una persona del sexo opuesto durante un mes?","¿Utilizas juguetes sexuales?","¿Cuál es la propuesta más indecente que te han hecho?"
,"¿Alguna vez has usado anticonceptivos de emergencia?","Que un jugador te haga una pregunta"];

var retoH=["Quitarse todo frente a todos los jugadores","Darle un beso a","Vestirse de mujer (en caso de que el reto sea para un hombre)",
"Vestirse de hombre (en caso de que el reto sea para una mujer)", "Quitarse alguna prenda","Decirle un piropo atrevido a alguien desconocido"
,"Hacer una confesión íntima delante del grupo","Besar a alguien en el cuello","Simular practicar un oral con una banana"
,"Dar un beso en la boca a un jugador"," Quitarse todo menos la ropa interior","Tomarse una foto sin nada de ropa y mandársela a un amigo por WhatsApp"
,"Ir a una farmacia y pedir 15 cajas de preservativos","Intercambiar toda la vestimenta con","Publicar «Tengo ganas» en su estado de WhatsApp"," Correr en ropa interior"
,"Enviar una foto suya en ropa interior a un contacto de WhatsApp","Chupar el cuello a un jugador del otro género y dejarle la marca"
,"Darle un beso en la boca al jugador de su izquierda","Darle un beso en la boca al jugador de su derecha"
,"Publicar en el muro de Facebook de un contacto casado algún mensaje picante","Baila sensualmente por 30 segundos","Dar un beso a un jugador en la parte que quieras"
,"Elige una parte de tu cuerpo para pasarte un cubo de hielo","Quédate a oscuras con la persona que más te gusta del grupo"
,"Quítate 1 prenda que no podrás volver a usar durante el resto del juego","Come chocolate líquido en el cuerpo de la persona que tu elijas"];

iniGame.onclick = function(){
    winGame.style.display = "none";
    winMode.style.display = "none";
    tit.style.display = "block";
}

function ruleta(){
    grados = Math.floor(Math.random()*360);
    rul.style.transform = "rotate("+ grados + "deg)";
    console.log(grados);
    switch (true) {
        case grados <= 360 && grados >= 269:
           toco.textContent="Reto:"
           retos()
        break;  
        case   grados <=268 && grados >=180:
            toco.textContent ="Verdad:"
            verdades();
        break; 
        case grados <=179 && grados >=93 :
            toco.textContent="Reto:"
            retos()
        break;
        case grados <=92 && grados >=0: 
    
        toco.textContent ="Verdad:"
        verdades(); 
    }
    if(game==0){
        alert("Selecciona una versión")
        winMode.style.backgroundColor = "black"
        winMode.style.border = 2+"px white solid"
        winMode.style.display="block";  
        winMode.style.position="absolute";
        winMode.style.marginLeft = 120+"px"
        winMode.style.marginTop = 150+"px";
        winMode.style.zIndex = 1;
        winRV.style.display = "none";
    }
    if(game>0){   
    winRV.style.display = "block";
    winRV.style.zIndex = 1;
    }
}
spin.addEventListener("click",ruleta)

var thescoreR = 0;
var nameTurn=n[y];
var thenewRName = pname[y]

mIt.onclick = function hecho(){
   winRV.style.display="none";
   y++;
   if(turn.textContent !== "Turno de:"){
    var nameTurn=n[y];
    var thenameT = nameTurn.value
    turn.textContent = thefirstT+thenameT;
   }
   if(turn.textContent == "Turno de:"){
       y=0
       var nameTurn=n[y];
 var thenameT = nameTurn.value
 turn.textContent = thefirstT+thenameT;
   }
console.log(y);
}
nomIt.onclick = function fallido(){
    winRV.style.display="none";
    y++
    if(turn.textContent !== "Turno de:"){
        var nameTurn=n[y];
        var thenameT = nameTurn.value
        turn.textContent = thefirstT+thenameT;
       }
       if(turn.textContent == "Turno de:"){
           y=0
           var nameTurn=n[y];
     var thenameT = nameTurn.value
     turn.textContent = thefirstT+thenameT;
       }
    console.log(y);
}