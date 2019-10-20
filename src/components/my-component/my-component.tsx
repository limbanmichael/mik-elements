import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @State() cardAuthor = 'Edsger W. Dijkstra';
  @State() triggerProp = false;
  @State() buttonDisable = false;
  @State() makeRound = true;
  @State() stepperConfig = [
    {
      done: false,
      active: true,
      number: 1,
      title: 'Select Campaign Settings'
    },
    {
      done: false,
      active: false,
      number: 2,
      title: 'Create an ad'
    },
    {
      done: false,
      active: false,
      // activeClass: function () {
      //   if (this.active) {
      //     return 'active';
      //   } else {
      //     return '';
      //   }
      // },
      number: 3,
      title: 'Final Step'
    }
  ];

  testButton = () => {
    let nextIndex = 0;
    this.stepperConfig.filter((step, index) => {
      if (step.active) {
        nextIndex = index + 1;
        return nextIndex;
      }
    });
    this.stepperConfig[nextIndex].active = true;
    this.stepperConfig[nextIndex - 1].active = false;
    this.stepperConfig[nextIndex - 1].done = true;
    this.triggerProp = !this.triggerProp;
  }


  render() {
    // const styleSize = {
    //   width: '500px',
    //   height: '100px'
    // };
    // console.log(this.stepperConfig,  ' style size');
    return (
      <div>
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
        <mik-stepper 
          stepperConfig={this.stepperConfig}
          triggerProp={this.triggerProp}
        ></mik-stepper>
        <br/><br/><br/>
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="navigate_next"
          mikButtonIconCustomColor="white"
        >
          Next
        </mik-button>
        <br/><br/><br/>
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
