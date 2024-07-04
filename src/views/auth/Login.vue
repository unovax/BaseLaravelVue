<script lang="ts" setup>
import Guest from "@/layouts/Guest.vue";
import { ref } from "vue";
import TextInput from "@/components/forms/TextInput.vue";
import PasswordInput from "@/components/forms/PasswordInput.vue";
import { UserIcon } from "@heroicons/vue/24/outline";
import SolidButton from "@/components/buttons/SolidButton.vue";
import { User, defaultUser, UserErrors, defaultUserErrors } from "@/types/User";
import axiosClient from "@/axios";
import { useAuth } from "@/store/useAuth";
import router from "@/router";

const user = ref<User>(defaultUser);

const errors = ref<UserErrors>(defaultUserErrors);

const login = () => {
    axiosClient.post("login", user.value).then((response) => {
        useAuth().setUser(response.data.user);
        router.push({ name: "Dashboard" });
    }).catch((error) => {
        console.log(error);
        errors.value = error.response.data.errors;
    });
};

</script>
<template>
    <Guest>
        <form
            v-on:submit.prevent="login"
            class="w-full rounded-md overflow-hidden shadow-xl bg-secondary bg-opacity-70 max-w-[600px]"
        >
            <h1 class="p-2 text-lg font-bold bg-primary-hover text-primary-text">
                Iniciar sesión
            </h1>
            <section class="grid gap-2 p-2">
                <TextInput
                    :left-icon="UserIcon"
                    label="Correo electronico"
                    placeholder="Ingresa tu correo electronico"
                    type="email"
                    v-model="user.email"
                    :errors="errors.email"
                />
                <PasswordInput
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    v-model="user.password"
                    :errors="errors.password"
                />
                <SolidButton
                    type="submit"
                    color="success"
                    text="Iniciar sesión"
                />
            </section>
        </form>
    </Guest>
</template>
