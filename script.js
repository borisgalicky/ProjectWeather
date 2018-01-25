$(document).ready(function(){
    $("#get_button").click(function(){
        var city=$("#city").val();
        var code=$("#country_code").val();
        if(city.length>1)
        {
        $("#err_city").html("");
        var link='http://api.openweathermap.org/data/2.5/weather?q=';
        link=link+city;
        }
        else
        {
        $("#err_city").html("Incorrect city name!");
        }
        if(code.length==2)
        {
        link=link+","+code;
        $("#err_code").html("");
        link=link+"&appid=8563a96a072dd0e90144a4a4b7e108cf";
        }
        else
        {
        $("#err_code").html("Incorrect code!");
        }
  
        $.ajax({
            url:link,
            data: {format: 'json'},
            error : function(){},
            dataType: 'json',
            success : function(data){
                console.log('temp: '+data.main.temp);
                console.log('desc: '+data.weather[0].description);
                $('#content').empty();
                var table = $("<table/>");
                table.attr("id","data_table");
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("City:");
                var td2=$("<td/>");
                $(td2).append(city);
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("Temperature:");
                var td2=$("<td/>");
                $(td2).append(data.main.temp-273.15);
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("Humidity:");
                var td2=$("<td/>");
                $(td2).append(data.main.temp-273.15);
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                $('#content').append(table);
            },
            type: 'GET'
               });
          })
});