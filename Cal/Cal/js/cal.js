$(document).ready(function() {

    var start_year
    var start_month 
    var start_day
    var all_day
    var eng_month
    
    var month_day_array = new Array();
    var days_array = new Array();
    var last_day =0;
    var leap_year = 0; 

   

    $("#search").on("click",function(){

        $('#now_year').empty();
        $('#now_month').empty();
        // $('#calendar_table > tbody>  td').remove();
        console.log("row 몇줄? "+$('#calendar_table > tbody > td').length);

        // $('#calendar_table > tbody').find('td').empty();

        
        $('#select_day_table >tbody > tr').find('td').remove();

        var calendar_arraylist= new Array(new Array(new Array(new Array())));
        

        var startday = document.getElementById("startday").value;
        var endday = document.getElementById("endday").value;
        start_year = startday.substr(0,4);
        start_month = startday.substr(4,2);
        start_day = startday.substr(6,2);

        end_year = endday.substr(0,4);
        end_month = endday.substr(4,2);
        end_day = endday.substr(6,2);



        var input_year = Number(start_year);
        var input_month = Number(start_month);
        var output_year = Number(end_year);

        var gigan =  (output_year-input_year)+1;
        var year_array =  new Array(gigan);
  

        if(gigan==1){
            calendar_arraylist[0][0][0].push(input_year);
            console.log(calendar_arraylist[0][0][0][0]);
            if(start_month==end_month){
                calendar_arraylist[0][0].push(start_month);
                console.log(calendar_arraylist[0][0][1]);
               for(;start_day<=end_day;start_day++){
                 calendar_arraylist[0].push(start_day);
               } 
               console.log(calendar_arraylist[0][1]);   
            }
        }else{
            for(;input_year<=end_year;){
                
                calendar_arraylist[0][0][0].push(input_year);
                input_year++;
            }
        }

        if ((start_year % 4 == 0 && start_year % 100 != 0) || start_year % 400 == 0) {
            leap_year=1
        } 
        
        if (start_month==01) {
            eng_month=  "Jan"
        }else if(start_month==02){
            eng_month=  "Feb"
        }else if(start_month==03){
            eng_month=  "Mar"
        }else if(start_month==04){
            eng_month=  "Apr"
        }else if(start_month==05){
            eng_month=  "May"
        }else if(start_month==06){
            eng_month=  "Jun"
        }else if(start_month==07){
            eng_month=  "July"
        }else if(start_month==08){
            eng_month=  "Aug"          
        }else if(start_month==09){
            eng_month=  "Sep"
        }else if(start_month==10){
            eng_month=  "Oct" 
        }else if(start_month==11){
            eng_month= "Nov"
        }else {
            eng_month= "Dec"
        }



        $('#now_year').append(start_year);
        $('#now_month').append(eng_month);

        if(start_month == 4 ||start_month == 6 || start_month == 9 || start_month == 11){
            for(var i=1;i<=30;i++){
                calendar_arraylist.push(i);
            }
        }else if (start_month == 2 && leap_year== 1) {
            for(var i=1;i<=29;i++){
                calendar_arraylist.push(i);
            }
        } else if (start_month == 2 && leap_year== 0) {
            for(var i=1;i<=28;i++){
                calendar_arraylist.push(i);
            }
        } else {
            for(var i=1;i<=31;i++){
                calendar_arraylist.push(i);
            }
        }

        console.log( calendar_arraylist)

        for(var i=1;i<=31;i++){
            if(i==1||i==8||i==15||i==22||i==29){
                $('#calendar_table > tbody:last').append('<tr></tr>');  
            }
            if(calendar_arraylist[i]==null){
                break;
            }else{
                $('#calendar_table > tbody:last').append('<td>'+calendar_arraylist[i]+'</td>')
            }
        }
    });

    

    $("#calendar_table > tbody > td").click(function(){
        var td = $(this).val();
        console.log(td);
    });
    
    $("#pre_img").on("click",function(){

    });
    

    $("#next_img").on("click",function(){

    });
    
    $("#input_select_day").on("click",function(){
        
        $('#select_day_table > tbody:last').append(
           '<tr><td>'+start_year+'</td><td>'+start_month+'</td><td>'+start_day+'</td></tr>'
        );
        
    });

    

});

