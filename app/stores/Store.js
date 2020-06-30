import {observable, action} from 'mobx'

class Store {
    //headlines
    @observable headlines = [];
    @observable headlinesStillLoading = true;
    @action setHeadlines(value){
        this.headlines = value;
    }
    @action setHeadlinesStillLoading(value) {        
        this.headlinesStillLoading = value;
    }

    //sources
    @observable sources = [];
    @observable sourcesStillLoading = true;
    @action setSources(value) {
        this.sources = value;
    }
    @action setSourcesStillLoading(value) {
        this.sourcesStillLoading = value;
    }

    //history
    @observable history = {};
    @action setHistory(value) {
        this.history = value;
    }

}

const store = new Store();
export default store;