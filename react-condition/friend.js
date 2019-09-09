class FRIEND extends React.Component {
    static defaultProps = {
        from: 'Anonymous'
    }
    render() {
    return (
        <div>
         <h1>hello to {this.props.to} from {this.props.from}</h1>
      </div>
    ) 
}
}
