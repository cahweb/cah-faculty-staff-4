export const getters = {
    spinCssVars: (state) => {
        return {
            'background-image': `url('${state.pluginDirURI}/img/cah-loading-icon.png')`,
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
        }
    },
    
    isVertical: (state) => {
        return state.filterable && state.vertical
    },
}