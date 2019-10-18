import { Component, Prop, h, Element } from '@stencil/core';

@Component({
    tag: 'mik-icon',
    styleUrl: 'mik-icon.css',
    shadow: true
})

export class MikIcon {
    @Element() el: HTMLElement;
    @Prop() mikIconColor: string;
    @Prop() mikIcon: string;
    @Prop() mikIconCustomColor: string;
    @Prop() mikIconIndentLeft: string;
    @Prop() mikIconIndentTop: string;
    @Prop() mikIconClassButtonSize: string;

    componentDidLoad() {
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-custom-color', this.mikIconCustomColor);
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-custom-indent-left', this.mikIconIndentLeft);
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-custom-indent-top', this.mikIconIndentTop);
    }

    render() {
        const rootClassNames = {
            'mik-icon': true,
            'material-icons': true,
            'icon-custom-color': this.mikIconCustomColor !== null,
            defaultColor: this.mikIconColor === 'default',
            primary: this.mikIconColor === 'primary',
            secondary: this.mikIconColor === 'secondary',
            warning: this.mikIconColor === 'warning',
            success: this.mikIconColor === 'success',
            error: this.mikIconColor === 'error',
            'indent-left': this.mikIconIndentLeft !== null,
            'indent-top': this.mikIconIndentTop !== null,
            small: this.mikIconClassButtonSize === 'small',
            medium: this.mikIconClassButtonSize === 'medium',
            large: this.mikIconClassButtonSize === 'large',
            xl: this.mikIconClassButtonSize === 'xl',
            xxl: this.mikIconClassButtonSize === 'xxl'
        };

        return (
            <span class={rootClassNames}>
                {this.mikIcon}
            </span>
        );
    }
}