import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mik-card',
    styleUrl: 'mik-card.css',
    shadow: true
})

export class MikCard {
    @Prop() mikCardId: string;
    @Prop() mikCardAuthor: string
    @Prop() mikCardTitle: string;
    @Prop() mikCardContentMessage: string;
    @Prop() mikCardImage?: string;

    render() {
        return (
            <div class="mikCardParent">
                <blockquote class="quote-card yellow-card">
                    <p>{this.mikCardContentMessage}</p>

                    <cite>{this.mikCardAuthor}</cite>
                </blockquote>
            </div>
        );
    }
}
