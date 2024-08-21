function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    for (const key in reactElement.props) {
        if (key === 'children') continue
        domElement.setAttribute(key , reactElement.props[key] )
    }
    container.appendChild(domElement);
}

const container = document.querySelector('.root')

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'click me to visit google'
}

customRender(reactElement,container)