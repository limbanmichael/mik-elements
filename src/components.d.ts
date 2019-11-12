/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MikButton {
    'buttonClick': (e: MouseEvent) => void;
    'mikBoxShadow': boolean;
    'mikButtonAnimation': boolean;
    'mikButtonColor': string;
    'mikButtonDisabled': boolean;
    'mikButtonIcon': string;
    'mikButtonIconCustomColor': string;
    'mikButtonIconIndentLeft': string;
    'mikButtonLoading': false;
    'mikButtonRadius': boolean;
    'mikButtonSize': string;
    'mikButtonTextAlign': string;
    'mikButtonVariant': string;
    'mikCustomBgHoverColor': string;
    'mikCustomButtonFontSize': string;
    'mikCustomButtonSize': any;
    'mikCustomButtonTextColor': string;
    'mikIconOnly': boolean;
    'mikIconOnlySize': string;
  }
  interface MikCard {
    'mikCardAuthor': string;
    'mikCardContentMessage': string;
    'mikCardId': string;
    'mikCardImage'?: string;
    'mikCardTitle': string;
  }
  interface MikIcon {
    'iconOnly': boolean;
    'mikIcon': string;
    'mikIconClassButtonSize': string;
    'mikIconColor': string;
    'mikIconCustomColor': string;
    'mikIconIndentLeft': string;
    'mikIconIndentTop': string;
    'mikIconOnlySize': string;
  }
  interface MikPaginate {
    'mikPerPageItem': number;
    'mikTotalItems': number;
    'pageActive': number;
  }
  interface MikStepper {
    'stepBgColor': string;
    'stepperConfig': any;
    'triggerProp': boolean;
  }
  interface MyComponent {}
}

declare global {


  interface HTMLMikButtonElement extends Components.MikButton, HTMLStencilElement {}
  var HTMLMikButtonElement: {
    prototype: HTMLMikButtonElement;
    new (): HTMLMikButtonElement;
  };

  interface HTMLMikCardElement extends Components.MikCard, HTMLStencilElement {}
  var HTMLMikCardElement: {
    prototype: HTMLMikCardElement;
    new (): HTMLMikCardElement;
  };

  interface HTMLMikIconElement extends Components.MikIcon, HTMLStencilElement {}
  var HTMLMikIconElement: {
    prototype: HTMLMikIconElement;
    new (): HTMLMikIconElement;
  };

  interface HTMLMikPaginateElement extends Components.MikPaginate, HTMLStencilElement {}
  var HTMLMikPaginateElement: {
    prototype: HTMLMikPaginateElement;
    new (): HTMLMikPaginateElement;
  };

  interface HTMLMikStepperElement extends Components.MikStepper, HTMLStencilElement {}
  var HTMLMikStepperElement: {
    prototype: HTMLMikStepperElement;
    new (): HTMLMikStepperElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'mik-button': HTMLMikButtonElement;
    'mik-card': HTMLMikCardElement;
    'mik-icon': HTMLMikIconElement;
    'mik-paginate': HTMLMikPaginateElement;
    'mik-stepper': HTMLMikStepperElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface MikButton extends JSXBase.HTMLAttributes<HTMLMikButtonElement> {
    'buttonClick'?: (e: MouseEvent) => void;
    'mikBoxShadow'?: boolean;
    'mikButtonAnimation'?: boolean;
    'mikButtonColor'?: string;
    'mikButtonDisabled'?: boolean;
    'mikButtonIcon'?: string;
    'mikButtonIconCustomColor'?: string;
    'mikButtonIconIndentLeft'?: string;
    'mikButtonLoading'?: false;
    'mikButtonRadius'?: boolean;
    'mikButtonSize'?: string;
    'mikButtonTextAlign'?: string;
    'mikButtonVariant'?: string;
    'mikCustomBgHoverColor'?: string;
    'mikCustomButtonFontSize'?: string;
    'mikCustomButtonSize'?: any;
    'mikCustomButtonTextColor'?: string;
    'mikIconOnly'?: boolean;
    'mikIconOnlySize'?: string;
    'onMikButtonClick'?: (event: CustomEvent<any>) => void;
  }
  interface MikCard extends JSXBase.HTMLAttributes<HTMLMikCardElement> {
    'mikCardAuthor'?: string;
    'mikCardContentMessage'?: string;
    'mikCardId'?: string;
    'mikCardImage'?: string;
    'mikCardTitle'?: string;
  }
  interface MikIcon extends JSXBase.HTMLAttributes<HTMLMikIconElement> {
    'iconOnly'?: boolean;
    'mikIcon'?: string;
    'mikIconClassButtonSize'?: string;
    'mikIconColor'?: string;
    'mikIconCustomColor'?: string;
    'mikIconIndentLeft'?: string;
    'mikIconIndentTop'?: string;
    'mikIconOnlySize'?: string;
  }
  interface MikPaginate extends JSXBase.HTMLAttributes<HTMLMikPaginateElement> {
    'mikPerPageItem'?: number;
    'mikTotalItems'?: number;
    'pageActive'?: number;
  }
  interface MikStepper extends JSXBase.HTMLAttributes<HTMLMikStepperElement> {
    'stepBgColor'?: string;
    'stepperConfig'?: any;
    'triggerProp'?: boolean;
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {}

  interface IntrinsicElements {
    'mik-button': MikButton;
    'mik-card': MikCard;
    'mik-icon': MikIcon;
    'mik-paginate': MikPaginate;
    'mik-stepper': MikStepper;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


