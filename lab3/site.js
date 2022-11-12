function günBul(){
     var userDay =document.getElementById('gün').value;
     var resultArea =document.getElementById('result')
     var hangiGün;
     if(userDay==1)
        hangiGün="Pazartesi";
    else if(userDay==2)
    hangiGün="Salı";
    else if(userDay==3)
    hangiGün="Çarşamba";
    else if(userDay==4)
    hangiGün="Perşembe";
    else if(userDay==5)
    hangiGün="Cuma";
    else if(userDay==6)
    hangiGün="Cumartesi";
    else if(userDay==7)
    hangiGün="Pazar";
    else{
        resultArea.innerHTML = "<span style='color:red;'>Lütfen 1 ile 7 arasında sayı yazınız</span>";
        return;
    }
       
     resultArea.innerHTML= "Bugün " + hangiGün;
}