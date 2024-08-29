const tabItems = document.querySelectorAll('.tab-item')
const tabContententItems = document.querySelectorAll('.tab-content-item')

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grad content item from DOM
    const tabContententItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContententItem.classList.add('show')
    
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContententItems.forEach(item => item.classList.remove('show'))
}


// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))

