<template>
    <div class="hawk-facet-rail__facet-values">
        <div class="hawk-facet-rail__facet-values-link">
            <div class="hawk-open-range">
                <input type="text" class="hawk-text-input value-start" v-model="minValue" @change="onChange" />
                <input type="text" class="hawk-text-input value-end" v-model="maxValue" @change="onChange" />
            </div>
        </div>
    </div>
</template>

<script lang="js">

    export default {
        name: 'open-range',
        props: ['facetData'],
        mounted() {

        },
        data() {
            return {
                minValue: undefined,
                maxValue: undefined
            }
        },
        methods: {
            onChange: function () {
                if (this.minValue || this.maxValue) {
                    this.facetData.Value = (this.minValue || '') + ',' + (this.maxValue || '');
                    this.$root.dispatchToStore('applyFacets', this.facetData);
                }
                else {
                    var field = this.facetData.ParamName ? this.facetData.ParamName : this.facetData.Field;
                    this.$root.dispatchToStore('clearFacet', field);
                }
            }
        },
        computed: {

        }
    }


</script>

<style scoped lang="scss">
</style>
