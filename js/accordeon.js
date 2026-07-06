// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-body',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

// Colonne 1
const accordion1 = new Accordion(
    document.getElementById('accordion-col-1'),
    [
        {
            id: 'accordion-example-heading-1',
            triggerEl: document.querySelector('#accordion-example-heading-1'),
            targetEl: document.querySelector('#accordion-example-body-1'),
            active: false
        },
        {
            id: 'accordion-example-heading-2',
            triggerEl: document.querySelector('#accordion-example-heading-2'),
            targetEl: document.querySelector('#accordion-example-body-2'),
            active: false
        },
        {
            id: 'accordion-example-heading-3',
            triggerEl: document.querySelector('#accordion-example-heading-3'),
            targetEl: document.querySelector('#accordion-example-body-3'),
            active: false
        }
    ],
    options,
    { id: 'accordion-col-1', override: true }
);

// Colonne 2
const accordion2 = new Accordion(
    document.getElementById('accordion-col-2'),
    [
        {
            id: 'accordion-example-heading-4',
            triggerEl: document.querySelector('#accordion-example-heading-4'),
            targetEl: document.querySelector('#accordion-example-body-4'),
            active: false
        },
        {
            id: 'accordion-example-heading-5',
            triggerEl: document.querySelector('#accordion-example-heading-5'),
            targetEl: document.querySelector('#accordion-example-body-5'),
            active: false
        },
        {
            id: 'accordion-example-heading-6',
            triggerEl: document.querySelector('#accordion-example-heading-6'),
            targetEl: document.querySelector('#accordion-example-body-6'),
            active: false
        }
    ],
    options,
    { id: 'accordion-col-2', override: true }
);