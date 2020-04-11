<template>
    <div id="app">
        <h3>Firebase Data</h3>
        {{firebaseData}}
        <h3>Form Data</h3>
        {{firebaseData}}


        <form @submit.prevent="updateFirebase">
            <input type="text" name="name" v-model="formData.name"/>
            <input type="email" name="name" v-model="formData.email"/>
            <input type="tel" name="name" v-model="formData.phone"/>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import {db} from "./firebase";

    const documentPath = 'contacts/yash'
    export default {
        data() {
            return {
                firebaseData: null,
                formData: {},
                state: 'loading'
            };
        },

        firestore() {
            return {
                firebaseData: db.doc(documentPath),
            }
        },

        methods: {
            async updateFirebase() {
                try {
                    await db.doc(documentPath).set(this.formData);
                    this.state = 'synced';
                } catch (error) {
                    this.errorMessage = JSON.stringify(error)
                    this.state = 'error'
                }
            }
        },

        created: async function () {
            const docRef = db.doc(documentPath);

            let data = (await docRef.get()).data();

            if (!data) {
                data = {name: '', phone: '', email: ''}
                docRef.set(data)
            }

            this.formData = data;
            this.state = 'synced'
        },
    };
</script>

