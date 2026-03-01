<script setup lang="ts">
const services = [
  {
    title1: 'Frontend',
    title2: 'Development',
    bgColor: 'bg-gray-light',
    titleBg: 'bg-lime',
    textColor: 'text-dark',
    iconColor: 'bg-dark text-lime',
    imgIcon: 'pi-desktop'
  },
  {
    title1: 'Backend',
    title2: 'Architecture',
    bgColor: 'bg-lime',
    titleBg: 'bg-white',
    textColor: 'text-dark',
    iconColor: 'bg-dark text-lime',
    imgIcon: 'pi-database'
  },
  {
    title1: 'Fullstack',
    title2: 'Solutions',
    bgColor: 'bg-dark',
    titleBg: 'bg-white',
    textColor: 'text-white',
    iconColor: 'bg-white text-dark',
    imgIcon: 'pi-clone'
  },
  {
    title1: 'Cloud &',
    title2: 'DevOps',
    bgColor: 'bg-gray-light',
    titleBg: 'bg-lime',
    textColor: 'text-dark',
    iconColor: 'bg-dark text-lime',
    imgIcon: 'pi-cloud'
  },
  {
    title1: 'UI/UX',
    title2: 'Design',
    bgColor: 'bg-lime',
    titleBg: 'bg-white',
    textColor: 'text-dark',
    iconColor: 'bg-dark text-lime',
    imgIcon: 'pi-palette'
  },
  {
    title1: 'Code Audit &',
    title2: 'Optimization',
    bgColor: 'bg-dark',
    titleBg: 'bg-lime',
    textColor: 'text-white',
    iconColor: 'bg-white text-dark',
    imgIcon: 'pi-chart-bar'
  }
];
</script>

<template>
  <section id="services" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Section Header Block -->
    <div class="flex flex-col md:flex-row items-baseline md:items-center gap-8 mb-16">
      <h2 class="text-4xl font-bold bg-lime px-4 py-1 rounded-[10px] inline-block">
        Services
      </h2>
      <p class="text-lg text-dark max-w-2xl font-medium">
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
      </p>
    </div>

    <!-- Positivus Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(svc, index) in services"
        :key="index"
        :class="[
          svc.bgColor,
          'rounded-[45px] p-12 border-[3px] border-dark shadow-[4px_6px_0px_0px_rgba(25,26,35,1)] relative flex justify-between group overflow-hidden'
        ]"
      >
        <div class="flex flex-col justify-between h-full relative z-10 w-full md:w-1/2">
          <!-- Highlighted Title Block -->
          <h3 class="flex flex-col items-start gap-1">
            <span :class="['inline-block px-2 text-2xl font-bold rounded-md', svc.titleBg, 'text-dark']">
              {{ svc.title1 }}
            </span>
            <span :class="['inline-block px-2 text-2xl font-bold rounded-md', svc.titleBg, 'text-dark']">
              {{ svc.title2 }}
            </span>
          </h3>

          <!-- Learn More Link -->
          <div class="flex items-center gap-3 mt-16 group-hover:translate-x-2 transition-transform cursor-pointer">
             <div :class="['w-10 h-10 rounded-full flex items-center justify-center shrink-0', svc.iconColor]">
               <i class="pi pi-arrow-up-right font-bold"></i>
             </div>
             <span :class="['text-xl font-medium hidden sm:block', svc.textColor]">Learn more</span>
          </div>
        </div>

        <!-- Illustration Side -->
        <div class="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-40 h-40">
           <i :class="['pi', svc.imgIcon, 'text-[120px]', svc.textColor === 'text-white' ? 'text-white' : 'text-dark']"></i>
        </div>
      </div>
    </div>
  </section>
</template>
