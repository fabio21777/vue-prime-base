<script setup lang="ts">
// Section to add the structural "Navigating the digital landscape for success" style headers
// In Positivus, sections often have a title block: The Title has a Lime Green background, next to a paragraph of text.
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Section Header (Positivus Style) -->
    <div class="flex flex-col md:flex-row items-baseline md:items-center gap-8 mb-16" v-motion-fade-visible-once>
      <h2 class="text-4xl md:text-5xl font-bold bg-lime px-4 py-2 rounded-[14px] border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] inline-block">
        Sobre Mim
      </h2>
      <p class="text-xl text-dark font-medium max-w-2xl leading-relaxed">
        Sou um arquiteto de software viciado em acessibilidade, UX fluída e sistemas escaláveis. Descubra minha jornada completa.
      </p>
    </div>

    <!-- Brutalist Card for About Content -->
    <div class="bg-dark text-white rounded-[45px] p-8 md:p-14 border-2 border-dark shadow-[8px_8px_0px_0px_rgba(185,255,102,1)] relative overflow-hidden group" v-motion-slide-visible-once-bottom>

      <!-- Decorative giant icon in background -->
      <i class="pi pi-warehouse absolute -right-10 -bottom-10 text-[250px] text-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></i>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div class="space-y-6">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-lime text-dark rounded-full border-2 border-dark mb-4">
            <span class="text-3xl font-bold">01</span>
          </div>
          <h3 class="text-3xl font-bold text-lime">O Início Pythoniano</h3>
          <p class="text-lg text-gray-light/90 leading-relaxed font-medium">
            Entrei no mundo corporativo em 2021 desenvolvendo aplicações em Python Django, absorvendo as raízes de pipelines, TDD e arquitetura MVC fortemente tipada.
          </p>
        </div>

        <div class="space-y-6">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-lime text-dark rounded-full border-2 border-dark mb-4">
            <span class="text-3xl font-bold">02</span>
          </div>
          <h3 class="text-3xl font-bold text-lime">Especialista Fullstack</h3>
          <p class="text-lg text-gray-light/90 leading-relaxed font-medium">
            Hoje resido no ecossistema de APIs em Java (Spring Boot / OAuth2 / Docker) e trago o design à vida no Frontend dominando extensamente Vue 3 e React. Padrinhos da escalabilidade.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
