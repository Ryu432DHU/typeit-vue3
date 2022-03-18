<template>
  <p :style="alcoholicDrinkMsgStyle">age: {{ age }} / {{  alcoholicDrinkMsg }}</p>
  <div>
    <button class="border-2 border-gray-500 mr-4 px-4 py-2 rounded-md" @click="incrementAge">+1 age</button>
    <button class="border-2 border-gray-500 px-4 py-2 rounded-md" @click="decrementAge">-1 age</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      age: 20,
    }
  },
  computed: {
    canGetAlcoholicDrink(){
      return this.age >= 20
    },
    alcoholicDrinkMsg(){
      return this.canGetAlcoholicDrink ? "You can get alcoholic drink" : "You can't get alcoholic drink yet"
    },
    
    alcoholicDrinkMsgStyle(){
      return this.canGetAlcoholicDrink ? { color: "green", } : { color: "red", textTransform: "uppercase"}
    }
  },
  methods: {
    incrementAge(){
      this.age++
    },
    decrementAge(){
      this.age--
    }
  }
}
</script>