import React, { Component } from 'react'


export default class NewsItem extends Component {
    render() {
        let {title,desc,imgUrl,newsUrl,author,publishedAt}=this.props;     //we have to destructured the values in props to use
        console.log(imgUrl);
        return (
            <>
                <div className="card my-5" style={{width:"18rem"}}>
                    <img src={imgUrl!=null?imgUrl:"https://th.bing.com/th/id/OIP.-C1rBK_UqG-p6dsBS1Qd2QHaFH?w=285&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank'>Read More</a>
                            <p class="card-text my-3"><small class="text-body-secondary">By {author==null?"unknown author":author} on {Date(publishedAt)}</small></p>
                        </div>
                </div>
            </>
        )
    }
}
