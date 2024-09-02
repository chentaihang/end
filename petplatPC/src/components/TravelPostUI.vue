<template>
  <div class="form-container">
    <!-- 第一列 -->
    <div class="column">
      <div class="form-group">
        <label for="title">标题：</label>
        <input type="text" id="title" v-model="form.title" placeholder="请输入标题" />
      </div>
      <div class="form-group">
        <label for="tags">标签：</label>
        <input type="text" id="tags" v-model="form.tags" placeholder="请输入标签（以逗号分隔）" />
      </div>
      <div class="form-group">
        <label for="content-area">发布内容区：</label>
        <select id="content-area" v-model="form.contentArea">
          <option value="news">宠物友好景点</option>
          <option value="blog">宠物养护好店</option>
          <option value="notice">宠物寄养平台</option>
        </select>
      </div>
      <div class="form-group">
        <label for="upload-image">上传图片：</label>
        <input 
          type="file" 
          id="upload-image" 
          @change="handleFileUpload" 
          multiple
        />
      </div>
      <div class="form-group">
        <label for="edit-content">编辑内容：</label>
        <textarea id="edit-content" v-model="form.editContent" placeholder="请输入编辑内容"></textarea>
      </div>
    </div>

    <!-- 第二列 -->
    <div class="column">
      <div class="form-group">
        <label for="open-date">开放时间（允许寄养时间）：</label>
        <el-date-picker
          v-model="form.openDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
        />
      </div>
      <div class="form-group">
        <label for="open-time">具体时间范围：</label>
        <div class="time-range">
          <el-time-picker
            v-model="form.startTime"
            placeholder="选择开始时间"
            format="HH:mm"
            value-format="HH:mm"
          />
          <span>至</span>
          <el-time-picker
            v-model="form.endTime"
            placeholder="选择结束时间"
            format="HH:mm"
            value-format="HH:mm"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="rating">评分：</label>
        <input type="number" id="rating" v-model="form.rating" min="1" max="5" placeholder="请输入评分" />
      </div>
      <div class="form-group">
        <label for="pet-years">养宠年数：</label>
        <input type="number" id="pet-years" v-model="form.petYears" placeholder="请输入养宠年数" />
      </div>
      <div class="form-group">
        <label for="service-items">游玩（服务）项目/养宠种类：</label>
        <input type="text" id="service-items" v-model="form.serviceItems" placeholder="请输入游玩（服务）项目" />
      </div>
      <div class="form-group">
        <label for="address">地址：</label>
        <input type="text" id="address" v-model="form.address" placeholder="请输入地址" />
      </div>
    </div>

    <!-- 发布按钮 -->
    <button class="publish-button" @click="publish">发布</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 引入路由功能
import { useStore } from 'vuex';
import { ElDatePicker, ElTimePicker } from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  components: {
    ElDatePicker,
    ElTimePicker,
  },
  setup() {
    const store = useStore(); // 获取 Vuex Store 实例
    const router = useRouter(); // 获取 Vue Router 实例

    const form = ref({
      title: '',
      tags: '', // 新增字段
      contentArea: '',
      editContent: '',
      openDate: [],
      startTime: '',
      endTime: '',
      rating: null,
      petYears: '', // 新增字段
      serviceItems: '', // 新增字段
      address: '', // 新增字段
      images: [], // 用于存储上传的图片
    });

    const handleFileUpload = (event) => {
      const files = Array.from(event.target.files);
      form.value.images = files.map(file => URL.createObjectURL(file)); // 将文件转换为可用的URL
      console.log('上传的文件:', files);
    };

    const publish = () => {
      console.log(store); // 打印 store 实例
      // 将表单数据保存到 Vuex
      store.dispatch('updateFormData', form.value);

      // 跳转到展示页面
      router.push({ name: 'PostDisplay' });
    };

    return {
      form,
      handleFileUpload,
      publish,
    };
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  gap: 20px;
  width: 60vw; /* 宽度占屏幕的60% */
  height: 50vh; /* 高度占屏幕的50% */
  margin: 5% auto; /* 使组件居中 */
  box-sizing: border-box;
  padding: 20px;
  position: relative; /* 用于定位发布按钮 */
}

.column {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold; /* 加粗字体 */
  font-size: 16px; /* 设置字体大小 */
  margin-bottom: 8px;
}

input[type="text"],
input[type="number"],
select,
textarea,
.el-date-picker,
.el-time-picker {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

textarea {
  height: 120px; /* 设置较高的高度 */
}

.time-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

.time-range span {
  font-weight: bold;
}

.publish-button {
  position: absolute;
  right: 30px;
  bottom: -100px;
  padding: 10px 20px;
  background-color: #4CAF50; /* 绿色背景 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.publish-button:hover {
  background-color: #45a049; /* 深一点的绿色 */
}
</style>

