import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errormsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response)
            this.setState({ posts: response.data })
        }).catch(err => {
            console.log(err)
            this.setState({ errormsg: "Something went wrong" })
        })
    }
    render() {
        const { posts, errormsg } = this.state
        return (
            <div>{
                posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }
                {
                    errormsg ? <h2>{errormsg}</h2> : null
                }
            </div>
        )
    }
}

export default PostList