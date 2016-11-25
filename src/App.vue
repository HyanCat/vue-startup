<template>
    <div id="app">
        <h1>Hello.</h1>

        <transition name="fade" mode="out-in">
            <router-view class="page"></router-view>
        </transition>

    </div>
</template>

<style>
    
</style>