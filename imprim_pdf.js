document.getElementById("btn").disabled=true;
function verifSaisi(){
    var va= document.getElementById("a").value;
    var vb= document.getElementById("b").value;
    var vc= document.getElementById("c").value;
    var maChaine=va.charAt(2);
    console.log("indice"+maChaine); 
  
    var snom = va.length;
   
    var spren = vb.length;
  
    var sage= vc.length;
    if(snom>0 && spren>0 && sage>0  ){
        console.log("tres bien vous avez Saisi Tous"); 
       document.getElementById("btn").disabled = false;
    }
    else{
    console.log("Il faut Saisir tous les Champs"); 
    document.getElementById("btn").disabled = false;
    }
}
 function print(){
    w = open ("",'width=400,height=200,toolbar=no,scrolbars=no,resizable=yes');
     var xa= document.getElementById("a").value;
     var vb= document.getElementById("b").value;
     var vc= document.getElementById("c").value;
     w.document.write("<body>");
     w.document.write("Nom : ");
     w.document.write(xa);    
     w.document.write("<br>");
     w.document.write("Prénom :");
     w.document.write(vb);    
     w.document.write("<p>");
     w.document.write("Votre age est ");
     w.document.write(vc); 
     w.document.write("</p>"); 
     w.document.write("</body>");
     w.print();

 }