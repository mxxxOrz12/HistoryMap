
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const axiosdata = ref(null)

const getdata = async () => {
    try {
        const response = await axios.get('http://localhost:8080/map/geometry?category=cntypts&start=200&end=222')
        axiosdata.value = response.data
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

onMounted(getdata);


</script>
<template>
    <div>
        <div>{{ axiosdata }}</div>
        <div>专题地图</div>
    </div>
</template>
  

  