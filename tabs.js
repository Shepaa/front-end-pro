class Tab {
    static OPEN_CLASS = 'open';
    static NAVIGATION_EL_ACTIVE_CLASS = 'navigation-element_active';
    static NAVIGATION_EL_CLASS = 'navigation-element';
    static CONTENT_BLOCK_CLASS = 'content-block';
    static CONTENT_CLASS = 'content';

    constructor(rootEl) {
        this.rootEl = rootEl;
        this.tabsItems = Array.from(this.rootEl.children);
        this.setClasses();
        this.setEvents();
        this.startOpen()
    }

    setClasses() {
        this.tabsItems.forEach((item) => {
            const children = Array.from(item.children);
            children.forEach((child) => {
                if (this.isBtn(child)) {
                    child.classList.add(Tab.NAVIGATION_EL_CLASS);
                } else {
                    child.classList.add(Tab.CONTENT_BLOCK_CLASS);
                }
            });
        });
    }

    isBtn(el) {
        return el.tagName === 'BUTTON'
    }

    setEvents() {
        this.rootEl.addEventListener(`click`, this.onRootElClick.bind(this));
    }

    startOpen() {
        this.rootEl.querySelector('.' + Tab.CONTENT_BLOCK_CLASS).classList.add(Tab.OPEN_CLASS)
        this.tabsItems[0].firstElementChild.classList.add(Tab.NAVIGATION_EL_ACTIVE_CLASS);
    }

    onRootElClick(e) {
        const btnIndex = this.getBtnIndex(e)
        const contentEl = this.findContentEl(btnIndex);
        const openedEl = this.findOpenedEl(btnIndex);
        const activeEl = this.findActiveEl();
        this.toggleEl(contentEl)
        this.setActiveClass(activeEl, e)
        this.openCloseEl(openedEl, contentEl);
    }

    getBtnIndex(e) {
        const parentElement = e.target.parentElement;
        return Array.prototype.indexOf.call(parentElement.children, e.target);
    }

    findContentEl(index) {
        return document.querySelector('.' + Tab.CONTENT_CLASS).querySelectorAll('.' + Tab.CONTENT_BLOCK_CLASS)[index];
    }

    findOpenedEl() {
        return this.rootEl.querySelector('.' + Tab.OPEN_CLASS);
    }

    findActiveEl() {
        return this.rootEl.querySelector('.' + Tab.NAVIGATION_EL_ACTIVE_CLASS);
    }

    toggleEl(contentEl) {
        contentEl.classList.toggle(Tab.OPEN_CLASS);
    }

    setActiveClass(activeEl, e) {
        if (activeEl && this.isBtn(e.target)) {
            activeEl.classList.remove(Tab.NAVIGATION_EL_ACTIVE_CLASS);
            e.target.classList.add(Tab.NAVIGATION_EL_ACTIVE_CLASS)
        }
    }

    openCloseEl(openedEl, contentEl) {
        if (openedEl) {
            this.toggleEl(openedEl);
        } else {
            this.toggleEl(contentEl);
        }
    }
}


