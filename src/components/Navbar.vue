<script setup lang="ts">
import { Heart } from '@vicons/fa'
import AnimMenu from './AnimMemu.vue'

let enterMenu = () => {
    console.log("enter")
}
</script>

<template>
    <div class="common-layout">
        <el-container id="root">
            <el-header class="navbar">
                <div class="container">
                    <div class="top-navigation-wrap">
                        <a class="heart" href="/">
                            <n-icon color="#F0ECFF" size="25" :component="Heart" />
                        </a>
                    </div>
                    <div class="top-navigation-main" >
                        <div class="main-nav" aria-label="Main menu" >
                            <AnimMenu></AnimMenu>
                        </div>
                    </div>
                </div>
            </el-header>
            <el-main class="content">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.common-layout {
    display: flex;
    margin: 0 auto;
}

.navbar {
    background-color: var(--navbar-bg-color);
    box-shadow: 0 1px 2px;
    height: 45px;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

.top-navigation-wrap,
.top-navigation-main {
    width: 50%;
}

.top-navigation-main {
    text-align: right;
    margin: 0 auto;
}

.n-icon {
    vertical-align: middle;
}
</style>