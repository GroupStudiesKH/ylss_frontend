<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 d-lg-block d-none">
                    <img src="/assets/img/logo.png" class="mt-4">
                </div>
                <div class="col-lg-3 col-md-6 company_info col-12" >
                    <p class="h4">{{ $t('footer.company') }}</p>
                    <p class="h6">{{ $t('footer.intro') }}</p>
                </div>
                <div class="col-lg-3">
                    <div class="address">
                        <p>{{ $t('footer.address') }}</p>
                        <p><a :href="`mailto:${$t('footer.email')}`"><span class="material-icons">&#xE0BE;</span>{{ $t('footer.email') }}</a></p>
                        <p><span class="material-icons">&#xE8C5;</span>{{ $t('footer.phone') }}</p>
                        <p><span class="material-icons">&#xEAD8;</span>{{ $t('footer.fax') }}</p>
                    </div>
                </div>
                <div class="col-lg-12 group_logo">
                    <img src="/assets/img/fe_logo.png" class="mt-4">
                    <img src="/assets/img/ac_logo.png" class="mt-4">
                </div>
            </div>
        </div>
        <div class="copyright text-light">
            <div class="container">Copyright © Li Yun Enterprise Co., Ltd All rights reserved.</div>
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
