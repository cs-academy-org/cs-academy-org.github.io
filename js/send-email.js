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
    document.getElementById('pmBody').value = "Hola, quiero solicitar el curso de Introducción al Hacking Ético.";
}

function hackingAvanzado(){
    document.getElementById('pmSubject').value = "Solicitar Curso";
    document.getElementById('pmBody').value = "Hola, quiero solicitar el curso de Hacking Ético Avanzado.";
}

function personalizado(){
    document.getElementById('pmSubject').value = "Solicitar Curso";
    document.getElementById('pmBody').value = "Hola, quiero solicitar un curso personalizado: \n {sustituya esto por sus intereses}";
}

function linux(){
    document.getElementById('pmSubject').value = "Solicitar Curso";
    document.getElementById('pmBody').value = "Hola, quiero solicitar el curso de GNU/LINUX.";
}