articles.forEach(function(article) {
    $("main").append('<div class="articles">' + '<a target="_blank" href="' + article.link + '">' + '<p>' + article.hed + '</p></a></div>');
})