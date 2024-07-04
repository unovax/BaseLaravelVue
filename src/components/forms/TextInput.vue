<script setup lang="ts">
defineProps<{
    label: string;
    placeholder: string;
    type: string;
    modelValue: string;
    errors?: string[] | null | undefined;
    leftIcon?: any;
    rightIcon?: any;
    rightAction?: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
        emit("update:modelValue", target.value);
    }
};
</script>
<template>
    <div class="w-full space-y-1">
        <label for="" class="block text-sm text-light">{{ label }}</label>
        <section class="relative flex items-center w-full">
            <component
                class="absolute left-0 m-2 size-5 text-input-text"
                :is="leftIcon"
                v-if="leftIcon"
            />
            <input
                :class="[
                    leftIcon ? 'pl-8' : 'pl-2',
                    rightIcon ? 'pr-8' : 'pr-2',
                ]"
                :placeholder="placeholder"
                :type="type"
                :value="modelValue"
                @input="handleInput"
                class="w-full py-2 rounded-md bg-input text-input-text placeholder:text-light-hover"
            />
            <component
                @click="rightAction"
                :class="[rightIcon ? 'cursor-pointer hover:scale-110' : '']"
                class="absolute right-0 m-2 transition-transform duration-300 ease-in-out size-5 text-input-text"
                :is="rightIcon"
                v-if="rightIcon"
            />
        </section>
        <section v-if="errors">
            <span
                v-for="error in errors"
                :key="error"
                class="text-xs font-medium text-danger-hover"
                >{{ error }}</span
            >
        </section>
    </div>
</template>
