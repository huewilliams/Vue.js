var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    beforeCreate: ()=>{
        console.log('beforeCreate');
    },
    created: ()=>{
        console.log('created');
    },
    mounted: ()=>{
        console.log('mounted');
    },
    // 값의 변경이 없기 때문에 update 단계는 실행되지 않는다
    updated: ()=>{
        console.log('updated');
    }
})