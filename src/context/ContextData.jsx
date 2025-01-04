import React, { createContext, useEffect, useState } from 'react'

const ContextData = createContext({});

export const ContextProvider = ({ children }) => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState("general");


    useEffect(() => {

        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c89a52b9a01b4cabab268b29195f20c5`;
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    console.log(response.status);
                }
                const data = await response.json();
                setArticles(data.articles);
                setIsLoading(false);

            }
            catch (err) {
                setIsLoading(false)
                console.log(err.message);

            }
        }

        (async () => await fetchData())()

    }, [category])

    console.log(articles);

    return (
        <ContextData.Provider
            value={{

                articles
                ,
                setArticles,
                isLoading,
                setIsLoading,
                category,
                setCategory
            }
            }>
            {children}
        </ContextData.Provider>
    )
}

export default ContextData