<template>
    <div>
        <v-footer dark height="100">
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex>
                        <span>
                            Budo Academy &copy; 2019 - Alvian Z F
                        </span>
                        <p>
                            <router-link to='/'>
                                Home
                            </router-link>
                             | 
                            <router-link to='/database'>
                                Data Siswa
                            </router-link>
                             |
                            <router-link to='/register'>
                                Register
                            </router-link>
                             |
                            <router-link to='/report'>
                                Laporan
                            </router-link>
                        </p>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
    color: #dadada;
}
</style>
