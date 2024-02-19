<template>
    <n-message-provider>
        <n-button @click="createMessage">
            沙漏图标
        </n-button>
    </n-message-provider>
</template>
  
<script>
import { defineComponent, h } from "vue";
import { NIcon, useMessage, useNotification } from "naive-ui";

export default defineComponent({
    setup() {
        const message = useMessage();
        return {
            createMessage() {
                message.warning("I never needed anybody's help in any way", {
                    icon: () => h(NIcon, null, { default: () => h(MdHourglass) })
                });
            }
        };
    }
});
</script>