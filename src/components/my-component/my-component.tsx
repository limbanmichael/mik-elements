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
      title: 'Select Campaign Settings',
    },
    {
      done: false,
      active: false,
      number: 2,
      title: 'Create an ad',
    },
    {
      done: false,
      active: false,
      number: 3,
      title: 'Update Profile',
    },
    {
      done: false,
      active: false,
      number: 4,
      title: 'Finish',
    },
    {
      done: false,
      active: false,
      number: 5,
      title: 'Finish',
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
    if (nextIndex === this.stepperConfig.length) {
      // console.log(nextIndex, ' next index');
      this.stepperConfig[nextIndex - 1].done = true;
      this.triggerProp = !this.triggerProp;
      return false;
    }
    this.stepperConfig[nextIndex].active = true;
    this.stepperConfig[nextIndex - 1].active = false;
    this.stepperConfig[nextIndex - 1].done = true;
    this.triggerProp = !this.triggerProp;
  }


  render() {
    // const styleSize = {
    //   width: '200px',
    //   height: '50px'
    // };
    return (
      <div>
        <mik-paginate
          mikPerPageItem={5}
          mikTotalItems={100}></mik-paginate>
        <br /><br /><br />
        <mik-stepper
          stepperConfig={this.stepperConfig}
          triggerProp={this.triggerProp}
          stepBgColor="PrimarY"
        ></mik-stepper>
        <br /><br /><br />
        {/* <mik-card
          mikCardId="5a6ce86d2af929789500e7ca"
          mikCardAuthor={this.cardAuthor}
          mikCardContentMessage="The computing scientist’s main challenge is not to get confused by the complexities of his own making."
        >
        </mik-card> */}
        <mik-button
          mikButtonSize="small"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Small
        </mik-button>
        <mik-button
          mikButtonSize="medium"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Medium
        </mik-button>
        <mik-button
          mikButtonSize="large"
          mikButtonColor="primary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Large
        </mik-button>
        <mik-button
          mikButtonSize="xl"
          mikButtonColor="secondary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Large
        </mik-button>
        <mik-button
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          XX Large
        </mik-button>
        <br/><br/><br/>
        {/* <mik-button
          mikButtonIcon="edit"
          mikButtonIconCustomColor="white"
          mikButtonIconIndentLeft="3px"
          mikButtonSize="small"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Small
        </mik-button>
        <mik-button
          mikButtonIcon="build"
          mikButtonIconCustomColor="white"
          mikButtonIconIndentLeft="3px"
          mikButtonSize="medium"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Medium
        </mik-button>
        <mik-button
          mikButtonIcon="backup"
          mikButtonIconCustomColor="white"
          mikButtonSize="large"
          mikButtonColor="primary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          large
        </mik-button>
        <mik-button
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
        <mik-button
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
        
        <br/><br/><br/>
        <mik-button
          mikButtonIcon="edit"
          mikButtonIconCustomColor="white"
          mikButtonRadius={this.makeRound}
          mikButtonIconIndentLeft="3px"
          mikButtonSize="small"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
        >
          Small
        </mik-button>
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

        <br /><br /><br />
        <mik-button
          mikCustomButtonFontSize="21px"
          mikCustomBgHoverColor="#27ff98"
          mikCustomButtonTextColor="#b77249"
          mikCustomButtonSize={styleSize}
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="save"
        >
          Custom Button
        </mik-button>
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={true}
          mikButtonIcon="save"
          mikButtonIconCustomColor="white"
        >
          Disabled
        </mik-button>
        <mik-button
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="warning"
          buttonClick={this.testButton}
          mikButtonIcon="save"
          mikButtonIconCustomColor="white"
        >
          Warning
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
          mikButtonAnimation={true}
        >
          Animation
        </mik-button>
        <mik-button
          mikButtonVariant="outlined"
          mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="save"
          mikButtonIconCustomColor="white"
          mikButtonAnimation={true}
        >
          Outlined
        </mik-button>
        <mik-button
          mikButtonVariant="outlined"
          // mikButtonRadius={this.makeRound}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="save"
          mikButtonIconCustomColor="white"
          // mikButtonAnimation={true}
        >
          Outlined
        </mik-button>
        <mik-button
          mikBoxShadow={false}
          mikButtonSize="xxl"
          mikButtonColor="tertiary"
          buttonClick={this.testButton}
          mikButtonDisabled={this.buttonDisable}
          mikButtonIcon="save"
          mikButtonIconCustomColor="white"
        // mikButtonIconIndentLeft="3px"
        >
          No Shadow
        </mik-button>
        <br /><br /><br />
        <mik-button
          mikIconOnlySize="smallest"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#1800fc"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="small"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#1800fc"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="medium"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#2fa272"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="large"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#d4711c"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="xl"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#2fa272"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="xxl"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#00cc00"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="xxxl"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#00cc00"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="x5"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#1800fc"
        >
          Icon Only
        </mik-button>
        <mik-button
          mikIconOnlySize="x6"
          buttonClick={this.testButton}
          mikButtonIcon="photo_camera"
          mikIconOnly={true}
          mikButtonIconCustomColor="#1800fc"
        >
          Icon Only
        </mik-button> */}

        {/* <mik-icon 
          mikIcon="insert_chart" 
          mikIconCustomColor="darkblue"
          mikIconIndentLeft="10px"
        >
        </mik-icon> */}
      </div>
    );
  }
}
