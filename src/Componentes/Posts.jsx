import React from 'react';
import '../assets/css/Posts.css'
import {Apiurl} from '../services/apirest'
import axios from 'axios'
class Posts extends React.Component {


    state = {
        post: []
    }

    render() {
        return (

            <React.Fragment>
                <div className="container blog-page">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                            <div className="card single_post">
                                <div className="header">
                                    <h2><strong>Latest</strong> Post</h2>
                                </div>
                                <div className="body">
                                    <h3 className="m-t-0 m-b-5"><a href="blog-details.html">Apple Introduces Search Ads Basic</a></h3>
                                    <ul className="meta">
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-label col-amber"></i>Technology</a></li>
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="img-post m-b-15">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Awesome Image" />
                                        <div className="social_share">
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-facebook"></i></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-twitter"></i></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-instagram"></i></button>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    <a href="blog-details.html" title="read more" class="btn btn-round btn-info">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card single_post">
                                <div className="header">
                                    <h2><strong>Popular</strong> Post</h2>
                                </div>
                                <div className="body">
                                    <h3 className="m-t-0 m-b-5"><a href="blog-details.html">Apple Introduces Search Ads Basic</a></h3>
                                    <ul className="meta">
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-label col-amber"></i>Technology</a></li>
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="img-post m-b-15">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" />
                                        <div className="social_share">
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-facebook"></i></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-twitter"></i></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-instagram"></i></button>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    <a href="blog-details.html" title="read more" class="btn btn-round btn-info">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card single_post">
                                <div className="header">
                                    <h2><strong>Most</strong> View</h2>
                                </div>
                                <div className="body">
                                    <h3 className="m-t-0 m-b-5"><a href="blog-details.html">Apple Introduces Search Ads Basic</a></h3>
                                    <ul className="meta">
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-label col-amber"></i>Technology</a></li>
                                        <li><a href="javascript:void(0);"><i class="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="img-post m-b-15">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Awesome Image" />
                                        <div class="social_share">
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-facebook"></i></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-twitter"></i></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-instagram"></i></button>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    <a href="blog-details.html" title="read more" class="btn btn-round btn-info">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }



}
export default Posts;