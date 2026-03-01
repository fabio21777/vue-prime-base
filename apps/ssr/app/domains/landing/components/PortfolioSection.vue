<script setup lang="ts">
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Bioinformática Yellow Fever',
    desc: 'Plataforma web avançada para análise genômica com visualização de dados jBrowse e Blast, permitindo pesquisadores estudarem o genoma.',
    color: 'bg-dark text-white'
  },
  {
    title: 'Semana Spring React (SDS)',
    desc: 'Aplicação Fullstack construída de ponta a ponta utilizando as bases sólidas e corporativas de React no frontend e Java no backend.',
    color: 'bg-lime text-dark'
  },
  {
    title: 'Fribel Comércio de Logística',
    desc: 'Sistema de controle e gerenciamento logístico focado em Cargas e Descargas, robustez arquitetada sobre o framework Python Django.',
    color: 'bg-gray-light text-dark'
  },
  {
    title: 'Alura Pic',
    desc: 'Aplicação single page completa para postagens de fotos utilizando integrações de upload complexas pelo ecossistema do Angular.',
    color: 'bg-dark text-white'
  }
]);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <ClientOnly>
      <div class="flex flex-col md:flex-row items-baseline md:items-center gap-8 mb-16" v-motion-fade-visible-once>
        <h2 class="text-4xl md:text-5xl font-bold bg-lime px-4 py-2 rounded-[14px] border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] inline-block">
          Projetos Recentes
        </h2>
        <p class="text-xl text-dark font-medium max-w-2xl leading-relaxed">
          Conheça alguns dos meus cases de estudo e arquiteturas em produção, focados em escalabilidade e UX.
        </p>
      </div>

      <div class="border-[3px] border-dark rounded-[45px] overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(25,26,35,1)]" v-motion-slide-visible-once-bottom>
        <Carousel :value="projects" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="4000" class="p-4 py-8 custom-carousel">
          <template #item="slotProps">
            <div :class="['m-3 p-10 h-full flex flex-col justify-between border-2 border-dark rounded-[30px]', slotProps.data.color]">
              <div>
                <h3 class="text-3xl font-bold mb-6 underline decoration-2 underline-offset-8">
                  {{ slotProps.data.title }}
                </h3>
                <p class="text-xl font-medium leading-relaxed opacity-90 mb-10">
                  {{ slotProps.data.desc }}
                 </p>
              </div>

              <div class="mt-auto">
                 <a href="#" class="inline-flex items-center gap-3 font-bold text-xl hover:opacity-75 transition-opacity">
                   Ver Repositório
                   <i class="pi pi-github text-3xl"></i>
                 </a>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </ClientOnly>
  </section>
</template>

<style>
/* Override PrimeVue Carousel paginator pills to look brutalist */
.custom-carousel .p-carousel-indicator button {
  border-radius: 50% !important;
  width: 14px !important;
  height: 14px !important;
  border: 2px solid #191A23 !important;
  background-color: transparent !important;
  margin: 0 4px !important;
}
.custom-carousel .p-carousel-indicator.p-highlight button {
  background-color: #B9FF66 !important;
}
.custom-carousel .p-carousel-prev,
.custom-carousel .p-carousel-next {
  border: 2px solid #191A23 !important;
  border-radius: 50% !important;
  background: white !important;
  color: #191A23 !important;
}
.custom-carousel .p-carousel-prev:hover,
.custom-carousel .p-carousel-next:hover {
  background: #B9FF66 !important;
}
</style>
