<template>
    <div class="list-box" :class="{'vertical': isVertical || isSmallScreen}">
        <div v-if="!vertical && !isSmallScreen" class="btn-group-vertical" id="dept-nav-box" role="group" aria-label="Subdepartment Navigation">
            <menu-button label="A&ndash;Z List" :force-top="true" ref="azList" @buttonClick="changeDept(null)" />
            <template v-for="(dept, i) in displayList">
                <menu-button v-show="showSubdept(dept)" :key="i" goTo="SubDepartment" :goToParams="{id: dept.id}" :label="dept.name" :force-top="!multi_dept || dept.parent == 0" ref="subList" @buttonClick="changeDept(dept.id)" />
            </template>
        </div>
        <div v-else-if="!isApple" class="dropdown">
            <button class="btn btn-primary mb-4 dropdown-toggle" type="button" id="filterButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-html="selectedName" />
            <div class="dropdown-menu" aria-labelledby="filterButton">
                <menu-button label="A&ndash;Z List" :force-top="true" ref="azList" @buttonClick="changeDept(null)" />
                <template v-for="(dept, i) of displayList">
                    <menu-button v-show="showSubdept(dept)" :key="i" goTo="SubDepartment" :goToParams="{id: dept.id}" :label="dept.name" :force-top="!multi_dept || dept.parent == 0" ref="subList" @buttonClick="changeDept(dept.id)" />
                </template>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>