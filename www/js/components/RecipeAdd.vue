<template>
  <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateInput">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Add your recipe!</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('recipeName')">
              <label for="recipe-name">Recipe Name</label>
              <md-input name="recipe-name" id="recipe-name" v-model="form.recipeName" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.recipeName.required">The recipe name is required</span>
              <span class="md-error" v-else-if="!$v.form.recipeName.minlength">Invalid recipe name</span>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('category')">
              <label for="category">Category (comma separated)</label>
              <md-input name="category" id="category" v-model="form.category" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.category.required">Ingredients are required</span>
              <span class="md-error" v-else-if="!$v.form.category.minlength">Invalid ingredients list</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('hour')">
              <label for="hour">Hours</label>
              <md-select name="hour" id="hour" v-model="form.hour" md-dense :disabled="sending">
                <md-option></md-option>
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3">3</md-option>
                <md-option value="4">4</md-option>
                <md-option value="5">5</md-option>
                <md-option value="6">6</md-option>
                <md-option value="7">7</md-option>
                <md-option value="8">8</md-option>
              </md-select>
              <span class="md-error">The time is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('min')">
              <label for="min">Minutes</label>
              <md-select name="min" id="min" v-model="form.min" md-dense :disabled="sending">
                <md-option></md-option>
                <md-option value="15">00</md-option>
                <md-option value="15">15</md-option>
                <md-option value="30">30</md-option>
                <md-option value="45">45</md-option>
              </md-select>
              <span class="md-error">The time is required</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('servings')">
              <label for="servings">Servings</label>
              <md-input type="number" id="servings" name="servings" v-model="form.servings" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.servings.required">Servings number required</span>
            </md-field>
          </div>
      
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('difficulty')">
              <label for="difficulty">Difficulty</label>
              <md-select name="difficulty" id="difficulty" v-model="form.difficulty" md-dense :disabled="sending">
                <md-option></md-option>
                <md-option value="1">1 - Easy</md-option>
                <md-option value="2">2 - Medium</md-option>
                <md-option value="3">3 - Hard</md-option>
              </md-select>
              <span class="md-error">Field required</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('ingredients')">
              <label for="ingredients">Ingredients</label>
              <md-textarea name="ingredients" id="ingredients" v-model="form.ingredients" md-dense :disabled="sending"></md-textarea>
              <span class="md-helper-text">Write here the ingredients for this recipe, separated by commas</span>
              <span class="md-error">Directions are required</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('directions')">
              <label for="directions">Directions</label>
              <md-textarea name="directions" id="directions" v-model="form.directions" md-dense :disabled="sending"></md-textarea>
              <span class="md-helper-text">Write here the directions to cook this recipe</span>
              <span class="md-error">Directions are required</span>
            </md-field>
          </div>
        </div>
      </md-card-content>

      <md-progress-bar md-mode="indeterminate" v-if="sending" />

      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending">Add recipe</md-button>
      </md-card-actions>
    </md-card>

    <md-snackbar :md-active.sync="userSaved">The recipe {{ recipeName }} was saved with success!</md-snackbar>
  </form>
</template>

<style>
.md-layout {
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'recipe-add',
    mixins: [validationMixin],
    data: () => ({
      form: {
        recipeName: null,
        category: null,
        hour: null,
        min: null,
        servings: null,
        difficulty: null,
        ingredients: null,
        directions: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        recipeName: {
          required,
          minLength: minLength(3)
        },
        category: {
          required,
          minLength: minLength(3)
        },
        hour: {
          required
        },
        min: {
          required
        },
        servings: {
          required
        },
        difficulty: {
          required
        },
        ingredients: {
          required
        },
        directions: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.recipeName = null
        this.form.category = null
        this.form.hour = null
        this.form.min = null
        this.form.servings = null
        this.form.difficulty = null
        this.form.ingredients = null
        this.form.directions = null
      },
      saveRecipe () {
        this.sending = true

        let ingArray = this.form.ingredients.split(",");
        let catArray = this.form.category.split(",");
        let currThis = this;
        let myHeaders = new Headers({
          'Content-Type': 'application/json'
        });

        fetch('http://localhost:3000/recipes/add', {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({
            "name" : this.form.recipeName,
	          "ingredients" : ingArray,
            "time" : {
              "hour" : this.form.hour,
              "min" : this.form.min
            },
            "servings" : this.form.servings,
            "difficulty" : this.form.difficulty,
            "directions" : this.form.directions,
            "category" : catArray
          })
        })
        .then(function(response){
          return response.json();
        })
        .then(function(response){
          if (response.msg === '') {
            currThis.connCompleted();
          }
        })

        // Instead of this timeout, here you can call your API
       /*  window.setTimeout(() => {
          this.recipeName = `${this.form.recipeName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500) */
      },
      validateInput () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveRecipe()
        }
      },
      connCompleted () {
        this.recipeName = `${this.form.recipeName}`
        this.userSaved = true
        this.sending = false
        this.clearForm()
      }
    }
  }
</script>