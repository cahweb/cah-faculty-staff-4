<template>
    <div class="faculty-img">
        <img :src="`https://cah.ucf.edu/common/resize.php?filename=${filename}&sz=${size}${imgExtra}`" :class="classObj" :alt="imgName" :title="fullname">
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>