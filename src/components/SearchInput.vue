<template>
  <div class="w-[268px]">
    <a-input size="large" :bordered="false" class="search">
      <template #suffix>
        <div class="flex hover:bg-light rounded-md p-2 cursor-pointer">
          <search-outlined class="text-main" />
        </div>
      </template>
    </a-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: { SearchOutlined },
});
</script>

<style scoped>
.search {
  @apply h-[40px] rounded-[8px] border border-solid border-tips hover:border hover:border-border !important;
}
</style>
