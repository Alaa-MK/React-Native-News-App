const KEY = '1e9aea2285884d7daaa71324d362654a';

export async function getArticles (countries, categories, sources, highlightsOnly = false){
    
    const pageSize = 10;    //per request. So the total #posts returned is (size(countries)*size(categories)*size(sources)*pageSize)
    var promises = [];
    
    countries.forEach(country =>{
        categories.forEach(category => {
            var url = 'https://newsapi.org/v2/'
                + (highlightsOnly ? 'top-headlines?' : 'everything?')
                + (country == 'ALL' ? '' : `country=${country}&`)
                + (category == 'ALL' ? '' : `category=${category}&`)
                + (sources == 'ALL' ? '' : `sources=${sources.join()}&`)
                + `pageSize=${pageSize}&`
                + `apiKey=${KEY}`;

            var req = new Request(url);
            promises.push(
                fetch(req)
                    .then(res => res.json())
                    .then(res => res.articles)
                    .catch(err => console.log(err))
            );
        });
    });

    //wait for all requests to finish, then return the list of articles
    return Promise.all(promises).then(res => res.flat());
}

export async function getNewsSources(){
    var url = `https://newsapi.org/v2/sources?apiKey=${KEY}`
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