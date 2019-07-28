/**
 * Created by Claudia on 26/07/2019.
 */

function sendMail(){
    var subject = document.getElementById('pmSubject').value;
    var body = document.getElementById('pmBody').value;
    window.open('mailto:info@cs-academy.org?subject='+subject+'&body='+body);
}

function hackingEtico(){
    document.getElementById('pmSubject').value = "Solicitar Curso";
    document.getElementById('pmBody').value = "Saludos, quiero solicitar el curso de Hacking Ético.";
}

function hackingAvanzado(){
    document.getElementById('pmSubject').value = "Solicitar Curso";
    document.getElementById('pmBody').value = "Saludos, quiero solicitar el curso de Hacking Avanzado.";
}

function personalizado(){
    document.getElementById('pmSubject').value = "Solicitar Curso";
    document.getElementById('pmBody').value = "Saludos, quiero solicitar un curso personalizado: \n {sustituya esto por sus intereses}";
}