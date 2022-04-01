<template>
  <a-config-provider :getPopupContainer="getPopupContainer">
    <router-view></router-view>
  </a-config-provider>
</template>
<script setup lang="ts">
const getPopupContainer = (
  el: any,
  dialogContext: { getDialogWrap: () => any }
) => {
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
};
import { ConfigProvider } from 'ant-design-vue';

ConfigProvider.config({
  // theme: {
  //   // primaryColor: '#18191c',
  // },
});
</script>
