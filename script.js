$("#form").submit(function (e){
    e.preventDefault()

    var query = $("#search").val()

    let ACCESS_KEY = "ca2558dd76f382927b11da2c3084c33c"

    let result
    
    let url = "http://api.serpstack.com/search?access_key=" + ACCESS_KEY +
              "&type=web&query=" + query
    
    $.get(url, function(data){
        console.log(data)

        data.organic_results.forEach(res => {
            result = `

                <h1>${res.title}<\h1><br><a href = "${res.url}" target = "_parent"></a>
                <p>${res.snippet}</p>
            `
                $("#result").append(result)
            
        });
    })
})