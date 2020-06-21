import * as React from 'react';
import HeadlinesList from './HeadlinesList';

export default class SourceHeadlines extends React.Component {
    render(){
        var params = this.props.route.params;                
        return (
            <HeadlinesList
                countries={params.countries}
                categories={params.categories}
                sources={params.sources}
                highlightsOnly={false}
                navigation={this.props.navigation} />
        )
    }
}