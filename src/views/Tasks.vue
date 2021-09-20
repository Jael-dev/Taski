<template>
<div class="pt-4 ml-5 mb-0">
    <Info/>
    <p class="mt-n0">
      <v-row no-gutters id="__todo__container">
     <v-col cols="12" sm="3">
          <v-card outlined class="rounded-xl ma-1 " color="#E5E5E5">
            <v-toolbar height="30" color="transparent" elevation="0">
              <span class="caption">
                <span>({{getState(1).length}})</span> Request
              </span>
              <v-spacer></v-spacer>
              <!-- menu to add a new todo -->
              <v-menu
                v-model="menuAddNewRequest"
                :close-on-content-click="false"
                :nudge-width="300"
                offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="mr-n4" small plain fab elevation="0">
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </template>

                 <v-card class="mx-auto my-12" max-width="500">
          <v-card-title>
            Make A Request
          </v-card-title>
          <v-divider></v-divider>

          <form class="pa-10">
            <p>Title</p>
            <v-text-field
              v-model="title"
              required
              outlined
              clearable
              color="#A544B9"
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()"
            ></v-text-field>
            <p>Description</p>
            <v-text-field
              v-model="description"
              required
              color="#A544B9"
              outlined
              clearable
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
            ></v-text-field>

            <v-row>
              <v-col>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date1"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="Start Date"
                      prepend-icon="mdi-calendar"
                       v-model="start_date"
                      color="green"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="start_date"
                    scrollable
                    color="#A544B9"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog.save(start_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="date2"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="End Date"
                      prepend-icon="mdi-calendar"
                      color="red"
                       v-model="end_date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="end_date" scrollable color="#A544B9">
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog2.save(end_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row align="space-between">
              <v-col>
                <v-btn text color="#A544B9" @click="menuAddNewOrder = false">
                  Cancel
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn color="#A544B9" @click="newOrder()">Let's do it</v-btn>
              </v-col>
            </v-row>
          </form>
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
        <v-col cols="12" sm="3">
          <v-card outlined class="rounded-xl ma-1" color="#E5E5E5" >
            <v-toolbar height="30" color="transparent" elevation="0">
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

               <v-card class="mx-auto my-12" max-width="500">
          <v-card-title>
            Add Todo
          </v-card-title>
          <v-divider></v-divider>

          <form class="pa-10">
            <p>Title</p>
            <v-text-field
              v-model="title"
              required
              outlined
              clearable
              color="#A544B9"
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()"
            ></v-text-field>
            <p>Description</p>
            <v-text-field
              v-model="description"
              required
              color="#A544B9"
              outlined
              clearable
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
            ></v-text-field>

            <v-row>
              <v-col>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date1"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="Start Date"
                      prepend-icon="mdi-calendar"
                       v-model="start_date"
                      color="green"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="start_date"
                    scrollable
                    color="#A544B9"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog.save(start_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="date2"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="End Date"
                      prepend-icon="mdi-calendar"
                      color="red"
                       v-model="end_date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="end_date" scrollable color="#A544B9">
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog2.save(end_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row align="space-between">
              <v-col>
                <v-btn text color="#A544B9" @click="menuAddNewOrder = false">
                  Cancel
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn color="#A544B9" @click="newOrder()">Let's do it</v-btn>
              </v-col>
            </v-row>
          </form>
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
        <v-col cols="12" sm="3">
          <v-card outlined class="rounded-xl ma-1" color="#E5E5E5">
            <v-toolbar class="transparent" elevation="0" height="30">
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
        <v-col cols="12" sm="3">
          <v-card outlined class="rounded-xl ma-1" color="#E5E5E5">
            <v-toolbar class="transparent" height="30" elevation="0">
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

import Info from '@/components/Info.vue'
export default {
  components: {
    TaskComponent,
    Info
  },
  data() {
    return {
      todoToAdd: "", // the todo to be added
      menuAddNewTodo: false, // for the adding of a new todo
      menuAddNewRequest: false, // for the adding of a new todo
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