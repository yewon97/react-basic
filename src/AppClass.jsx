import React from 'react';
import Counter from './basic/components/Counter';

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('컴포넌트가 마운트 되었음!');
  }

  componentWillUnmount() {
    console.log('컴포넌트가 곧 언마운트될 예정임!');
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <div className="counters">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

// class는 렌더 함수만 호출됨
// useCallback, useMemo, memo 안써도됨