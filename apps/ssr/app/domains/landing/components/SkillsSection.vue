<script setup lang="ts">
const skills = [
  {
    category: 'Especialista Frontend',
    techs: 'Vue 3 • Angular 12+ • React • PrimeVue • Pinia • Tailwind',
    bgColor: 'bg-gray-light',
    titleBg: 'bg-lime',
    textColor: 'text-dark',
    icon: 'pi-desktop'
  },
  {
    category: 'Engenharia Backend',
    techs: 'Java & Spring Boot • Python & Django • APIs RESTful • JWT/OAuth2',
    bgColor: 'bg-lime',
    titleBg: 'bg-white',
    textColor: 'text-dark',
    icon: 'pi-server'
  },
  {
    category: 'Arquitetura & DevOps',
    techs: 'AWS Cloud (EC2, S3, RDS) • Docker • CI/CD • Redis • Banco de Dados',
    bgColor: 'bg-dark',
    titleBg: 'bg-lime',
    textColor: 'text-white',
    icon: 'pi-cloud'
  }
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="flex flex-col md:flex-row items-baseline md:items-center gap-8 mb-16" v-motion-fade-visible-once>
      <h2 class="text-4xl md:text-5xl font-bold bg-lime px-4 py-2 rounded-[14px] border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] inline-block">
        Habilidades
      </h2>
      <p class="text-xl text-dark font-medium max-w-2xl leading-relaxed">
        Stack tecnológica de ponta a ponta focada em aplicações robustas.
      </p>
    </div>

    <!-- Positivus style grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :class="[
          skill.bgColor,
          skill.textColor,
          'rounded-[45px] p-12 border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300',
          index === 2 ? 'md:col-span-2' : '' // make third item full width
        ]"
        v-motion-slide-visible-once-bottom
      >
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div class="space-y-6">
            <span :class="['inline-block px-4 py-2 rounded-[14px] font-bold text-2xl border-2 border-dark text-dark', skill.titleBg]">
              {{ skill.category }}
            </span>
            <p class="text-xl font-medium max-w-sm leading-relaxed">
              {{ skill.techs }}
            </p>
            <div class="flex items-center gap-3 pt-4 group-hover:translate-x-2 transition-transform">
               <div :class="['w-12 h-12 rounded-full border-2 border-dark flex items-center justify-center shrink-0', skill.bgColor === 'bg-dark' ? 'bg-white text-dark' : 'bg-dark text-lime']">
                 <i class="pi pi-arrow-up-right text-xl font-bold"></i>
               </div>
               <span class="text-lg font-bold underline decoration-2 underline-offset-4 hidden sm:inline-block">Conheça as stacks</span>
            </div>
          </div>

          <div class="hidden sm:flex items-center justify-center relative w-40 h-40">
            <!-- Decorative outline circle -->
            <div class="absolute inset-0 border-[3px] border-dashed border-dark/20 rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out"></div>
            <i :class="['pi', skill.icon, 'text-[80px]', skill.bgColor === 'bg-dark' ? 'text-lime' : 'text-dark']"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
