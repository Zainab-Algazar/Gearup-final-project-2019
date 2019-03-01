//*to display search box*//
$(document).ready(function(){
    $(".search-icon").click(function(){
    $(".searchbar-style").slideToggle("500");
    });
    $(".cart-icon").click(function(){
    $(".shopping-cart").slideToggle("500");
    $(".shopping-cart").css({display:'flex',flexDirection: 'column'})
    });
    var album_array =[{
        "id": "album_1",
        "name": "Pink Friday",
        "photo": "http://theaudacityofcolor.com/core/wp-content/uploads/2010/10/Nicki-Minaj-Pink-Friday.jpg",
        "category":"Albums",
        "price": 60
    },{
        "id": "album_2",
        "name": "LandMark Void",
        "photo": "http://idaaf.com/wp-content/uploads/2014/03/3.Landmark-VOID.jpg",
        "category":"Albums",
        "price": 50
    },{
        "id": "album_3",
        "name": "Danger Doom",
        "photo": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6b2ef062-6913-4a94-a265-7d75f4f91854/64.jpg",
        "category":"Albums",
        "price": 75
    }];
    
    var book_array=[{
        "id": "book_1",
        "name": "Speak",
        "photo": "https://images.gr-assets.com/books/1529044298l/39280444.jpg",
        "category":"Books",
        "price": 50
    },{
        "id": "book_2",
        "name": "A Dolly's House",
        "photo": "https://images.gr-assets.com/books/1427119396l/37793.jpg",
        "category":"Books",
        "price": 70
    },{
        "id": "book_3",
        "name": "Little Women",
        "photo": "https://images.gr-assets.com/books/1388269517l/1934.jpg",
        "category":"Books",
        "price": 35
    }];

    var movie_array=[{
        "id": "movie_1",
        "name": "Maiden",
        "photo": "https://previews-graphicriver.imgix.net/files/228254188/movie%20posters%20poster%20template%208.5x11.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=2f070615ecf33c60d0e1df0ddcaf552d",
        "category":"Movies",
        "price": 20
    },{
        "id": "movie_2",
        "name": "Right Time",
        "photo": "https://marketplace.canva.com/MACGp9_jvD0/2/0/thumbnail_large/canva-cityscape-buildings-movie-poster-MACGp9_jvD0.jpg",
        "category":"Movies",
        "price": 50
    },{
        "id": "movie_3",
        "name": "What They Had",
        "photo": "https://www.joblo.com/assets/images/oldsite/posters/images/full/WHATTHEYHAD_Poster.jpg",
        "category":"Movies",
        "price": 85
    }];
    
    function addToPage(a){
        for(var j=0; j< a.length;j++){
        var i="#"+a[j].id;
        var m= i+" img";
        var n= i+" .name";
        var c= i+" .category";
        var p= i+" .price";
        $('.grid-container').append('<section ><img/><div class="overlay"><ul><li class="name"></li><li class="category"></li><li class="price"></li></ul> <a href="#" class="details">More Details</a><a href="#" class="buy">Buy</a></div></section>');
        $('.grid-container section:last-child').attr('id',a[j].id);
        $(i).addClass(a[j].category);
        $(m).attr('src', a[j].photo);
        $(m).attr('alt',a[j].name+" poster");
        $(m).attr('title',a[j].name)
        $(n).text(a[j].name);
        $(c).text(a[j].category);
        $(p).text(a[j].price + " EGP");
        }
    };
        addToPage(album_array);
        addToPage(book_array);
        addToPage(movie_array);
    
    var productList = ["All", "Albums", "Books","Movies"];
    var j=1;
    for (var i = 0; i < productList.length; i++) {
           $('select').append('<option></option>');
           $('select option:last-child').attr('value',j);
           $('select option:last-child').text(productList[i]);
          j+=1;
    }

    $("select").change (function(event){
      var passOption= $(event.target).val();
      switch(passOption){
        case "1":
            $('.grid-container').empty();
            addToPage(album_array);
            addToPage(book_array);
            addToPage(movie_array);
            break;
        case "2":
            $('.grid-container').empty();
            addToPage(album_array);
            break;
        case "3":
            $('.grid-container').empty();
            addToPage(book_array);
            break;
        case "4":
            $('.grid-container').empty();
            addToPage(movie_array);
            break;
      };
    });
  });