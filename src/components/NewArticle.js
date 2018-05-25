import React from 'react';
import '../App.css'
const NewArticle = () => (
  <div className="NewArticle">
    <form>
      <h2>New Article</h2>
      <input placeholder="Article Title" type="text" name="name-article"/>
      <input placeholder="What's this article about?" type="text" name="article-about"/>
      <textarea rows="8" placeholder="Write your article (in markdown)"></textarea>
      <input placeholder="Enter tags" type="text" name="tag"/>
      <button type="submit">Publish Article</button>
    </form>
  </div>
);
export default NewArticle;