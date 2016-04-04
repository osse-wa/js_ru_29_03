import React, { Component, PropTypes } from 'react'

class Article extends Component {

    state = {
        isOpen: false,
        isCommentVisible: false
    }

    render() {
        const { title, text, comments } = this.props.article

        const body = this.state.isOpen ? <section>{text}</section> : null;

        var commentsBlock;

        if (comments !== undefined && this.state.isCommentVisible && this.state.isOpen)
            commentsBlock =  <div><a href="#" onClick = {this.handleCommentsClick}>Скрыть комментарии</a><ul>{this.getComments()}</ul></div>
        else if (comments !== undefined && !this.state.isCommentVisible && this.state.isOpen)
            commentsBlock =  <div><a href="#" onClick = {this.handleCommentsClick}>Показать комментарии</a></div>
        else
            commentsBlock = null;

        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
                {commentsBlock}
            </div>
        )
    }

    getComments() {
        return this.props.article.comments.map((comment, index) =>
             <li key={comment.id}>{comment.text}</li>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCommentsClick = (ev) => {
        this.setState({
            isCommentVisible: !this.state.isCommentVisible
        })
    }
}

export default Article