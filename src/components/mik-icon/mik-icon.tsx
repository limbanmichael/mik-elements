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

    // for icon only button
    @Prop() iconOnly = false;
    @Prop() mikIconOnlySize: string;
    iconOnlyHoverColor: string;

    componentDidLoad() {
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-custom-color', this.mikIconCustomColor);
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-custom-indent-left', this.mikIconIndentLeft);
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-custom-indent-top', this.mikIconIndentTop);
        this.el.shadowRoot.querySelector('span')
            .style.setProperty('--mik-icon-only-hover-color', this.iconOnlyHoverColor);
    }

    render() {
        let iconOnlySize = this.mikIconOnlySize.toLowerCase();
        console.log(iconOnlySize, ' icon only size');
        
        if (this.mikIconCustomColor) {
            this.iconOnlyHoverColor = `${this.mikIconCustomColor}33`;
        }
        if (!iconOnlySize) {
            iconOnlySize = 'small';
        }
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
            xxl: this.mikIconClassButtonSize === 'xxl',
            iconOnly: this.iconOnly,
            iconOnlySmallest: iconOnlySize === 'smallest',
            iconOnlySmall: iconOnlySize === 'small',
            iconOnlyMedium: iconOnlySize === 'medium',
            iconOnlyLarge: iconOnlySize === 'large',
            iconOnlyXl: iconOnlySize === 'xl',
            iconOnlyXxl: iconOnlySize === 'xxl',
            iconOnlyXxxl: iconOnlySize === 'xxxl',
            iconOnlyX5: iconOnlySize === 'x5',
            iconOnlyX6: iconOnlySize === 'x6',
        };

        return (
            <span class={rootClassNames}>
                {this.mikIcon}
            </span>
        );
    }
}