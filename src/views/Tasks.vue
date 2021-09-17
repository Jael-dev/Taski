<template>

<div class="pt-4 ml-5 mb-5">
    <p class="mt-n0">
      <v-row no-gutters id="__todo__container">
        <v-col cols="12" sm="4">
          <v-card outlined tile>
            <v-toolbar class="primary" height="30" dark>
              <span class="caption">
                <span>({{getState(1).length}})</span> To do
              </span>
              <v-spacer></v-spacer>
              <!-- menu to add a new todo -->
              <v-menu
                v-model="menuAddNewTodo"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="mr-n4" small plain fab elevation="0">
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-container>
                    <v-textarea
                      v-model="todoToAdd"
                      outlined
                      hint="Please enter yout todo"
                      name="input-7-4"
                      label="Add Todo"
                      placeholder="Enter a note"
                    ></v-textarea>
                  </v-container>
                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="menuAddNewTodo = false">Cancel</v-btn>
                    <v-btn color="primary" text @click="createTodo">add</v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
              <!-- end of menu to add a new todo-->
            </v-toolbar>
            <v-card-text
              @drop="onDrop($event, 1)"
              @dragover.prevent
              @dragenter.prevent
              class="pa-2 __tasks"
            >
              <!-- list of todos -->
              <div
                draggable="true"
                @dragstart="startDrag($event, todo)"
                v-for="todo in getState(1)"
                :key="todo.id"
                class="__element"
              >
                <TaskComponent
                  :todoObject="todo"
                  iconColor="red"
                  mdiIcon="mdi-alert-circle-outline"
                  @deleteTodoFromChild="deleteTodo"
                  @editTodoFromChild="editTodo"
                />
              </div>
              <!-- / list of todos -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card outlined tile>
            <v-toolbar class="primary" height="30" dark>
              <span class="caption">({{getState(2).length}}) In Progress</span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text
              @drop="onDrop($event, 2)"
              @dragover.prevent
              @dragenter.prevent
              class="pa-2 __tasks"
            >
              <!-- list of todos -->
              <div
                draggable="true"
                @dragstart="startDrag($event, todo)"
                v-for="todo in getState(2)"
                :key="todo.id"
                class="__element"
              >
                <TaskComponent
                  :todoObject="todo"
                  iconColor="green"
                  mdiIcon="mdi-timer-sand"
                  disableActionButtons
                />
              </div>
              <!-- / list of todos -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card outlined tile>
            <v-toolbar class="primary" height="30" dark>
              <span class="caption">({{getState(3).length}})Done</span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text
              @drop="onDrop($event, 3)"
              @dragover.prevent
              @dragenter.prevent
              class="pa-2 __tasks"
            >
              <!-- list of todos -->
              <div
                draggable="true"
                @dragstart="startDrag($event, todo)"
                v-for="todo in getState(3)"
                :key="todo.id"
                class="__element"
              >
                <TaskComponent
                  :todoObject="todo"
                  iconColor="blue"
                  mdiIcon="mdi-check-all"
                  disableActionButtons
                />
              </div>
              <!-- / list of todos -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </p>
</div>
  
</template>

<script>

import TaskComponent from "@/components/Task";
export default {
  components: {
    TaskComponent,
  },
  data() {
    return {
      todoToAdd: "", // the todo to be added
      menuAddNewTodo: false, // for the adding of a new todo
      todos: [
        {
          id: 1,
          name: "The sign in with google button is unclear when in dark mode",
          createdByUserId: 1,
          createdBy: "fotiecode",
          state: 1,
          isOpen: true,
        },
        {
          id: 2,
          name: "Post request for Edit",
          createdBy: "dilanlogla",
          createdByUserId: 2,
          state: 2,
          isOpen: true,
        },
        {
          id: 3,
          name: "Integrate the auth workflow on the frontend and Mobile App",
          createdByUserId: 3,
          createdBy: "fotiecode",
          state: 1,
          isOpen: true,
        },
        {
          id: 4,
          name: "Persist and detect dark mode on the web version",
          createdBy: "dilanlogla",
          createdByUserId: 3,
          state: 2,
          isOpen: true,
        },
        {
          id: 5,
          name: "Setup domain",
          createdByUserId: 1,
          createdBy: "joel",
          state: 3,
          isOpen: true,
        },
      ],
    };
  },
  computed: function (x) {
    this.getState(x);
  },
  methods: {
    // function that returns the matching alements of a particular list
    getState(x) {
      return this.todos.filter((item) => item.state === x && item.isOpen); // return the matching state which must be open
    },
    // remove item for chip filter
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    // function that permits drag of element
    startDrag(event, todo) {
      console.log(todo);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("todoId", todo.id); //setting the todoId which is carried to be used later on
    },
    // ondrop function that handles the dropping of the element
    onDrop(event, state) {
      console.log("Droped to state =>" + state);
      const todoId = event.dataTransfer.getData("todoId"); // getting the todoId which was carried
      const item = this.todos.find((item) => item.id == todoId); // compare to one of our todos in our array
      item.state = state; // update the state value to where it was dropped
      console.log("Item moved =>" + JSON.stringify(item));
      console.log(this.getState(1).length);
      console.log(this.todos);
    },
    // function to create a new Todo
    createTodo() {
      console.log("Create new Todo");
      const todoObject = {
        id: this.todos.length + 1, //generate random ideas for a start
        name: this.todoToAdd,
        createdBy: "fotiecode",
        state: 1,
        isOpen: true,
      };
      console.log(todoObject);
      this.todos.unshift(todoObject); //adding to the top of array
      console.log(this.todos);
      this.menuAddNewTodo = false; // closing modal
      this.todoToAdd = null; // setting the todoToAdd back to empty
    },
    // function to deleteTodo
    deleteTodo(todoId) {
      console.log("Todo id to be deleted => " + todoId);
      // mapping to get the todo object to be deleted
      this.todos.map((todo, index) => {
        if (todo.id == todoId) {
          console.log(index);
          todo.isOpen = false;
        }
      });
    },
    // editTodo function
    editTodo(editTodoObject) {
      console.log("Todo Object to be edit => ");
      console.log(editTodoObject);
      // mapping to get the todo object to be deleted
      this.todos.map((todo, index) => {
        if (todo.id == editTodoObject.id) {
          console.log(index);
          todo = editTodoObject; // updating the todo with the new values gotten from the edit dialog
        }
      });
    },
  },
};
</script>

<style scoped>
.__tasks {
  height: 435px;
  overflow-y: scroll;
}
.__tasks::-webkit-scrollbar {
  width: 7px;
}
/* Track */
.__tasks::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 10px;
}
/* Handle */
.__tasks::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
/* Handle on hover */
.__tasks::-webkit-scrollbar-thumb:hover {
  background: rgb(156, 156, 156);
}
.__element {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
#__todo__container {
  width: 100%;
  overflow: scroll;
  white-space: nowrap;
}
</style>