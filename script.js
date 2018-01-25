$(document).ready(function(){
    $("#get_button").click(function(){
        var city=$("#city").val();
        var code=$("#country_code").val();
        if(city.length>1){
        $("#err_city").html("");
        var link='http://api.openweathermap.org/data/2.5/weather?q=';
        link=link+city;
        }
        else{
        $("#err_city").html("Incorrect city name!");
        }
        if(code.length==2){
        link=link+","+code;
        $("#err_code").html("");
        link=link+"&appid=8563a96a072dd0e90144a4a4b7e108cf";
        }
        else{
        $("#err_code").html("Incorrect code!");
        }
  
        $.ajax({
            url:link,
            data: {format: 'json'},
            error : function(){
            $("#content").html("<div id='err_msg'><b>Error has occured!</b><br>Weather service is not available right now.</br><b>We're sorry</b> for inconvenience.</div>");
            },
            dataType: 'json',
            success : function(data){
                $('#content').empty();
                var table = $("<table/>");
                table.attr("id","data_table");
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("<b>City: </b>");
                var td2=$("<td/>");
                $(td2).append(city);
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("<b>Temperature: </b>");
                var td2=$("<td/>");
                $(td2).append(Math.floor(data.main.temp-273.15)+"°C");
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("<b>Humidity: </b>");
                var td2=$("<td/>");
                $(td2).append(data.main.humidity+"%");
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("<b>Description: </b>");
                var td2=$("<td/>");
                $(td2).append(data.weather[0].description);
                if(data.weather[0].description=="mist"){
                td2.html("(not available)");
                }
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                
                var tr=$("<tr/>");
                var td1=$("<td/>");
                $(td1).append("<b>Pressure: </b>");
                var td2=$("<td/>");
                $(td2).append(data.main.pressure+" hPa");
                tr.append(td1);
                tr.append(td2);
                table.append(tr);
                $('#content').append(table);
            },
            type: 'GET'
               });
          })
});