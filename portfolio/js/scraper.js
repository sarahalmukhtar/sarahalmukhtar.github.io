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
    	})

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
        })

        console.log("var articles = " + JSON.stringify(allResults));
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

makeRequest();

