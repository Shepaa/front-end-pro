
class Tab {
    static DEFAULT_TAB_INDEX = 0
    static NAV_EL_CLASS = 'navigation-item';
    static CONTENT_ITEM_CLASS = 'content-item';
    static NAV_ITEM_CLASS = 'navigation-item-active';
    static CONTENT_ITEM_ACTIVE = 'content-item-active'

    constructor(rootEl) {
        this.rootEl = rootEl;
        const [navItems, contentItems] = this.rootEl.children;
        this.navItems = Array.from(navItems.children);
        this.contentItems = Array.from(contentItems.children);

        this.setStyles();
        this.setEvents();
        this.setActive(Tab.DEFAULT_TAB_INDEX);
    }

    setStyles() {
        this.navItems.forEach((navItem) => {
            navItem.classList.add(Tab.NAV_EL_CLASS);
        })
        this.contentItems.forEach((contentItem) => {
            contentItem.classList.add(Tab.CONTENT_ITEM_CLASS);
        })
    }

    setEvents() {
        this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
    }

    onRootElClick(e) {
        const target = e.target
        const navItem = this.findNavEl(target)

        if (navItem) {
            const navItemIndex = this.getNavElIndex(navItem)
            this.removeActive(this.currentTabIndex)
            this.setActive(navItemIndex)
        }
    }

    findNavEl(el) {
        return el.closest('.' + Tab.NAV_EL_CLASS)
    }

    getNavElIndex(navItem) {
        return this.navItems.indexOf(navItem)
    }

    setActive(index) {
        this.currentTabIndex = index
        this.navItems[index].classList.add(Tab.NAV_ITEM_CLASS)
        this.contentItems[index].classList.add(Tab.CONTENT_ITEM_ACTIVE)
    }

    removeActive(index) {
        this.navItems[index].classList.remove(Tab.NAV_ITEM_CLASS)
        this.contentItems[index].classList.remove(Tab.CONTENT_ITEM_ACTIVE)
    }
}