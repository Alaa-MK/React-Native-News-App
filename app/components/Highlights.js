import * as React from 'react';
import HeadlinesList from './HeadlinesList';

export default function Highlights(props) {    
    return (
        <HeadlinesList
            countries={['EG', 'AE']}
            categories={['business', 'sports']}
            sources='ALL'
            highlightsOnly={true}
            navigation={props.navigation} />
    )
}