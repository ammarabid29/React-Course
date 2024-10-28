const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google",
}

const mainContainer = document.querySelector('#root');

function customRender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement);
}

customRender(reactElement, mainContainer);