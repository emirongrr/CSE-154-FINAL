
var dynamic = document.querySelector('.best');  
for (var i = 0; i < projects.length; i++) {
  var fetch = document.querySelector('.best').innerHTML;
  dynamic.innerHTML = `  
        <a href="${projects[i].url}">
        <div class="card">
            <div class="title-bar">
              <div id="red"></div>
              <div id="orange"></div>
              <div id="green"></div>
              <div class="title-text">
                <p>${projects[i].name}</p>
              </div>
            </div>
            <div class="info-section">
                <img class="img-content" src="${projects[i].image}">
                <div class="info-text">
                  <h3 id="info-title">${projects[i].name}</h3>
                  <p id="year"><b>Year:${projects[i].year}</b></p>
                  <span id="short-description"><p>${projects[i].shortDescription}</span>   
                  <p hidden>p${projects[i].tags}</p>
              
                </div>
            </div>
          </div>  
        </a>` + fetch ;
} 