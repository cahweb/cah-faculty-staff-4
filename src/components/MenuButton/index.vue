<template>
    <div class="button-wrapper dropdown-item" :class="{'sub-item': !isVertical && !forceTop, 'sub-item-dropdown': (isVertical || isSmallScreen) && !forceTop}" @click.prevent="activate">
        <button v-if="!isVertical && !isSmallScreen" type="button" class="btn btn-primary btn-sm" :class="classObj">
            <router-link :to="routerTo" v-html="label" />
        </button>
        <router-link v-else class="text-secondary" :class="{active: isActiveItem}" :to="routerTo" v-html="label" />
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>