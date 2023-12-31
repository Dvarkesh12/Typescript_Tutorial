/*
   1. Register a list container (ul) in the constructer
   2. create a render method to render a new 'li' to the container.
       -- accepts arguments : invoice or payment, a heading , a position
       -- Create a html template (li, h4, p)
       -- add the 'li' template to start/end of the list.

*/
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format().toString();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
