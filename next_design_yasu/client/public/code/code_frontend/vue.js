// This is Vue code
new Vue({
    el: '#app',
    data: {
        greeting: 'Hello, World!'
    },
    methods: {
        changeGreeting() {
            this.greeting = 'Hello, Vue!';
        }
    }
});