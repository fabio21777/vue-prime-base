<script setup lang="ts">
import { ref, computed } from 'vue';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';
import { useMouse, useWindowSize } from '@vueuse/core';
import AuthAPI from '~/domains/auth/api/auth';
import type LoginType from '~/domains/auth/auth';

// Interactive Background using VueUse
const { x, y } = useMouse();
const { width, height } = useWindowSize();

const gradientStyle = computed(() => {
  const xPos = Math.round((x.value / width.value) * 100) || 50;
  const yPos = Math.round((y.value / height.value) * 100) || 50;
  return {
    background: `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(255, 255, 255, 0.15) 0%, transparent 40%)`,
    opacity: 1
  }
});

// Definir o esquema de validação
const schema = object({
  username: string().required('O e-mail/usuário é obrigatório').email('Email inválido'),
  password: string().required('Senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

// Usar useForm para gerenciar o formulário
const { handleSubmit } = useForm({
  validationSchema: schema,
});

// Usar useField para gerenciar os campos
const { value: username, errorMessage: usernameError } = useField<string>('username');
const { value: password, errorMessage: passwordError } = useField<string>('password');
const checked = ref(false);

// Função para lidar com o envio do formulário
const onSubmit = handleSubmit((values) => {
  const loginData: LoginType = {
    username: values.username,
    password: values.password,
  };
  AuthAPI.login(loginData);
});
</script>

<template>
  <main class="vue-gradient-bg relative flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden transition-colors duration-500">
    <!-- Interactive Subtle Glow Layer -->
    <div class="absolute inset-0 pointer-events-none transition-all duration-500 ease-out z-0" :style="gradientStyle"></div>

    <div class="z-10 flex flex-col items-center justify-center w-full px-4 transform transition-all hover:scale-[1.01] duration-500">
      <div class="p-[1px] rounded-[56px] bg-gradient-to-b from-white/30 to-white/5 w-full max-w-lg shadow-2xl shadow-black/20">
        <div class="w-full bg-surface-0/95 dark:bg-surface-900/95 backdrop-blur-xl py-16 px-8 sm:px-14 rounded-[55px] border border-white/20 dark:border-surface-800 relative overflow-hidden">

          <div class="text-center mb-10 relative z-10">
            <h1 class="text-surface-900 dark:text-surface-0 text-5xl font-display font-bold mb-3 tracking-tight">
              Bem Vindo
            </h1>
            <span class="text-surface-600 dark:text-surface-400 font-medium text-lg">
              Faça login para continuar
            </span>
          </div>

          <form @submit="onSubmit" class="relative z-10 flex flex-col gap-6">
            <div>
              <label for="username1" class="block text-surface-900 dark:text-surface-0 text-lg font-medium mb-2">Email</label>
              <InputText id="username1" type="text" placeholder="seu@email.com" class="w-full text-lg rounded-2xl transition-all duration-300 p-4" v-model="username" />
              <span class="text-red-500 text-sm block mt-2 font-medium" v-if="usernameError">{{ usernameError }}</span>
            </div>

            <div>
              <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-lg mb-2">Senha</label>
              <Password
                inputId="password1"
                v-model="password"
                placeholder=""
                :toggleMask="true"
                class="w-full"
                inputClass="w-full text-lg rounded-2xl transition-all duration-300 p-4"
                promptLabel="Digite uma senha" weakLabel="Senha muito fraca, tente algo mais seguro" mediumLabel="Senha ok, mas pode ser melhor" strongLabel="Ótima senha!">
              </Password>
              <span class="text-red-500 text-sm block mt-2 font-medium" v-if="passwordError">{{ passwordError }}</span>
            </div>

            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center gap-3">
                <Checkbox v-model="checked" inputId="Remember" name="Remember" value="Lembra senha" :binary="true" />
                <label for="Remember" class="text-surface-700 dark:text-surface-200 cursor-pointer select-none"> Lembrar de mim </label>
              </div>
              <a class="font-medium no-underline text-primary hover:text-primary-emphasis transition-colors cursor-pointer">Esqueceu?</a>
            </div>

            <Button type="submit" label="Entrar" class="w-full p-4 mt-2 text-xl font-bold shadow-md rounded-2xl"></Button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.vue-gradient-bg {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
</style>
