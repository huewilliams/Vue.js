new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    beforeCreate: function() {
        console.log('beforeCreate');
    },
    created: function() {
        console.log('created');
    },
    mounted: function() {
        console.log('mounted');
        this.message = 'Hello Vue!'; // message 변경
    },
    // message 의 변경이 일어나 update 단계가 진행된다
    updated: function() {
        console.log('updated');
    }
})