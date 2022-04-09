let search = document.getElementById("searchInput");
let allNamesDOMCollection = document.getElementsByClassName("card");
//debug console.log(allNamesDOMCollection[0].textContent);

search.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  //debug console.log(searchQuery);
  let allNamesDOMCollection = document.getElementsByClassName("card");
 //debug console.log(allNamesDOMCollection[0].textContent);

  for (let i = 0; i < allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
   //debug console.log(currentName);

    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[i].style.display = "block";
    } else {
      allNamesDOMCollection[i].style.display = "none";
    }
  }
});

