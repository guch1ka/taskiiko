const vm = new Vue({
    el: '#tasksArea',
    data() {
        return {
            tasks: [
                { name: 'test', finish: 0, del: 0}
            ],
            addtask: '',
            show: false,
            finishtaskname: '',
            goodboy:['a','b','c','d'],
        }
    },
    mounted() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    },
    methods: {
        great(item, index) {
            //alert(item.name + 'が完了しました');
            this.finishtaskname = item.name + 'が完了しました。' + this.goodboy[this.rand(0, this.goodboy.length - 1)];
            this.show = true;
            this.clearTask(index);
        },
        addTask() {
            this.tasks.push(
                { id: this.tasks.length, name: this.addtask, finish: 0, del: 0 }
            );
            this.setITasks();
        },
        clearTask(index) {
            this.tasks[index].finish = '1';
            this.setITasks();
        },
        delTask(index) {
            this.tasks[index].del = '1';
            this.setITasks();
        },
        setITasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        delAllTask() {
            this.tasks = [];
            this.setITasks();
        },
        rand: function(min, max){
            var num = Math.floor(Math.random() * (max + 1 - min)) + min;
            return num;
        }
    }
})
