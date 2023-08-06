class Accordion {
    static DEFAULT_INDEX = 0;
    static ACCORDION_ITEM_CLASS = 'accordion-item';

    static ACCORDION_ITEM_HEADER_CLASS = 'accordion-item-header';
    static ACCORDION_ITEM_CONTENT_CLASS = 'accordion-item-content';

    static OPEN_CLASS = 'open'

    constructor(rootEl, defaultIndex = Accordion.DEFAULT_INDEX) {
        this.rootEl = rootEl;
        this.accordionItems = Array.from(this.rootEl.children);
        this.setClasses();
        this.setEvents();
        this.defaultOpenElById(defaultIndex);
    }

    setClasses() {
        this.accordionItems.forEach((accordionItem) => {
            const [header, content] = accordionItem.children;
            accordionItem.classList.add(Accordion.ACCORDION_ITEM_CLASS);
            header.classList.add(Accordion.ACCORDION_ITEM_HEADER_CLASS);
            content.classList.add(Accordion.ACCORDION_ITEM_CONTENT_CLASS);
        });
    }

    setEvents() {
        this.rootEl.addEventListener(`click`, this.onRootElClick.bind(this));
    }

    onRootElClick(e) {
        const target = e.target;
        const headerEl = this.findHeaderEl(target)
        const openedEl = this.findOpenedElement();

        if (openedEl) {
            this.openCloseEl(openedEl);
        }

        if (headerEl) {
            const contentEl = this.findContentEl(headerEl)
            this.openCloseEl(contentEl);
        }
    }

    openCloseEl(contentEl) {
        contentEl.classList.toggle(Accordion.OPEN_CLASS)
    }

    defaultOpenElById(index) {
        const contentEl = this.findContentEl(this.accordionItems[index]);
        this.openCloseEl(contentEl);
    }

    findHeaderEl(el) {
        return el.closest("." + Accordion.ACCORDION_ITEM_HEADER_CLASS);
    }

    findContentEl(el) {
        return el.closest("." + Accordion.ACCORDION_ITEM_CLASS).querySelector("." + Accordion.ACCORDION_ITEM_CONTENT_CLASS)
    }

    findOpenedElement() {
        return this.rootEl.querySelector("."+ Accordion.OPEN_CLASS)
    }
}

