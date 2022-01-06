import React from 'react';
import PreviewHeader from './PreviewHeader';
import AllPreviewVideos from './PreviewVideos/AllPreviewVideos';

const PreviewsContainer = () => {
    return(
        <section className="previews">
            <PreviewHeader />
            <AllPreviewVideos />
        </section>
    )
}
export default PreviewsContainer;