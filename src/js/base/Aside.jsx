import React from 'react';

export default class Aside extends React.Component {
  handleClick = (e) => {
    this.props.handleSelect(e.target.id);
  };

  render() {
    const item_list = this.props.items.map((item) => {
      return (
        <div
          key={item.id}
          id={item.id}
          onClick={this.handleClick}
          className={
            item.selected ? 'aside__link isSelected font-white' : 'aside__link'
          }
        >
          {item.id}
        </div>
      );
    });
    return <aside className="aside m-w-bk05">{item_list}</aside>;
  }
}
