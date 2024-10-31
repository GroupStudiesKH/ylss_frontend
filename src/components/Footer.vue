<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-3 col-lg-2 d-lg-block">
                    <img src="/assets/img/logo.png" class="mt-3 logo">
                </div>
                <div class="col-lg-3 col-md-6 company_info col-9" >
                    <p class="h5">{{ $t('footer.company') }}</p>
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
                <div class="col-12 col-md-4 social_link">
                    <a href="http://www.b2bmit.com/showroom-2000147.htm" target="_blank">
                        <img src="/assets/img/icon/b2bmit.webp" alt="B2BMit" class="social-icon">
                    </a>
                    <a href="https://www.linkedin.com/company/%E9%81%A0%E9%BE%8D%E4%B8%8D%E9%8A%B9%E9%8B%BC%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/" target="_blank">
                        <img src="/assets/img/icon/linkedin.webp" alt="LinkedIn" class="social-icon">
                    </a>
                    <a href="https://www.instagram.com/ylss2005_office?igsh=MWJkcG9xNXNpbnNyZw==" target="_blank">
                        <img src="/assets/img/icon/instagram.webp" alt="Instagram" class="social-icon">
                    </a>
                    <a href="https://www.facebook.com/ylss2005?mibextid=LQQJ4d" target="_blank">
                        <img src="/assets/img/icon/facebook.webp" alt="Facebook" class="social-icon">
                    </a>
                </div>
                <div class="col-12 group_logo">
                    <a href="https://www.feg.com.tw/tw/home/index.aspx" target="_blank">
                        <img src="/assets/img/fe_logo.png">
                    </a>
                    <a href="https://www.acc.com.tw/" target="_blank">
                        <img src="/assets/img/ac_logo.png">
                    </a>
                </div>
            </div>
            <div id="footer_right_shape"></div>
        </div>
        <div class="copyright text-light">
            <div class="container">Copyright © Yuan long stainless steel Corp. All rights reserved.</div>
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
