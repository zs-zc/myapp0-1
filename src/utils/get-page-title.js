import defaultSettings from "@/setting"
const title = defaultSettings.title || 'VUE ADMIN TEMLPATE'
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}
