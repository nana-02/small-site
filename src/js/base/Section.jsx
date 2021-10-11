import React from 'react';

export default class Section extends React.Component {
  render() {
    return (
      <section className="section section-float-l m-w-bk04">
        <h2>a word of the day</h2><br></br>
        <span className="font-serif">{this.props.text}</span>
      </section>
    );
  }
}
