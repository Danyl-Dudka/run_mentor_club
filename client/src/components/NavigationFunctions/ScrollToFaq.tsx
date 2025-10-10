export default function ScrollToFaq() {
    const faqPage = document.getElementById('faq_page');
    faqPage?.scrollIntoView({ behavior: 'smooth' })
}
