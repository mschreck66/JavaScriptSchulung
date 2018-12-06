(function(){

    var uri = 'https://api.github.com/users/';

    //DOM querys
    var frm = document.getElementById('frmAcc');
    var fldAcc = document.getElementById('fldAcc');
    var repoCount = document.getElementById('repo_count');
    var created = document.getElementById('created');

    //Events
    frm.addEventListener('submit', function(ev){

        //wenn nichts eingegeben wurde    
        if ( fldAcc.value.trim().length == 0) return;

        console.log('Submitting');

         //Ajax
        var xhr = new XMLHttpRequest();
        //ich bin der einzige
        xhr.onreadystatechange = function() {
            console.log(xhr.readyState);
            //1 = geöffnet
            //2 = gesendet
            //3 = es kommt antwort
            //4 = ergebnisse bereit    
            if ( xhr.readyState == 4 ) {
                 var acc = JSON.parse(xhr.responseText);
                 repoCount.innerHTML = acc.public_repos; 
                 created.innerHTML = new Date(acc.created_at).toLocaleDateString();  
            }
        }

        console.log('Ready State: ' , xhr.readyState);
        
        //true = asynchron, nur asynchron durchführen!!!
        xhr.open('GET', uri + fldAcc.value ,true) 
        xhr.send(null);

        ev.preventDefault();
    });
    
   

})();