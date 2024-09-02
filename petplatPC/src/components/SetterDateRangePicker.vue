<template>
  <div class="date-range-picker">
    <div class="date-picker">
      <label for="start-date">开始时间:</label>
      <input
        type="date"
        id="start-date"
        v-model="startDate"
        @change="emitDates"
      />
    </div>
    <div class="date-picker">
      <label for="end-date">结束时间:</label>
      <input
        type="date"
        id="end-date"
        v-model="endDate"
        @change="emitDates"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
    };
  },
  methods: {
    emitDates() {
      this.$emit('update:dates', { startDate: this.startDate, endDate: this.endDate });
    },
  },
};
</script>

<style scoped>
.date-range-picker {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: absolute; /* 使用绝对定位 */
  top: 47%; /* 距离页面顶部 100px */
  left: 18%; /* 水平居中，调整位置 */
}

.date-picker {
  display: flex;
  flex-direction: column;
}

.date-picker input {
  width: 250px; /* 设置日期选择器的宽度 */
  padding: 8px; /* 增加内边距使其更易于点击 */
}

label {
  margin-bottom: 8px;
}
</style>

  