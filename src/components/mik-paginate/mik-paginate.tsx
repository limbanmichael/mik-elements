import { Component, State, h, Prop, Element } from '@stencil/core';

@Component({
    tag: 'mik-paginate',
    styleUrl: 'mik-paginate.css',
    shadow: true
})

export class MikPaginate {
    @State() someWord = 'pagination';
    @Prop() mikPerPageItem: number;
    @Prop() mikTotalItems: number;
    pageButtons = '';
    totalPageButton
    midEnd
    hideLastPageButton = false;
    @State() hideFirstPageButton = false;
    viewFirstPageButtonOnFirstLoad = true;
    @State() activeIndex = 1;
    @State() visiblePages = [];
    @Element() el: HTMLElement;

    componentDidLoad() {
        this.setActivePage();
    }

    setActivePage() {
        const elem = Array.from(this.el.shadowRoot.querySelectorAll(".pageNav"));
        for (let element of elem) {
            element.classList.remove('active');
        }

        if (this.activeIndex < 1) this.activeIndex = 1;
        const qSelector = `.page-parent .pageNav:nth-of-type(${this.activeIndex + 1})`;
        this.el.shadowRoot.querySelector(qSelector).classList.add('active');
        console.log(this.hideFirstPageButton, ' first page');
        
    }

    iteratePager() {
        this.pageButtons = '';
        const totalPageButton = this.mikTotalItems / this.mikPerPageItem;
        this.totalPageButton = totalPageButton;

        for (let i = 0; i < totalPageButton; i++) {
            const currentIndex = i + 1;
            this.pageButtons = `${this.pageButtons}<div class="pageNav">${currentIndex}</div>`;

            if (currentIndex < 6) {
                this.visiblePages.push(currentIndex)
            }
        }

        this.changeVisiblePager('s');

        const htmlObject = document.createElement('div');
        htmlObject.innerHTML = this.pageButtons;

        return <div innerHTML={this.pageButtons}></div>
    }

    componentWillLoad() {
        this.iteratePager();
        this.firstOrLastIndexClick('first');
    }

    triggerPage(clickPage, index) {
        this.viewFirstPageButtonOnFirstLoad = false;
        console.log(index, ' index');
        this.activeIndex = index;
        this.setActivePage();
        const last = this.visiblePages.length - 1;
        const lastEl = this.visiblePages[last];
        const first = this.visiblePages[0];
        if (clickPage === lastEl && clickPage < this.totalPageButton - 1) {
            this.changeVisiblePager('last');
            this.hideFirstPageButton = false;
            this.activeIndex = this.activeIndex - 1;
        }
        if (clickPage === first && clickPage > 2) {
            this.changeVisiblePager('first');
            this.hideLastPageButton = false;
        }
    }

    changeVisiblePager(ind) {
        this.visiblePages = this.visiblePages.map(p => {
            console.log(this.totalPageButton, 'mid page');
            if (p === 1) ind = 'last';
            if (ind === 'last') return p + 1;
            if (ind === 'first') return p - 1;
        });
    }

    firstOrLastIndexClick(i) {
        let lastFivePages = this.totalPageButton - 5;
        this.visiblePages = [];
        if (i === 'last') {
            this.hideLastPageButton = true;
            this.hideFirstPageButton = false;
            for(lastFivePages + 1; lastFivePages < this.totalPageButton; lastFivePages++ ) {
                this.visiblePages.push(lastFivePages + 1);
            }
        }
        if (i === 'first') {
            this.hideFirstPageButton = true;
            this.hideLastPageButton = false;
            for (let firstFivePages = 0; firstFivePages < 5; firstFivePages++) {
                this.visiblePages.push(firstFivePages + 1);
            }
        }
    }
    
    render() {
        return (
            <div class="page-parent">
                {!this.hideFirstPageButton
                ?<div 
                    class="pageNav"
                    onClick={() => this.firstOrLastIndexClick('first')}
                    >1</div>
                : ''
                }
                {!this.hideFirstPageButton
                    ?<div class="dotSeparator pageNav">...</div>
                    : ''
                }

                {/* {this.viewFirstPageButtonOnFirstLoad ?
                    <div
                        class="pageNav"
                        onClick={() => this.firstOrLastIndexClick('first')}
                    >1</div>
                    : '' */}
                {/* } */}


                {this.visiblePages.map((page, index) =>
                    <div 
                        class="pageNav" 
                        onClick={() => this.triggerPage(page, index)}
                    >{page}</div>
                )}


                {!this.hideLastPageButton
                    ?<div class="dotSeparator pageNav">...</div>
                    : ''
                }
                {!this.hideLastPageButton
                    ?<div
                        class="pageNav"
                        onClick={() => this.firstOrLastIndexClick('last')}
                    >{this.totalPageButton}</div>
                    : ''
                }
            </div>
        );
    }
}