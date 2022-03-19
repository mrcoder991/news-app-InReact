import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



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

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalize(this.props.category)} | News monkey`;
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
  
   fetchMoreData = async () =>  {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  };

    capitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-light text-center">News monkey - Top {this.capitalize(this.props.category)} headlines</h1>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row my-4">
                {this.state.articles.map((element)=>{
                return <div key={element.url} className="col-md-4">
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://www.caspianpolicy.org/no-image.png"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
                })}
              </div>
            </div>
          </InfiniteScroll>

          
      </div>
    )
  }
}

export default News