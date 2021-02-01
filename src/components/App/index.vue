<template>
    <div class="container d-flex align-items-start mb-5" :class="{'flex-row': (filterable && !vertical), 'flex-column': filterable && (vertical || isSmallScreen)}" id="app-div">
        <dept-menu v-if="filterable" />
        <div class="d-flex flex-column result-box" :class="{vertical: isVertical || isSmallScreen}">
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