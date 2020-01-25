import React from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';


const NewsPage=({match})=>{
    const category = match.params.category || 'All';

    return(
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    );
};
export default NewsPage;