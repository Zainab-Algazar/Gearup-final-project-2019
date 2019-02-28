 $(document).ready(function(){
    	$(".link-style").click(function(){
    	$(".searchbar-style").slideToggle("500");
     });
    });
    var album_1={
    	"id": "album_1",
    	"name": "Pink Friday",
    	"photo": "http://theaudacityofcolor.com/core/wp-content/uploads/2010/10/Nicki-Minaj-Pink-Friday.jpg",
    	"category":"Albums",
    	"price": 60
    };
    var album_2={
    	"id": "album_2",
    	"name": "LandMark Void",
    	"photo": "http://idaaf.com/wp-content/uploads/2014/03/3.Landmark-VOID.jpg",
    	"category":"Albums",
    	"price": 50
    };
    var album_3={
    	"id": "album_3",
    	"name": "Danger Doom",
    	"photo": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6b2ef062-6913-4a94-a265-7d75f4f91854/64.jpg",
    	"category":"Albums",
    	"price": 75
    };
    var book_1={
    	"id": "book_1",
    	"name": "Speak",
    	"photo": "https://images.gr-assets.com/books/1529044298l/39280444.jpg",
    	"category":"Books",
    	"price": 50
    };
    var book_2={
    	"id": "book_2",
    	"name": "A Dolly's House",
    	"photo": "https://images.gr-assets.com/books/1427119396l/37793.jpg",
    	"category":"Books",
    	"price": 70
    };
    var book_3={
    	"id": "book_3",
    	"name": "Little Women",
    	"photo": "https://images.gr-assets.com/books/1388269517l/1934.jpg",
    	"category":"Books",
    	"price": 35
    };
    var movie_1={
    	"id": "movie_1",
    	"name": "Maiden",
    	"photo": "https://previews-graphicriver.imgix.net/files/228254188/movie%20posters%20poster%20template%208.5x11.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=2f070615ecf33c60d0e1df0ddcaf552d",
    	"category":"Movies",
    	"price": 20
    };
    var movie_2={
    	"id": "movie_2",
    	"name": "Right Time",
    	"photo": "https://marketplace.canva.com/MACGp9_jvD0/2/0/thumbnail_large/canva-cityscape-buildings-movie-poster-MACGp9_jvD0.jpg",
    	"category":"Movies",
    	"price": 50
    };
    var movie_3={
    	"id": "movie_3",
    	"name": "What They Had",
    	"photo": "https://www.joblo.com/assets/images/oldsite/posters/images/full/WHATTHEYHAD_Poster.jpg",
    	"category":"Movies",
    	"price": 85
    };
    function add_to_page(a){
    	var i="#"+a.id;
    	var m= i+" img";
    	var n= i+" .name";
    	var c= i+" .category";
    	var p= i+" .price";
    	$(m).attr('src', a.photo);
    	$(n).text(a.name);
    	$(c).text(a.category);
    	$(p).text(a.price + " EGP");
    };
    add_to_page(album_1);
    add_to_page(album_2);
    add_to_page(album_3);
    add_to_page(book_1);
    add_to_page(book_2);
    add_to_page(book_3);
    add_to_page(movie_1);
    add_to_page(movie_2);
    add_to_page(movie_3);
    
       
