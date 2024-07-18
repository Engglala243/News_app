import React, { Component } from 'react'
export class NewsItem extends Component {
  static propTypes = {

  }
  
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <img src={!imageUrl?"https://i.blogs.es/8fd485/edita-movil/840_560.jpeg":imageUrl} className="card-img-top" alt="..."/> 
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
          <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target='blank' className='btn btn-sm btn-dark'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
