/**
 * Created by Claudia on 27/07/2019.
 */
const words = [
    "proxychains ","anonsurf ","recon-ng ","ncat ",
    "nbtscan ", "nmap ","searchsploit ","msfconsole ",
    "msfvenom ","mimikatz ","tshark ","hydra ",
    "medusa ","john ","ncrack ","hashcat ",
    "aircrack-ng ","aireplay-ng ","mdk3","reaver",
    "pyrit ", "setoolkit ","ettercap ","dsniff ",
    "dirb ", "cewl ","proxystrike ","sqlmap ",
    "nikto ", "websploit ","wpscan ","joomscan "
];
var i = 0;
var timer;

function typingEffect(){
    var word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0){
            document.getElementById('word').innerHTML += word.shift();
        }
        else {

            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping,200);
    };
    loopTyping();
}

function deletingEffect(){
    var word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0){
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        }
        else {
            if(words.length>(i+1)){
                i++;
            }
            else{
                i=0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting,100);
    };
    loopDeleting();
}
typingEffect();