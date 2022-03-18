import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page:1
    }
    }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json() 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
  })
    }
  
    async componentDidMount(){ 
      this.updateNews();
    }

    handlePrevClick = async ()=>{
      this.setState({
        page : this.state.page -1
      })
      this.updateNews();

    }

    handleNextClick = async ()=>{
      // console.log("Next"); 
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      }
      else{
       this.setState({
        page : this.state.page + 1
       })
        this.updateNews();
      }
    }
  
    capitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-light text-center">News monkey - {this.capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((element)=>{
          return <div key={element.url} className="col-md-4">
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://www.caspianpolicy.org/no-image.png"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
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