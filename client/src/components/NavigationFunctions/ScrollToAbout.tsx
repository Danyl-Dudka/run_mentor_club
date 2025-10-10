
export default function ScrollToAbout() {
    const aboutPage = document.getElementById('about_page');
    aboutPage?.scrollIntoView({ behavior: 'smooth' })
}
