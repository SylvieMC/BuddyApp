Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 2, text: 'Légumes' },
            { id: 1, text: 'Fromage' },
            { id: 0, text: 'Tout ce que les humains sont supposés manger' }
        ]
    }
})
