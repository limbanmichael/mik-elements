import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'mik-stepper',
    styleUrl: 'mik-stepper.css',
    shadow: true
})

export class MikStepper {
    @Prop() stepperConfig: any;
    @Prop() triggerProp = false;
    @State() configMap = [];

    render() {
        this.configMap = [];
        this.stepperConfig.map(step => {
            const conf = {
                done: step.done ? 'done' : '',
                active: step.active,
                activeClass: step.active ? 'active' : '',
                number: step.number,
                title: step.title
            };
            this.configMap.push(conf);
        });
        console.log(this.configMap);

        return (
            <div class="steppers-container">
                {this.configMap.map((step) => 
                    <div class="stepper-holder">
                        <div class="stepper-round">
                            {step.done ?
                                <div class={step.done + ' material-icons stepper-done'}>
                                    done
                                </div>
                                : <div 
                                    class={step.activeClass + ' stepper-number ' + step.done}
                                  >
                                    {step.number}
                                  </div>
                            }
                            
                        </div>
                        <div class="step-title">{step.title}</div>
                    </div>
                )}
            </div>
        );
    }
}