import React, { Component } from "react";
import API from "../../utils/API";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Input from "../../components/Input";
import FormBtn from "../../components/FormBtn";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col} from "../../components/Grid";
import "./Articles.css";

class Articles extends Component {
    state = {
        articles: [],
        query:'',
        startYear: '',
        endYear:''
    };

    handleSaveButton = (article) => {
        let newArticle = {
            title: article.headline.main,
            url: article.web_url,
            date: article.pub_date,
            summary: article.snippet
        }
        console.log("I am initiated")

        API.saveArticle(newArticle)
        .then( res => {
            console.log(res);
            //filter out the saved article from the array of results in state
            let remainingArticles = this.state.articles.filter( article => article.headline.main !== newArticle.title)
            console.log(remainingArticles);

            this.setState({
                articles: remainingArticles
            })
        })
        .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Retrieving NYT Articles");
        if (this.state.query && this.state.startYear && this.state.endYear) {
            console.log("im here");
            API.searchNYTArticles(this.state.query, this.state.startYear, this.state.endYear
            )
            .then((res) => {
                console.log(res);
                this.setState({ 
                    articles: res.data.response.docs 
                });
                console.log("i made it")
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
            <Jumbotron>
                <h1>New York Times Article Search</h1>
            </Jumbotron>
            <Container>
            <form>
                <Input 
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    name="query"
                    placeholder="Enter search topic"
                />
                <Input
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder="Start year"
                />
                <Input
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder="End Year"
                />
                <FormBtn
                    disabled={!(this.state.query && this.state.startYear && this.state.endYear)}
                    onClick={this.handleFormSubmit}
                    >
                    Search
                </FormBtn>
            </form>
            </Container> 
            <br />
            <Container>
            <List>
            {this.state.articles.map((article, i) => ( 
                    <ListItem 
                        key={i}
                        id={article._id}
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        summary={article.snippet}
                        type='Save Article'
                        onClick={() => this.handleSaveButton(article)}
                        />   
            ))}
            </List>
            </Container>
            </div>
               
);
    };
};


export default Articles;