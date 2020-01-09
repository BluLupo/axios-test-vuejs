new Vue({
    el: "#app",
    data() {
        return {
            word: []
        }
    },
    mounted: function() {
        axios
            .get('https://antares.hersel.it/api.php')
            .then(response => {
                this.word = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})
