import Card from 'react-bootstrap/Card'

export default class ProjectCard extends React.Component {
    render() {
      return (
        <Card onClick={ () => {
          let win = window.open(this.props.url, '_blank');
          win.focus()
        }} target="_blank">
              <Card.Body>
                <Card.Title>
                  {this.props.title}
                  <br />
                  <span className="desc">{this.props.date}</span>
                </Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
              </Card.Body>
            </Card>
      )
    }
  }