<template>
  <div class="mx-auto mt-2">
    <v-card
      class="rounded-xl"
      max-width="344"
      outlined
      elevation
      draggable="true"
      color="White"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h5 black--text pl-0">
          {{ todoObject.title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon color="black">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-btn text @click="dialogDelete = true">
                <v-icon small left color="error">mdi-delete</v-icon>
                Delete</v-btn
              >
            </v-list-item>
            <v-list-item>
              <v-btn text @click="dialogEdit = true"
                ><v-icon small left color="primary">mdi-tooltip-edit</v-icon>Edit
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-card-text class="black--text mt-0 pt-0 pl-10">
        <h5 class="pt-2 ml-0">
           {{ todoObject.description }}
        </h5>
        <div class="caption">
          <a href="#">#</a>
          last opend by {{ userActions.user_id }}
        </div>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-flag-variant-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-information-variant</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-avatar size="26">
           <v-sheet
                    class="mr-0 mb-0 "
                    height="60"
                    width="60"
                    :color="generator()"
                  ></v-sheet>
        </v-avatar>
      </v-card-actions>

      <!-- dialog for confirm delation of todo -->
      <v-dialog v-model="dialogDelete" max-width="290">
        <v-card>
          <v-card-title class="headline">
            Delete Todo
            <a href="#">#{{ todoObject.id }}</a>
          </v-card-title>

          <v-card-text class="mt-3"
            >Are you sure you want to delete this todo?</v-card-text
          >

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" text @click="dialogDelete = false"
              >Cancel</v-btn
            >

            <v-btn color="error darken-1" text @click="onDeleteTodo"
              >Yup!</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dialog for confirm delation of todo -->
      <!-- dialog for information of todo -->
      <v-dialog v-model="dialogInfo" max-width="290">
        <v-card>
          <v-card-title class="headline">
            Delete Todo
            <a href="#">#{{ todoObject.id }}</a>
          </v-card-title>

          <v-card-text class="mt-3"
            >Are you sure you want to delete this todo?</v-card-text
          >

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialogDelete = false"
              >Cancel</v-btn
            >

            <v-btn color="green darken-1" text @click="onDeleteTodo"
              >Yup!</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dialog for cinformation of todo -->
      <!-- dialog for editing of todo -->
      <v-dialog v-model="dialogEdit" max-width="290">
        <v-card>
          <v-card-title class="headline">
            Edit Todo
            <a href="#">#{{ todoObject.id }}</a>
          </v-card-title>

          <v-card-text class="mt-3">
            <v-textarea
              v-model="todoToUpdate"
              outlined
              hint="Please enter your updated todo"
              name="input-7-4"
              label="Add Todo"
              placeholder="Enter a note"
            ></v-textarea>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" text @click="dialogEdit = false"
              >Cancel</v-btn
            >

            <v-btn color="success" text>Update!</v-btn>
          </v-card-actions> </v-card
        >@click="onEditTodo"
      </v-dialog>
      <!-- dialog for editing of todo -->
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    todoObject: Object, //todo object from the parent component
    iconColor: String,
    mdiIcon: String,
    disableActionButtons: Boolean, // if we want action buttons enabled or not
    userActions:WebGLVertexArrayObject
  },
  data() {
    return {
      dialogEdit: false, // dialog for editing
      dialogDelete: false, // dialog to confirm deletion
      dialogInfo: false, // dialog display info
      todoToUpdate: this.todoObject.title,
      user: "",
      user_id: "",
      dialog: false,
      modal: false,
      modal2: false,
      menuAddNewTask: false,
      title: "",
      description: "",
      state: 0,
      start_date: "",
      end_date: "",
      date2: "",
      date1: "",
    };
  },
  methods: {
    // emit onDeleteTodo to the parent component
    onDeleteTodo() {
      this.dialogDelete = false;
      console.log("onDeleteTodo from chield component");
      this.$emit("deleteTodoFromChild", this.todoObject.id); //emiting to the parent which todo to be deleted
    },
    // emit onEditTodo to the parent component
    onEditTodo() {
      this.dialogEdit = false;
      this.todoObject.title = this.todoToUpdate; // updating the name of todo in todoObject with the new one
      console.log("onEditTodo from chield component");
      this.$emit("editTodoFromChild", this.todoObject); //emiting to the parent which todo to be edited
    },
     generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
    },
  },
};
</script>
