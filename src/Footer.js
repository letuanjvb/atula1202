import React from 'react'

function Footer() {
  return (
    <div class="site-footer">
        <p class="footer-top">
            <a class="footer-top-a" href="https://help.netflix.com/contactus">Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
        </p>
        <ul class="footer-links structural">
            <li class="footer-link-item" placeholder="footer_responsive_link_faq_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq"><span id="" data-uia="data-uia-footer-label">Câu hỏi thường gặp</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_help_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com" placeholder="footer_responsive_link_help"><span id="" data-uia="data-uia-footer-label">Trung tâm trợ giúp</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_account_item"><a class="footer-link" data-uia="footer-link" href="/youraccount" placeholder="footer_responsive_link_account"><span id="" data-uia="data-uia-footer-label">Tài khoản</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_media_center_item"><a class="footer-link" data-uia="footer-link" href="https://media.netflix.com/" placeholder="footer_responsive_link_media_center"><span id="" data-uia="data-uia-footer-label">Trung tâm đa phương tiện</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_relations_item"><a class="footer-link" data-uia="footer-link" href="http://ir.netflix.com/" placeholder="footer_responsive_link_relations"><span id="" data-uia="data-uia-footer-label">Quan hệ với nhà đầu tư</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_jobs_item"><a class="footer-link" data-uia="footer-link" href="https://jobs.netflix.com/jobs" placeholder="footer_responsive_link_jobs"><span id="" data-uia="data-uia-footer-label">Việc làm</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_waysToWatch_item"><a class="footer-link" data-uia="footer-link" href="/watch" placeholder="footer_responsive_link_waysToWatch"><span id="" data-uia="data-uia-footer-label">Các cách xem</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_terms_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms"><span id="" data-uia="data-uia-footer-label">Điều khoản sử dụng</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_privacy_separate_link"><span id="" data-uia="data-uia-footer-label">Quyền riêng tư</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item"><a class="footer-link" data-uia="footer-link" href="#" placeholder="footer_responsive_link_cookies_separate_link"><span id="" data-uia="data-uia-footer-label">Tùy chọn cookie</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_corporate_information_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo" placeholder="footer_responsive_link_corporate_information"><span id="" data-uia="data-uia-footer-label">Thông tin doanh nghiệp</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_contact_us_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/contactus" placeholder="footer_responsive_link_contact_us"><span id="" data-uia="data-uia-footer-label">Liên hệ với chúng tôi</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_speed_test_item"><a class="footer-link" data-uia="footer-link" href="https://fast.com" placeholder="footer_responsive_link_speed_test"><span id="" data-uia="data-uia-footer-label">Kiểm tra tốc độ</span></a></li>
            <li class="footer-link-item" placeholder="footer_responsive_link_legal_notices_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/notices" placeholder="footer_responsive_link_legal_notices"><span id="" data-uia="data-uia-footer-label">Thông báo pháp lý</span></a></li>
            <li class="footer-link-item originals-link" placeholder="footer_responsive_link_only_on_netflix_item"><a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/vn/browse/genre/839338" placeholder="footer_responsive_link_only_on_netflix"><span id="" data-uia="data-uia-footer-label">Chỉ có trên Netflix</span></a></li>
        </ul>
        <div class="lang-selection-container" id="lang-switcher">
            <div data-uia="language-picker+container" class="ui-select-wrapper"><label for="lang-switcher-select" class="ui-label"><span class="ui-label-text">Chọn ngôn ngữ</span></label><div class="select-arrow medium prefix globe"><select data-uia="language-picker" class="ui-select medium" id="lang-switcher-select" tabindex="0" placeholder="lang-switcher"><option selected="" lang="vi" value="/vn/" data-language="vi" data-country="VN">Tiếng Việt</option><option lang="en" value="/vn-en/" data-language="en" data-country="VN">English</option></select></div></div></div><p class="footer-country">Netflix Việt Nam</p></div>
  )
}

export default Footer
