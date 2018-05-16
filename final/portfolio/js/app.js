articles.forEach(function(article) {
    $("main").append('<div class="articles">' + '<a href="' + article.link + '">' + '<p>' + article.hed + '</p></a></div>');
})