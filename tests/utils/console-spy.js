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
    assertNoErrors() {
        if (this.error.lenght > 0) {
            console.log('Errors detected', this.error);
        }
        return this.error.lenght === 0;
}
}

