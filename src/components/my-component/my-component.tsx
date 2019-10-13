import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @State() cardAuthor = 'Edsger W. Dijkstra';
  @State() buttonDisable = true;
  @State() makeRound = true;

  testButton() {
    console.log('from my-component.tsx');
  }


  render() {
    return (
      <div>
        <mik-card
          mikCardId="5a6ce86d2af929789500e7ca"
          mikCardAuthor={this.cardAuthor}
          mikCardContentMessage="The computing scientist’s main challenge is not to get confused by the complexities of his own making."
        >
        </mik-card>
        
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="small"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Small
        </mik-button>
        <br /><br /><br />
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="medium"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Medium
        </mik-button>
        <br/><br/><br/>
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="large"
          mikButtonColor="primary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          large
        </mik-button>
        <br /><br /><br />
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="xl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Extra large
        </mik-button>
        <br /><br /><br />
        <mik-button
          // mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          XX large
        </mik-button>
      </div>
    );
  }
}
