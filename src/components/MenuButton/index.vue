<template>
    <div :class="{'sub-item': isVertical && !forceTop}" @click="activate">
        <button v-if="!isVertical" type="button" class="btn btn-primary btn-sm" :class="classObj">
            <router-link :to="routerTo" v-html="label" />
        </button>
        <router-link v-else class="dropdown-item" :class="{active: isActiveItem}" :to="routerTo" v-html="label" />
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>