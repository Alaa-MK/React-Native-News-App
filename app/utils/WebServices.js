export async function getArticles (){
    var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=51de623df8c5440bbf5c4bca8196accf';
    var req = new Request(url);
    return fetch(req).then(res => res.json()).catch(err => console.log(err));
}