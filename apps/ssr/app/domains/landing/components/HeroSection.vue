<script setup lang="ts">
// Interactivity or Motion if required
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Text Column -->
      <ClientOnly>
        <div class="space-y-8" v-motion-slide-visible-once-left>
          <h1 class="text-5xl lg:text-7xl font-bold leading-tight text-dark">
            Olá, Meu Nome é <br/>
            <span class="inline-block relative mt-2">
              <span class="relative z-10 px-2 leading-snug">Fabricio De Souza</span>
              <span class="absolute bottom-1 left-0 w-full h-8 bg-lime -z-10 rounded-sm"></span>
            </span>
          </h1>
          <p class="text-2xl text-dark font-medium leading-relaxed max-w-xl">
            Sou um desenvolvedor Fullstack com experiência em Vue.js, Java e tecnologias modernas.
            Trabalho com dedicação total nos seus projetos do início ao fim.
          </p>
          <div class="pt-4 flex flex-col sm:flex-row gap-4">
            <Button
              label="Entrar em contato"
              class="bg-dark text-white border-2 border-dark rounded-[14px] px-8 py-4 text-xl font-medium hover:bg-lime hover:text-dark transition-all duration-300 shadow-[0px_4px_0px_0px_rgba(25,26,35,1)] hover:shadow-none hover:translate-y-1"
            />
            <Button
              label="Baixar CV"
              class="bg-white text-dark border-2 border-dark rounded-[14px] px-8 py-4 text-xl font-medium hover:bg-gray-light transition-all duration-300 shadow-[0px_4px_0px_0px_rgba(25,26,35,1)] hover:shadow-none hover:translate-y-1"
            />
          </div>
        </div>
      </ClientOnly>

      <!-- Image/Illustration Column -->
      <ClientOnly>
        <div class="relative flex justify-center lg:justify-end" v-motion-slide-visible-once-right>
          <div class="w-full max-w-md aspect-[4/5] bg-gray-light border-[3px] border-dark rounded-[45px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] relative group">
             <img
                src="https://portfolio.fsm21777.com/assets/fcfcorte-B0G9h7K4.jpeg"
                alt="Fabricio Profile"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                onerror="this.style.display='none'"
              />
             <!-- Fallback text inside the placeholder if image is blocked by CORS/Unavailable -->
             <div class="absolute inset-0 flex flex-col items-center justify-center text-dark/30 -z-10 bg-gray-light">
                <i class="pi pi-user text-8xl mb-4"></i>
                <span class="font-bold text-xl">Foto de Perfil</span>
             </div>
          </div>

          <!-- Decoration Element -->
          <div class="absolute -top-8 -right-8 w-28 h-28 bg-lime border-[3px] border-dark rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] animate-pulse-slow">
             <i class="pi pi-code text-5xl text-dark"></i>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse-slow {
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(10deg); }
}
</style>
