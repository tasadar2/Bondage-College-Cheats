class Cheat {
    private lastClockClick = 0;

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
        const mainCanvas = document.getElementById("MainCanvas");
        if (mainCanvas) {
            mainCanvas.addEventListener("click", (e) => {
                // Clock icon
                if (e.offsetX > 990 && e.offsetX < 1060 &&
                    e.offsetY > 605 && e.offsetY < 675) {
                    const now = Date.now();
                    if (now - this.lastClockClick < 1000) {
                        const modal = document.getElementById("cheat");
                        this.toggle(modal);
                        this.lastClockClick = 0;
                    } else {
                        this.lastClockClick = now;
                    }
                }
            });
        }
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
