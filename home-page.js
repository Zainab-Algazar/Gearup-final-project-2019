//*to display search box*//
$(document).ready(function(event){
    $(".search-icon").click(function(){
        $(".searchbar-style").slideToggle("500");
    });
    $('.cart-icon').click(function(event) {
        $("#cartPage").slideToggle("500");
    });
    $('#close').click(function(event) {
        $('#productPage').hide();       
    });
    var product = {
        "Albums_array": [{
            "id": "album_1",
            "name": "Pink Friday",
            "photo": "http://theaudacityofcolor.com/core/wp-content/uploads/2010/10/Nicki-Minaj-Pink-Friday.jpg",
            "category":"Albums",
            "info":"Pink Friday is the debut studio album by Trinidadian-born American rapper Nicki Minaj. It was released on November 22, 2010, by Young Money",
            "price": 60
         },{
            "id": "album_2",
            "name": "LandMark Void",
            "photo": "http://idaaf.com/wp-content/uploads/2014/03/3.Landmark-VOID.jpg",
            "category":"Albums",
            "info":"Check out Void song by Landmark on MBM Music. Stream ad-free or purchase CD's and MP3s now on MBM.com.",
            "price": 50
        },{
            "id": "album_3",
            "name": "Danger Doom",
            "photo": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6b2ef062-6913-4a94-a265-7d75f4f91854/64.jpg",
            "category":"Albums",
            "info":"Danger Doom was a hip hop project consisting of Danger Mouse and MF DOOM. Their first album, The Mouse and the Mask, was released in 2005, and followed by the Occult Hymn EP in 2006",
            "price": 75
        }],
        "Books_array": [{
            "id": "book_1",
            "name": "SPEAK",
            "photo": "https://images.gr-assets.com/books/1529044298l/39280444.jpg",
            "category":"Books",
            "info":"Check out speak book by Laurie Halse Anderson on MBM website. purchase pdf copy now on MBM.com.",
            "price": 50
        },{
            "id": "book_2",
            "name": "A Dolly's House",
            "photo": "https://images.gr-assets.com/books/1427119396l/37793.jpg",
            "category":"Books",
            "info":"The prostitute was one of the first of the gentler sex to arrive in Alaska during the economic boom of the Gold Rush. Her presence was welcome by the early-day Sourdough, and tolerated by a mercantile generation of later, easier days.",
            "price": 70
        },{
            "id": "book_3",
            "name": "Little Women",
            "photo": "https://images.gr-assets.com/books/1388269517l/1934.jpg",
            "category":"Books",
            "info":"Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women.",
            "price": 35
        }],
        "Movies_array": [{
            "id": "movie_1",
            "name": "Maiden",
            "photo": "https://previews-graphicriver.imgix.net/files/228254188/movie%20posters%20poster%20template%208.5x11.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=2f070615ecf33c60d0e1df0ddcaf552d",
            "category":"Movies",
            "info":"In 1989 Tracy Edwards leads the first all-female crew in the Whitbread Round the World Race, a grueling yachting competition that covers 33,000 miles and lasts nine months.",
            "price": 20
        },{
            "id": "movie_2",
            "name": "Right Time",
            "photo": "https://marketplace.canva.com/MACGp9_jvD0/2/0/thumbnail_large/canva-cityscape-buildings-movie-poster-MACGp9_jvD0.jpg",
            "category":"Movies",
            "info":"Bridget returns to her childhood home in Chicago, accompanied by her rebellious daughter. Forced to referee between her father's stubborn insistence that his wife remains at home and her equally determined brother's efforts to place her in a memory carefacility.",
            "price": 50
        },{
            "id": "movie_3",
            "name":"What They Had",
            "photo": "https://www.joblo.com/assets/images/oldsite/posters/images/full/WHATTHEYHAD_Poster.jpg",
            "category":"Movies",
            "info":"After her ailing mother wanders off during a blizzard, Bridget returns to her childhood home in Chicago, accompanied by her rebellious daughter. Forced to referee between her father's stubborn insistence that his wife remains at home and her equally determined brother's efforts to place her in a memory carefacility.",
            "price": 85
        }]
    };
    function addToPage(a){
        for(var j=0; j< a.length;j++){
        $('.grid-container').append('<section ><img/><div class="overlay"><ul><li class="name"></li><li class="category"></li><li class="price"><span></span> EGP</li><li class="info"></li></ul> <a href="#productPage" class="details">More Details</a><button type="button" class="buy">Add To Cart</button></div></section>');
        $('.grid-container section:last-child').attr('id',a[j].id);
        $("#"+a[j].id).addClass(a[j].category);
        $("#"+a[j].id+" img").attr('src', a[j].photo); //('#book_3 img')
        $("#"+a[j].id+" img").attr('alt',a[j].name+" poster");
        $("#"+a[j].id+" img").attr('title',a[j].name);
        $("#"+a[j].id+" .name").text(a[j].name);
        $("#"+a[j].id+" .category").text(a[j].category);
        $("#"+a[j].id+" .info").text(a[j].info);
        $("#"+a[j].id+" .price span").text(a[j].price ); //i made it span to keep it a number and use it in total calculation
        $("#"+a[j].id+" .buy").attr('id',a[j].category+j);
        $("#"+a[j].id+" .details").attr('id',a[j].id+j);
        };
    };

    addToPage(product.Albums_array); 
    addToPage(product.Books_array);
    addToPage(product.Movies_array);
    //make the options in filter more dynamic
    var productList = ["All", "Albums", "Books","Movies"];
    var j=1;
    for (var i = 0; i < productList.length; i++) {
           $('select').append('<option></option>');
           $('select option:last-child').attr('value',j);
           $('select option:last-child').text(productList[i]);
          j+=1;
    };

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
    //addToCart function
   var total=0;
   $('body').on('click', '.buy', function(e) {
        var parentSection = $(this).closest("section").attr('id');
        var liId="cart"+parentSection;
        $('.cartItems').append('<li><img /><ul><li class="name"></li><li class="category"></li><li class="price"></li></ul></li>');
        $('.cartItems  li:last-child').attr('id',liId);
        $('#'+liId+' img').attr('src',$('#'+parentSection+" img").attr('src'));
        $('#'+liId+' .name').text($('#'+parentSection+" .name").text());
        $('#'+liId+' .category').text($('#'+parentSection+" .category").text());
        $('#'+liId+' .price').text($('#'+parentSection+" .price span").text()+" EGP");
        var itemPrice=+$('#'+parentSection+" .price span").text();
        total+=itemPrice;
        $('.scroll span').text(total+" EGP");
        $('.scroll .empty').hide();
        $('.scroll .total').show();
    });
   //product div content creation
    $('body').on('click', '.details', function(e){
        $('#productPage section').empty();
        var parentSection = $(this).closest("section").attr('id');
        $('#productPage section').attr('id','productId'+parentSection);
        $('#productId'+parentSection+' .buy').attr('id','productt'+parentSection); 
        $('#productId'+parentSection).append('<img/><ul><li class="name"></li><li class="category"></li><li class="summary"></li><li class="price"><span></span> EGP</li></ul><button type="button" class="buy">Add To Cart</button>');
        $('#productId'+parentSection+' img').attr('src',$('#'+parentSection+" img").attr('src'));
        $('#productId'+parentSection+' .name').text($('#'+parentSection+" .name").text());
        $('#productId'+parentSection+' .category').text($('#'+parentSection+" .category").text());
        $('#productId'+parentSection+' .summary').text($('#'+parentSection+" .info").text());
        $('#productId'+parentSection+' .price span').text($('#'+parentSection+" .price span").text()); 
        $('#productPage').show();       
    });
});