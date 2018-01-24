$(document).ready(function(){
    $("#get_button").click(function(){
        var city=$("#city").val();
        var code=$("#country_code").val();
        if(city.length()>1)
        {
        $("#err_city").html=("");
        var link='http://api.openweathermpa.org/data/2.5/weather?q=';
        link=link+city;
            if(code.length()==2)
            {
            link=link+","+code;
            $("#err_code").html=("");
            }
        link=link+"&appid=8563a96a072dd0e90144a4a4b7e108cf";
            
            else
            {
            $("#err_code").html("Incorrect code!");
            }
        }
        else
        {
        $("#err_city").html("Incorrect city name!");
        }
    })
});