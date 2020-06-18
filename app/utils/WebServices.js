const KEY = '51de623df8c5440bbf5c4bca8196accf';
export async function getArticles (){
    const countries = ['EG', 'AE'];
    const categories = ['business', 'sports'];
    const pageSize = 10;    //per request. So the total #posts returned is (size(countries)*size(categories)*pageSize)
    var promises = [];
    var articles = [];
    countries.forEach(country =>{
        categories.forEach(category => {
            var url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${KEY}`;           
            var req = new Request(url);
            promises.push(
                fetch (req)
                .then (res => res.json())
                .then(res => res.articles)
            );
        });
    });

    //wait for all requests to finish, then return the list of articles
    return Promise.all(promises).then(res => res.flat());
}