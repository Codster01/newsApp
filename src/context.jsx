import { createContext,useContext,useState,useEffect } from "react"
import axios from "axios";
const AppContext = createContext();

const Appprovider =({children})=>{
const [text,setText] = useState('');

const getUrl="https://newsapi.org/v2/everything";
const [news,setNews] = useState([])
const fetchData = async(q,page) =>{
    try{
        const {data} = await axios.get(getUrl,{
          params:{
            q:q,
            from:"2023-05-26",
            sortBy:"publishedAt",
            apiKey:"17d186ad441446a5a0eda268be8fef12",
            page:page,
          },
        })
        setNews(data.articles)
        console.log(data.articles)
    }catch(error){
        console.log(error)
    }
    
    }
   

    return <AppContext.Provider value={{news,fetchData,text,setText}}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export  { AppContext, Appprovider}