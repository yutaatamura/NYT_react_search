import axios from "axios";

export default {
    
    searchNYTArticles: function(query, startYear, endYear) {
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
        //0101 refers to the month and day. NYT API date parameter is in the form YYYYMMDD
        const apiKEY = "a19d8f9113c3434d8608ff1c3704564d";
        return axios.get(queryURL+`${apiKEY}&q=${query}&begin_date=${startYear}0101&end_date=${endYear}0101`);
    },
    // Gets all articles
    getSavedArticles: function(){
        return axios.get("/api/articles");
    },
    // Gets article with given id
    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the article with the given id
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};

