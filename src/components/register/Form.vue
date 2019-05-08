<template>
<v-container fluid>
    <v-layout row>
        <v-flex md12>
            <v-form>
                <v-text-field
                    v-model="fullname"
                    :rules="registration"
                    label="Nama Lengkap"
                    >
                </v-text-field>
                <v-text-field
                    v-model="address"
                    :rules="registration"
                    label="Alamat"
                >
                </v-text-field>

                <v-text-field
                    v-model="placeofbirth"
                    :rules="registration"
                    label="Tempat Lahir"
                >
                </v-text-field>

                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="dateofbirth"
                        label="Tanggal Lahir"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="dateofbirth" @input="menu2 = false"></v-date-picker>
                </v-menu>
                 <v-select
                    v-model="program"
                    :items="programs"
                    box
                    label="Program"
                ></v-select>
                <v-btn @click="submit" color="primary">Daftar</v-btn>
                <v-btn @click="reset" color="warning">Reset</v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data: () => ({
        fullname: '',
        address: '',
        dateofbirth: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        program: '',
        placeofbirth: '',
        programs:['Aikido < 7 tahun', 'Aikido 8-15 tahun', 'Aikido Dewasa', 'Jujutsu < 7 tahun', 'Jujutsu 7-15 tahun', 'Jujutsu Dewasa'],
        registration: [
            v => !!v || 'Wajib diisi',
            v => (v && v.length) >= 4|| 'Wajib diisi'
        ]
    }),
    methods: {
        submit() {
            if(this.fullname != '' && this.address != '')
            {
                console.log(JSON.stringify({name: this.fullname, address: this.address, placeofbirth: this.placeofbirth, dateofbirth: this.dateofbirth, program: this.program}))

                alert('success')
            } else {
                console.log(JSON.stringify({status: 'rejected', message: 'Data must not be left blank!'}))
            }
            this.fullname= '',
            this.address= '',
            this.placeofbirth=''
        },
        reset () {
            this.fullname= '',
            this.address= '',
            this.placeofbirth=''
        }
    }
}
</script>

<style scoped>


</style>
