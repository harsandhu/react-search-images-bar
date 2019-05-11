import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.imageRef = React.createRef();
  }

  state = {spans:0};

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/ 10);
    this.setState({spans: spans });
    console.log(this.state.spans);
  }

  render(){
    return <img src={this.props.src} 
            ref={this.imageRef}
            alt={this.props.description}
            className="image-card"
            style={{ gridRowEnd: `span ${this.state.spans}`}}
            />;
  }
}
export default ImageCard;