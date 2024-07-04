<script setup lang="ts">
import { EyeSlashIcon, EyeIcon, LockClosedIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

defineProps<{
    label: string;
    placeholder: string;
    modelValue: string;
    errors?: string[] | null | undefined;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
        emit("update:modelValue", target.value);
    }
};

const type = ref('password');

const showPassword = () => {
    type.value = type.value === "password" ? "text" : "password";
};

</script>
<template>
    <div class="w-full space-y-1">
        <label for="" class="block text-sm text-light">{{ label }}</label>
        <section class="relative flex items-center w-full">
            <LockClosedIcon
                class="absolute left-0 m-2 size-5 text-input-text"
            />
            <input
                :placeholder="placeholder"
                :type="type"
                :value="modelValue"
                @input="handleInput"
                class="w-full px-10 py-2 rounded-md bg-input text-input-text placeholder:text-light-hover"
            />
            <EyeSlashIcon
                @click="showPassword"
                class="absolute right-0 m-2 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 size-5 text-input-text"
                v-if="type == 'password'"
            />
            <EyeIcon
                @click="showPassword"
                class="absolute right-0 m-2 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 size-5 text-input-text"
                v-else
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
