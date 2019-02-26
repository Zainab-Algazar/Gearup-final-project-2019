var root ="http://jsonplaceholder.typicode.com";
$.ajax({
    'url': root + '/posts?userId=1',
    'method': 'get',
    "success": function(data){
        $("#posts").text(data.title);
      console.log(data);
      for(var i=0; i<data.length;i++){
          $("body").append("<p>"+data[i].title+"</p>");
          $("body").append("<p>"+data[i].body+"</p>");
      }
    },
    "error": function(error) {
      console.log(error);
    }
  });

var weather = "https://openweathermap.org/forecast?id=360630/appid: be3a4ccb4a53292cbb0073ee79a707c5"
$.ajax({
    'url': weather + '/main',
    'method': 'get',
    "success": function(data){
        console.log(data);
    },
    "error": function(error){
        console.log(error);
    }
   });
  