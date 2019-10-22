import { Component, Prop, h, Event, EventEmitter, Element } from '@stencil/core';

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
    @Prop() mikButtonIconCustomColor: string;
    @Prop() mikButtonIconIndentLeft: string;

    @Prop() mikButtonSize: string;
    @Prop() mikButtonRadius: boolean;

    @Prop() mikCustomButtonSize: any;
    @Prop() mikCustomButtonTextColor: string;
    @Prop() mikCustomBgHoverColor: string;
    @Prop() mikCustomButtonFontSize: string;

    @Prop() buttonClick: (e: MouseEvent) => void;
    @Event() mikButtonClick: EventEmitter;
    @Element() el: HTMLElement;

    onClickMikButton = (event: any) => {
        console.log('click from mik-button.tsx');
        if (this.mikButtonDisabled) {
            return false;
        }
        this.mikButtonClick.emit(event);

        return this.buttonClick && this.buttonClick(event);
    }

    componentDidLoad() {
        this.el.shadowRoot.querySelector('button')
            .style.setProperty('--custom-hover-bg', this.mikCustomBgHoverColor);
        this.el.shadowRoot.querySelector('button')
            .style.setProperty('--custom-button-font-size', this.mikCustomButtonFontSize);
    }

    checkBool() {
        return 'something';
    }

    render() {
        // console.log('butt0n render');
        
        let customWidth = '';
        let customHeight = '';
        let customTextColor = '';
        let customFontSize = '';
        let customHoverBgColorClass = '';
        let buttonDisabled = '';
        
        if (this.mikCustomButtonSize === undefined) {
            customHeight = '';
            customWidth = '';
        } else {
            customWidth = this.mikCustomButtonSize.width;
            customHeight = this.mikCustomButtonSize.height;
        }
        if (typeof this.mikCustomButtonTextColor !== undefined) {
            customTextColor = this.mikCustomButtonTextColor;
        }
        if (this.mikCustomButtonFontSize) {
            customFontSize = 'custom-font-size';
        }
        if (this.mikButtonDisabled) {
            buttonDisabled = 'disabled';
        }

        let style = {
            width: customWidth,
            height: customHeight,
            color: customTextColor,
        }

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
        if (this.mikCustomBgHoverColor) {
            customHoverBgColorClass = 'custom-hover-bg';
        }

        // const buttonColor = {
        //     primary: this.mikButtonColor.toLowerCase() === 'primary',
        //     secondary: this.mikButtonColor.toLowerCase() === 'secondary',
        //     tertiary: this.mikButtonColor.toLowerCase() === 'tertiary'
        // };
        // const buttonSize = {
        //     small: this.mikButtonSize.toLowerCase() === 'small',
        //     medium: this.mikButtonSize.toLowerCase() === 'medium',
        //     large: this.mikButtonSize.toLowerCase() === 'large',
        //     xl: this.mikButtonSize.toLowerCase() === 'xl',
        //     xxl: this.mikButtonSize.toLowerCase() === 'xxl'
        // };
        const buttonIcon = {
            withButtonIcon: this.mikButtonIcon !== undefined,
        };

        // const buttonSizeAsArray = Object.keys(buttonSize)
        // const activeButtonSize = buttonSizeAsArray.filter(s => buttonSize[s]);

        // const buttonClassAsArray = Object.keys(buttonColor);
        // const activeButtonClass = buttonClassAsArray.filter(r => buttonColor[r]);

        const buttonIconAsArray = Object.keys(buttonIcon);
        let activeButtonIcon = buttonIconAsArray.filter(r => buttonIcon[r]);
        const buttonIconClass = `${activeButtonIcon}-${this.mikButtonSize}`;

        // const wholeClass = `mik-button ${activeButtonSize} ${activeButtonClass} \
        // ${isMikButtonRadius} ${customHoverBgColorClass} ${customFontSize} \
        // ${buttonIconClass} ${buttonDisabled}`;

        let rootClass = {
            'mik-button': true,
            small: this.mikButtonSize.toLowerCase() === 'small' ? true : false,
            medium: this.mikButtonSize.toLowerCase() === 'medium' ? true : false,
            large: this.mikButtonSize.toLowerCase() === 'large' ? true : false,
            xl: this.mikButtonSize.toLowerCase() === 'xl' ? true : false,
            xxl: this.mikButtonSize.toLowerCase() === 'xxl' ? true : false,
            primary: this.mikButtonColor.toLowerCase() === 'primary' ? true : false,
            secondary: this.mikButtonColor.toLowerCase() === 'secondary' ? true : false,
            tertiary: this.mikButtonColor.toLowerCase() === 'tertiary' ? true : false
        };
        rootClass[isMikButtonRadius] = isMikButtonRadius ? true : false;
        rootClass[customHoverBgColorClass] = customHoverBgColorClass ? true : false;
        rootClass[customFontSize] = customFontSize ? true : false;
        rootClass[buttonIconClass] = buttonIconClass ? true : false;
        rootClass[buttonDisabled] = buttonDisabled ? true : false;

        console.log(rootClass, ' styles element');

        return (
            <button 
                style={style}
                // class={wholeClass}
                class={rootClass} 
                onClick={this.onClickMikButton.bind(this)}
                disabled={this.mikButtonDisabled}
            >
                {this.mikButtonIcon ?
                    <mik-icon
                        mikIconClassButtonSize={this.mikButtonSize}
                        mikIcon={this.mikButtonIcon}
                        mikIconCustomColor={this.mikButtonIconCustomColor}
                        mikIconIndentLeft={this.mikButtonIconIndentLeft}
                    >
                    </mik-icon>
                : ''
                }
                <span><slot></slot></span>
            </button>
        );
    }
}