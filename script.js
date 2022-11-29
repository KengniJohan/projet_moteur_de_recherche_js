$("#form").submit(function (e){
    e.preventDefault()
    tndbapi
    var query = $("#search").val()

    let ACCESS_KEY = "f71c81e37f795d4385b28233486f55a8"

    let result
    
    let url = "http://api.serpstack.com/search?access_key=" + ACCESS_KEY +
              "&type=videos&query=" + query
    
    $.get(url, function(data){
        console.log(data)

        data.organic_results.forEach(res => {
            result = `

                <h1>${res.title}<\h1><br><a href = "${res.url}" target = "_blank">${res.url}</a>
                <p>${res.snippet}</p>
            `
                $("#result").append(result)
            
        });
    })
})