const KEY = '51de623df8c5440bbf5c4bca8196accf';

export async function getArticles (countries, categories, source){
    const pageSize = 10;    //per request. So the total #posts returned is (size(countries)*size(categories)*pageSize)
    var promises = [];
    countries.forEach(country =>{
        categories.forEach(category => {
            var url = 'http://newsapi.org/v2/top-headlines?'
                + `country=${country}`
                + `&category=${category}`
                // + (source == 'ALL' ? '' : `&sources=${source}`)
                + `&pageSize=${pageSize}`
                + `&apiKey=${KEY}`;           
            var req = new Request(url);
            promises.push(
                fetch (req)
                .then (res => res.json())
                .then(res => res.articles)
                .catch(err => console.log(err))
            );
        });
    });

    //wait for all requests to finish, then return the list of articles
    return Promise.all(promises).then(res => res.flat());
}

export async function getNewsSources(){
    var url = "https://newsapi.org/v2/sources?apiKey=51de623df8c5440bbf5c4bca8196accf"
    var req = new Request(url);
    return (
        fetch(req)
        .then(res => res.json())
        .then(res => {
            if(res.status == 'ok')
                return res.sources
            else
                throw res.code
        })
    )
}