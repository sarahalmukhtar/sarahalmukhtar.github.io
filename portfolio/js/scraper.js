var page = 0;

var count = 0;
var allResults = [];

function makeRequest() {
    $.ajax({
        url: getURL(),
        method: 'GET',
    }).done(function(result) {

        setTimeout(function() {
        	processRequest(result);
        }, 1000);
        
        // console.log(result);

    }).fail(function(err) {

        throw err;

    });
}

function processRequest(result) {
    if (result.response.docs.length === 10) {

    	var docs = result.response.docs;

    	docs.forEach(function(doc) {
    		var headline = doc.headline.main;
			var articleURL = doc.web_url;

            var article = {
                hed: headline,
                link: articleURL
            };

            allResults[count] = article;

            count++;         

			// $("main").append('<div class="articles">' + '<a href="' + articleURL + '">' + '<p>' + headline + '</p></a></div>');

    		// console.log(headline);
    		// console.log(articleURL);
    	})

        // for (var i = 0; i < 10; i++) {
        //     console.log(result.response.docs[i]);
        // }

        page++;

        makeRequest();

    } else {
        var docs = result.response.docs;

    	docs.forEach(function(doc) {
            var headline = doc.headline.main;
            var articleURL = doc.web_url;

            var articles = {
                hed: headline,
                link: articleURL
            };

            allResults[count] = articles;

            count++;

            // $("main").append('<div class="articles">' + '<a href="' + articleURL + '">' + '<p>' + headline + '</p></a></div>');

            // console.log(headline);
            // console.log(articleURL);
        })

        console.log("var articles = " + JSON.stringify(allResults));

        // for (var i = 0; i < 10; i++) {
        //     console.log(result.response.docs[i]);
        // }
    }
}

function getURL() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        'api-key': "08966aa7276d40559f32629461514609",
        'fq': "byline:(\"Sarah Almukhtar\")",
        'sort': "newest",
        'page': page
    });

    return url;
}

// function addDiv(doc) {
// 	var headline = doc.headline.main;
// 	var articleURL = doc.web_url;
// }

makeRequest();

