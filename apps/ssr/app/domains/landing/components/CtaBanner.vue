<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="bg-gray-light rounded-[45px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
      <div class="max-w-xl z-10">
        <h2 class="text-3xl font-bold text-dark mb-6">Let's make things happen</h2>
        <p class="text-lg text-dark/80 font-medium mb-8">
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>
        <Button label="Get your free proposal" class="bg-dark text-white border-2 border-dark rounded-[14px] px-8 py-4 font-bold hover:bg-lime hover:text-dark transition-all duration-300" />
      </div>

      <!-- Positivus Abstract Illustration Placeholder -->
      <div class="hidden md:flex relative z-0 items-center justify-center w-64 h-64">
        <!-- Abstract Shapes -->
        <div class="absolute inset-0 border-[3px] border-dark rounded-full animate-spin-slow"></div>
        <div class="absolute w-32 h-32 bg-lime rotate-12 -z-10 rounded-[20px] shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]"></div>
        <i class="pi pi-star-fill text-[80px] text-dark shadow-sm"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 30s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
