import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
    tag: 'mik-stepper',
    styleUrl: 'mik-stepper.css',
    shadow: true
})

export class MikStepper {
    @Prop() stepperConfig: any;
    @Prop() triggerProp = false;
    @State() configMap = [];
    stepWidth: string;
    @Element() el: HTMLElement;

    componentDidLoad() {
        this.el.shadowRoot.querySelector('div')
            .style.setProperty('--mik-stepper-step-width', this.stepWidth);
    }

    componentWillLoad() {
        const configLength = this.stepperConfig.length;
        const dividedVal = 100 / configLength;
        this.stepWidth = `${dividedVal}%`
        console.log(this.stepWidth, ' length');
    }

    render() {
        this.configMap = [];
        this.stepperConfig.map(step => {
            const conf = {
                done: step.done ? 'done' : '',
                active: step.active,
                activeClass: step.active ? 'active' : '',
                number: step.number,
                title: step.title,
                width: step.width
            };
            this.configMap.push(conf);
        });

        // const styleWidth = {
        //     width: this.stepWidth
        // };
        // console.log(this.configMap);

        return (
            <div class="steppers-container">
                {this.configMap.map((step) => (
                    <div class="stepper-holder">
                        <div class="stepper-round">
                            {step.done ?
                                <div class={step.done + ' material-icons stepper-done'}>
                                    done
                                </div>
                                : <div 
                                    class={step.activeClass + ' stepper-number ' + step.done}
                                  >
                                    <div class="rotate">{step.number}</div>
                                  </div>
                            }
                            
                        </div>
                        <div class="step-title">{step.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}