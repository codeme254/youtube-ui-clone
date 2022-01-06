import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import PreviewsContainer from './Previews/PreviewsContainer';

const Home = () => {
    return(
        <main className="home">
            <Sidebar />
            <PreviewsContainer />
        </main>
    )
}
export default Home;