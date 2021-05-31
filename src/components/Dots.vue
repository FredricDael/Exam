<template>
    <div class="container">
        
        <div class="row">
            <div class="col-md-6">
                <v-card elevation="2" color="#F7C631" dark class="rounded-xl">
                    <v-card-title>Test Component</v-card-title>
                    <v-card-text>

                    <v-timeline>
                        <v-timeline-item
                        v-for="(item, i) in getItem"
                        :key="i"
                        :color="item.Color"
                        :icon="item.Icon"
                        >

                        <v-card
                            :color="item.Color"
                            dark
                        >
                            <v-card-title class="title">
                            {{item.Title}}
                            </v-card-title>
                            <v-card-text class="white text--primary">
                            <p>{{item.Text}}</p>
                            <v-btn
                                :color="item.Color"
                                class="mx-0"
                                outlined
                            >
                                Button
                            </v-btn>
                            </v-card-text>
                        </v-card>


                        </v-timeline-item>
                    </v-timeline>

                    </v-card-text>
                </v-card>
            </div>
            <div class="col-md-6">
                <v-card>
                    <v-card-title>Add new</v-card-title>
                    <v-card-subtitle>Fill the forms to add a timeline</v-card-subtitle>
                    <v-card-text>
                        <v-text-field
                            v-model="item.Title"
                            label="Title"
                        ></v-text-field>
                        <v-textarea
                            v-model="item.Text"
                            label="Text"
                        ></v-textarea>
                        <v-text-field
                            v-model="item.Image"
                            label="Image"
                        ></v-text-field>
                        <v-text-field
                            v-model="item.Link"
                            label="Link"
                        ></v-text-field>
                        <v-text-field
                            v-model="item.Icon"
                            label="Icon (Use mdi icons) eg: mdi-check"
                        ></v-text-field>
                        <v-color-picker
                            hide-canvas
                            v-model="item.Color"
                        ></v-color-picker>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="resetForm()">Clear</v-btn>
                        <v-btn color="primary" @click="AddTimeline()">Add</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
         
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name:'dots',
    data(){
        return {
            items : [],
            item: {
                ID: 0,
                Title: '',
                Text: '',
                Image: '',
                Link: '',
                Icon: '',
                Color: ''
            },
            itemReset: {
                ID: 0,
                Title: '',
                Text: '',
                Image: '',
                Link: '',
                Icon: '',
                Color: ''
            }
        }
    },
    methods: {
        AddTimeline(){
            this.item.ID = this.getNewID
            this.addItem(this.item)
            this.item = this.itemReset
        },
        ...mapActions([
            'getJsonData'
        ]),
        ...mapMutations([
            'addItem'
        ]),
        resetForm(){
            this.item = this.itemReset
        }
        
    },
    created(){
        this.getJsonData();
    },
    computed: {
        ...mapGetters(['getItem','getNewID'])
    }
}
</script>