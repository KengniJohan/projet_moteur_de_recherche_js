const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".uses .search button");


searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
}