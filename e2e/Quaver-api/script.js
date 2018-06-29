$(function() {
    // Varianbles 
    var functionName = 'getEhis'; 

    // Loader 
    function loaderShow() {
        $('.loader').fadeIn(500);
    }

    function loaderHide() {
        $('.loader').fadeOut(500); 
    }

    //GetGenres 
    function LoadData() {
        loaderShow(); 

        $.getJSON("http://edialu.com/quaver/index.php", function(data){
            console.log(data);
        });
    }

   LoadData(); 
}); 