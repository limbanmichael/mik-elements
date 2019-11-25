import { Component, State, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

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
    pageEndActive = false;
    @State() hideFirstPageButton = false;
    viewFirstPageButtonOnFirstLoad = true;
    @State() activeIndex = 1;
    @State() visiblePages = [];
    eneblaeDidRender = false;
    @Element() el: HTMLElement;
    @Event() paginatorChange: EventEmitter;
    @Prop({reflect: true}) pageActive: number;

    componentDidLoad() {
        this.setActivePage();
    }

    componentDidRender() {
        const elem = Array.from(this.el.shadowRoot.querySelectorAll(".pageNav"));
        if (this.eneblaeDidRender) {
            for (let element of elem) {
                element.classList.remove('active');
            }
            if (this.pageEndActive) {
                elem[4].classList.add('active');
            } else {
                elem[0].classList.add('active');
            }
        }

        for (let element of elem) {
            if (element.classList.contains('active')) {
                this.pageActive = Number(element.textContent);
            }
        }
        this.paginatorChange.emit(this.pageActive);
    }

    setActivePage() {
        const elem = Array.from(this.el.shadowRoot.querySelectorAll(".pageNav"));
        for (let element of elem) {
            element.classList.remove('active');
        }

        if (!this.hideLastPageButton && !this.hideFirstPageButton) {
            this.activeIndex = this.activeIndex - 1;
            if (this.activeIndex < 1) this.activeIndex = 1;
        }


        elem[this.activeIndex].classList.add('active');
        
    }

    setActiveMid() {
        const elem = Array.from(this.el.shadowRoot.querySelectorAll(".pageNav"));
        for (let element of elem) {
            element.classList.remove('active');
        }
        elem[this.activeIndex].classList.add('active');
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
        this.eneblaeDidRender = false;
        this.viewFirstPageButtonOnFirstLoad = false;
        this.activeIndex = index;
        const last = this.visiblePages.length - 1;
        const lastEl = this.visiblePages[last];
        const first = this.visiblePages[0];
        if (clickPage === lastEl && clickPage < this.totalPageButton - 1) {
            this.changeVisiblePager('last');
            this.hideFirstPageButton = false;
            this.setActivePage();
        } else if (clickPage === first && clickPage > 2) {
            this.changeVisiblePager('first');
            this.hideLastPageButton = false;
            this.setActivePage();
        } else {
            this.setActiveMid();
        }
    }

    changeVisiblePager(ind) {
        this.visiblePages = this.visiblePages.map(p => {
            if (p === 1) ind = 'last';
            if (ind === 'last') return p + 1;
            if (ind === 'first') return p - 1;
        });
    }

    firstOrLastIndexClick(i) {
        let lastFivePages = this.totalPageButton - 5;
        this.visiblePages = [];
        const elem = Array.from(this.el.shadowRoot.querySelectorAll(".pageNav"));
        for (let element of elem) {
            element.classList.remove('active');
        }
        if (i === 'last') {
            this.hideLastPageButton = true;
            this.hideFirstPageButton = false;
            for(lastFivePages + 1; lastFivePages < this.totalPageButton; lastFivePages++ ) {
                this.visiblePages.push(lastFivePages + 1);
            }
            this.pageEndActive = true;
            this.activeIndex = 4;
        }
        if (i === 'first') {
            this.hideFirstPageButton = true;
            this.hideLastPageButton = false;
            this.activeIndex = 0;
            for (let firstFivePages = 0; firstFivePages < 5; firstFivePages++) {
                this.visiblePages.push(firstFivePages + 1);
            }
            this.pageEndActive = false;
            elem[0].classList.add('active');
        }
        this.eneblaeDidRender = true;
    }
    
    render() {
        if (this.pageEndActive) {
            this.setActiveMid();
        }
        const rootCLassForEnd = {
            pageNavEnd: true,
            active: this.pageEndActive
        }
        return (
            <div class="page-parent">
                {!this.hideFirstPageButton
                ?<div 
                    class="pageNavStart"
                    onClick={() => this.firstOrLastIndexClick('first')}
                    >1</div>
                : ''
                }
                {!this.hideFirstPageButton
                    ?<div class="dotSeparator pageNavDot">...</div>
                    : ''
                }


                {this.visiblePages.map((page, index) =>
                    <div 
                        class="pageNav" 
                        onClick={() => this.triggerPage(page, index)}
                    >{page}</div>
                )}


                {!this.hideLastPageButton
                    ?<div class="dotSeparator pageNavDot">...</div>
                    : ''
                }
                {!this.hideLastPageButton
                    ?<div
                        class={rootCLassForEnd}
                        onClick={() => this.firstOrLastIndexClick('last')}
                    >{this.totalPageButton}</div>
                    : ''
                }
            </div>
        );
    }
}