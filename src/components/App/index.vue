<template>
    <div class="container d-flex align-items-start mb-5" :class="{'flex-row': (filterable && !vertical), 'flex-column': filterable && (vertical || isSmallScreen)}" id="app-div">
        <dept-menu v-if="filterable" />
        <div class="d-flex flex-column result-box" :class="{vertical: isVertical || isSmallScreen, 'w-100': !filterable || isVertical}">
            <div v-if="tieredAtStart" class="format-select mb-2 align-self-center btn-group">
                <button type="button" class="btn btn-default format-button" :class="{active: format == 'picture'}" id="picture-format-button" @click.prevent="changeFormat('picture')">
                    <img :src="`${imgUri}/address-card-solid.svg`" aria-hidden="true">
                </button>
                <button type="button" class="btn btn-default format-button" :class="{active: format == 'a-z'}" id="a-z-format-button" @click.prevent="changeFormat('a-z')">
                    <img :src="`${imgUri}/list-alt-solid.svg`" aria-hidden="true">
                </button>
            </div>
            <div class="back-button mb-2">
                <button type="button" class="btn btn-primary btn-sm" @click.prevent="goBack">&larr; Back</button>
            </div>
            <div class="router-view-container">
                <router-view v-if="isLoaded" />
                <div v-else :style="spinCssVars" class="spin" />
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>