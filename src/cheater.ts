class Cheat {

    constructor() {
        window.addEventListener("load", () => this.init());
        if (document.readyState === "complete") {
            this.init();
        }
    }

    public init() {
        this.injectWindow();
        document.addEventListener("keypress", (e) => {
            if (e.key === "c") {
                const modal = document.getElementById("cheat");
                this.toggle(modal);
            }
        });
    }

    public toggle(element: HTMLElement | null) {
        if (element) {
            if (element.style.display === "none") {
                this.show(element);
            } else {
                this.hide(element);
            }
        }
    }

    public show(element: HTMLElement | null) {
        if (element) {
            element.style.display = "block";
        }
    }

    public hide(element: HTMLElement | null) {
        if (element) {
            element.style.display = "none";
        }
    }

    public injectWindow() {
        const temp = document.createElement("div");
        temp.innerHTML = cheaterHtml;
        for (const childKey in temp.children) {
            if (temp.children.hasOwnProperty(childKey)) {
                document.body.appendChild(temp.children[childKey]);
            }
        }
    }

}

const cheat = new Cheat();
