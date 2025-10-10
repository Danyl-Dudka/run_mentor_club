export default function ScrollToContact() {
    const contactPage = document.getElementById('contact_page');
    contactPage?.scrollIntoView({ behavior: 'smooth' })
}
