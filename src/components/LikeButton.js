import React from 'react'
import { Button} from 'react-bootstrap'


class LikeButton extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      likeCount: 0
    }  
    this.handleLikeCount = this.handleLikeCount.bind(this)
  }

  // handleDelete = (journalEntry) => {
  //   this.props.deleteJournalEntry(journalEntry.id)
  // }

  handleLikeCount() {
    this.setState(state => ({
      likeCount: state.likeCount + 1
    }))
  } 

  render(){
    return (
      <Button onClick={this.handleLikeCount}> 
        Likes: {this.state.likeCount}
      </Button>
    )
  }

}

export default LikeButton