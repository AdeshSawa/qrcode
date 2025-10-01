
const { createApp } = Vue
createApp({
    data() {
           const options = {
                width: 300,
                height: 300,
                type: "svg",
                data: "https://www.facebook.com/",
                image: "",
                dotsOptions: {
                    color: "#29292e",
                    type: "square"
                },
                backgroundOptions: {
                    color: "#e9ebee",
                },
                imageOptions: {
                    crossOrigin: "anonymous",
                    imageSize: 0.4,
                    margin: 0
                }
            };
        return {
            options,
            file: null,
            extension: 'svg',
            qrCode: new QRCodeStyling(options)
        }
    },
    watch: {
        options: {
            handler(newValue, oldValue) {
                //console.log('User object changed:', newValue);
                this.qrCode.update(this.options);
            },
            deep: true
        }
        // ['options.data']: function() {
        //     this.qrCode.update(this.options);
        // }
    },
    methods: {
        onFileChange(e){
            const file = e.target.files[0];
            this.options.image = URL.createObjectURL(file);
        },
        clearFile() {
          this.file = null;
        },
        download() {
            this.qrCode.download({ extension: this.extension })
        }
    },
    mounted : function() {
        this.qrCode.append(this.$refs["qrCode"]);
    },
}).mount('#app')

// const options = {
//     width: 300,
//     height: 300,
//     type: 'svg',
//     data: 'http://qr-code-styling.com',
//     image: '/favicon.ico',
//     margin: 10,
//     qrOptions: {
//         typeNumber: 0,
//         mode: 'Byte',
//         errorCorrectionLevel: 'Q'
//     },
//     imageOptions: {
//         hideBackgroundDots: true,
//         imageSize: 0.4,
//         margin: 20,
//         crossOrigin: 'anonymous',
//     },
//     dotsOptions: {
//         color: '#41b583',
//         // gradient: {
//         //   type: 'linear', // 'radial'
//         //   rotation: 0,
//         //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
//         // },
//         type: 'rounded'
//     },
//     backgroundOptions: {
//         color: '#307914ff',
//         // gradient: {
//         //   type: 'linear', // 'radial'
//         //   rotation: 0,
//         //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
//         // },
//     },
//     cornersSquareOptions: {
//         color: '#35495E',
//         type: 'extra-rounded',
//         // gradient: {
//         //   type: 'linear', // 'radial'
//         //   rotation: 180,
//         //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
//         // },
//     },
//     cornersDotOptions: {
//         color: '#35495E',
//         type: 'dot',
//         // gradient: {
//         //   type: 'linear', // 'radial'
//         //   rotation: 180,
//         //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
//         // },
//     }

// };
