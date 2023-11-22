$(document).ready(function(){
    $("#lista1").click(function () {
        
        table = '<tr><th>Nome</th></tr>';
        txt = "nomes";
        $.ajax({
            url:"/lista",
            type: "POST",
            dataType: "json",
            data:{"txt":txt},
            success: function(resp){

                
                for (i=0; i < resp.length; i++){
                    table = table + "<tr><td>"+ resp[i]+"</td></tr>";
                   
                }
                $("#tabela1").html(table);
            }
        })

    });


})

$(document).ready(function(){
    $("#lista2").click(function () {
        txt = "notas";
        table= ''
        $.ajax({
            url:"/lista",
            type: "POST",
            dataType: "json",
            data:{"txt":txt},
            success: function(resp){
              
                table = table + "<tr><th>Nota</th></tr>";
                for (i=0; i < resp.length; i++){
                    table = table + "<tr><td>"+ resp[i]+"</td></tr>";
                   
                }
                $("#tabela2").html(table);
            }
        })

    });


})