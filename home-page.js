//*to display search box*//
$(document).ready(function(){
    $(".search-icon").click(function(){
    $(".searchbar-style").slideToggle("500");
    });
$('.cart-icon').click(function() {
    $("#cartPage").slideToggle("500");
    });

    var product = {
        "Albums_array": [{
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
        }],
        "Books_array": [{
            "id": "book_1",
            "name": "SPEAK",
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
        }],
        "Movies_array": [{
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
            "name":"What They Had",
            "photo": "https://www.joblo.com/assets/images/oldsite/posters/images/full/WHATTHEYHAD_Poster.jpg",
            "category":"Movies",
            "price": 85
        }]
    };
    function addToPage(a){
        for(var j=0; j< a.length;j++){
        $('.grid-container').append('<section ><img/><div class="overlay"><ul><li class="name"></li><li class="category"></li><li class="price"></li></ul> <a href="product.html" class="details">More Details</a><button type="button" class="buy">Add To Cart</button></div></section>');
        $('.grid-container section:last-child').attr('id',a[j].id);
        $("#"+a[j].id).addClass(a[j].category);
        $("#"+a[j].id+" img").attr('src', a[j].photo);
        $("#"+a[j].id+" img").attr('alt',a[j].name+" poster");
        $("#"+a[j].id+" img").attr('title',a[j].name);
        $("#"+a[j].id+" .name").text(a[j].name);
        $("#"+a[j].id+" .category").text(a[j].category);
        $("#"+a[j].id+" .price").text(a[j].price + " EGP");
        $("#"+a[j].id+" .buy").attr('id',a[j].category+j);
        }
    };
        addToPage(product.Albums_array);
        addToPage(product.Books_array);
        addToPage(product.Movies_array);
    
    var productList = ["All", "Albums", "Books","Movies"];
    var j=1;
    for (var i = 0; i < productList.length; i++) {
           $('select').append('<option></option>');
           $('select option:last-child').attr('value',j);
           $('select option:last-child').text(productList[i]);
          j+=1;
    }
    $("#searchbar").on("keyup", function(event){
      var userInput= $(event.target).val().toUpperCase();
      var searchArray=[];
      for(var key in product){
        for(var i=0;i<product[key].length;i++){
            var nameOfPuoduct= product[key][i]["name"].toUpperCase();
            if(nameOfPuoduct.includes(userInput)){
                $('.grid-container').empty();
                searchArray.push(product[key][i]);
                addToPage(searchArray);
            }else if(userInput===""){
                $('.grid-container section').show();
            // }else{
            //     $('.grid-container').empty();
            //     $('.grid-container').text('no results for what you search');
            };
        };
      };
      
    });
    $("select").change (function(event){
      var passOption= $(event.target).val();
      switch(passOption){
        case "1":
            $('.grid-container .Albums, .grid-container .Books,.grid-container .Movies').show();
            break;
        case "2":
            $('.grid-container .Albums').show();
            $('.grid-container .Books, .grid-container .Movies').hide();
            break;
        case "3":
            $('.grid-container .Books').show();
            $('.grid-container .Albums, .grid-container .Movies').hide();
            break;
        case "4":
            $('.grid-container .Movies').show();
            $('.grid-container .Albums, .grid-container .Books').hide();
            break;
      };
    });

   var total;
   var cart_array=[];
    function addToCart(a){
        total=0
        for(var j=0; j< a.length;j++){
        $('.cartItems').append('<li><img ><ul><li class="name"></li><li class="category"></li><li class="details"></li><li class="price">60 EGP</li></ul></li>');
        $('.cartItems  li:last-child').attr('id',a[j].id);
        $("#"+a[j].id).addClass(a[j].category);
        $("#"+a[j].id+" img").attr('src', a[j].photo);
        $("#"+a[j].id+" img").attr('alt',a[j].name+" poster");
        $("#"+a[j].id+" img").attr('title',a[j].name);
        $("#"+a[j].id+" .name").text(a[j].name);
        $("#"+a[j].id+" .category").text(a[j].category);
        $("#"+a[j].id+" .price").text(a[j].price + " EGP");
        total+=a[j].price;
        $('.scroll span').text(total+" EGP");
        }
    };
        
    $('.buy').click(function() {
        var buttonId=this.id;
        var numId=buttonId.replace(/['Albums Books Movies"]+/g, '')
        if(buttonId.includes("Albums")){
            cart_array.push(product.Albums_array[numId]);
        }else if(buttonId.includes("Books")){
            cart_array.push(product.Books_array[numId]);
        }else if(buttonId.includes("Movies")){
            cart_array.push(product.Movies_array[numId]);
        }
        $('.cartItems').empty();
        $('.scroll .empty').hide();
        addToCart(cart_array);
    });

    // console.log(cart_array);
});