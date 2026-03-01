<script setup lang="ts">
import { ref } from 'vue';

const processes = ref([
  {
    num: '01',
    title: 'Levantamento de Requisitos',
    desc: 'Entendemos profundamente a sua necessidade de negócio, definindo escopo técnico, arquitetura inicial e objetivos claros para o produto.',
    active: true
  },
  {
    num: '02',
    title: 'Planejamento e Design de Sistema',
    desc: 'Modelagem do banco de dados, definição de APIs e arquitetura de componentes (Vue 3, Spring Boot) para garantir escalabilidade.',
    active: false
  },
  {
    num: '03',
    title: 'Desenvolvimento Ágil',
    desc: 'Escrita de código limpo seguindo as melhores práticas, com commits organizados e entregas incrementais por sprint.',
    active: false
  },
  {
    num: '04',
    title: 'Testes de Qualidade (QA)',
    desc: 'Aplicação de testes unitários e de integração para assegurar que cada funcionalidade opere perfeitamente antes do deploy.',
    active: false
  },
  {
    num: '05',
    title: 'Lançamento e Deploy',
    desc: 'Configuração de ambiente produtivo (AWS, Docker) e automação de CI/CD para um lançamento seguro e monitorado.',
    active: false
  },
  {
    num: '06',
    title: 'Suporte e Melhoria Contínua',
    desc: 'Acompanhamento pós-lançamento para otimizações de performance e implementação de novas funcionalidades solicitadas.',
    active: false
  }
]);

const toggleProcess = (index: number) => {
  processes.value[index].active = !processes.value[index].active;
};
</script>

<template>
  <section id="process" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Section Header Block -->
    <div class="flex flex-col md:flex-row items-baseline md:items-center gap-8 mb-16">
      <h2 class="text-4xl font-bold bg-lime px-4 py-1 rounded-[10px] inline-block text-center md:text-left">
        Our Working Process
      </h2>
      <p class="text-lg text-dark max-w-2xl font-medium">
        Step-by-Step Guide to Achieving Your Business Goals
      </p>
    </div>

    <!-- Accordion List -->
    <div class="space-y-6">
      <div
        v-for="(proc, index) in processes"
        :key="index"
        :class="[
          'rounded-[45px] border-[3px] border-dark shadow-[4px_6px_0px_0px_rgba(25,26,35,1)] transition-colors duration-300 overflow-hidden',
          proc.active ? 'bg-lime' : 'bg-gray-light hover:bg-white'
        ]"
      >
        <!-- Accordion Header -->
        <button
          @click="toggleProcess(index)"
          class="w-full flex items-center justify-between p-8 md:px-14 md:py-10 text-left focus:outline-none"
        >
          <div class="flex items-center gap-6">
            <span class="text-4xl md:text-5xl font-bold">{{ proc.num }}</span>
            <span class="text-2xl md:text-3xl font-bold">{{ proc.title }}</span>
          </div>
          <div class="w-12 h-12 rounded-full border-[3px] border-dark bg-white flex items-center justify-center shrink-0">
            <i :class="['pi text-xl font-bold transition-transform duration-300 transform', proc.active ? 'pi-minus' : 'pi-plus']"></i>
          </div>
        </button>

        <!-- Accordion Content -->
        <div v-show="proc.active" class="px-8 md:px-14 pb-10">
          <div class="border-t-[3px] border-dark mb-6"></div>
          <p class="text-xl font-medium text-dark/90 leading-relaxed max-w-4xl">
            {{ proc.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
