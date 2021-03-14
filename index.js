console.log("working")
// res.setHeader("Access-Control-Allow-Origin", "*");

// api key : adadb530f7b645c582a989e5596c2a90

// grabe the news container 
let newsAccordion = document.getElementById("newsAccordion");

// create a get request
const xhr = new XMLHttpRequest();
console.log(xhr);

 xhr.open("GET", "file.txt", true);



xhr.onprogress = function(){
    console.log("on progress")
}

xhr.onload = function(){
    console.log(" now running");

    if (this.status === 200) {

        // res.setHeader("Access-Control-Allow-Origin", "*");

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = " ";
        console.log(articles);
        articles.forEach(function(element ,index) {
            let news = 
                       `  <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button  " type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    ${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">
                                   ${element["content"]}. <a href= "${element["url"]} " target="_blank">read more here </a>
                                </div>
                            </div>
                        </div>`

                        newsHTML += news; 
                    });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.error("some error has occured");
    }

   
}



xhr.send();








// newsAccordion.innerHTML = news;