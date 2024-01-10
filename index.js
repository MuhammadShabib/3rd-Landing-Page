//Dark Mode

document.addEventListener('alpine:init', () => {
        Alpine.data('darkMode', () => ({
            darkMode: true,
            init() {
                if (localStorage.theme === 'dark') {
                    this.darkMode = true;
                } else {
                    this.darkMode = false;
                }
                this.$watch('darkMode', (value) => {
                    if (value) {
                        localStorage.theme = 'dark';
                    } else {
                        localStorage.theme = 'light';

                    }
                })
            }

        }))
    })
    // Text Typeing 


const textElement = document.querySelector('#text');
ityped.init(textElement, { strings: ['متن ساختگی...', 'متن ساختگی با تولید...', 'متن ساختگی با تولید سادگی...'] });