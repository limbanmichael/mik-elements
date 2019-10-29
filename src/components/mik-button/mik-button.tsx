import { Component, Prop, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
    tag: 'mik-button',
    styleUrl: 'mik-button.css',
    shadow: true
})

export class MikButton {
    @Prop() mikButtonVariant = '';
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

    @Prop() mikButtonAnimation = false;
    @Prop() mikBoxShadow = true

    @Prop() mikIconOnly = false;
    @Prop() mikIconOnlySize = '';

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

        const buttonIcon = {
            withButtonIcon: this.mikButtonIcon !== undefined,
        };

        const buttonIconAsArray = Object.keys(buttonIcon);
        let activeButtonIcon = buttonIconAsArray.filter(r => buttonIcon[r]);
        const buttonIconClass = `${activeButtonIcon}-${this.mikButtonSize}`;

        let rootClass = {
            'mik-button': true,
            small: this.mikButtonSize.toLowerCase() === 'small' ? true : false,
            medium: this.mikButtonSize.toLowerCase() === 'medium' ? true : false,
            large: this.mikButtonSize.toLowerCase() === 'large' ? true : false,
            xl: this.mikButtonSize.toLowerCase() === 'xl' ? true : false,
            xxl: this.mikButtonSize.toLowerCase() === 'xxl' ? true : false,
            primary: this.mikButtonColor.toLowerCase() === 'primary' ? true : false,
            secondary: this.mikButtonColor.toLowerCase() === 'secondary' ? true : false,
            tertiary: this.mikButtonColor.toLowerCase() === 'tertiary' ? true : false,
            warning: this.mikButtonColor.toLowerCase() === 'warning' ? true : false,
            buttonAnimation: this.mikButtonAnimation,
            buttonOutlined: this.mikButtonVariant.toLowerCase() === 'outlined' ? true : false,
            boxShadow: this.mikBoxShadow,
            iconOnly: this.mikIconOnly
        };
        rootClass[isMikButtonRadius] = isMikButtonRadius ? true : false;
        rootClass[customHoverBgColorClass] = customHoverBgColorClass ? true : false;
        rootClass[customFontSize] = customFontSize ? true : false;
        rootClass[buttonIconClass] = buttonIconClass ? true : false;
        rootClass[buttonDisabled] = buttonDisabled ? true : false;

        if (rootClass.buttonOutlined) {
            rootClass.boxShadow = false;
        }

        if (this.mikIconOnly) {
            Object.keys(rootClass).filter(function (k) {
                rootClass[k] = false;
            });
            rootClass.buttonOutlined = false;
            rootClass.iconOnly = true;
        }

        return (
            <button 
                style={style}
                class={rootClass} 
                onClick={this.onClickMikButton.bind(this)}
                disabled={this.mikButtonDisabled}
            >
                {this.mikButtonIcon && rootClass.buttonOutlined === false ?
                    <mik-icon
                        mikIconClassButtonSize={this.mikButtonSize}
                        mikIcon={this.mikButtonIcon}
                        mikIconCustomColor={this.mikButtonIconCustomColor}
                        mikIconIndentLeft={this.mikButtonIconIndentLeft}
                        iconOnly={this.mikIconOnly}
                        mikIconOnlySize={this.mikIconOnlySize}
                    >
                    </mik-icon>
                : ''
                }
                {!this.mikIconOnly?
                    <span> <slot></slot></span>
                : ''}
            </button>
        );
    }
}