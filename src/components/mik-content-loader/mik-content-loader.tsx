import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mik-content-loader',
    styleUrl: 'mik-content-loader.css',
    shadow: true
})

export class MikContentLoader {
    @Prop() loaderVisible = false;

    render() {
        return (
            <div class="loader-parent">
                {this.loaderVisible?
                <div class="loader-container">
                    <div class="loader-content top">
                        <div class="loader-content-inner">
                            <div class="loader-content-inner-left animate"></div>
                            <div class="loader-content-inner-right">
                                <div class="right-child animate first"></div>
                                <div class="right-child animate"></div>
                                <div class="right-child animate"></div>
                            </div>
                        </div>
                    </div>

                    <div class="loader-content animate"></div>
                    <div class="loader-content animate"></div>
                </div>
                    : ''
                }
            </div>
        );
    }
}