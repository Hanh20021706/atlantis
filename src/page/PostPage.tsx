import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/post';
import BannerPost from '../components/BannerPost'
import { POST_TYPE } from '../types/post'

const PostPage = () => {

    const [posts, setPosts] = useState<POST_TYPE[]>([]);


    const handleGetPosts = async() => {
        const response = await getPosts();
        setPosts(response.data)
    }

    useEffect(() => {
        handleGetPosts();
    }, [])

    return (
        <div>
            <div className="">
                <BannerPost />
            </div>
            <div className="">
                <section className="probootstrap-section">
                    <div className="container">
                        <div className="row">
                            {
                                posts.map((post,index) => (
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="probootstrap-hentry mb30">
                                        <p><a href="#"><img style={{borderRadius: '2px'}} src={post.img} alt="Free Bootstrap Template by uicookies.com" className="img-responsive" /></a></p>
                                        <h3 className="" style={{fontSize: '20px', marginTop: '10px'}}><a href="#" className="hover-reverse">{post.title}</a></h3>
                                        <p className="text-mute" style={{marginTop: '5px'}}>{post.author}</p>
                                    </div>
                                </div>
                                ))
                            }
                          
                       
                          
                           
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default PostPage
