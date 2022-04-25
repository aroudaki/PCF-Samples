import * as React from 'react';


export class Root extends React.Component {
  private renderAttemptCount = 1;

  public shouldComponentUpdate() {
    this.renderAttemptCount += 1;
    if (this.renderAttemptCount > 1) {
      console.log("Root already rendered once and will not re-render again.");
      console.log("Render attempt count: ", this.renderAttemptCount);
      return false;
    } else {
      return true;
    }
  }

  public render() {
    return (
      <div>
        <h2>This component will only render once.</h2>
        <h3>{`Render count: ${this.renderAttemptCount}`}</h3>
      </div>
    );
  }
}

