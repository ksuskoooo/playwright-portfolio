export class ConsoleSpy {
    constructor(page) {
        this.page = page;
        this.errors = [];
    }

    start() {
        this.page.on('console', (msg) => {
            if (msg.type() === 'error') {
                this.errors.push(msg.text());
            }
        });
    }

    getErrorsSummary() {
        if (this.errors.length > 0) {
            return this.errors.join('\n❌ ');
        }
        return '';
    }
}