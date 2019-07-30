import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { initComments, delComment } from '../reducers/comments'

class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDelComment: PropTypes.func
  }

  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    this.props.initComments(comments)
  }

  handleDeleteComment (index) {
    const { comments } = this.props
    const _comments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    localStorage.setItem('comments', JSON.stringify(_comments))
    if (this.props.onDelComment) this.props.onDelComment(index)
  }

  render () {
    return (
      <CommentList
        comments={this.props.comments}
        onDelComment={this.handleDeleteComment.bind(this)}/>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments))
    },
    onDelComment: (index) => {
      dispatch(delComment(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)