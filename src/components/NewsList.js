import React,{useState, useEffect} from 'react';
import './NewsList.scss';
import NewsItem from './NewsItem';
import axios from 'axios';



const NewsList=({category})=>{
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{ //fetch data only when the components mount
         const fetchData= async()=>{ //should make function which use async
            setLoading(true);
            try{
                const query = category === 'All'? '' : `&category=${category}`; //use query to url
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=ca${query}&apiKey=b262a43d18a54102a5afc2c222acf20f`,
                );
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
        },[category]); //fetch date when category has changed

        if(loading){
            return <div className="NewsListBlock"> ... loading ...</div>
        }
        if(!articles){ //articles' value didn't set yet
            return null;
        }
    return( //articles' value set
        <div className="NewsListBlock">
            {articles.map(article =>(<NewsItem key={article.url} article={article} />))} 
        </div>
    );
};
export default NewsList;
