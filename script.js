// document.querySelectorAll('.link-items a')
// .forEach(link => {
//     link.addEventListener("click", function(){
//         $(".active").className = ""
//         link.classList.add("active")
//     })
// })

$("#form").submit(function (e){
    e.preventDefault()

    var query = $("#search").val()

    let ACCESS_KEY = "8bc05b83d5a698c902daf8bcb5a51d40906a9fcfa11425fb3b3310070cae8d66"

    let result
    
    let url = "https://serpapi.com/search.json?engine=google&q=" + query + ""
    
    $.get(url, function(data){
        // console.log(data)

        data.search_information.menu_items.forEach(res => {
            result = `

                <h1>${res.title}<\h1><br><a href = "${res.url}" target = "_blank">${res.url}</a>
                <p>${res.snippet}</p>
            `
                $("#result").append(result)
            
        });
    })
})

