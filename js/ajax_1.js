$(function(){
$.ajax({

    url: "./json/best_product.json",
    

    dataType: "json",

    success : function(data){

      if(data.length>0){



        for(var i in data){
      

          $(".box1").eq(i).append('<div><a href="#">'+"<img src='"+data[i].url+"'/>"+'</a></div>'); 




$(".box1").eq(i).append('<h3>'+data[i].new+"<h3>");  

          $(".box1").eq(i).append('<h4><a href="#">'+data[i].title+"</a><h4>");        

           $(".box1").eq(i).append('<h2>'+data[i].cost+"</h2>");         
          
          $(".box1").eq(i).append('<h5>'+data[i].price+"</h5>");  
          
          $(".box1").eq(i).append('<p>'+data[i].discount+"</p>"); 

          $(".box1").eq(i).append("<h6>"+data[i].review+"</h6>");



    


        }
       
      }

    }

  });
});

