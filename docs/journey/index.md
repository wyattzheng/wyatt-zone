
## ⌚️ 时间线

<div class="journey" ref="containerRef">
    <canvas width="1000" height="1600"></canvas>
</div>

<script setup>
import { useData } from 'vitepress'
import { ref, onMounted, watch } from 'vue'
import { Journey } from './journey'
const containerRef = ref();
const journeyRef = ref();
const data = useData();

watch(data.isDark, () => {
    journeyRef.value.setIsDark(data.isDark.value);
});
onMounted(() => {
    journeyRef.value = new Journey(containerRef.value);
    journeyRef.value.setIsDark(data.isDark.value);
})

</script>
<style>
    .canvas {
        width: auto;
    }
    .journey {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        height: 300px;
        border: 1px solid #CCC;
        border-radius: 10px;
    }   
</style>