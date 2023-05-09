const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu_nav = $$('.menu_nav');
const content_tab_list_item = $$('.content_tab-list-item');

menu_nav.forEach((item,index) => {
    
    const tab = content_tab_list_item[index];

    item.onclick = function() {
        $('.content_tab-list-item.action').classList.remove('action');
        $('.menu_nav.action').classList.remove('action');

        this.classList.add('action');
        tab.classList.add('action');
        console.log(tab)
    }

});

console.log('hahahhahahhahah')