<template>
  <footer class="mt-20">
    <ClientOnly>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Positivus CTA Banner style -->
        <div class="bg-lime rounded-[45px] p-10 md:p-16 border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] relative overflow-hidden mb-16 flex flex-col md:flex-row items-center justify-between" v-motion-fade-visible-once>
          <div class="max-w-xl z-10">
            <h2 class="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">Vamos fazer as coisas acontecerem</h2>
            <p class="text-xl text-dark font-medium mb-8">
              Pronto para transformar sua ideia em um produto de alta performance?
            </p>
            <Button label="Entrar em contato comigo" class="bg-dark text-white border-2 border-dark rounded-[14px] px-8 py-4 text-xl font-medium hover:bg-white hover:text-dark transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] hover:shadow-none hover:translate-y-1" />
          </div>
          <div class="relative z-0 hidden md:block mt-8 md:mt-0">
            <i class="pi pi-compass text-[220px] text-dark/10 animate-spin-slow"></i>
          </div>
        </div>

        <!-- Main Footer Dark Box -->
        <div class="bg-dark text-white rounded-t-[45px] p-10 md:p-16 border-[3px] border-b-0 border-dark shadow-[6px_-6px_0px_0px_rgba(185,255,102,1)]" v-motion-slide-visible-once-bottom>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div>
              <h3 class="text-2xl font-bold bg-lime text-dark inline-block px-4 py-1 rounded-[10px] mb-8 border-2 border-dark">Contato</h3>
              <div class="space-y-4 font-medium text-lg text-white/90">
                <p>Email: fabiosouza21777@gmail.com</p>
                <p>Localização: Belém - PA</p>
              </div>
              <div class="flex gap-4 mt-8">
                <a href="#" class="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center hover:bg-lime border-2 border-dark transition-colors">
                  <i class="pi pi-linkedin text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center hover:bg-lime border-2 border-dark transition-colors">
                  <i class="pi pi-github text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center hover:bg-lime border-2 border-dark transition-colors">
                  <i class="pi pi-envelope text-xl"></i>
                </a>
              </div>
            </div>

            <!-- Copyright / Subscribe -->
            <div class="flex flex-col justify-between">
              <div class="bg-white/5 p-8 rounded-[30px] border border-white/20 hidden md:block">
                 <h4 class="text-xl font-bold mb-4">Inscreva-se para novidades</h4>
                 <div class="flex gap-4">
                   <input type="email" placeholder="Email" class="w-full bg-transparent border-2 border-white rounded-[14px] px-4 py-3 text-white placeholder-white/50 focus:border-lime focus:outline-none transition-colors font-medium" />
                   <Button label="Assinar" class="bg-lime text-dark border-2 border-lime rounded-[14px] px-6 font-bold hover:bg-white hover:border-white transition-colors" />
                 </div>
              </div>

              <div class="mt-12 md:mt-0 text-white/50 font-medium border-t border-white/20 pt-8">
                <p>&copy; 2026 Fabio De Souza Miranda. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </footer>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
