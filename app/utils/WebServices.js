export async function getArticles (){
    var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=51de623df8c5440bbf5c4bca8196accf';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })
}