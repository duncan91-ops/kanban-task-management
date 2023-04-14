import {Link} from 'react-router-dom'
import StyledWelcome from './index.style'

const Welcome = () => {
  return (
    <StyledWelcome className="content">
      <h1 className="title">kanban project</h1>
      <p className="message">A simple elegant task management tool that grants you full control 
      over all your tasks. Enables you to keep track of the status of each of the tasks. 
      Trusted by thousands for their daily tasks both professionally and personally.</p>
      <Link to="/register" className="btn btn__join">Join today</Link>
    </StyledWelcome>
  )
}

export default Welcome