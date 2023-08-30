var member_withdraw = {
    template: `#tem-member-withdraw`,
    data() {
        return {
            tabs:{},
            is_withdraw_betloss:false
        }
    },
    methods: {
        async submit() {
            this.$root.submitWithdraw();
        },
        async withdrawReturnSubmit() {
            let md = await modal.confirm('ยืนยันการถอนยอดเสีย?');
            if (!md) return;
            let res = await this.$root.easy.callApi('customer_req_withdraw');
            if (!res.success) return modal.error(res.data || res.code);
            console.log(res.data)
            await modal.success(res.data || 'สำเร็จ');
            this.$root.$router.push({name: 'history'})
        },
        setupTabs(wait = false){
            let $this = this;
            let t = 0;
            if(wait) t = 1000
            setTimeout(()=>{
                $this.tabs.slider = new Swiper("#withdrawPanel", {

                    spaceBetween: 0,
                    pagination: {
                        el: "#withdrawPagination",
                        clickable: true,
                        bulletClass: 'btn btn-line-secondary',
                        bulletElement: 'button',
                        renderBullet: function (index, className) {
                            return `<span class="${className} withdraw-selection-tab" style="width: 1.2em;">${ index == 0 ? ' ถอนเงิน':'ถอนยอดเสีย' }</span>`;
                        },
                    }
                });
                if($this.is_withdraw_betloss) $this.tabs.slider.slideTo(1); $this.is_withdraw_betloss = false;
            },t)
            
        }
    },
    computed: {},
    watch: {
        selected_ip(val) {
            this.cmd = '';
        },
        'filter.group'(val) {
            
        },
        '$root.user_return': function(value){
            if(value){
                this.setupTabs(1);
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(async $this => {
            $this.$root.withdrawInfo();
            if(to.query.betloss) $this.is_withdraw_betloss = true;      
            next();
        })
    },
    beforeRouteLeave(to, from, next) {
        this.$destroy();
        this.$root.withdrawReset();
        next();
    },
    beforeMount(){
        
    },
    mounted() {
        this.setupTabs();
        
    },
    
};