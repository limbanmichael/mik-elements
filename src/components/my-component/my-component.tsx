import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @State() cardAuthor = 'Edsger W. Dijkstra';
  @State() buttonDisable = false;
  @State() makeRound = true;

  testButton() {
    console.log('from my-component.tsx');
  }


  render() {
    // const styleSize = {
    //   width: '500px',
    //   height: '100px'
    // };
    // console.log(styleSize,  ' style size');
    return (
      <div>
        {/* <i class="large material-icons">insert_chart</i> */}
        {/* <mik-card
          mikCardId="5a6ce86d2af929789500e7ca"
          mikCardAuthor={this.cardAuthor}
          mikCardContentMessage="The computing scientist’s main challenge is not to get confused by the complexities of his own making."
        >
        </mik-card> */}
        
        <mik-button
          mikButtonIcon="edit"
          mikButtonIconCustomColor="white"
          mikButtonIconIndentLeft="3px"
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
          mikButtonIcon="build"
          mikButtonIconCustomColor="white"
          mikButtonIconIndentLeft="3px"
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
          mikButtonIcon="backup"
          mikButtonIconCustomColor="white"
          // mikButtonIconIndentLeft="3px"
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
          mikButtonColor="secondary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="phone"
          mikButtonIconCustomColor="white"
          // mikButtonIconIndentLeft="3px"
        >
          Extra large
        </mik-button>
        <br /><br /><br />
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="save"
          mikButtonIconCustomColor="white"
          // mikButtonIconIndentLeft="3px"
        >

          XX Large
        </mik-button>
        {/* <br /><br /><br />
        <mik-button
          mikCustomButtonFontSize="30px"
          mikCustomBgHoverColor="#27ff98"
          mikCustomButtonTextColor="#b77249"
          mikCustomButtonSize={styleSize}
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Custom Button
        </mik-button>
        <mik-icon 
          mikIcon="insert_chart" 
          mikIconCustomColor="darkblue"
          mikIconIndentLeft="10px"
        >
        </mik-icon> */}
      </div>
    );
  }
}
