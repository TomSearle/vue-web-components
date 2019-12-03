import Vue from "vue";
import vueCustomElement from "vue-custom-element";

// Import the vue components
import HelloWorld from "./HelloWorld.vue";
import ClockWidget from "./ClockWidget.vue";
import ToDoList from "./ToDoList.vue";

// Adds the customElement wrapper to vue
Vue.use(vueCustomElement);

// Register our web components with their tag names
Vue.customElement("hello-world", HelloWorld);
Vue.customElement("clock-widget", ClockWidget);
Vue.customElement("todo-list", ToDoList);
