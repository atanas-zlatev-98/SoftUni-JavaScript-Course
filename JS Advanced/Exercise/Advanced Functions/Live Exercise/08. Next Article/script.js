function getArticleGenerator(articles) {
    let articlesContent = Array.from(articles);
    const contentRef = document.getElementById('content');

    return () => {
        if(!articlesContent.length){
            return
        }

        let currentArticle = articlesContent.shift();
        let newArticles = document.createElement('article');
        newArticles.textContent = currentArticle;
        contentRef.appendChild(newArticles);
    }
}
