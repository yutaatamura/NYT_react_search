const mongoose = require("mongoose");

//Save a reference to the Schema constructor 
const Schema = mongoose.Schema;

//Using the Schema constructor, create a new UserSchema object
//similar to a Sequelize model
const ArticleSchema = new Schema({
        title: { type: String, required: false },
        url: { type: String, required: false },
        date: { type: String, required: false },
        summary: { type: String, required: false}
});

//Creates model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

//Export the Article model
module.exports = Article;