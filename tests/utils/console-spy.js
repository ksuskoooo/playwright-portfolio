export class ConsoleSpy {
    constructor(page) {
        this.page = page;
        this.error = [];
    }

    start() {
        this.page.on('console',(msg) => {
            if (msg.type() === 'error') {
                this.error.push(msg.text());
            }
        })
    }
    getErrorsSummary() {
        if (this.error.length > 0) {
            return this.error.join('\n❌ ');
        }
        return '';
    }
}

