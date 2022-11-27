
// const axios = require('axios');
// const params = {
//   access_key: '147965fef5265a580d01fcc1c17afd7d',
//   query: 'mcdonalds'
// }

// axios.get('http://127.0.0.1:5555/serp.php', {params})
//   .then(response => {
//     const apiResponse = response.data;
//     console.log("Total results: ", apiResponse.search_information.total_results);
//     apiResponse.organic_results.map((result, number) =>
//       console.log(`${number+1}. ${result.title}`));
//   }).catch(error => {
//     console.log(error);
//   });

document.getElementById("form").submit(function (e){
    e.preventDefault()

    let query = document.getElementById("search").val()

    let ACCESS_KEY = "147965fef5265a580d01fcc1c17afd7d"

    let type = function(){
        if(document.getElementById("videos").onclick)
            return "videos"
        else if(document.getElementById("images").onclick)
            return "images"
        else if(document.getElementById("news").onclick)
            return "news"
        else
            return "web" 
    }
    
    let url = "http://api.serpstack.com/search?access_key=" + ACCESS_KEY +
              "&type=" + type + "&query=" + query
    
    $.get(url, function(data){
        console.log(data)
    })
})