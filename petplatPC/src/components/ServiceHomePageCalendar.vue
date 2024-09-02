<template>
  <div class="datepicker-container">
    <DatePicker
      v-model="selectedDate"
      :inline="true"
      :enable-time="false"
      format="yyyy-MM-dd"
      placeholder="选择日期"
      :locale="zhCN"
    />
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { zhCN } from 'date-fns/locale'; // 引入中文语言包

export default {
  name: 'CalendarComponent',
  components: {
    DatePicker
  },
  data() {
    return {
      selectedDate: null,
      zhCN // 将语言包赋值给 data
    };
  }
};
</script>

<style scoped>
.datepicker-container {
  position: absolute;
  top: 22%; /* 从顶部偏移 */
  left: 50%; /* 从左侧偏移 */
  max-width: 300px;
}
</style>




