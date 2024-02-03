<script setup></script>

<template>
    <main class="flex flex-col w-[380px] container">
        <img class="rounded-t-xl mt-15" src="./assets/image-product-mobile.jpg" alt="mobile">
        <section class="col-span-1 row-span-2 flex flex-col bg-white rounded-b-xl px-10 py-5">
            <h2 class="font-montserrat uppercase mb-4 tracking-widest text-v-d-blue opacity-[60%] mt-3">Perfume</h2>
            <h1 class="font-fraunces text-[40px] leading-8 mb-5 text-v-d-blue">Gabrielle Essence Eau De Parfum</h1>
            <p class="font-montserrat text-[14px] mb-5 opacity-[60%] text-v-d-blue">A floral, solar and voluptuous
                interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.</p>
            <div class="flex items-center mb-5">
                <p class="font-fraunces text-[40px] text-d-cyan mr-5">$149.99</p>
                <p class="line-through font-[14px] opacity-[50%] text-v-d-blue">$169.99</p>
            </div>
            <a href="#">
                <div class="flex justify-center items-center bg-d-cyan rounded-lg py-3 hover:bg-d-d-cyan">
                    <img class="me-2" src="./assets/icon-cart.svg" alt="cart">
                    <p class="text-white font-bold font-montserrat text-[14px]">Add to Cart</p>
                </div>
            </a>
        </section>
    </main>
</template>

<style scoped></style>
