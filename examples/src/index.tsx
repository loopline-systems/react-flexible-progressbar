import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from '../../src/ProgressBar';
import '../../src/ProgressBar.scss';

class App extends React.Component<{}, {}> {
  state = {
    progress: 0,
  };

  componentDidMount() {
    this.doProgress(1);
  }

  doProgress(progress: number) {
    this.setState({ progress });
    let newProgress = progress * 2 > 100 ? 100 : progress * 2;
    newProgress = progress === 100 ? 1 : newProgress;
    setTimeout(() => this.doProgress(newProgress), 1000);
  }

  render() {
    return(
      <ProgressBar width={300} margin="40vh auto" progress={this.state.progress} showPercentage />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
