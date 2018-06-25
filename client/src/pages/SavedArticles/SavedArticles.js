import React, { Component } from "react";
import API from "../../utils/API";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col} from "../../components/Grid";
import "./SavedArticles.css";

class SavedArticles extends Component {
    state = {
        savedArticles: []
    };

    componentWillMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getSavedArticles()
        .then(res => {
            this.setState({
                savedArticles: res.data
            })
        });
    };

    deleteArticle = (id) => {
        API.deleteArticle(id)
        .then(res => {
        let savedArticles = this.state.savedArticles.filter( (article) => article._id !== id)

        this.setState({
            savedArticles: savedArticles
        });

        this.loadArticles();
    })
        .catch(err => console.log(err));
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Saved New York Times Articles</h1>
                        </Jumbotron>
                            <Container>
                            <List>
                                {this.state.savedArticles.map((article, i) => ( 
                                <ListItem 
                                    key={i}
                                    title={article.title}
                                    url={article.url}
                                    date={article.date}
                                    summary={article.summary}
                                    type='Delete Article'
                                    onClick={() => this.deleteArticle(article._id)}
                                    > 
                                </ListItem>
                                ))}
                            </List>
                            </Container>
                    </Col>
                </Row>
            </Container>
        )
    };
};
    
export default SavedArticles;