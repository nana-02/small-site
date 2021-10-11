import React from 'react';
import Header from '../base/Header';
import Section from '../base/Section';
import Aside from '../base/Aside';
import Footer from '../base/Footer';

export default class Book extends React.Component {
  state = {
    items: [
      {
        id: '1st',
        text: 'サイン,コサイン,タンジェント',
        selected: true,
      },
      {
        id: '2nd',
        text: 'π=3.14159265359',
        selected: false,
      },
      {
        id: '3rd',
        text: '天才とは1%のひらめきと99%の努力である',
        selected: false,
      },
    ],
  };

  // どのitemが選択されているか判定する
  handleSelect = (id) => {
    const nextItems = this.state.items.map((item) => {
      if (item.id === id) {
        return Object.assign({}, item, {
          selected: true,
        });
      } else {
        return Object.assign({}, item, {
          selected: false,
        });
      }
    });
    this.setState({
      items: nextItems,
    });
  };

  // 選択されたテキストの取得
  handleText = () => {
    const item = this.state.items.find((item) => item.selected === true);
    return item.text;
  };

  // render
  render() {
    return (
      <React.Fragment>
        <Header />
        <Section text={this.handleText()} />
        <Aside items={this.state.items} handleSelect={this.handleSelect} />
        <Footer />
      </React.Fragment>
    );
  }
}
