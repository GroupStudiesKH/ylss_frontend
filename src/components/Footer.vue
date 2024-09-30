<template>
    <footer class="footer bg-dark text-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 d-lg-block d-none">
                    <img src="/assets/img/footer_logo.png" class="mt-4">
                </div>
                <div class="col-lg-5 col-md-6 company_info col-12" >
                    <p class="h2">{{ $t('footer.company') }}</p>
                    <p class="h5">{{ $t('footer.intro') }}</p>

                    <div class="address">
                        <p>{{ $t('footer.address') }}</p>
                        <p><a :href="`mailto:${$t('footer.email')}`"><span class="material-icons">&#xE0BE;</span>{{ $t('footer.email') }}</a></p>
                        <p><span class="material-icons">&#xE8C5;</span>{{ $t('footer.phone') }}</p>
                        <p><span class="material-icons">&#xEAD8;</span>{{ $t('footer.fax') }}</p>
                    </div>
                </div>
                <div class="col-lg-4 copyright col-12">
                    <img src="/assets/img/footer_iso.png">
                    <p>Copyright © Li Yun Enterprise Co., Ltd All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    setup() {
    }
}
</script>

<style scoped>
.footer {
    padding: 20px 0;
    color: #fff;
}
</style>
