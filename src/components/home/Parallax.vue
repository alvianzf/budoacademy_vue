<template>
    <v-parallax src="https://www.freegreatpicture.com/files/146/22764-colorful-high-resolution-background.jpg" height="600">
    <v-container fluid>
        <v-layout row wrap>
            <v-flex lg9>
                <v-card color="rgb(255,255,255, 0.3)" height="535">
                    

                </v-card>
            </v-flex>
            <v-flex lg3>
                <v-card color="rgb(255,255,255,0.5)">
                    <v-card-title>
                        Form pendaftaran
                    </v-card-title>
                    <Form />
                    <v-card-text>

                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </v-parallax>
</template>

<script>

import Form from '../register/Form.vue'

export default {
    components: {
        Form,
    }

}
</script>

<style scoped>

</style>
