<script setup lang="ts">
// All Landing Page logic is encapsulated here
</script>

<template>
  <div class="bg-white min-h-screen font-sans selection:bg-lime selection:text-dark">
    <!-- Navbar -->
    <header class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
      <div class="flex items-center gap-2">
         <i class="pi pi-asterisk text-3xl font-bold"></i>
         <span class="text-3xl font-bold tracking-tighter">Positivus<span class="text-lime">.</span></span>
      </div>
      <nav class="hidden md:flex items-center gap-8 font-medium">
         <a href="#services" class="hover:underline">Services</a>
         <a href="#cases" class="hover:underline">Use Cases</a>
         <a href="#process" class="hover:underline">Process</a>
      </nav>
      <Button label="Request a quote" class="bg-white text-dark border-2 border-dark rounded-[14px] px-6 py-3 font-medium hover:bg-lime transition-colors hidden sm:block" />
    </header>

    <main>
      <LandingHeroSection />
      <LandingLogoMarquee />
      <LandingServicesSection />
      <LandingCtaBanner />
      <LandingCaseStudies />
      <LandingWorkingProcess />
      <LandingPortfolioSection />
      <LandingFooterSection />
    </main>
  </div>
</template>
