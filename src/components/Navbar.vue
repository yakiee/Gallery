<script setup lang="ts">
import { ref } from 'vue'
import { Heart28Filled, MoreVertical28Filled } from '@vicons/fluent'

const isCollapse = ref(false)
const scrollPosition = ref(true)
const mobileNav = ref(false)

window.addEventListener('resize', () => {
    if (window.innerWidth <= 750) {
        isCollapse.value = true
    } else {
        isCollapse.value = false
        mobileNav.value = false
    }
})

const toggleCollapseNav = () => {
    mobileNav.value = !mobileNav.value
}

</script>

<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav>
            <div class="logo">
                <a class="heart" href="/">
                    <n-icon color="#F0ECFF" size="30" :component="Heart28Filled" />
                </a>
            </div>
            <ul v-show="!isCollapse" class="navigation">
                <li>
                    <router-link class="link" to="{ name: 'Home' }">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="{ name: 'Library' }">Library</router-link>
                </li>
                <li>
                    <router-link class="link" to="{ name: 'Friends' }">Friends</router-link>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleCollapseNav" v-show="isCollapse" class="dots" :class="{ 'icon-active': mobileNav }">
                    <n-icon size="40" color="#F0ECFF" transition=".5 ease all" :component="MoreVertical28Filled" />
                </i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <router-link class="link" to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="{ name: 'Home' }">Library</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="{ name: 'Home' }">Friends</router-link>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: var(--navbar-bg-color);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    -moz-transition: .5s ease all;
    /* Firefox 4 */
    -webkit-transition: .5s ease all;
    /* Safari and Chrome */
    -o-transition: .5s ease all;
    /* Opera */
    -ms-transition: .5s ease all;
    color: white;

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 9px 0;
        transition: .5s ease all;
        -moz-transition: .5s ease all;
        /* Firefox 4 */
        -webkit-transition: .5s ease all;
        /* Safari and Chrome */
        -o-transition: .5s ease all;
        /* Opera */
        -ms-transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
        flex-wrap: nowrap;

        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: white;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: .5s ease all;
            -moz-transition: .5s ease all;
            /* Firefox 4 */
            -webkit-transition: .5s ease all;
            /* Safari and Chrome */
            -o-transition: .5s ease all;
            /* Opera */
            -ms-transition: .5s ease all;
            padding-bottom: 14px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: var(--text-hover-color);
                border-color: var(--text-hover-color);
            }
        }

        .logo {
            display: flex;
            align-items: center;

            a {
                display: flex;
            }

            img {
                width: 20px;
                transition: .5s ease all;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: .8s ease all;
                -moz-transition: .8s ease all;
                /* Firefox 4 */
                -webkit-transition: .8s ease all;
                /* Safari and Chrome */
                -o-transition: .8s ease all;
                /* Opera */
                -ms-transition: .8s ease all;
                display: flex;
            }
        }

        .icon-active {
            transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            /* Firefox 4 */
            -webkit-transform: rotate(180deg);
            /* Safari and Chrome */
            -o-transform: rotate(180deg);
            /* Opera */
            -ms-transform: rotate(180deg);
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: white;
            top: 0;
            left: 0;

            li {
                margin-left: 0;

                .link {
                    color: var(--text-hover-color);
                }
            }
        }
    }
}
</style>