
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 12,
    category: "general"
  }


  articles = []

  constructor(props) {
    super();
    // console.log("Constructor from news Componet");
    this.state = {
      articles: this.articles,
      page: 1,
      totalResults: 0,
      loading: false    //means our data is fetched
    }
    document.title = props.category != "general" ? `NewsHub: ${props.category.toUpperCase()}` : "Top Headlines";
  }
  async componentDidMount() {
    this.setState({ loading: true })  //data is fetching

    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7803c6359c440298d210e0265edd7d6&page=1&pagesize=${this.props.pagesize}`);
    // console.log(data);
    let parsedata = await data.json();
    // console.log(parsedata.articles);
    // console.log(parsedata.totalResults);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    })

  }
  handlePrev = async () => {
    // console.log("Prev");
    this.setState({ loading: true })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7803c6359c440298d210e0265edd7d6&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`);
    // console.log(data);
    let parsedata = await data.json();
    // console.log(parsedata.articles);
    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  handleNext = async () => {
    this.setState({ loading: true })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7803c6359c440298d210e0265edd7d6&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`);
    // console.log(data);
    let parsedata = await data.json();
    // console.log(parsedata.articles);
    this.setState({
      articles: parsedata.articles,
      page: this.state.page + 1,
      loading: false
    })
  }
  //sice(0,23)-retuns a new string frm 0 to 23rd char
  render() {

    const { pagesize } = this.props;
    return (
      <>

        <div className="container">
          <h2>Top Headlines{this.props.category != "general" ? `: ${this.props.category.toUpperCase()}` : ""}</h2>
          {this.state.loading && <Spinner />}  {/*This will check first if true then it will go for second */}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4"><NewsItem title={element.title != null ? element.title.slice(0, 45) : ""} desc={element.description != null ? element.description.slice(0, 88) : ""} author={element.author} publishedAt={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} /></div>
              )
            })}
          </div>
          <div class="d-flex justify-content-between">
            <button disabled={this.state.page == 1} type="button" class="btn btn-primary" onClick={this.handlePrev}><i class="fa fa-backward"> Previous</i></button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" class="btn btn-primary" onClick={this.handleNext}>Next <i class="fa fa-forward"></i></button>
          </div>

        </div>
      </>
    )
  }
}


