<template>
  <div class="pt-4 ml-5 mb-0">
    <Info />
    <p class="mt-n0">
      <v-row no-gutters id="__todo__container">
        <v-col cols="12" sm="3">
          <v-card outlined class="rounded-xl ma-1 " color="#E5E5E5">
            <v-toolbar height="30" color="transparent" elevation="0">
              <span class="caption">
                <span>({{ getState(0).length }})</span> Request
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
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="mr-n4"
                    small
                    plain
                    fab
                    elevation="0"
                  >
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <!-- 
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
                          <v-date-picker
                            v-model="end_date"
                            scrollable
                            color="#A544B9"
                          >
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
                        <v-btn
                          text
                          color="#A544B9"
                          @click="menuAddNewOrder = false"
                        >
                          Cancel
                        </v-btn>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col>
                        <v-btn color="#A544B9" @click="newOrder()"
                          >Let's do it</v-btn
                        >
                      </v-col>
                    </v-row>
                  </form>
                </v-card> -->
              </v-menu>
              <!-- end of menu to add a new todo-->
            </v-toolbar>
            <v-card-text
              @drop="onDrop($event, 0)"
              @dragover.prevent
              @dragenter.prevent
              class="pa-2 __tasks"
            >
              <!-- list of todos -->
              <div
                draggable="true"
                @dragstart="startDrag($event, todo)"
                v-for="todo in getState(0)"
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
            <v-toolbar height="30" color="transparent" elevation="0">
              <span class="caption">
                <span>({{ getState(1).length }})</span> To do
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
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="mr-n4"
                    small
                    plain
                    fab
                    elevation="0"
                  >
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
                          <v-date-picker
                            v-model="end_date"
                            scrollable
                            color="#A544B9"
                          >
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
                        <v-btn
                          text
                          color="#A544B9"
                          @click="menuAddNewTodo = false"
                        >
                          Cancel
                        </v-btn>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col>
                        <v-btn color="#A544B9" @click="create_todos()"
                          >Let's do it</v-btn
                        >
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
              <span class="caption"
                >({{ getState(2).length }}) In Progress</span
              >
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
              <span class="caption">({{ getState(3).length }})Done</span>
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

import Info from "@/components/Info.vue";
export default {
  components: {
    TaskComponent,
    Info,
  },
  props: {
    projectId: String,
  },
  data() {
    return {
      todoToAdd: "", // the todo to be added
      menuAddNewTodo: false, // for the adding of a new todo
      menuAddNewRequest: false, // for the adding of a new todo
      todos: "",
      user: "",
      user_id: "",
      dialog: false,
      modal: false,
      modal2: false,
      title: "",
      description: "",
      start_date: "",
      end_date: "",
      date2: "",
      date1: "",
    };
  },
  computed: function(x) {
    this.getState(x);
  },
  methods: {
    // function that returns the matching alements of a particular list
    getState(x) {
      return Object.values(this.todos).filter((item) => item.state === x); // return the matching state which must be open
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
    async onDrop(event, state) {
      console.log("Droped to state =>" + state);
      const todoId = event.dataTransfer.getData("todoId"); // getting the todoId which was carried
      const item = this.todos.find((item) => item.id == todoId); // compare to one of our todos in our array
      item.state = state; // update the state value to where it was dropped
      try {
        console.log(
          "http://localhost:8000/api/tasks/" +
            this.projectId +
            "/" +
            todoId +
            "/" +
            state +
            "/updateTask"
        );
        const response = await axios.put(
          "http://localhost:8000/api/tasks/" +
            this.projectId +
            "/" +
            todoId +
            "/" +
            state +
            "/updateTask",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
    // function to create a new Todo
    // function to deleteTodo
    async deleteTodo(todoId) {
      console.log("Todo id to be deleted => " + todoId);
      try {
        const response = await axios.put(
          "http://localhost:8000/api/tasks/" + todoId + "/dismiss",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
    // editTodo function
    async editTodo(editTodoObject) {
      console.log("Todo Object to be edit => ");
      console.log(editTodoObject);
      try {
        console.log("http://localhost:8000/api/tasks/" + editTodoObject.id);
        const response = await axios.put(
          "http://localhost:8000/api/tasks/" + editTodoObject.id,
          editTodoObject,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
    async get_todos() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/projectTask/" + this.projectId,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
        this.todos = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    async create_todos() {
      try {
        const task = {
          title: this.title,
          description: this.description,
          state: 1,
          start_date: this.start_date,
          end_date: this.end_date,
          user_id: this.user_id,
        };
        const response = await axios.post(
          "http://localhost:8000/api/tasks/" + this.projectId,
          task,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user_id = this.user.id;
    this.get_todos();
  },
};
</script>

<style scoped>
.__tasks {
  height: 600px;
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
