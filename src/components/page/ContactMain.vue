<template>
    <div class="contact-info-container">
        <div class="contact-section">
            <div v-for="(item, index) in contactInfo" :key="index" class="contact-item"
                :class="{ 'no-border': index === contactInfo.length - 1 }">
                <v-icon>{{ item.icon }}</v-icon>
                <h3>{{ item.title }}</h3>
                <div v-for="(line, lineIndex) in item.content" :key="lineIndex">
                    {{ line }}
                </div>
            </div>
        </div>
    </div>
    <div class="text-center my-6">
        <h1 class="text-h3">Contact Information</h1>
        <div class="border-bottom mx-auto" style="width: 60px; height: 3px; background-color: #edd08d;"></div>
    </div>
    <v-container>
        <v-card class="form-container mx-auto px-4 mb-10 py-5" max-width="900">
            <v-form @submit.prevent="submitForm">
                <v-row>
                    <v-col cols="12" md="5">
                        <v-autocomplete v-model="selected" :items="contactItems" chips hide-details hide-no-data
                            hide-selected :label="$t('Question')" :multiple="false" single-line
                            class="mb-4"></v-autocomplete>
                        <v-text-field v-model="email" :label="$t('Please enter your Email')" variant="outlined"
                            class="mb-4"></v-text-field>

                        <v-text-field v-model="phone" :label="$t('Please enter your phone')" variant="outlined"
                            class="mb-4"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-textarea v-model="message" :label="$t('Please enter Message')" variant="outlined"
                            rows="7"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center mb-4">
                        <v-btn color="primary" type="submit" size="large" class="px-8 mt-4">
                            送出
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "ContactInfo",
    data() {
        return {
            selected: this.$t("Question"),
            subject: "",
            title: "",
            message: "",
            contactItems: [
                this.$t("ReturnOrexchange"),
                this.$t("RebateMoney"),
                this.$t("Membership"),
            ],
            contactInfo: [
                {
                    icon: 'mdi-phone',
                    title: 'TALK TO US',
                    content: [
                        'Phone: 0800-222-333',
                        'Fax: 0800-211-211'
                    ]
                },
                {
                    icon: 'mdi-map-marker',
                    title: 'LOCATION',
                    content: [
                        'No: 58 A,Bada Street,',
                        'Terrt, Tr, Taiwan 334'
                    ]
                },
                {
                    icon: 'mdi-email',
                    title: 'CONTACT US',
                    content: [
                        'fgrt9797@yahoo.com.tw',
                        'support@gmail.com'
                    ]
                }
            ],
        };
    },
    methods: {
        submitForm() {
            if (!this.subject || !this.title || !this.selected) {
                alert("請選擇問題,並填寫標題與訊息");
            } else {
                alert("已送出您的問題 將在24小時為您解答");
                this.clearForm();
            }
        },
        clearForm() {
            this.selected = this.$t("Question");
            this.subject = "";
            this.title = "";
            this.message = "";
        },
    },
};
</script>