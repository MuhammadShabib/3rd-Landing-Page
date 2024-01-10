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

        })),
        Alpine.data('countDown', () => ({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            init() {
                let endDate = new Date(2024, 1, 11).getTime();
                setInterval(() => {
                    let newDate = new Date().getTime();
                    let time = endDate - newDate;
                    if (time >= 0) {
                        this.days = this.format(Math.floor(time / (1000 * 60 * 60 * 24)));
                        this.hours = this.format(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                        this.minutes = this.format(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
                        this.seconds = this.format(Math.floor((time % (1000 * 60)) / 1000));
                    }
                }, 1000)
            },
            format(num) {
                return num < 10 ? '0' + num : num;
            }
        }))
})



// Text Typeing 


const textElement = document.querySelector('#text');
ityped.init(textElement, { strings: ['متن ساختگی...', 'متن ساختگی با تولید...', 'متن ساختگی با تولید سادگی...'] });