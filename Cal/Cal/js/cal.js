$(document).ready(function() {

    $("#search").on("click",function(){

        $('#now_year').empty();
        $('#now_month').empty();
       

        var startdate=document.getElementById("startday").value;
        var startdate_split=startdate.split("-");
        console.log(startdate_split[0]);
        var enddate = document.getElementById("endday").value;
        var enddate_split=enddate.split("-");

        var year_array = new Array(Array(),Array()); 
        var month_array = new Array(); 
        var day_array = new Array();    
        var leap_year = 0; 

        for(var i=Number(startdate_split[0]);i<=enddate_split[0];i++){
            year_array.push(i);
        }

        if ((startdate_split[0] % 4 == 0 && startdate_split[0] % 100 != 0) || startdate_split[0] % 400 == 0) {
            leap_year=1;
        } 



        if(startdate_split[0]===enddate_split[0]){
            for(var i=Number(startdate_split[1]);i<=enddate_split[1];i++){
                month_array.push(i); 
            }
            if(startdate_split[2]>1){
                var null_day=1;
                for(;null_day<Number(startdate_split[2]);null_day++){
                    month_array.push(1); 
                }


            }else{
                for(var i=0;i<(Number(enddate_split[1])-Number(startdate_split[1]));i++){
                    if(month_array[i] == 4 ||month_array[i] == 6 || month_array[i]  == 9 || month_array[i]  == 11){
                        for(var j=1;j<=30;j++){
                            day_array.push(j);
                        }
                    }else if (month_array[i] == 2 && leap_year== 1) {
                        for(var j=1;j<=29;j++){
                            day_array.push(j);
                        }
                    }else if (month_array[i] == 2 && leap_year== 0) {
                        for(var j=1;j<=28;j++){
                            day_array.push(j);
                        }
                    } else {
                        for(var j=1;j<=31;j++){
                            day_array.push(j);
                        }
                    }
                    console.log("시작일"+month_array.length)
                }
            }
        }else{
            for(i=Number(startdate_split[1]);i<=12;i++){
                month_array.push(i); 
            }
                
            var year_gigan =(Number(enddate_split[0])-Number(startdate_split[0]));

            for(i=1;i<=year_gigan;i++){
                for(j=1;j<=12;j++){
                    month_array.push(j); 
                }

            }
        }
        
        console.log("일 수 계산"+day_array); 
        var eng_month;

        $('#now_year').append(year_array[0]);
        $('#now_month').append(eng_month);

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

