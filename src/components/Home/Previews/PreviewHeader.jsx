import React from 'react';
import ButtonLink from './ButtonLink';

const PreviewHeader = () => {
    return(
        <div className="preview-header">
            <ButtonLink route="/" linkName="All" active={true}/>
            <ButtonLink route="/" linkName="country music"/>
            <ButtonLink route="/" linkName="jazz"/>
            <ButtonLink route="/" linkName="gospel music"/>
            <ButtonLink route="/" linkName="classic country"/>
            <ButtonLink route="/" linkName="trailers"/>
            <ButtonLink route="/" linkName="netflix"/>
            <ButtonLink route="/" linkName="bbc news"/>
            <ButtonLink route="/" linkName="otwoma official"/>
            <ButtonLink route="/" linkName="C++"/>
            <ButtonLink route="/" linkName="movies"/>
            <ButtonLink route="/" linkName="classical music"/>
            <ButtonLink route="/" linkName="accessories"/>
            <ButtonLink route="/" linkName="travel"/>
            <ButtonLink route="/" linkName="career change"/>
            <ButtonLink route="/" linkName="parenting"/>
            <ButtonLink route="/" linkName="covid news"/>
        </div>
    )
}
export default PreviewHeader;