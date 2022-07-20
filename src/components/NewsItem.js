import React, { Component } from 'react'

export default class NewsItem extends Component {

   
  render() {
    const {title, description, imageUrl, newsUrl,author, date, source} = this.props;
    return (
      <div>        
        <div className="card" >
        <img src={!imageUrl?'https://cdn.benzinga.com/files/images/story/2022/07/18/shutterstock_1905996475.jpg?width=1200&height=800&fit=crop':imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%',zIndex:'1'}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text text-primary"><small className='text-muted'>By {author?author:'Unknown'} on {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
