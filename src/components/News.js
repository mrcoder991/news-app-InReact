import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page:1
    }
    }

    async componentDidMount(){ 
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
      })
    }

    handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});  
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading : false
        })

    }

    handleNextClick = async ()=>{
      console.log("Next"); 
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading : false
        })
      }
    }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-light text-center">News monkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((element)=>{
          return <div key={element.url} className="col-md-4">
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://www.caspianpolicy.org/no-image.png"} newsUrl={element.url}/>
          </div>
          })}
          <div className='container d-flex justify-content-between my-4'>
            <button type="button" disabled={this.state.page<=1} className="btn btn-light m-2" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-light m-2" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News