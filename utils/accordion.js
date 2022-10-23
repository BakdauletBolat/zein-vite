class Accordion {
    constructor(selector,options) {
        const defaultOptions = {
            multiple: true,
            speed:200,

            control_class: '.accordion_control',
            content_class: '.accordion_content',
            button_class:  '.accordion_button'
        }
        this.options = Object.assign(defaultOptions,options);
        this.accordion = this.options.multiple ? document.querySelectorAll(selector) : document.querySelector(selector);
        this.start();
    }

    startEvents() {
        if(this.options.multiple) {
            this.accordion.forEach(item=>{
                const control = item.querySelector(this.options.control_class);

                if (control) {
                    control.addEventListener('click',(e)=>{
                        item.classList.toggle('open');
                        console.log('click');
                        if (item.classList.contains('open')) {
                            this.open(item);
                        }
                        else{
                            this.close(item);
                        }
                    })
                }
                
            });
        }
        else {
            const control = this.accordion.querySelector(this.options.control_class);

            control.addEventListener('click',(e)=>{
                this.accordion.classList.toggle('open');

                if (this.accordion.classList.contains('open')) {
                    this.open(this.accordion);
                }
                else{
                    this.close(this.accordion);
                }
            })

        }
    }

    start() {
        if (this.accordion) {
            this.startEvents();
        }
    }


    changeButtonClass(accordion,type) {
        const button = accordion.querySelector(this.options.button_class);
       
        if (type == 'open') {
            button.classList.remove('icon-plus');
            button.classList.add('icon-minus');
        }
        if (type == 'close') {
            button.classList.remove('icon-minus');
            button.classList.add('icon-plus');
        }
    }

    open(accordion) {

        this.changeButtonClass(accordion,'open');

        accordion.style.setProperty('--accordion-time',`${this.options.speed/1000}s`);
        accordion.classList.add('is-open');
        const control = accordion.querySelector(this.options.control_class);
        const content = accordion.querySelector(this.options.content_class);    

        control.setAttribute('aria-expanded','true');
        content.setAttribute('aria-hidden','false');
        content.style.maxHeight = content.scrollHeight + 'px';
    }

    close(accordion) {
        this.changeButtonClass(accordion,'close');
        accordion.style.setProperty('--accordion-time',`${this.options.speed/1000}s`);
        accordion.classList.remove('is-open');
        const control = accordion.querySelector(this.options.control_class);
        const content = accordion.querySelector(this.options.content_class);
        control.setAttribute('aria-expanded','false');
        content.setAttribute('aria-hidden','true');
        content.style.maxHeight = null;


    }
}

