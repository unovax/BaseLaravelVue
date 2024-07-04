<script lang="ts" setup>
defineProps<{
    text: string;
    type: "button" | "submit" | "reset";
    color: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark" | "white" | "black" | "transparent" | "transparent-white" | "transparent-black" | "transparent-primary" | "transparent-secondary" | "transparent-danger" | "transparent-success" | "transparent-warning" | "transparent-info";
}>();
</script>
<template>
    <button
        :class="[
            'w-full py-2 rounded-md transition-all duration-300 ease-in-out text-sm font-medium text-center focus:outline-none',
            color === 'primary' ? 'bg-primary text-primary-text hover:bg-primary-hover' : '',
            color === 'secondary' ? 'bg-secondary text-secondary-text hover:bg-secondary-hover' : '',
            color === 'danger' ? 'bg-danger text-danger-text hover:bg-danger-hover' : '',
            color === 'success' ? 'bg-success text-success-text hover:bg-success-hover' : '',
        ]"
        class=""
    >
        {{ text }}
    </button>
</template>
