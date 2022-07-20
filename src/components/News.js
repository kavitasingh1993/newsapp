import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false,
            page: 1
        }
    }

    async componentDidMount(){
        let updateNewsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3515b417ac1441da183ccf56a714843`;
        let data = await fetch(updateNewsUrl);
        let parsedData = await data.json();
        console.log(parsedData.articles);
        this.setState({articles:parsedData.articles})
    
    }

    handleNextChange = async () =>{
        let updateNewsUrl =  `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3515b417ac1441da183ccf56a714843&page=${this.state.page + 1}`;
        let data = await fetch(updateNewsUrl);
        let parsedData = await data.json();
       
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1
        })

    }
    handlePrevChange = async() =>{
        let updateNewsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3515b417ac1441da183ccf56a714843&page=${this.state.page - 1}`;
        let data = await fetch(updateNewsUrl);
        let parsedData = await data.json();
      
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1
        })

    }

  render() {
    return (
        <>
        <h1 className='text-center' style={{ margin: '25px 0px', marginTop: '60px'}}>NewsMonkey - Top Headlines</h1>
        <div className='container'>
            
                
                <div className='row'>
                    {this.state.articles && this.state.articles.map((element)=>{
                        return <div  className='col-md-4 my-2' key={element.url}>
                        <NewsItem imageUrl={element.urlToImage} title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                    })}  
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type='button' disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handlePrevChange}>&larr; Previous</button>
                    <button type='button' className='btn btn-primary' onClick={this.handleNextChange}>Next &rarr;</button>

                </div>
        </div>
      </>
    )
  }
}
