// activate search on Enter key press*******************************
$( document ).ready(function() {
  console.log( "ready!" );

  $("#search-field").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#search-button").click(); 
        
    } 
}); 

// Giphy API**********************************************************

$('#search-button').on('click', () => {
  // alert("Button clicked"); 

  let searchTerm = $('#search-field').val();

  console.log(searchTerm);

  let url = "https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=" + searchTerm;


    $.get(url, function(giphyResponse) {

    let resultsHtml = '';

      for (let image of giphyResponse.data) {        
        let imgHtml = `<img src=${image.images.original.url} />`
        resultsHtml = resultsHtml + imgHtml;
       }

      //  console.log(resultsHtml);

      $('#search-results').html(resultsHtml);

        
});
})
});
