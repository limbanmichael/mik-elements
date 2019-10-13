import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'mik-button',
    styleUrl: 'mik-button.css',
    shadow: true
})

export class MikButton {
    @Prop() mikButtonColor: string;
    @Prop() mikButtonDisabled: boolean;
    @Prop() mikButtonTextAlign: string;
    @Prop() mikButtonLoading: false;
    @Prop() mikButtonIcon: string;
    @Prop() mikButtonSize: string;
    @Prop() mikButtonRadius: boolean;

    @Prop() buttonClick: (e: MouseEvent) => void;
    @Event() mikButtonClick: EventEmitter;

    onClickMikButton = (event: any) => {
        console.log(this.mikButtonDisabled, 'click from mik-button.tsx');
        if (this.mikButtonDisabled) {
            return false;
        }
        this.mikButtonClick.emit(event);

        return this.buttonClick && this.buttonClick(event);
    }

    render() {
        if (this.mikButtonRadius === undefined) {
            this.mikButtonRadius = false;
        }
        
        let isMikButtonRadius = 'is-radius';

        if (!this.mikButtonColor) {
            this.mikButtonColor = 'primary';
        }
        if (!this.mikButtonSize) {
            this.mikButtonSize = 'medium';
        }
        if(!this.mikButtonRadius) {
            isMikButtonRadius = 'not-radius';
        }

        const rootClass = {
            primary: this.mikButtonColor.toLowerCase() === 'primary',
            secondary: this.mikButtonColor.toLowerCase() === 'secondary',
            tertiary: this.mikButtonColor.toLowerCase() === 'tertiary',
        };
        const buttonSize = {
            small: this.mikButtonSize.toLowerCase() === 'small',
            medium: this.mikButtonSize.toLowerCase() === 'medium',
            large: this.mikButtonSize.toLowerCase() === 'large',
            xl: this.mikButtonSize.toLowerCase() === 'xl',
            xxl: this.mikButtonSize.toLowerCase() === 'xxl'
        };

        const buttonSizeAsArray = Object.keys(buttonSize)
        const activeButtonSize = buttonSizeAsArray.filter(s => buttonSize[s]);

        const rootClassAsArray = Object.keys(rootClass);
        const activeRootClass = rootClassAsArray.filter(r => rootClass[r]);

        const wholeClass = `${activeButtonSize} ${activeRootClass} ${isMikButtonRadius}`;

        console.log(this.mikButtonRadius, ' round class');

        return (
            <button 
                class={wholeClass} 
                onClick={this.onClickMikButton.bind(this)}
                disabled={this.mikButtonDisabled}
            >
                <slot></slot>
            </button>
        );
    }
}